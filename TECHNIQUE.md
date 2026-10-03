# Mécanismes de collecte validés — tests réels du 27.08.2026

> Tests depuis le poste local (IP résidentielle suisse). Depuis le cloud, se fier à
> state/sante-sources.json (écrit par le bootstrap puis maintenu par la routine).

## jobup.ch — canal primaire
- GET https://www.jobup.ch/fr/emplois/?location=Lausanne&publication-date=2&term={kw}
  avec UA navigateur. SSR complet : bloc JSON-LD ItemList de JobPosting (datePosted ISO,
  Organization, Place) + état JSON interne.
- PIÈGE pagination : paramètres en ordre alphabétique STRICT (location, page,
  publication-date, term) sinon 301 silencieux qui supprime page. ~20-22 offres/page.
- HTML minifié sur une ligne → parseur DOM/JSON-LD, jamais grep -c.
- Clé de dédup : uuid du lien détail (/fr/emplois/detail/{uuid}/) — commun avec jobs.ch.

## jobs.ch — même parseur
- GET https://www.jobs.ch/fr/offres-emplois/?location=Lausanne&term={kw} — mêmes marqueurs.
- Index partiellement différent de jobup (chevauchement vérifié par uuid identique).

## LinkedIn jobs-guest
- GET https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords={kw}&location=Lausanne%2C%20Vaud%2C%20Switzerland&distance=25&f_TPR=r172800&start=0
- 30 cartes HTML/page, datetime ISO. Pièges : location=Lausanne seul → bruit mondial
  (toujours la forme longue) ; re-filtrer la géo en aval ; ≤ 6 requêtes espacées ;
  tolérer l'échec sans faire échouer le run.

## Job-Room API (SECO)
- POST https://www.job-room.ch/jobadservice/api/jobAdvertisements/_search?page=0&size=50&sort=date_desc
- Body : {"permanent":null,"workloadPercentageMin":null,"workloadPercentageMax":null,"onlineSince":2,"displayRestricted":false,"professionCodes":[],"keywords":["marketing"],"communalCodes":[],"cantonCodes":["VD"]}
- Retour riche : titre, entreprise, ville+code communal+GPS, dates ISO, URL externe, taux.
- Piège : champ inconnu → 400 explicite (schéma DTO à surveiller).

## WTTJ — appoint
- Recherche /fr/jobs = SPA inexploitables. Pages SEO SSR OK :
  GET https://www.welcometothejungle.com/fr/pages/emploi-lausanne-suisse → hrefs
  /fr/companies/{org}/jobs/{slug}_lausanne dans le HTML brut. Détail : JSON-LD JobPosting.

## RSS Cominmag
- https://cominmag.ch/categorie/emploi/feed/ — RSS WordPress standard, niche agences romandes.

## APIs ATS (registre companies.json)
| ATS | Endpoint | Pièges |
|---|---|---|
| Greenhouse | GET boards-api.greenhouse.io/v1/boards/{token}/jobs (?content=true) | l'hôte .eu ne résout pas ; certains portails cachent le token |
| Lever | GET api.lever.co/v0/postings/{slug}?mode=json | réponses volumineuses ; createdAt en epoch ms |
| SmartRecruiters | GET api.smartrecruiters.com/v1/companies/{id}/postings?city=Lausanne | 200+totalFound:0 pour TOUT identifiant même inventé → seul totalFound>0 valide ; updatedAfter non fiable |
| Workday CXS | POST {tenant}.wd{N}.myworkdayjobs.com/wday/cxs/{tenant}/{site}/jobs body {"appliedFacets":{},"limit":20,"offset":0,"searchText":"Lausanne"} | postedOn = texte flou → nouveautés par externalPath/id, jamais par date |
| Phenom (PMI) | POST join.pmicareers.com/widgets body refineSearch (voir companies.json) | city+keywords combinés → 0 hit : filtrer par country puis côté client |
| Workable | apply.workable.com — endpoint widget à confirmer au premier passage | |
| Teamtailor | {site}/jobs.json à confirmer | |
| Ashby | GET api.ashbyhq.com/posting-api/job-board/{org} | |

