---
name: analyse-prospective
description: >
  Méthodologie d'analyse prospective des marchés : détecter les « points
  chauds » d'investissement avant qu'ils ne soient consensus, lire les
  indicateurs avancés, construire des scénarios et transformer un thème en
  investissement concret. Utilise ce skill quand Tanguy demande « sur quoi
  investir », « quels sont les marchés à venir », « où sont les
  opportunités », ou pour toute analyse de tendance/secteur/thème — en
  complément de suivi-investissements (mandat) et actu-marches (recherche).
---

# Analyse prospective — détecter les points chauds

## Le pipeline : thème → thèse → timing → véhicule

Ne jamais sauter d'étape. Un « point chaud » ne devient une recommandation
que s'il passe les quatre :

1. **Thème** (le narratif) : une force structurelle crée de la demande
   (ex. : data centers → électricité). Question : le thème survivra-t-il
   5 ans ? Qui est OBLIGÉ de dépenser, et combien ?
2. **Thèse** (l'entreprise/l'actif) : qui capte la valeur ? Souvent PAS la
   star du narratif mais ses fournisseurs (pelles et pioches : Schneider
   plutôt que les modèles d'IA, Safran plutôt que les compagnies aériennes).
   Vérifier la valorisation : un excellent thème déjà pricé (PER > 30-40 sans
   croissance équivalente) = mauvaise thèse.
3. **Timing** : y a-t-il un catalyseur daté (résultats, décision politique,
   reclassement d'indice, cycle de capex) ? Sinon, entrée progressive par
   tiers uniquement.
4. **Véhicule** : titre vif, ETF sectoriel/pays, proxy coté — avec
   enveloppe (eToro CTO / futur PEA) et taille de position adaptées.

## Signaux précoces d'un point chaud (à chercher activement)

Par ordre de fiabilité :

- **L'argent réel engagé** : capex annoncés (hyperscalers, États), carnets de
  commandes (book-to-bill), budgets votés (défense UE 454 Md€). Le discours
  suit l'argent, pas l'inverse.
- **Révisions de BPA à la hausse** par les analystes sur un secteur entier
  (visible sur zonebourse/marketscreener, FactSet Earnings Insight).
- **Flux ETF sectoriels** : collecte anormale = début d'adoption
  (SSGA monthly flash flows, justETF, etf.com).
- **Pénuries et prix** : goulets d'étranglement (mémoire HBM, transformateurs
  électriques, uranium) = pricing power en amont de la chaîne.
- **Écart valorisation/momentum** : un secteur qui monte AVEC des résultats
  qui montent plus vite (multiple qui se comprime) est sain ; un secteur qui
  monte sans résultats est un momentum fragile.
- **Signal contrarien** : capitulation sur un actif de qualité (Inde 2026,
  flux étrangers au plus bas de 15 ans) = zone d'accumulation potentielle.
- ⚠️ **Anti-signal** : couverture médiatique grand public massive, IPO qui se
  ruent, « cette fois c'est différent » → le point chaud est déjà consensus,
  le risque asymétrique a disparu (cf. SPCX -49 % post-IPO).

## Tableau de bord des indicateurs avancés (macro)

À vérifier lors des briefs hebdo ou avant toute décision importante :

| Indicateur | Où | Lecture |
|---|---|---|
| Courbe des taux US (10a-2a) | tradingeconomics, FRED | Inversion prolongée = signal récession historique |
| Spread OAT-Bund | tradingeconomics | > 90 pb durable = stress France (cf. base de connaissances) |
| Spreads high yield | FRED (HY OAS) | Écartement rapide = stress crédit AVANT les actions |
| DXY (dollar) | tradingeconomics | Fort = vent de face émergents ; faible = favorable |
| VIX | CBOE, Google Finance | > 30 = panique (souvent zone d'achat contrarien) ; < 13 = complaisance |
| Breadth S&P 500 (% > 200j) | barchart, indexindicators | Hausse portée par < 40 % des titres = fragile |
| PMI manufacturiers (US, zone euro, Chine) | tradingeconomics | < 50 en baisse = contraction ; retournement > 50 = début de cycle |
| Pétrole (Brent) | partout | > 100 $ durable = scénario de réduction de voilure (mandat) |
| Fear & Greed | CNN | Extrême peur = souvent opportunité ; extrême avidité = prudence |

## Outils de screening (gratuits, accessibles par recherche web)

- **Finviz screener** (finviz.com/screener.ashx) : actions US — filtres
  valorisation (PER, PEG), performance, % sous plus haut 52 semaines.
  Recette « bas + potentiel » : -20 % ou plus vs 52w high + PER < moyenne
  secteur + croissance BPA > 10 % + marge > 10 %.
- **TradingView screener** : mondial, incluant Euronext.
- **Zonebourse/MarketScreener screener** : Europe, notes des analystes,
  révisions de BPA (le filtre « révisions en hausse » est précieux).
- **justETF** : recherche d'ETF par thème/zone + collecte + frais.
- **FRED** (fred.stlouisfed.org) : toutes les séries macro US.
- Insider buying US : openinsider.com (achats de dirigeants = signal fort
  quand ils sont groupés).

## Méthode des scénarios (pour toute vue prospective)

Toujours produire 3 scénarios avec probabilités subjectives et implications :

- **Central** (50-70 %) : que fait-on ? (souvent : rien, renforcements prévus)
- **Haussier** (15-25 %) : qu'est-ce qui le déclencherait ? que renforcer ?
- **Baissier** (15-25 %) : le signal d'invalidation précis (chiffré : « si X
  passe sous Y ») et l'action associée — décidés À L'AVANCE, pas dans la
  panique.

Réévaluer les probabilités quand un catalyseur du radar tombe, pas tous les
jours.

## Radar de catalyseurs

Tenir à jour `investissements/base-connaissances/radar-catalyseurs.md` :
tous les événements DATÉS à venir (banques centrales, résultats, échéances
politiques, reclassements d'indices, IPO). Chaque brief quotidien vérifie ce
qui tombe dans les 7 jours. C'est la matière première du « quand ».

## Règles d'hygiène intellectuelle

- Chaque appel prospectif écrit dans le journal avec sa probabilité → on se
  relit à 3-6 mois pour calibrer (track record honnête).
- Chercher activement la thèse INVERSE avant de recommander (qui vend ? ses
  arguments ?).
- Un point chaud raté n'est jamais une raison de courir après : il y a
  toujours un prochain train. FOMO = premier destructeur de performance.
- Distinguer « early » de « wrong » : être en avance sur un thème se gère par
  la taille de position (petite au début, renforcée sur confirmation).
