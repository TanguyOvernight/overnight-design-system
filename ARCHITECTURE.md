# Architecture du système de veille

Routine cloud claude.ai « Veille Emploi Lausanne — brief 10h » (cron 0 8 * * * UTC
≈ 10h00 suisse en été, 9h00 en hiver — décaler à 0 9 * * * fin octobre), persist_session,
modèle claude-fable-5, repo TanguyOvernight/overnight-design-system branche
claude/veille-emploi-lausanne, connecteur Slack attaché.

Séquence d'un run : git pull → lire persona/format/technique/seen/sante/feedback/journal
→ (1bis) feedback Slack : messages du canal + réactions sur les derniers briefs
(👍/🔥 = exemple positif, 👎 = négatif, ✉️ = veut postuler → state/candidatures.md,
consigne explicite = appliquée au run) → re-test egress quotidien → collecte 48h
multi-sources dont 2e vague du 28.08 (État de Vaud Oracle, CHUV feed, CIO, BCV,
Vaudoise, Tamedia, talent.com, Michael Page ; lundi : FEI, World Aquatics, FIG, TAS,
Loterie Romande, EPFL-IP, emplois-vaud/Ville de Lausanne via WebSearch), chaque source
tolérante à l'échec → dédup id puis hash → scoring 🎯✅👀❌ éclairé par feedback.md
(règle Claude/IA : mention Claude/Anthropic = 🎯 d'office, cœur GenAI appliqué = +1
niveau, marqueur ⚡) → (4bis) sous-agent « second-regard » calibré OUVERT (repêcher >
vérifier > éliminer le bruit évident ; doute = l'offre reste) → brief FORMAT-SLACK →
slack_send_message C0BTXBQ7048 (fallback webhook → conversation) → PushNotification
TL;DR (⚡/🎯 en premier) → seen.json + sante-sources + feedback + candidatures +
journal + commit push.

Leçons du brief invest codées en dur : santé des sources en tête dès la 1re panne ;
jamais de confiance aux dates seules ; transparence des erreurs de scoring ;
brief non parti = priorité n°1 du run suivant.

Réserves : API Adzuna ch (clé gratuite à créer), JSearch, alertes email.
Documents locaux de conception chez Tanguy : E:\Claude Projects\veille-emploi-lausanne.
