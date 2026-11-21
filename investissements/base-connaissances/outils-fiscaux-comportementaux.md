# Outils fiscaux, comportementaux et de mise en œuvre — le chaînon manquant

Sprint de formation (27/07/2026) : « que nous manque-t-il encore ? ». Ce
fichier rassemble les leviers evidence-based sous-exploités pour le profil
de Tanguy (PEA cœur ETF World + CTO actions US/or, 500 €/mois, 5-7 ans).
Chaque item est tranché **ADD** (à intégrer) ou **SKIP / mythe**. La récolte
de moins-values CTO est traitée dans `fiscalite.md` ; la calibration dans
`registre-calibration.md`.

## 🔴 Priorité HAUTE

### Automatisation DCA + journal comme dispositif de pré-engagement — ADD (le plus rentable)
Le **behavior gap** (études Dalbar) chiffre l'écart entre le rendement des
fonds et celui réellement capté par l'investisseur à plusieurs points/an
(≈ 8 pts sur certaines années) — quasi entièrement dû aux erreurs de timing
émotionnel (acheter haut, vendre bas). Conséquence : **le virement
automatique des 500 €/mois AVANT toute décision discrétionnaire est la
mesure qui améliore le plus MESURABLEMENT le résultat.** Concret : ordre
récurrent programmé sur le cœur WPEA, plus le journal de décision (le
registre de calibration EST déjà ce dispositif) avec `kill_criteria`
pré-écrits = pré-engagement contre la panique en drawdown. Le 1er ennemi de
Tanguy à 500 €/mois, c'est lui-même : l'automatisation retire la main du
volant au moment où elle tremble.

### Assurance-vie : prise de date immédiate — ADD
À 5-7 ans le PEA reste l'axe pour la poche actions (frais < AV, exonération
d'IR après 5 ans). Mais l'AV a une **valeur d'option gratuite** : ouvrir dès
maintenant une AV (banque en ligne, frais 0 sur versement) avec **~100 €**
juste pour **lancer le compteur des 8 ans**. Après 8 ans : abattement de
**4 600 €/an** (9 200 € pour un couple) sur les plus-values à la sortie +
avantage transmission. Le **fonds euros** de l'AV est aussi le seul socle
liquide à capital garanti que le CTO ne sait pas offrir (poche tampon /
objectif à échéance). Nuance : **ne pas y loger les ETF** (frais de gestion
AV > PEA) — l'AV se justifie ici pour la prise de date + la sécurité/
transmission, pas pour la poche actions. Coût de l'option : ~100 € figés,
négligeable ; bénéfice : l'horloge fiscale tourne dès aujourd'hui.

### Rééquilibrage par cash-flow (vs bandes vs calendrier) — ADD
La recherche (Vanguard, Kitces) tranche pour un profil DCA :
1. **Rééquilibrer EN PRIORITÉ avec les flux entrants** — diriger les
   500 €/mois vers la classe/ligne SOUS-pondérée. Pour un investisseur qui
   verse chaque mois, **le rééquilibrage par cash-flow suffit presque
   toujours sans jamais VENDRE** → aucun impôt CTO déclenché. C'est déjà la
   règle « rééquilibrage par les versements » de `regles-vente-sizing.md` —
   ici confirmée comme optimale, pas seulement pratique.
2. Sinon, **bandes de tolérance** (ex. règle 5/25 : agir quand une classe
   dévie de 25 % en relatif ou 5 pts en absolu) plutôt qu'un calendrier
   serré. Le mensuel/trimestriel calendaire = frais et fiscalité inutiles ;
   l'annuel ou par bande est optimal.
Gain estimé modeste (≈ 5-20 pb/an) mais réel et **gratuit** — surtout,
évite l'impôt sur le CTO.

## 🟠 Priorité MOYENNE (avec nuance)

