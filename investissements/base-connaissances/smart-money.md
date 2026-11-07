# Smart money tracking — suivre l'argent intelligent (outils gratuits)

Compilé le 2026-07-26. Classé par fraîcheur de la donnée (du plus frais au
plus décalé) — la fraîcheur détermine l'usage.

## 1. Achats de dirigeants US — Form 4 (~2 jours, le plus frais)

- **OpenInsider** (`openinsider.com`) : HTML pur, trivial à fetcher.
  Screener par URL, pages « cluster buys ». Signal validé (cf.
  methodes-quantitatives.md §4) : 3+ initiés, open market, <30 jours.
- Alternatives : secform4.com, finviz.com/insidertrading.

## 2. Positions courtes Europe (quotidien)

- Publication publique dès 0,5 % du capital shorté : registre français via
  **AMF/BDIF** (« positions courtes »), autres pays via la page ESMA (liens
  registres nationaux). **Seul endroit gratuit pour voir qui shorte quoi en
  Europe** — check avant d'acheter une valeur FR : qui est short et depuis
  quand ?

## 3. Dirigeants France — art. 19 MAR (3 jours ouvrés)

- **BDIF AMF** : `bdif.amf-france.org/fr?typesInformation=DD` (SPA, mais
  **flux RSS par société fetchables** : `/fr/navigation-flux-rss`). Couvre
  aussi franchissements de seuils et pactes (= repérer un activiste montant
  au capital d'une valeur française).
- Multi-pays Europe : insiderscreener.com (freemium, alertes).

## 4. Activistes longs — 13D (5 jours ouvrés depuis la réforme 2024)

- **EDGAR full-text search** (API JSON gratuite) :
  `efts.sec.gov/LATEST/search-index?q=...&forms=SC+13D` (User-Agent déclaré
  obligatoire). UI : sec.gov/edgar/search. Gratuits aussi : fintel.io/activists,
  streetinsider.com/13Ds.
- Preuves : +7-8 % anormal autour du dépôt (Brav/Jiang 2008), sans réversion
  long terme — mais le pop initial est capté avant nous : le jeu retail =
  **drift post-annonce et suivi de campagne**, pas le jump.

## 5. Rachats d'actions (annonces)

- marketbeat.com/stock-buybacks, tipranks.com/calendars/stock-buybacks,
  theonlineinvestor.com/buybacks (simple, fetchable).
- Anomalie documentée (Ikenberry) : drift positif long terme post-annonce,
  surtout small value.

## 6. Trades du Congrès US (30-45 jours de lag)

- **CapitolTrades** (le plus propre, gratuit, affiche le reporting gap),
  QuiverQuant free, Unusual Whales politics. Apps JS (pas fetchables).
- ⚠️ Preuves : l'alpha moyen a DISPARU post-STOCK Act 2012 (NBER w26975).
  Usage : flux d'idées sélectif (commissions pertinentes, achats groupés),
  JAMAIS une stratégie.

## 7. 13F superinvestisseurs (jusqu'à 45 jours de lag)

- **Dataroma** (`dataroma.com/m/holdings.php?m=BRK`, `/m/activity.php`,
  Grand Portfolio) : ~84 value investors triés, HTML old-school fetchable —
  la meilleure source. **13f.info** : exhaustif, exports CSV/JSON, mais
  Cloudflare. WhaleWisdom free : 2 ans d'historique. GuruFocus free : mince.
- Q2 2026 clos le 30/06 → **dépôts 13F jusqu'au ~14/08** (fenêtre
  d'observation à mettre au radar chaque trimestre).
- Preuves du « clonage » : copier Berkshire après publication battait le
  marché (Martin & Puthenpurackal) ; cloneurs sélectifs ~+5,5 %/an (SSRN
  2024/25). MAIS ne marche que pour des gérants **concentrés à faible
  rotation** — cloner un fonds à forte rotation est vain avec 45 j de lag.

## 8. Rapports de shorts activistes & lettres de fonds

- Hindenburg fermé (01/2025), champ raréfié → les rapports restants (Muddy
  Waters, Spruce Point, Viceroy, Grizzly — sites gratuits) ont plus de
  valeur de signal ; toujours vérifier la thèse (conflits par construction).
- Lettres trimestrielles gratuites : finmasters.com/hedge-fund-letters,
  fiscal.ai/fund-letters, buysidedigest.com, r/SecurityAnalysis,
  berkshirehathaway.com/letters.

## Intégration au pipeline quotidien/hebdo

- **Quotidien (entonnoir du matin, recette n°3)** : OpenInsider cluster buys.
- **Hebdo** : positions courtes AMF sur les valeurs FR suivies + 13D récents
  (EDGAR FTS) sur la watchlist + annonces de buybacks.
- **Trimestriel (mi-février/mai/août/novembre)** : tournée Dataroma
  (activité des superinvestisseurs) + lettres de fonds → idées pour la
  watchlist. Prochaine fenêtre : **dépôts 13F Q2 jusqu'au ~14/08/2026**.
