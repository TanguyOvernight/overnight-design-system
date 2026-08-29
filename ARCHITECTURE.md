# Architecture du système de veille

Routine cloud claude.ai « Veille Emploi Lausanne — brief 10h » (cron 0 8 * * * UTC
≈ 10h00 suisse en été, 9h00 en hiver — décaler à 0 9 * * * fin octobre), persist_session,
modèle claude-fable-5, repo TanguyOvernight/overnight-design-system branche
claude/veille-emploi-lausanne, connecteur Slack attaché.

GARDE DE CONFIDENTIALITÉ (0bis, depuis le 29.08) : tant que le repo est PUBLIC,
feedback.md, candidatures.md et lettres/ vivent sur le Drive privé « Veille Emploi
Lausanne (privé) » (dossier 1WOb5lQ2MV96C5sq4TI85r_4NOM5d6KIx — aussi : serpapi-key.txt,
cv-tanguy-contenu.md) et ne sont JAMAIS commités ; une ligne 🔧 recommande la bascule en
privé. Dès que private=true : rapatrier dans state/, l'annoncer, cesser le rappel.

Séquence d'un run : git pull → garde 0bis (visibilité repo) → lire
persona/format/technique/seen/sante/radar-startups/journal + feedback (Drive)
→ (1bis) feedback Slack : messages du canal + réactions sur les derniers briefs
(👍/🔥 = exemple positif, 👎 = négatif, ✉️ = veut postuler → state/candidatures.md,
consigne explicite = appliquée au run) → re-test egress quotidien → collecte 48h
multi-sources dont 2e vague du 28.08 (État de Vaud Oracle, CHUV feed, CIO, BCV,
Vaudoise, Tamedia, talent.com, Michael Page ; lundi : FEI, World Aquatics, FIG, TAS,
Loterie Romande, EPFL-IP, emplois-vaud/Ville de Lausanne via WebSearch), 3e vague du
29.08 (2h SerpAPI Google Jobs quotidien max 3 req — forme validée, ville dans q + gl=ch ;
2i lundi : SwissAIJob + Wellfound + posts sociaux via SerpAPI ; 2j marché caché
quotidien : startupticker + ICT Journal, hebdo EU-Startups, mensuel Scale-up Vaud +
SHAB → state/radar-startups.md → section 🚀 du brief, max 2/semaine ; ✉️ sur une offre
= lettre rédigée depuis cv-tanguy-contenu.md et déposée dans Drive/lettres/), chaque
source tolérante à l'échec → dédup id puis hash → scoring 🎯✅👀❌ éclairé par feedback.md
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
