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

## Règles transverses
1. Clé primaire de dédup = id/URL, JAMAIS la date (formats hétérogènes).
2. Dédup inter-sources par hash (titre normalisé, entreprise).
3. Chaque source peut échouer sans faire tomber le run — rapport de santé dans le brief.
4. Fenêtre 48h + run quotidien.
5. EGRESS_BLOCKED → substitution WebSearch si possible, et domaine listé dans 🔧.
