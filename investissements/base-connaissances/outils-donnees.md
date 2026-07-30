# Cookbook d'accès aux données financières (gratuit, via web)

Compilé le 2026-07-26. Statuts de fetchabilité par réputation documentée :
F+ = HTML/CSV rendu serveur, lisible par WebFetch · F− = anti-bot/SPA, passer
par WebSearch · F~ = variable. ⚠️ Les tests directs depuis la sandbox ont été
bloqués par le proxy (403 générique) : **valider chaque pattern en conditions
réelles au fil des briefs** et noter ici ce qui marche vraiment.

## Colonne vertébrale du pipeline quotidien

1. **Prix (F+)** — Stooq, le plus scraper-friendly du marché :
   - Dernier cours CSV : `https://stooq.com/q/l/?s=msft.us&f=sd2t2ohlcv&h&e=csv`
   - Historique quotidien CSV : `https://stooq.com/q/d/l/?s=msft.us&i=d`
   - Suffixes : `.us`, `.fr` (ex. `ai.fr` = Air Liquide) ; indices `^spx`, `^cac`
   - Secours : Google Finance `https://www.google.com/finance/quote/MSFT:NASDAQ`
     (Paris : `AI:EPA`) — rendu serveur, PER/capi/52sem inclus.
2. **Fondamentaux (F+)** — stockanalysis.com :
   - US : `https://stockanalysis.com/stocks/MSFT/` + `/financials/`, `/statistics/`
   - Paris : `https://stockanalysis.com/quote/epa/AI/` · ETF : `/etf/VOO/`
   - Historique long (F~) : macrotrends.net `/stocks/charts/MSFT/microsoft/pe-ratio`
3. **Screening (F+)** — Finviz : `https://finviz.com/quote.ashx?t=MSFT` et
   `https://finviz.com/screener.ashx?v=111&f=...` (différé 15-20 min).
4. **Calendriers** — macro (F+) : `https://tradingeconomics.com/calendar` ;
   résultats (F~) : pages ticker EarningsWhispers
   `https://www.earningswhispers.com/stocks/msft` et Zacks `/stock/quote/MSFT`.
5. **Macro (F+)** :
   - FRED CSV sans clé : `https://fred.stlouisfed.org/graph/fredgraph.csv?id=CPIAUCSL`
     (multi-séries : `?id=CPIAUCSL,UNRATE`)
   - BCE API CSV : `https://data-api.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A?format=csvdata`
   - INSEE BDM (France, SDMX) ; OCDE data-explorer.
6. **Sentiment (F+/F~)** :
   - CNN Fear & Greed JSON : `https://production.dataviz.cnn.io/index/fearandgreed/graphdata`
     (exige User-Agent navigateur ; `/2026-01-01` pour l'historique)
   - AAII (jeudis) : `https://www.aaii.com/sentimentsurvey`
   - Put/call CBOE CSV nu : `https://cdn.cboe.com/resources/options/volume_and_call_put_ratios/indexpcarchive.csv`
   - COT CFTC (vendredis) : cftc.gov, texte brut ouvert.
7. **Initiés & short (F+)** :
   - OpenInsider : `http://openinsider.com/screener?s=MSFT`,
     `/latest-insider-purchases-25k` (paramètres URL riches)
   - SEC EDGAR (source primaire, User-Agent déclaré requis)
   - FINRA short interest files ; highshortinterest.com (top 200).
8. **France (F+)** :
   - Boursorama : `https://www.boursorama.com/cours/1rPAI/` (préfixe `1rP` +
     ticker Euronext) ; palmarès `/bourse/actions/palmares/france/`
   - ABC Bourse : `https://www.abcbourse.com/cotation/AIp` (suffixe `p`) ;
     **historiques téléchargeables** : `/download/historiques`.
9. **ETF UCITS (F+)** — justETF par ISIN :
   `https://www.justetf.com/en/etf-profile.html?isin=IE00B4L5Y983`.
10. **Crypto (mineur, F+)** — CoinGecko keyless :
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur`.

## À ÉVITER en fetch automatique (anti-bot/SPA — passer par WebSearch)

Yahoo Finance, investing.com, nasdaq.com (pages), TradingView, etfdb,
zonebourse (Cloudflare + paywall croissant), simplywall.st, WSJ, Barchart.

## Lacune assumée

Options flow réel (sweeps, dark pool) : pas de source gratuite fiable en
2026 (Unusual Whales/FlowAlgo payants). Proxy : ratios CBOE + volume
d'options Finviz.

## 🔴 BLOCAGE STRUCTUREL — aucun pattern de ce fichier n'est exécutable (27→30/07/2026)

**4 jours consécutifs.** Tous les accès web directs (WebFetch *et* curl)
sont refusés : le proxy répond `connect_rejected — gateway answered 403 to
CONNECT (policy denial)` sur **100 % des hôtes testés**, y compris
wikipedia.org. Ce n'est ni un anti-bot, ni un problème de User-Agent, ni
une panne : le proxy se déclare sain (`enabled: true`), c'est la
**politique réseau de l'environnement** qui refuse la sortie. Elle est
paramétrable par Tanguy — il y a déjà ajouté `hooks.slack.com`, ce qui a
réparé la livraison Slack.

**Conséquence mesurée, pas théorique.** Le 30/07, deux agents indépendants
ont buté dessus : 4 cours exploitables et datés sur 12 lignes suivies ; et
le Chasseur a failli remonter une fausse sous-réaction sur Sidetrade à
partir de deux agrégateurs concordants mais périmés de 25 % (règle 17 de
la charte). **Une donnée de prix périmée ne dégrade pas la décision, elle
l'INVERSE** — c'est un risque de premier ordre, pas une gêne.

**Domaines à autoriser, par ordre de levier décroissant :**

| # | Domaine | Ce que ça débloque |
|---|---|---|
| 1 | **stooq.com** | **Le correctif structurel.** Cotations en **CSV horodaté**, sans scraping ni anti-bot : `https://stooq.com/q/l/?s=vct.fr&f=sd2t2ohlcv&h&e=csv` (`.fr` Paris, `.us` US, `.de` Xetra). Donne date, heure, OHLC, volume — donc satisfait nativement la règle 17. À lui seul, il répare la section « cours du jour ». |
| 2 | **globenewswire.com** | Communiqués émetteurs en source primaire. Sans lui, aucun résultat n'est lu à la source — seulement des dépêches de seconde main (cas Vicat 30/07 : EBITDA, levier et guidance connus uniquement par la presse). |
| 3 | **boursorama.com** | Actualité FR + cotations Euronext (patterns §8). |
| 4 | **abcbourse.com** | Cotations Euronext + historiques téléchargeables. |
| 5 | **stockanalysis.com** | Fondamentaux et historiques US. |

Tant que ce blocage dure : **toute règle d'entrée exprimée en prix
s'exécute sur l'écran Fortuneo de Tanguy**, jamais sur un chiffre rapporté
ici — et une thèse qui repose sur une NON-variation de cours ne se conclut
pas du tout.

## Journal de validation (à remplir au fil des briefs)

| Date | Pattern testé | Résultat |
|---|---|---|
| 27→30/07/2026 | **Tous** (§1 à §10) | ❌ **Aucun testable** — 403 au CONNECT sur tous les hôtes (politique réseau de l'environnement, pas anti-bot). Journal vide non par négligence mais par blocage. |
