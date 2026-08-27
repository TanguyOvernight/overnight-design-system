# Architecture du système de veille

Routine cloud claude.ai « Veille Emploi Lausanne — brief 10h » (cron 0 8 * * * UTC
≈ 10h00 suisse en été, 9h00 en hiver — décaler à 0 9 * * * fin octobre), persist_session,
modèle claude-fable-5, repo TanguyOvernight/overnight-design-system branche
claude/veille-emploi-lausanne, connecteur Slack attaché.

Séquence d'un run : git pull → lire persona/format/seen → collecte 48h multi-sources
(sous-agents tolérants à l'échec) → dédup id puis hash → scoring 🎯✅👀❌ → brief
FORMAT-SLACK → slack_send_message C0BTXBQ7048 (fallback webhook → conversation) →
PushNotification TL;DR → seen.json + journal + commit push.

Leçons du brief invest codées en dur : santé des sources en tête dès la 1re panne ;
jamais de confiance aux dates seules ; transparence des erreurs de scoring ;
brief non parti = priorité n°1 du run suivant.

Réserves : API Adzuna ch (clé gratuite à créer), JSearch, alertes email.
Documents locaux de conception chez Tanguy : E:\Claude Projects\veille-emploi-lausanne.
