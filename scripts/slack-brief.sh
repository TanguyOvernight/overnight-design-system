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
set -euo pipefail

FILE="${1:?usage: slack-brief.sh <fichier-newsletter>}"

if [[ -z "${SLACK_WEBHOOK_URL:-}" && -r "$HOME/.slack_webhook_url" ]]; then
  SLACK_WEBHOOK_URL="$(tr -d '[:space:]' < "$HOME/.slack_webhook_url")"
fi
: "${SLACK_WEBHOOK_URL:?SLACK_WEBHOOK_URL manquante (à configurer dans les variables d'environnement de l'environnement Claude Code)}"
export SLACK_WEBHOOK_URL

python3 - "$FILE" <<'PY'
import json, os, ssl, sys, time, urllib.request

path = sys.argv[1]
text = open(path, encoding="utf-8").read().strip()

# Découpe sur les séparateurs de section (━━━) pour rester lisible sur
# mobile : chaque message Slack ≤ ~3500 caractères.
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

url = os.environ["SLACK_WEBHOOK_URL"]
cafile = "/root/.ccr/ca-bundle.crt"
ctx = ssl.create_default_context(
    cafile=cafile if os.path.exists(cafile) else None
)

for i, chunk in enumerate(parts, 1):
    payload = json.dumps({"text": chunk}).encode("utf-8")
    req = urllib.request.Request(
        url, data=payload, headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=30, context=ctx) as r:
            body = r.read().decode()
    except Exception as e:  # réseau/TLS/4xx — on échoue franchement
        print(f"Échec message {i}/{len(parts)} : {e}", file=sys.stderr)
        sys.exit(1)
    if body != "ok":
        print(f"Échec message {i}/{len(parts)} : réponse Slack '{body}'",
              file=sys.stderr)
        sys.exit(1)
    if i < len(parts):
        time.sleep(1)  # rate-limit webhook : 1 msg/s

print(f"✅ Newsletter envoyée sur Slack ({len(parts)} message(s)).")
PY
