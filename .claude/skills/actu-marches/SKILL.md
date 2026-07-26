---
name: actu-marches
description: >
  Recettes de recherche d'actualité financière : CAC 40, valeurs françaises,
  marchés émergents, macro. Utilise ce skill chaque fois qu'il faut récupérer
  des cours, des résultats d'entreprise, de l'actualité de sociétés cotées ou
  l'état des marchés — typiquement en support du skill suivi-investissements
  pour le brief quotidien. Contient les sources fiables, les modèles de
  requêtes et les tickers de référence.
---

# Actu marchés — recettes de recherche

## Principes

- **Toujours dater** : préfixer les requêtes avec le mois/l'année en cours et
  privilégier les résultats < 48 h pour un brief quotidien.
- **Croiser deux sources** avant de citer un chiffre sensible (cours, résultat,
  guidance). En cas de divergence, le signaler.
- **WebSearch d'abord** pour trouver la bonne page, **WebFetch** ensuite pour en
  extraire les chiffres précis.
- Ne jamais donner un cours sans préciser sa date/heure approximative.

## Sources fiables par usage

| Besoin | Sources |
|---|---|
| Cours et données de marché | investing.com, boursorama.com, zonebourse.com, Google Finance |
| Actu valeurs françaises | Les Echos (lesechos.fr), boursorama.com, zonebourse.com, BFM Bourse (tradingsat) |
| Actu internationale/macro | Reuters, Bloomberg, Financial Times, CNBC |
| Résultats officiels | Communiqués investisseurs sur le site de la société (rubrique "Investors"/"Investisseurs") |
| Marchés émergents | Reuters, Bloomberg, Nikkei Asia, Economic Times (Inde), Caixin (Chine) |
| ETF (frais, encours, éligibilité PEA) | justetf.com, quantalys.com, site de l'émetteur (Amundi, iShares, Xtrackers, BNP Easy) |
| Consensus analystes | zonebourse.com, marketscreener.com (version EN de zonebourse) |

## Modèles de requêtes

- Brief indice : `CAC 40 <mois> <année> performance news`
- Valeur précise : `<société> stock news <mois> <année>` puis
  `<société> résultats <T1/S1/T3/annuels> <année>`
- Résultats à venir : `<société> earnings date <année>`
- Mouvement inexpliqué : `why is <société> stock down/up today`
- Macro : `ECB rate decision <mois> <année>`, `Fed FOMC <mois> <année>`,
  `France OAT Bund spread today`
- Émergents : `MSCI emerging markets <mois> <année>`, `Nifty 50 news`,
  `CSI 300 Hang Seng news`, `Bovespa news`
- ETF : `<ISIN ou nom ETF> justetf` (frais, encours, réplication, PEA)

## Tickers du portefeuille (priorité n°1 de chaque brief)

| Valeur | Ticker | Requêtes types |
|---|---|---|
| Vanguard Total Stock Market | VTI | `US stock market today`, `S&P 500 news` (proxy) |
| iShares Core MSCI World | SWDA.L | `MSCI World news`, marché global |
| Nvidia | NVDA | `Nvidia stock news`, `NVDA earnings` (résultats fin août) |
| Tesla | TSLA | `Tesla stock news`, `TSLA deliveries robotaxi` |
| Microsoft | MSFT | `Microsoft stock news`, `Azure growth`, résultats fin juillet/janvier/avril/octobre |

Pour les deux ETF : pas d'actu propre — couvrir via le marché US/monde
(S&P 500, Fed, résultats des méga-caps qui les dominent).

## Recettes quotidiennes de chasse aux pépites

En appui de l'entonnoir du matin (skill analyse-prospective). Requêtes types :

- Mouvements du jour : `biggest stock movers today` puis
  `why is <société> stock down/up today` — ne retenir que les mouvements
  > ±8 % AVEC cause identifiée.
- Achats de dirigeants : `openinsider cluster buys this week` ou consulter
  openinsider.com/insider-purchases (code P, 2+ acheteurs en < 7 jours).
  Version eToro : insider-signal.etoro.app.
- Révisions/upgrades : `analyst upgrades today <mois> <année>`,
  zonebourse rubrique « révisions ».
- Résultats mal accueillis : `<société> beat earnings stock down why`.
- Qualité au plus bas : Finviz (US, 67 filtres gratuits), TradingView
  (mondial, 168 critères), ChartMill/ScreenerHero (Europe complète sans
  compte) — recette « -20 % vs 52w high + ROIC > 10 % + marge > 10 % ».
- Liste de courses : vérifier les cours du jour des valeurs de
  `base-connaissances/valeurs-qualite.md` proches de leur seuil de promo
  (recherche `<ticker> stock price today` ou page Google Finance).

## Veille IA & pré-IPO (OpenAI, Anthropic, tech émergentes)

Sociétés suivies : OpenAI, Anthropic, xAI, Mistral AI, SpaceX/Starlink,
Databricks, Stripe, Perplexity + le pipeline d'IPO tech du moment.

