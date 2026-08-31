# Format du brief Slack quotidien

> Principe directeur (demande de Tanguy) : les offres fraîches, leur lien direct, et
> pourquoi elles matchent. Tout le reste est secondaire.

## Règles
1. ⛔ RÈGLE DU LIEN DIRECT (Tanguy, 30.08 — non négociable) : chaque titre porte l'URL
   de SA page détail (uuid jobup/jobs.ch, /jobs/view/ LinkedIn, page ATS de l'offre),
   JAMAIS une page de recherche/listing/employeur. Lien large → le RÉSOUDRE avant le
   brief ; échec → mention explicite « ⚠️ lien indirect (page {employeur/listing}) »,
   exception rare. Un tap sur mobile doit ouvrir l'annonce.
2. Ordre fixe des métadonnées : Entreprise · Lieu · Taux · Type de contrat · fraîcheur.
   Le taux est affiché dès qu'il est connu.
3. Trois niveaux, quotas (élargis le 28.08), FORMAT DÉTAILLÉ (demande du 30.08) :
   🎯 PRIORITÉ max 3 : métadonnées + « → Pourquoi toi » + « → Angle » + « 📝 Détails »
   2-3 lignes tirées de l'ANNONCE (missions clés, profil demandé, salaire si affiché,
   deadline si connue) · ✅ SOLIDES max 8 : 2 lignes (contexte + exigence/détail clé de
   l'annonce) · 👀 RADAR max 8 : 1 ligne. Débordement → excédent en 👀, RIEN supprimé.
3quater. SECTION 📌 TOUJOURS OUVERTES (après le RADAR, exigence du 30.08) : une ligne
   par offre de state/ouvertes.json (🎯 passées + ✅ likées + ✉️, tant que ni déclinées
   ni pourvues) — titre lié · entreprise · « en ligne depuis N j » ; ❌ fermées du jour
   en fin de section ; cap 10 lignes (au-delà : les mieux scorées + le dire). Cette
   section paraît même les jours creux. Ce n'est PAS un re-signalement : c'est le suivi.
3bis. Offre premier scope Claude/IA : marqueur ⚡ devant le titre + « Pourquoi toi »
   nommant l'atout Claude (bâtisseur, pas simple utilisateur). Mention explicite
   Claude/Anthropic → 🎯 d'office si critères durs OK.
3ter. SECTION 🚀 MARCHÉ CACHÉ (max 2/semaine, seulement quand un signal le justifie) :
   startup vaudoise venant de lever/s'implanter SANS offre marketing publiée → suggérer
   la candidature spontanée avec l'angle (« série A de X M, équipe va doubler, aucun
   profil marketing publié — fenêtre idéale »). ✉️ de Tanguy dessus = préparer le
   dossier spontané comme une candidature.
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
