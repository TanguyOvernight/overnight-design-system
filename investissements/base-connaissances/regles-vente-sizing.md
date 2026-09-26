# Règlement intérieur — vente, sizing, rééquilibrage (10 règles pré-engagées)

Compilé le 2026-07-26 (synthèse des preuves). **Statut : VALIDÉ par Tanguy
le 26/07/2026 — en vigueur.** Méta-règle : ne se modifie qu'à froid (marché
calme), jamais pendant un drawdown ni dans les 72 h suivant une grosse
variation.

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

## 🔴 CONTRATS DE DÉTENTION — NVDA & TSLA (écrits le 01/08/2026)

### L'incohérence que la première Revue a mise au jour

Au 01/08, le système portait **5 contrats détaillés sur des candidates que
Tanguy ne possède pas** (Séché, LLY, Aubay, STM, Walmart) et **zéro sur les
deux lignes qui font 38 % de son portefeuille** — NVDA (22 %) et TSLA (16 %).

Pire : le 27/07, ce fichier notait déjà « kill criteria **à écrire noir sur
blanc**… à formaliser avec Tanguy » pour TSLA. **Cinq jours plus tard, rien
n'était écrit — et TSLA venait de perdre 26,01 % sur le mois de juillet**
(plus haut 432,86 $, plus bas 297,38 $, clôture 30/07 à 309,10 $).

**C'est exactement à l'envers.** Le risque d'un portefeuille est dans ce
qu'on détient, pas dans ce qu'on surveille. Une ligne à 16 % qui perd un
quart de sa valeur en un mois sans contrat écrit est le vrai angle mort, et
aucun des trois agents ne l'a signalé — parce qu'aucun n'est chargé de
regarder l'existant. **Corrigé ci-dessous.**

### Principe de construction (règle 4 : jamais de vente sur le prix)

Un contrat de détention n'est **pas** un stop-loss. Il ne se déclenche que
sur un **fait opérationnel publié** qui casse la thèse. Les seuils sont
écrits **en relatif** (par rapport à un trimestre de référence publié), pas
en absolu — application de la règle 4 d'écriture des seuils : un seuil
absolu inventé aujourd'hui serait silencieusement faux demain.

### TSLA (16 % du portefeuille — au-dessus du plafond de 10 %)

- **Politique de taille** : ligne au-dessus du plafond de la règle 6 →
  **aucun renforcement**, dilution par les versements ailleurs. Identique à
  NVDA. ⚠️ **Le repli de 26 % ne crée PAS une occasion de renfort** : c'est
  précisément le raisonnement que la règle 6 interdit sur une ligne déjà
  surpondérée.
- **Thèse à tester** : l'automobile finance l'optionnalité (énergie,
  conduite autonome). Si l'automobile cesse de financer, l'optionnalité
  devient un pari sans support.
- **🔒 NIVEAUX DE RÉFÉRENCE FIGÉS — T2 2026, publié le 22/07/2026** (obtenus
  le 02/08 ; ils étaient disponibles, le trimestre était déjà publié) :

  | Métrique | T2 2026 | Contexte |
  |---|---|---|
  | **Marge brute auto HORS crédits réglementaires** | **16,3 %** | 16,9 % crédits inclus |
  | **Déploiements de stockage** | **13,5 GWh** | **+40 % a/a** (T2 2025 : 9,6 GWh), +53 % vs T1 ; 2ᵉ meilleur trimestre historique |
  | Crédits réglementaires | **146 M$** | **−67 % a/a** (T2 2025 : 439 M$), −62 % vs T1 |
  | CA / Résultat opérationnel | 28,24 Md$ (+26 %) / **−57 %** | le CA bat le consensus, le résultat s'effondre |

- **Kill criteria (2 sur 3 déclenchent une revue formelle) :**
  1. **Marge brute automobile hors crédits réglementaires** en recul
     **deux trimestres consécutifs** ET **sous 16,3 %**.
  2. **Déploiements de stockage d'énergie** en croissance annuelle
     **négative** sur un trimestre (référence : 13,5 GWh au T2 2026) —
     c'est la jambe qui justifie la prime.
  3. **Aucun jalon robotaxi mesurable** (flotte facturante, kilomètres sans
     intervention publiés, autorisation étendue) **d'ici le T2 2027**.
- **Échéance de premier relevé : 28/10/2026** (date confirmée).