Requêtes types :
- `OpenAI IPO valuation news <mois> <année>` / idem Anthropic, xAI, Mistral
- `<société> funding round valuation` (levées = signal de valorisation)
- `tech IPO pipeline <année>` / `upcoming AI IPO`
- `Starlink IPO rumors <année>`
- Après une IPO : `<ticker> stock since IPO performance`
- Proxys cotés : `SoftBank OpenAI stake`, `Microsoft OpenAI stake`,
  `Amazon Alphabet Anthropic stake`

Sources : Reuters, Bloomberg, The Information (souvent la meilleure sur le
privé), TechCrunch, CNBC, Sifted (tech européenne, Mistral), PitchBook/CB
Insights (valorisations). Les valorisations privées sont des estimations —
toujours citer la source et la date de la levée correspondante.

Référentiel des accès investisseur français : voir
`investissements/base-connaissances/ia-tech-emergentes.md`.

## Tickers de référence — CAC 40 (principales capitalisations)

| Société | Ticker | Secteur |
|---|---|---|
| LVMH | MC.PA | Luxe |
| Hermès | RMS.PA | Luxe |
| L'Oréal | OR.PA | Cosmétiques |
| TotalEnergies | TTE.PA | Énergie |
| Sanofi | SAN.PA | Santé |
| Airbus | AIR.PA | Aéronautique |
| Safran | SAF.PA | Aéro/Défense |
| Thales | HO.PA | Défense |
| Schneider Electric | SU.PA | Équip. électriques |
| Air Liquide | AI.PA | Gaz industriels |
| BNP Paribas | BNP.PA | Banque |
| Crédit Agricole | ACA.PA | Banque |
| Société Générale | GLE.PA | Banque |
| AXA | CS.PA | Assurance |
| Vinci | DG.PA | Concessions/BTP |
| Saint-Gobain | SGO.PA | Matériaux |
| Stellantis | STLAP.PA | Automobile |
| Renault | RNO.PA | Automobile |
| Dassault Systèmes | DSY.PA | Logiciel |
| Capgemini | CAP.PA | Services IT |
| STMicroelectronics | STMPA.PA | Semi-conducteurs |
| Legrand | LR.PA | Équip. électriques |
| Danone | BN.PA | Agroalimentaire |
| Pernod Ricard | RI.PA | Spiritueux |
| Kering | KER.PA | Luxe |
| EssilorLuxottica | EL.PA | Optique |
| Publicis | PUB.PA | Communication |
| Veolia | VIE.PA | Utilities |
| Engie | ENGI.PA | Utilities |
| Orange | ORA.PA | Télécoms |
| Michelin | ML.PA | Pneumatiques |
| Bouygues | EN.PA | Conglomérat |
| ArcelorMittal | MT.AS | Acier |
| Accor | AC.PA | Hôtellerie |
| Eurofins | ERF.PA | Bio-analyse |
| Edenred | EDEN.PA | Avantages salariés |
| Carrefour | CA.PA | Distribution |
| Unibail-Rodamco-Westfield | URW.PA | Immobilier |
| Teleperformance | TEP.PA | Services clients |
| Vivendi/Bolloré (selon composition en vigueur) | — | Médias/Holding |

*(Vérifier la composition en vigueur : elle est revue trimestriellement par
Euronext.)*

## Indices et références — marchés émergents

| Zone | Indice | Proxy ETF UCITS courant |
|---|---|---|
| Global EM | MSCI Emerging Markets | Amundi/iShares/Xtrackers MSCI EM |
| Inde | Nifty 50 / Sensex | Amundi MSCI India, iShares MSCI India |
| Chine | CSI 300, Hang Seng, MSCI China | iShares MSCI China, Amundi MSCI China |
| Taïwan | TAIEX (TSMC ~poids dominant) | via MSCI EM ou MSCI Taiwan |
| Corée | KOSPI | iShares MSCI Korea |
| Brésil | Bovespa (IBOV) | iShares MSCI Brazil, Amundi Brazil |
| Asie du Sud-Est | indices Indonésie/Vietnam/Thaïlande | ETF ASEAN, Xtrackers Vietnam (frontier) |
| EM hors Chine | MSCI EM ex-China | iShares/Amundi EM ex-China |

**Rappel enveloppes** : la plupart des ETF émergents "physiques" ne sont pas
éligibles PEA ; il existe des ETF émergents **synthétiques éligibles PEA**
(notamment chez Amundi/Lyxor et BNP Easy). Toujours vérifier l'éligibilité sur
justetf/quantalys avant de recommander pour le PEA.

## Format du brief quotidien (sortie)

1. **TL;DR** (2-3 phrases)
2. **Positions du portefeuille** : tableau cours / variation / actu / thèse OK ?
3. **Macro en un paragraphe** (seulement si ça change une décision)
4. **Opportunités / watchlist** (le cas échéant)
5. **Sources** (liens)