## EGRESS OUVERT (04.09) + RÈGLES URL v3
Egress ouvert par Tanguy le 04.09 (44 domaines) — vérifié : jobup JSON-LD (parse
LISTE-aware : le bloc ld+json est un tableau), jobs.ch, Job-Room POST, SerpAPI, CHUV,
softgarden. Hors liste : bebee.com, bewtr.com (agrégateurs secondaires).
RÈGLES URL v3 (leçons de la purge du 04.09 — 10/13 liens du suivi morts) :
1. JAMAIS composer/compléter/deviner une URL — verbatim uniquement (2 UUID « devinés »
   se sont avérés faux le jour même de la règle : ...5b495b1a25ab vs ...5b495bba98a3).
2. jobup/jobs.ch : /detail/{UUID hex}/ seul format vivant ; id numérique = mort.
3. Offre expirée jobup = 301 → page catégorie en 200 : valider par URL FINALE +
   contenu, jamais par le code seul.
4. Les UUID jobup ont une durée de vie courte (fermetures + rotations) : re-GET
   obligatoire à chaque re-mention.

## PIÈGE MAJEUR — ATS abandonnés (incident Logitech du 31.08)
L'index WebSearch ressort des annonces d'ATS que l'employeur a QUITTÉS (ex. Logitech :
jobs.jobvite.com = ancien ATS, mort par défaut ; l'officiel est
logitech.wd5.myworkdayjobs.com). L'offre « AI Designer — Creative and Design AI Lab »
a été publiée en 🎯⚡ au brief n°4 avec un lien Jobvite mort — vérifiée absente des 66
résultats « AI Designer » et des 6 postes Lausanne du Workday officiel. RÈGLE ⛔ durcie :
1. Employeur présent dans companies.json → toute offre trouvée AILLEURS doit être
   confirmée sur l'ATS officiel du registre AVANT publication ; absente = périmée,
   on ne publie pas (journal).
2. En mode dégradé, une offre ni ouvrable ni confirmée par une source structurée
   (API ATS du registre, feed, JSON-LD, index primaire daté) ne monte JAMAIS au-dessus
   de 👀 — mention « ⚠️ non vérifiée — possiblement périmée ». Surtout pour une ⚡.
3. Domaines d'ATS abandonnés connus : jobs.jobvite.com (Logitech).

## Règles transverses
1. Clé primaire de dédup = id/URL, JAMAIS la date (formats hétérogènes).
2. Dédup inter-sources par hash (titre normalisé, entreprise).
3. Chaque source peut échouer sans faire tomber le run — rapport de santé dans le brief.
4. Fenêtre 48h + run quotidien.
5. EGRESS_BLOCKED → substitution WebSearch si possible, et domaine listé dans 🔧.

## Addendum 03.10.2026 — SPECTRE ÉLARGI (consigne Tanguy : « davantage d'offres par jour »)
1. jobup quotidien : 15 mots-clés Lausanne (ajout content, social media, graphiste,
   rédacteur, événement, growth, vidéo, web design) + Morges ×4 + VEVEY ×2 + NYON ×2
   (≈23 requêtes, espacées 3 s — script versionné : state/collecte/parse_jobup.py).
2. LinkedIn quotidien : distance=25 → 35 (couvre Vevey/Nyon/Rolle en P2) et kw
   élargis : + "content creator", "social media", "graphic design", "communications".
   Toujours max 6-8 requêtes espacées, re-extraction verbatim des URLs.
3. Job-Room : keywords + "contenu", "graphisme", "événementiel".
4. SCORING ÉLARGI : offre P2 (-1 géo) avec fit correct → publiée 👀 SYSTÉMATIQUEMENT
   (plus jamais reléguée en « écartées notables ») ; CDD < 12 mois avec bon fit → 👀
   systématique ; « écartées notables » réservé aux vrais KO (allemand exigé, 7+ ans,
   stages, hors métier). Objectif : volume dans le brief ET sur le board.
5. SerpAPI : quota inchangé (clé ~100 req/mois → max 3-4/jour) mais requête n°1
   élargie : "(marketing OR communication OR designer OR content) Lausanne" sans chips.
6. Board : toutes les offres publiées (👀 inclus) entrent dans offres.json avec
   dist + fit + missions dès le jour 1.

### Correctif 03.10 (soir) au spectre élargi
Nyon RETIRÉ de la collecte quotidienne (trop loin — consigne Tanguy) ; Vevey
conservé (train direct ~13 min). LinkedIn distance=25 (pas 35). Événementiel
pur = hors scope (voir PERSONA). La préférence Lausanne/≤5 km guide le tri.

