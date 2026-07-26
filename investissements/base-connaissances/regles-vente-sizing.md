# Règlement intérieur — vente, sizing, rééquilibrage (10 règles pré-engagées)

Compilé le 2026-07-26 (synthèse des preuves). Statut : PROPOSÉ à Tanguy, à
valider avec lui. Méta-règle : ne se modifie qu'à froid (marché calme),
jamais pendant un drawdown ni dans les 72 h suivant une grosse variation.

## Pourquoi un règlement écrit (les preuves)

- Le retail vend exactement le mauvais titre : gagnants vendus surperforment
  les perdants gardés de +3,4 %/an (Odean 1998, biais de disposition).
- **Les pros aussi** : leurs ventes font PIRE que le hasard (~-0,8 %/an
  détruit) car ils vendent par heuristique de performance récente — sauf
  quand un événement les force à réfléchir (Akepanidtaworn et al., Journal
  of Finance 2023, « Selling Fast and Buying Slow »).
- → Une bonne vente est : écrite AVANT l'achat, déclenchée par les
  fondamentaux ou l'allocation (jamais le prix seul), exécutée mécaniquement.

## Les 10 règles

1. **Cœur/satellite verrouillé : 75-85 % ETF, 15-25 % titres vifs max.**
   (Bessembinder 2018 : 4 % des actions font 100 % de la création de
   richesse ; 4-6 titres ne diversifient rien — il en faudrait 40-50+.)
2. **Titre vif : max 5 % du portefeuille à l'achat**, max 15-20 % par thème
   sur la poche titres. (Kelly fractionnaire : le sur-pari détruit plus que
   le sous-pari ne coûte — demi-Kelly = 75 % de la croissance, 50 % du
   risque.)
3. **Aucun achat sans thèse écrite + 2-3 kill criteria mesurables et datés**
   (pré-mortem : « pourquoi ça pourrait échouer ? »). Les kill criteria
   vont dans portefeuille.md colonne « signal de sortie ».
4. **On ne vend JAMAIS parce que ça a monté ou baissé.** On vend si : kill
   criterion atteint, OU poids > règle 6, OU meilleur usage identifié de
   l'argent. Rien d'autre.
5. **Pas de stop-loss automatique** (Kaminski & Lo ; Lei & Li : aucun gain
   de rendement sur actions, coûts de whipsaw + frottement fiscal). Le
   stop est fondamental (règle 3), pas un ordre de prix.
6. **Un gagnant court jusqu'à 10 % du portefeuille.** Au-delà : d'abord
   cesser de renforcer, puis écrêter par tiers vers 7-8 % si ça persiste.
   (Momentum Jegadeesh-Titman + coffee can : on gère le POIDS, pas la
   performance.)
7. **Rééquilibrage par les versements** : les 500 € mensuels vont aux
   lignes sous-pondérées (zéro vente, zéro impôt). Vente de rééquilibrage
   seulement si déviation > 5 points ET 3 mois de versements insuffisants.
   Revue formelle 1×/an à date fixe. (Vanguard : annuel/bandes ≥ mensuel
   après coûts ; prime de rééquilibrage réelle mais ~0,35-0,5 %/an max.)
8. **Test fiscal avant toute vente CTO** : le motif vaut-il ~30 % de PFU
   payés tout de suite ? Le report d'impôt est un prêt gratuit de l'État.
   Moins-values : à réaliser en priorité pour compenser si une vente
   s'impose de toute façon.
9. **Protocole de krach pré-signé** : à -20 % marché → rien vendre, DCA
   continue (seule action) ; à -30 % → renforcer si épargne de précaution
   intacte + relire les thèses (fondamentaux, pas cours) ; toute envie de
   vendre en drawdown = 72 h de délai + thèse cassée exigée ; consultation
   du portefeuille max 1×/semaine en période de stress. (Dalbar/Morningstar :
   1-3 %/an perdus au timing émotionnel — le plan écrit transforme la
   panique en procédure.)
10. **Un ETF ne se vend que sur critère structurel** : TER non compétitif,
    changement d'indice, tracking difference dégradée sur 3 ans, encours
    < ~100 M€ en décollecte, réplication/domiciliation défavorable — jamais
    parce qu'une autre zone a fait mieux cette année.

## Application immédiate au portefeuille actuel

- TSLA (-20 %, thèse fragilisée) : la règle 4 dit — pas de vente sur le
  prix ; kill criteria à écrire noir sur blanc (ex. : marge auto < X % deux
  trimestres de suite, dilution > Y %, aucun jalon robotaxi mesurable d'ici
  T2 2027). À formaliser avec Tanguy.
- NVDA 22 % du portefeuille : au-dessus des 10 % de la règle 6 (héritage de
  la construction initiale) — pas de renforcement NVDA tant que > 10 %,
  la dilution se fait naturellement par les versements ailleurs.
- Chaque reco de la newsletter porte désormais ses kill criteria à l'achat.

## Sources principales

Odean 1998 (JF) · Akepanidtaworn et al. 2023 (JF) · Bessembinder 2018
(JFE) · Kaminski & Lo · Lei & Li · Vanguard Rational Rebalancing 2022 ·
Kitces (bandes) · Jegadeesh & Titman 1993 · Kirby 1984 (coffee can) ·
Dalbar QAIB (ordre de grandeur contesté, corroboré par Morningstar
Mind the Gap ~1-1,7 %/an). Détail complet : rapport du 26/07 (journal).