### Risque de change EUR/USD — ADD la règle, SKIP le hedge systématique
Sur les **actions** à long terme, couvrir le change a une **espérance de
rendement nulle** (le hedge coûte le carry = différentiel de taux) et
n'apporte qu'une réduction de volatilité modeste — le risque actions domine
le risque devise, et l'EUR/USD est un couple peu volatil (MSCI, WisdomTree :
« ne pas empiler un pari devise sur un pari actions »). **Règle à graver :
poche actions = NON couverte, choix documenté.** Sur 5-7 ans en DCA, la
volatilité devise est même un léger atout d'accumulation. **Quand s'en
soucier** : (a) l'**or** coté USD — un ETC or couvert EUR peut se discuter ;
(b) toute poche à échéance rapprochée et peu diversifiée. Verdict : la
couverture de change SYSTÉMATIQUE sur les actions est un **quasi-mythe
coûteux** pour ce profil.

### Outils/ressources gratuits FR (2026) — ADD ceux qui manquent
Complète `outils-portefeuille.md` / `outils-donnees.md` :
- **Curvo Backtest** (gratuit) : backtest de portefeuilles d'ETF UCITS
  européens — tester une allocation cœur-satellite AVANT de la déployer.
- **justETF** : le screener ETF de référence pour l'univers **UCITS**
  (celui du PEA/CTO européen) — composition, frais (TER), type de
  réplication (physique/synthétique, clé pour l'éligibilité PEA).
- **abc Bourse** : sélecteur d'ETF + outils gratuits, univers Euronext/PEA.
- **Quantalys / Morningstar France** : notation, rayon X de fonds/ETF,
  recouvrement de portefeuille (détecter les doublons d'exposition).
- **Investing.com / xStation (XTB)** : calendrier économique + dates de
  détachement de dividendes, gratuits.
- **Finviz / TradingView (gratuit)** : screener actions US (poche CTO).
- Communautés FR fiables : **finance-héros**, **avenue des investisseurs**.
Priorité : pour un cœur ETF PEA, **justETF + Curvo valent plus que
n'importe quel screener de trading**.

## 🟡 À CADRER (utile mais piège fréquent)

### ETF factoriels (momentum + quality) — ADD en satellite, SKIP le factor-timing
Les facteurs (value, momentum, quality) ont une **prime historique réelle
mais des cycles LONGS de sous-performance** (AQR, Alpha Architect). Le combo
**momentum + quality** est apprécié car quality amortit les retournements
brutaux du momentum, et les facteurs étant imparfaitement corrélés, les
combiner réduit le risque de sous-performance prolongée. **Piège majeur à
inscrire dans le système : PAS de factor-timing** — deviner quand value ou
momentum va marcher est aussi dur que timer le marché. Mise en œuvre propre :
si facteurs, passer par un **ETF multifactoriel** (rebalancé en interne)
plutôt que jongler entre ETF mono-facteur ; garder en **satellite** autour
du cœur World ; rééquilibrer entre facteurs **mécaniquement** (bandes), pas
à l'intuition. Le danger n'est pas le facteur, c'est la tentation de le
timer.

## Ce qu'on écarte explicitement (registre des mythes)
- **Couverture de change systématique sur les actions** : espérance nulle,
  coût du carry — SKIP (sauf or USD / poche courte).
- **Factor-timing** : deviner le bon facteur au bon moment — SKIP.
- **Rééquilibrage calendaire serré** (mensuel/trimestriel) : frais + impôt
  inutiles quand le cash-flow suffit — SKIP au profit du cash-flow/bandes.
- **Loger les ETF en assurance-vie** pour ce profil : frais AV > PEA — SKIP
  (l'AV sert la prise de date + le fonds euros, pas la poche actions).

## Sources
- Behavior gap / Dalbar & DCA : kitces.com (Dalbar behavior gap),
  wealthfront.com/blog/dollar-cost-averaging-behavioral-view
- PEA vs AV vs CTO, prise de date, fonds euros : typad.fr, lucya.com
- Rééquilibrage bandes/cash-flow : Vanguard (rational rebalancing),
  kitces.com (opportunistic rebalancing frequency)
- Change actions (nulle en espérance) : msci.com (to hedge or not to hedge),
  wisdomtree.com (currency hedging whitepaper)
- Facteurs momentum+quality, éviter le timing : alphaarchitect.com, AQR
- Outils FR : cafedelabourse.com, finance-heros.fr, Curvo, justETF
- Récolte de moins-values CTO : ramify.fr/epargne/fiscalite-cto,
  flattax.fr (moins-values report fiscal) — détail dans `fiscalite.md`
