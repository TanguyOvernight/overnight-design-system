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

## Journal de validation (à remplir au fil des briefs)

| Date | Pattern testé | Résultat |
|---|---|---|