## Addendum 03.10.2026 — NOUVELLES SOURCES (consigne Tanguy : « nouveaux angles », « un maximum d'API gratuites »)
Scripts versionnés dans state/collecte/ — à lancer CHAQUE MATIN en plus de jobup/Job-Room :
1. **jobsch_api.py** — API JSON publique jobs.ch (même base que jobup, contourne l'anti-bot
   HTML). rows ≤ 20 (sinon 422), pagination page=1..3. Chaque doc = lien officiel verbatim
   (_links.detail_fr), language_skills, work_experience, employment_grades, is_active,
   coordonnées GPS → distance réelle (ignorer si > 80 km pour une commune du corridor : coordonnées
   du siège). Recherche plein texte → filtrer sur le TITRE (regex métier + exclusions).
2. **linkedin_guest.py** — API guest LinkedIn : PAGINATION PAR PAS DE 10 (start=0,10,20,30) —
   on ne lisait que la 1re page (36 offres « marketing »/7 j au lieu de 10). Fiche détaillée :
   jobs-guest/jobs/api/jobPosting/{id} → texte complet + critères structurés (séniorité, type).
3. **ats_scan.py + ats_registry.json** — API publiques d'ATS, gratuites sans clé :
   Ashby (api.ashbyhq.com/posting-api/job-board/{slug}) — NOUVEAU, ouvre Neural Concept,
   Harmattan AI, Adaptyv Bio (sites carrières bloqués) ; Greenhouse (boards-api) ; Lever (api.lever.co) ;
   SmartRecruiters (api.smartrecruiters.com). Ajouter chaque slug d'employeur vaudois découvert.
   1re prise : Adaptyv Bio Community Manager (🎯, 03.10).
4. **JobSpy** (python-jobspy, open source) installé et testé : LinkedIn OK ; Indeed et Google
   ÉCHOUENT au niveau du proxy (apis.indeed.com, www.google.com → 403). Prêt à servir dès que
   ces domaines sont autorisés.
5. WTTJ : pages /fr/companies/{slug}/jobs/{job} lisibles (SSR) ; recherche géo et liste
   d'entreprises = JavaScript + Algolia (CSEKHVMS53-dsn.algolia.net) BLOQUÉ par le proxy.

### Testés et BLOQUÉS par le proxy (403 tunnel / 000) — à ajouter à l'allowlist si voulus
apis.indeed.com, ch-fr.indeed.com (Indeed) · www.google.com (Google Jobs direct) ·
csekhvms53-dsn.algolia.net (recherche WTTJ) · jooble.org, careerjet.ch, adzuna.ch/api.adzuna.com,
jobscout24.ch, myjob.ch, jobagent.ch, glassdoor.ch, monster.ch, talent.com (SSR vide),
epfl.ch, lausanne.ch, olympics.com, ecal.ch, remoteok/himalayas/remotive/the muse/jobicy.

### Addendum 03.10 (suite) — contournements : ce qui est possible et ce qui ne l'est pas
- INDEED : le refus vient du PROXY DE L'ENVIRONNEMENT (403 au CONNECT, avant d'atteindre Indeed).
  Ralentir/« humaniser » n'y change rien ; on ne contourne pas ce proxy (garde-fou réseau de la
  session). Seule voie : ajouter ch-fr.indeed.com + apis.indeed.com à l'allowlist → alors
  state/collecte/jobspy_indeed.py fonctionne tel quel (rythme prudent intégré).
- SERPAPI : quota RÉEL = 250/mois (plan gratuit), 233 restants au 03.10 → budget ~7/jour via
  state/collecte/serpapi_jobs.py (requêtes variées, pas de pagination : vide sur Lausanne).
  Google Jobs agrège Indeed mais en filet (~1 lien sur 10).
- RYTHME HUMAIN : state/collecte/polite.py (pauses aléatoires, recul exponentiel 429/403/503,
  plafond par domaine, Accept-Language fr-CH) — pour LinkedIn/jobup/jobs.ch, joignables mais
  rate-limités. Un refus proxy est détecté et non réessayé.
- Radar : Rigi Technologies (drones, Vaud) publie un stage « AI-Driven Marketing » → la
  scale-up structure son marketing ; surveiller un poste junior/confirmé.