🎯 **Lecture du T2 2026 — les deux jambes divergent nettement.** Le stockage
est le point fort structurel (+40 % sur un an) ; la marge auto ex-crédits
est le point de fragilité. Et **l'écart entre marge avec et sans crédits
n'est plus que de 0,6 pt** (16,9 % vs 16,3 %), contre des écarts
historiquement bien plus larges : **la béquille des crédits réglementaires a
quasiment disparu** (−67 % sur un an). C'est structurellement plus sain — la
marge publiée est désormais presque « pure » — mais cela retire un
amortisseur, et c'est ce qui explique qu'un CA en hausse de 26 % coexiste
avec un résultat opérationnel en baisse de 57 %.

- **Appel de calibration** : à ouvrir au **28/10/2026**, pas avant. Poser une
  probabilité aujourd'hui sur un trimestre situé à trois mois reproduirait
  l'erreur C020 (probabilité non conditionnée à un catalyseur connu).

### NVDA (22 % du portefeuille — plus de deux fois le plafond)

- **Politique de taille** : **aucun renforcement tant que > 10 %** (déjà en
  vigueur, confirmée). Dilution par les versements ailleurs — l'ordre de
  juillet la fait passer mécaniquement de 22 % à ~14 %.
- **Thèse à tester** : la dépense d'infrastructure des géants du cloud, pas
  les parts de marché en mémoire ni le classement des capitalisations.
- **Kill criteria (2 sur 3 déclenchent une revue formelle) :**
  1. **Guidance de capex abaissée** par au moins **deux** des grands
     acheteurs de calcul (Microsoft, Amazon, Alphabet, Meta) sur un même
     trimestre. ⚠️ *Le 30/07, Microsoft a fait l'inverse : capex FY27 en
     croissance annoncée. Ce critère n'est pas près de se déclencher.*
  2. **Croissance du chiffre d'affaires data center** en décélération
     **deux trimestres consécutifs**, avec un taux passant sous celui du
     trimestre de référence publié le 26/08/2026.
  3. **Concentration client** : **deux clients non nommés pesaient déjà 39 %
     du CA**, et au T1 FY2027 **les hyperscalers font plus de la moitié du
     CA data center** (38 Md$ sur ~75 Md$). Déclenchement si cette
     concentration s'aggrave encore sur deux trimestres. *Le dossier
     Microsoft a rappelé cette semaine qu'un carnet à 45 % sur une seule
     contrepartie est un risque de premier ordre, pas un détail.*

- **🔒 CADRAGE DISPONIBLE au 02/08** :
  - **Guidance T2 FY2027 donnée par la société : CA de 91 Md$ ± 2 %**
    (89,2-92,8 Md$). Rappel T1 FY2027 : CA record **81,6 Md$**, data center
    quasi doublé, dividende et rachats relevés — **et le titre a pourtant
    reculé**. C'est le rappel utile : chez NVDA, battre ne suffit plus.
  - **Aucun CA de calcul data center en provenance de Chine n'est intégré
    à cette guidance.**
- ⚠️ **NOMENCLATURE CHANGÉE — à intégrer avant d'écrire les seuils.** La
  société **scinde désormais son reporting** en **Data Center**
  (Hyperscale **38 Md$** + IA/Cloud/Industriel/Entreprise **37 Md$**) et
  **Edge Computing** (**6,4 Md$**). **Les niveaux de référence doivent être
  écrits dans cette nomenclature, pas dans l'ancienne** — sans quoi le
  critère n°2 comparerait deux agrégats différents et serait ininterprétable.
- **Échéance de premier relevé** : prochains résultats trimestriels.
  ⚠️ **La date du 26/08 n'a PAS pu être confirmée** (aucune annonce
  officielle trouvée) — **à reconfirmer avant de s'en servir comme
  échéance**, application de la règle 3 d'écriture des seuils.

### Ce que ces contrats ne font PAS

Ils **ne déclenchent pas de vente automatique** : ils déclenchent une
**revue formelle** avec passage par l'Avocat et l'Arbitre. La règle 8 (test
fiscal avant toute vente en CTO, ~31,4 % de PFU) et la règle 9 (protocole
de krach : 72 h de délai, thèse cassée exigée) restent au-dessus d'eux.

- Chaque reco de la newsletter porte ses kill criteria à l'achat.

## Sources principales

Odean 1998 (JF) · Akepanidtaworn et al. 2023 (JF) · Bessembinder 2018
(JFE) · Kaminski & Lo · Lei & Li · Vanguard Rational Rebalancing 2022 ·
Kitces (bandes) · Jegadeesh & Titman 1993 · Kirby 1984 (coffee can) ·
Dalbar QAIB (ordre de grandeur contesté, corroboré par Morningstar
Mind the Gap ~1-1,7 %/an). Détail complet : rapport du 26/07 (journal).
