# Signaux macro temps réel — outils gratuits et pipeline hebdo

Compilé le 2026-07-26. Principe : ces outils donnent un **contexte de régime**
(risk-on/off, surprise d'inflation probable), PAS des signaux d'achat/vente.
Cohérent avec l'horizon 5-7 ans : ils servent à choisir les fenêtres de
renforcement.

## Le pipeline hebdo (≤ 15 min, à intégrer aux briefs)

1. **Mercredi ~15h Paris** — NFCI (`fred.stlouisfed.org/series/NFCI`) +
   CISS zone euro (portail BCE) : régime de risque. NFCI > 0 ou en hausse
   rapide = prudence sur les renforcements.
2. **Vendredi** — CME FedWatch **croisé avec** Kalshi/Polymarket Fed :
   probabilité de la prochaine décision + surveiller les DIVERGENCES
   (26/07 : Kalshi ~48 % de hausse en septembre vs FedWatch ~82 % — signal
   en soi).
3. **Vendredi après 17h15** — NY Fed Nowcast (vendredis) + GDPNow : lire la
   PENTE sur 3-4 mises à jour, jamais un point isolé (GDPNow ne bat pas le
   consensus ; mix optimal ≈ 55 % GDPNow + 45 % consensus).
4. **Veille de chaque CPI US** — Cleveland Fed Inflation Nowcasting
   (quotidien, BAT les prévisionnistes pros sur le mois en cours — meilleur
   ratio signal/effort de la liste) + Truflation en directionnel.
5. **Jeudi (30 s)** — Drewry WCI (jeudis) + Baltic Dry (via
   TradingEconomics) : tension fret = signal avancé inflation biens /
   demande Chine (pertinent poche émergents).
6. **Mensuel + crises** — GPR de Caldara-Iacoviello
   (`matteoiacoviello.com/gpr.htm`, page statique + Excel, très fetchable) ;
   si actualité brûlante : GDELT Summary (`summary.gdeltproject.org`) sur le
   thème (volume + tonalité presse mondiale, maj 15 min).

## URLs clés (fetchabilité)

- **FRED (F+)** : NFCI, ANFCI, STLFSI4 (stress St. Louis), GDPNOW — CSV sans
  clé via `fredgraph.csv?id=`.
- **Cleveland Fed (F+)** : `clevelandfed.org/indicators-and-data/inflation-nowcasting`
  — maj chaque jour ouvré ~10h ET.
- **NY Fed (F+)** : `newyorkfed.org/research/policy/nowcast` — vendredis
  11h15 ET, xlsx téléchargeable.
- **TSA (F+, le plus fetchable)** : `tsa.gov/travel/passenger-volumes` —
  table HTML, passagers aériens US quotidiens (proxy conso services).
- **EIA (F+)** : essence hebdo (mercredis 10h30 ET) + électricité horaire
  (`eia.gov/electricity/gridmonitor`), API OpenData gratuite.
- **CISS BCE (F+)** : API SDMX du portail BCE, quotidien.
- **CME FedWatch (F−)** : consultation navigateur ; **Kalshi/Polymarket** :
  SPA mais APIs publiques gratuites (`api.elections.kalshi.com`,
  `gamma-api.polymarket.com`).
- Drewry WCI (F+ page composite, jeudis) ; OpenTable : dataset public
  arrêté → `realvsreported.com/high-frequency` en agrégateur.

## Ce que disent les preuves

- Marchés prédictifs : Brier 0,15-0,25 vs 0,20-0,35 pour les experts ;
  battent les sondages ~74 % des cas. Fiables sur événements proches et
  liquides (Fed, élections) ; volumes 2026 massifs (~45 Md$/mois Kalshi +
  Polymarket) donc prix informatifs.
- GDPNow : erreur moyenne 0,77 pt, ne bat PAS le consensus seul — outil de
  tendance.
- Cleveland Inflation Nowcast : bat les pros sur le CPI du mois en cours
  (étude 2023) — LE check de veille de CPI.
- NFCI > 0 a historiquement précédé les stress de marché ; CISS = équivalent
  euro quotidien.
- Fret/TSA/électricité : thermomètres pour confirmer un narratif, pas des
  boussoles de timing.

Sources détaillées : rapport de recherche du 26/07 (journal du jour).
