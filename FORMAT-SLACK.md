# Format du brief Slack quotidien

> Principe directeur (demande de Tanguy) : les offres fraîches, leur lien direct, et
> pourquoi elles matchent. Tout le reste est secondaire.

## Règles
1. Le lien direct est posé sur le titre de l'offre — un tap sur mobile ouvre l'annonce.
   Jamais d'offre sans lien.
2. Ordre fixe des métadonnées : Entreprise · Lieu · Taux · Type de contrat · fraîcheur.
   Le taux est affiché dès qu'il est connu.
3. Trois niveaux, quotas (élargis le 28.08 — philosophie « postuler à un maximum ») :
   🎯 PRIORITÉ max 3 (deux lignes d'analyse : « → Pourquoi toi » et « → Angle ») ·
   ✅ SOLIDES max 8 (une ligne) · 👀 RADAR max 8 (zéro analyse). Débordement → excédent
   en 👀 une ligne, RIEN n'est supprimé.
3bis. Offre premier scope Claude/IA : marqueur ⚡ devant le titre + « Pourquoi toi »
   nommant l'atout Claude (bâtisseur, pas simple utilisateur). Mention explicite
   Claude/Anthropic → 🎯 d'office si critères durs OK.
4. Pied chiffré : 📊 X collectées · Y uniques · Z proposées · second regard : C/A/R/P
   (confirmées/ajustées/rejetées/repêchées) · N hors persona.
5. Santé des sources : silence = tout va bien. Une panne apparaît en 🔧 EN TÊTE dès le
   premier jour, jamais enterrée.
6. Jour sans nouveauté : brief de 3 lignes max.
7. Longueur totale ~40 lignes max, lisible en < 1 minute sur téléphone.
8. Numérotation continue (state/seen.json → dernier_brief + 1) + accroche d'une ligne.
9. Une offre déjà postée ne réapparaît jamais, sauf changement majeur → ♻️ repostée.

## Gabarit (markdown standard — le connecteur Slack convertit)
💼 **VEILLE EMPLOI n°{N} — {jour} {JJ.MM}**
{Accroche d'une ligne.}
━━━━━━━━━━━━━━━
🎯 **PRIORITÉ**

**[{Intitulé exact}]({url})**
{Entreprise} · {Lieu} · {Taux} · {Contrat}
→ Pourquoi toi : {piliers touchés, une ligne}.
→ Angle : {angle de candidature, une ligne}.
_Publiée {fraîcheur} · {source}_

━━━━━━━━━━━━━━━
✅ **SOLIDES**

• **[{Intitulé}]({url})** — {Entreprise} · {Lieu} · {taux/contrat}
   {Une ligne de contexte.}

━━━━━━━━━━━━━━━
👀 **RADAR**
• [{Intitulé}]({url}) — {Entreprise} · {Lieu}
━━━━━━━━━━━━━━━
📊 {X} collectées · {Y} uniques · {Z} retenues · {N} hors persona
{🔧 uniquement si problème : source en panne + impact}

## Notes
- Émojis en caractères Unicode directs. Le brief est UN message (pas de thread).
- Les échanges de suivi (« montre-moi l'offre X ») se font en réponse dans le canal ou
  dans la conversation de la routine.
