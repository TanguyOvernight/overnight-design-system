# Sources de collecte — veille emploi Lausanne

> Cartographie du 27.08.2026, 20 plateformes testées. Tests depuis IP résidentielle
> suisse — les verdicts depuis le cloud sont dans state/sante-sources.json.

## Les 6 sources retenues
1. Job-Room API (SECO/arbeit.swiss) — API JSON publique sans clé, obligation d'annonce
   + flux ATS. POST _search, onlineSince (jours), cantonCodes ["VD"], sort=date_desc.
   Piège : champ inconnu dans le body → 400.
2. jobup.ch — leader romand. SSR + JSON-LD complet, publication-date=1/2, zéro anti-bot
   constaté. RSS mort, API interne 410.
3. jobs.ch — même plateforme JobCloud, index partiellement différent (dédup par uuid commun).
4. LinkedIn jobs-guest — endpoint invité sans login, distance=25, f_TPR=r86400/r172800,
   30 cartes/page. Risque 429 → max 6 requêtes espacées.
5. Pages carrières ATS (companies.json) — la donnée la plus propre, chez l'employeur.
6. Appoints : RSS cominmag.ch (agences romandes) + page SSR WTTJ emploi-lausanne-suisse.
   Lundi : EPFL Innovation Park (rendu JS requis).

## 2e vague — sources publiques & directes (ajoutées le 28.08.2026, consigne du 27.08)
7. État de Vaud — API Oracle publique : GET fa-ewrg-saasfaeuraprod1.fa.ocs.oraclecloud.com
   /hcmRestApi/resources/latest/recruitingCEJobRequisitions?onlyData=true&finder=findReqs;siteNumber=CX_1,limit=200,sortBy=POSTING_DATES_DESC
   — filtre marketing/comm/design côté client.
8. CHUV — feed JSON : recrutement.chuv.ch/utf8/ic_job_feeds.feed_engine?p_web_site_id=5352
   &p_published_to=WWW&p_language=DEFAULT&p_direct=Y&p_format=MOBILE (header Referer:
   https://recrutement.chuv.ch/home.html). Pages vacancy/*.html bien indexées (substitution
   WebSearch efficace).
9. CIO — sitemap SAP : ioc.jobs.hr.cloud.sap/sitemap.xml (nouveautés = URLs jamais vues)
   + careers.olympics.com/jobs.json (Teamtailor OBS).
10. BCV — jobs.bcv.ch/sitemap.xml (SuccessFactors, logique sitemap).
11. Vaudoise — vaudoise.softgarden.io/en/vacancies (SSR, liens /job/ID).
12. Tamedia — RSS jobs.tamedia.ch/fr/jobs.rss.
13. talent.com — filet agrégateur, dédup stricte : ch.talent.com/jobs?k=marketing&l=Lausanne%2C+VD
    (SSR). Pages /view?id= bien indexées (substitution WebSearch efficace).
14. Michael Page — michaelpage.ch/fr/jobs/marketing-agences et /fr/jobs/digital (SSR,
    filtre Vaud/Lausanne côté client).
15. Le lundi uniquement : FEI (inside.fei.org) · World Aquatics (jobs.world.luccasoftware.com)
    · FIG (gymnastics.sport) · TAS (tas-cas.org) · Loterie Romande (loro.ch/fr/carrieres)
    · WebSearch site:emplois-vaud.ch · Ville de Lausanne via WebSearch (rendu JS indisponible).
Premier test cloud 28.08 : toutes EGRESS_BLOCKED (voir state/sante-sources.json).

## Réserves si une source casse
- Adzuna API pays ch (clé gratuite à créer sur developer.adzuna.com) — l'assurance du système.
- JSearch (RapidAPI) — proxy Google for Jobs, ~200 req/mois gratuit.
- Alertes email jobup/LinkedIn/Indeed en filet non automatisé.

## Écartés (testés le 27.08.2026)
Glassdoor (403 dur, inventaire ≈ Indeed) · jobscout24 (doublon JobCloud) · jobagent (403)
· WTTJ recherche globale (SPA) · Careerjet (anti-bot) · ictjobs/medienjobs/persoenlich
(alémaniques) · topjobs (SPA) · startupticker/digitalswitzerland (quasi rien marketing).
Indeed : bloqué hors IP résidentielle, largement redondant — omis.

## Principe anti-trou
Run quotidien en fenêtre 48h + déduplication persistante par id — aucune offre ne tombe
entre deux runs, la redondance inter-plateformes est absorbée.
