# Outils portefeuille, backtest & PEA — toolkit européen gratuit

Compilé le 2026-07-26. Focalisé sur le cas Tanguy : eToro USD + futur PEA,
500 €/mois, horizon 5-7 ans.

## Toolkit minimal (100 % gratuit)

1. **Curvo Backtest** (`curvo.eu/backtest`) — LE backtester pour Européens :
   ETF UCITS, en EUR, sans inscription. Rendements historiques, drawdowns,
   Monte Carlo, frontière efficiente, **simulation de DCA mensuel** (le cas
   500 €/mois exactement). Premier choix pour concevoir l'allocation cible.
2. **justETF version FR** — screener avec **filtre « éligible PEA »**.
   Consensus 2026 cœur PEA : ETF World synthétique type Amundi CW8/EWLD
   (TER 0,38 %) ou S&P 500 PEA (FR0013412285). Toujours vérifier la mention
   « éligible PEA » sur la fiche émetteur.
3. **TrackingDifferences.com** — indépendant, gratuit, UCITS : la **tracking
   difference réelle** (coût de détention vrai, plus pertinent que le TER)
   par ISIN. À utiliser pour départager deux ETF présélectionnés.
4. **Portfolio Performance** (desktop, open source, données locales) — suivi
   consolidé multi-devises : import CSV eToro (Compte → Documents → Account
   Statement) + futur PEA. Vrais calculs TTWROR/TRI, benchmark. Meilleure
   confidentialité possible (rien dans le cloud).
5. **testfol.io** — bac à sable US/USD complémentaire (Monte Carlo
   paramétrable, optimiseur). Curvo d'abord.
6. **Simulateur DGFiP** (+ simulons.fr) — 1×/an : arbitrage PFU vs barème
   sur les gains eToro.

Overlap d'ETF : `etfrc.com/funds/overlap.php` (tickers US en proxy des
UCITS : VWCE≈VT, CSPX≈VOO — les indices sont identiques).

## Courtier PEA pour un DCA de 500 €/mois (état 2026)

| Courtier | Coût d'un ordre ~500 € | Verdict |
|---|---|---|
| **Fortuneo (Starter)** | **0 €** (1 ordre gratuit/mois ≤ 500 €) | **Cas d'usage exact de Tanguy : DCA à coût nul** |
| **Trade Republic PEA** | 1 €/ordre, plans programmés **gratuits** | Le moins cher + exécution automatique = discipline parfaite ; jeune (lancé 2025), SAV FR depuis avril 2026 |
| Bourse Direct | ~1,90 € | Le moins cher historique, plateforme datée |
| BoursoBank | ~3,99 € | Solide, plus cher |

→ **Recommandation : Fortuneo Starter (0 €) ou Trade Republic (automatisation).**

## ⚠️ Fiscalité — changement 2026 à vérifier et intégrer

- Le **PFU serait passé de 30 % à 31,4 %** (12,8 % IR + 18,6 % PS, hausse
  CSG LFSS 2026) — sources : simulateurs/blogs fiscaux 2026, à confirmer
  sur impots.gouv.fr avant de citer en newsletter.
- L'option barème (case 2OP) ne serait **plus irrévocable** (modifiable
  chaque année). Seuil d'arbitrage : barème si TMI ≤ ~11 %.
- Conséquence : l'argument de bascule du flux d'épargne **CTO eToro → PEA**
  se renforce encore (PEA : exonération d'IR après 5 ans, PS seuls dus).

## Risque de change (compte eToro USD) — consensus des sources

- Actions mondiales à 5-7 ans : **rester non couvert** (unhedged). La
  couverture coûte (TER +0,20-0,30 % + portage) et ne change pas l'espérance
  de rendement ; elle n'a de sens que pour l'obligataire ou le court terme.
- Le vrai coût caché eToro : les **conversions EUR↔USD** aux dépôts/retraits
  → vérifier le compte multi-devises eToro 2026 (base EUR) pour le réduire.
- Suivi d'exposition devise : Portfolio Performance (ventilation par devise,
  taux BCE intégrés).

## Actions dérivées pour le mandat

1. Ouvrir le PEA (Fortuneo ou Trade Republic) et y router le flux mensuel —
   la décision structurante n°1 de l'année.
2. Backtester l'allocation cible sur Curvo avant le premier versement PEA.
3. Vérifier le PFU 31,4 % (source officielle) et mettre à jour fiscalite.md.
4. Configurer Portfolio Performance avec l'export CSV eToro.
