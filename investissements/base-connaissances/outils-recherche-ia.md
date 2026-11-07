# Outils de recherche « ère IA » & sources primaires — état 2026

Compilé le 2026-07-26. Ce qui est réellement gratuit vs marketing.

## Plateformes IA — verdict rapide

- **Perplexity Finance** (`perplexity.ai/finance`) : le vrai gain gratuit —
  pages ticker, Earnings Hub (synthèse de calls quasi temps réel), screener
  en langage naturel. ⚠️ Fiable sur les LARGE CAPS seulement (erreur
  documentée d'un facteur 1 000 sur une small cap — unités mal lues).
- **Koyfin** free : 2 dashboards/2 watchlists — consultation, pas recherche.
  **TIKR** free : lecture d'états financiers, historique tronqué.
- **Fintool : racheté par Microsoft (avril 2026)**, plus de piste retail.
  **AlphaSense** : enterprise only. **Wisesheets** : pas de vrai gratuit.
- Répartition des rôles constatée dans les comparatifs 2026 : Perplexity
  pour un fait sourcé · Claude pour lire un filing long · ChatGPT pour le
  calcul · Grok pour le sentiment X (jamais comme source).

## Transcripts d'earnings calls — le chemin gratuit < 24 h

1. **Quartr app mobile** (gratuit) : live + replay + transcript temps réel,
   14 000+ sociétés **dont françaises** (comble le trou des IR FR qui ne
   publient que slides + replay). Rien de fetchable (app).
2. **stockanalysis.com/stocks/{ticker}/transcripts/** : gratuit,
   server-rendered, résumés IA — **la voie automatisable** pour les US.
3. **roic.ai/quote/{ticker}/transcripts** : gratuit + API free tier tous
   tickers (international inclus) — le fallback API.
4. Motley Fool (fool.com/earnings-call-transcripts) : fallback texte US.
5. ⚠️ Seeking Alpha : paywall consolidé — ne plus compter dessus.

## Sources primaires — power usage

- **EDGAR full-text** (API JSON gratuite) :
  `efts.sec.gov/LATEST/search-index?q="..."&forms=8-K&startdt=...&enddt=...`
  — User-Agent déclaré obligatoire. RSS Atom par ticker :
  `sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK={TICKER}&type=8-K&output=atom`.
  Mapping ticker→CIK : `sec.gov/files/company_tickers.json`.
- **Stratégie de lecture** : 8-K → item 2.02 + exhibit 99.1 (le communiqué,
  4 pages utiles) ; 10-K → MD&A + **diff année/année des Risk Factors** ;
  10-Q → MD&A seulement.
- **France** : BDIF (`bdif.amf-france.org`) + **info-financiere.gouv.fr**
  (portail Opendatasoft de l'info réglementée AMF, **API ouverte JSON** via
  data.gouv.fr) = l'EDGAR français, très automatisable.

## Agrégateurs de news

- **Google News RSS** (colonne vertébrale) :
  `news.google.com/rss/search?q={société}+when:1d&hl=fr`
- Finviz (news par ticker), Biztoc (macro US, server-rendered),
  newsfilter.io (news + filings unifiés), **marketaux** (API sentiment,
  ~100 req/jour gratuites).
- France : Boursorama actus + flux RSS (annuaire atlasflux.saynete.net) ;
  Les Echos/Investir = paywall dur (titres RSS seulement).

## Screeners IA

- **Gainify** (gainify.io) : 500+ paramètres gratuits + langage naturel —
  le plus sérieux. Magnifi : idéation NL. Finviz reste le plus scriptable.

## Communautés à haut signal (gratuit)

- **ValueInvestorsClub** : inscription gratuite = idées avec 45 j de délai
  (sans importance à horizon 5-7 ans), qualité élevée — vivier mensuel.
- Substacks crédibles gratuits : Money Stuff (Levine), Net Interest
  (Rubinstein), Clouded Judgement (Ball, SaaS), Bits about Money.
- Règles de tri X/Twitter : l'auteur lie-t-il ses sources primaires ?
  reconnaît-il ses erreurs ? Muter les captures d'écran sans lien.

## Pipeline type « jour de résultats » (gratuit)

Quartr (live/replay) → transcript stockanalysis.com ou roic.ai → synthèse
Perplexity Finance (large caps) → lecture du 8-K/communiqué en profondeur.
