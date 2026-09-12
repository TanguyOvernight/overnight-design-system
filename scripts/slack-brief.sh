#!/usr/bin/env bash
# Envoi du brief quotidien sur Slack via Incoming Webhook (canal blindé,
# indépendant du connecteur Slack — fonctionne à chaque réveil de routine).
#
# Usage   : bash scripts/slack-brief.sh <fichier-newsletter.md>
# Requiert: SLACK_WEBHOOK_URL — variable d'environnement configurée dans
#           l'environnement Claude Code (Settings de l'environnement), OU
#           un fichier ~/.slack_webhook_url contenant l'URL (fallback).
# Sortie  : exit 0 si tous les messages sont partis (réponse Slack "ok"),
#           exit ≠ 0 sinon → la routine bascule sur le connecteur/fallback.
#
# Note d'implémentation : l'envoi passe par curl et NON par Python/urllib —
# Slack renvoie 403 aux requêtes urllib (constaté 27/07/2026), même avec un
# User-Agent explicite. Python ne sert qu'au découpage du texte.
set -euo pipefail

FILE="${1:?usage: slack-brief.sh <fichier-newsletter>}"
[[ -r "$FILE" ]] || { echo "Fichier introuvable : $FILE" >&2; exit 1; }

# Une URL de webhook Slack valide : https://hooks.slack.com/services/T…/B…/<secret ~24 car.>
# Un copier-coller tronqué donne un « invalid_token » opaque (constaté 27/07/2026) :
# on valide la FORME avant d'envoyer, et on bascule sur le fichier local si
# la variable d'environnement est incomplète.
webhook_valide() {
  [[ "$1" =~ ^https://hooks\.slack\.com/services/T[A-Z0-9]+/B[A-Z0-9]+/[A-Za-z0-9]{20,}$ ]]
}

FICHIER_URL="$HOME/.slack_webhook_url"
if ! webhook_valide "${SLACK_WEBHOOK_URL:-}"; then
  if [[ -n "${SLACK_WEBHOOK_URL:-}" ]]; then
    echo "⚠️  SLACK_WEBHOOK_URL malformée (longueur ${#SLACK_WEBHOOK_URL}, dernier segment trop court ?) — probable copier-coller tronqué." >&2
  fi
  if [[ -r "$FICHIER_URL" ]] && webhook_valide "$(tr -d '[:space:]' < "$FICHIER_URL")"; then
    SLACK_WEBHOOK_URL="$(tr -d '[:space:]' < "$FICHIER_URL")"
    echo "↪️  Bascule sur l'URL de secours ($FICHIER_URL). À corriger dans les variables d'environnement." >&2
  else
    echo "SLACK_WEBHOOK_URL absente ou invalide, et pas de secours utilisable dans $FICHIER_URL." >&2
    exit 1
  fi
fi

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

# Découpe sur les séparateurs de section (━━━) pour rester lisible sur
# mobile : chaque message Slack ≤ ~3500 caractères. Écrit un fichier de
# payload JSON par message (payload-001.json, …).
python3 - "$FILE" "$WORKDIR" <<'PY'
import json, sys, os

path, workdir = sys.argv[1], sys.argv[2]
text = open(path, encoding="utf-8").read().strip()

SEP = "━━━━━━━━━━━━━━━"
parts, cur = [], ""
for block in text.split(SEP):
    block = block.strip("\n")
    if not block:
        continue
    candidate = (cur + "\n" + SEP + "\n" + block) if cur else block
    if len(candidate) > 3500 and cur:
        parts.append(cur)
        cur = block
    else:
        cur = candidate
if cur:
    parts.append(cur)

for i, chunk in enumerate(parts, 1):
    dest = os.path.join(workdir, f"payload-{i:03d}.json")
    with open(dest, "w", encoding="utf-8") as f:
        json.dump({"text": chunk}, f, ensure_ascii=False)
PY

TOTAL="$(find "$WORKDIR" -name 'payload-*.json' | wc -l | tr -d ' ')"
[[ "$TOTAL" -gt 0 ]] || { echo "Découpage vide — rien à envoyer." >&2; exit 1; }

i=0
for payload in "$WORKDIR"/payload-*.json; do
  i=$((i + 1))
  body="$(curl -sS --max-time 30 -X POST \
    -H 'Content-type: application/json' \
    --data-binary "@$payload" \
    "$SLACK_WEBHOOK_URL")" || {
      echo "Échec réseau message $i/$TOTAL" >&2; exit 1; }
  if [[ "$body" != "ok" ]]; then
    echo "Échec message $i/$TOTAL : réponse Slack '$body'" >&2
    exit 1
  fi
  [[ "$i" -lt "$TOTAL" ]] && sleep 1  # rate-limit webhook : 1 msg/s
done

echo "✅ Newsletter envoyée sur Slack ($TOTAL message(s))."
