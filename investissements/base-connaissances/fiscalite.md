# Fiscalité — compte eToro (CTO étranger) — repères

> Repères généraux pour un résident fiscal français, rédigés le 25/07/2026.
> Pas du conseil fiscal personnalisé — pour les cas complexes, voir un
> professionnel ou impots.gouv.fr.

## La flat tax : 31,4 % du GAIN, jamais du retrait

> ⚠️ **Changement 2026 vérifié le 27/07/2026** : le PFU est passé de 30 % à
> **31,4 %** au 1ᵉʳ janvier 2026. La hausse vient ENTIÈREMENT des
> prélèvements sociaux (CSG de 9,2 % → 10,6 %, LFSS 2026), qui passent de
> 17,2 % à **18,6 %**. Conséquence en chaîne : le PEA après 5 ans est taxé
> à **18,6 %** (et non 17,2 %). Seule exception : l'**assurance-vie**
> conserve des PS à **17,2 %**.

- Le prélèvement forfaitaire unique (PFU) = **12,8 % d'impôt + 18,6 % de
  prélèvements sociaux = 31,4 %**, appliqué uniquement à la **plus-value
  réalisée** (prix de vente - prix d'achat), pas au montant retiré.
- Exemple : 1 000 € investis → 1 150 € (+15 %) → vente totale :
  gain 150 € → impôt ~47 € → **il reste ~1 103 €**. On garde toujours
  ~68,6 % du gain ; on ne peut pas « perdre de l'argent » à cause de l'impôt.
- Les **moins-values réalisées** s'imputent sur les plus-values de la même
  année et sont reportables 10 ans (ex. : la perte Renault réalisée
  réduirait le gain imposable sur Nvidia vendu la même année).
- Option possible pour le **barème progressif** à la place du PFU
  (intéressant si tranche marginale 0 % ou 11 % : on paie alors TMI + 18,6 %
  au lieu de 31,4 %) — à évaluer chaque année, l'option est globale.

## Ce qui déclenche l'impôt (fait générateur)

| Événement | Imposable ? |
|---|---|
| Les titres montent, on ne vend pas | ❌ Non — plus-value latente jamais taxée |
| **Vente d'un titre** (même si l'argent reste chez eToro) | ✅ Oui, l'année de la vente |
| Dividende reçu (même réinvesti) | ✅ Oui, l'année de perception |
| Retrait d'espèces vers son compte bancaire | ❌ Pas en soi — c'est la vente qui compte, pas le retrait |

Piège classique : « je n'ai pas cash out donc rien à déclarer » est **faux**
dès qu'il y a eu une vente ou un dividende dans l'année.

## Obligations déclaratives (déclaration de revenus chaque printemps)

1. **Formulaire 3916-bis** : déclarer l'existence du compte eToro (compte
   d'actifs à l'étranger), **chaque année, même sans aucune opération et
   même sans gain**. Sanction : 1 500 € d'amende par compte non déclaré.
2. **Plus/moins-values de cession** : formulaire 2074 (ou report direct
   case 3VG/3VH de la 2042 selon les cas).
3. **Dividendes** : cases 2DC/2AB (crédit d'impôt possible sur la retenue à
   la source US de 15 % via la convention fiscale — eToro applique le
   formulaire W-8BEN).
4. eToro fournit un **rapport fiscal annuel** téléchargeable — c'est la base
   de calcul (attention : les montants sont à convertir/vérifier en euros).

## Comment le fisc « sait »

- eToro (entité UE) participe à l'**échange automatique d'informations**
  (norme CRS/DAC) : soldes et revenus des comptes des résidents français
  sont transmis aux autorités, qui recoupent avec la déclaration.
- Un compte étranger non déclaré + des flux entrants sur le compte bancaire
  = profil de contrôle typique. La déclaration honnête coûte 31,4 % du gain ;
  l'omission coûte amendes + rappels + majorations (jusqu'à 80 %).

## Situation de Tanguy (notée le 25/07/2026)

- **Auto-entrepreneur, revenu imposable ~0** → tranche marginale basse.
  Conséquence clé : l'année d'une vente avec gain, **l'option barème
  progressif (case 2OP)** peut ramener l'imposition à **~18,6 %** (prélèvements
  sociaux seuls) au lieu de 31,4 %. À réévaluer chaque année de cession selon
  ses revenus — l'option est globale (s'applique à tous les revenus de
  capitaux de l'année).
- Déclaration du printemps 2026 déjà déposée **sans le 3916-bis**.
  Régularisation : service « Corriger ma déclaration en ligne »
  (impots.gouv.fr), ouvert de début août à mi-décembre — cocher la case 8UU
  et remplir le 3916-bis (références eToro, date d'ouverture). Correction
  spontanée = droit à l'erreur, amende en pratique non appliquée de bonne foi.
- **À vérifier : date d'ouverture du compte eToro.** Ouvert en 2026 → rien à
  corriger, il ira dans la déclaration 2027 ; ouvert en 2025 ou avant →
  corriger en août.

## Récolte des moins-values (tax-loss harvesting) — spécifique CTO

Levier de rendement NET propre au CTO (le PEA a sa propre mécanique interne
de pertes ; l'AV aussi). Manœuvre : en fin d'année, **vendre une ligne en
perte pour matérialiser la moins-value**, qui vient neutraliser des
plus-values réalisées la même année (impôt en moins). Mécanique :
- Les moins-values s'imputent d'abord sur les **plus-values de MÊME NATURE
  de l'année** ; le reliquat est **reportable 10 ans** (compté depuis
  l'année de RÉALISATION, pas de déclaration). Elles ne s'imputent **ni sur
  le revenu, ni sur les dividendes**.
- Déclaration : **formulaire 2074** (détail des cessions) + **2074-CMV**
  pour suivre le stock de moins-values reportables, report en **case 3VH**
  de la 2042. Tenir soi-même le compteur du stock reportable année par année.
- **L'avantage France : PAS de règle de wash-sale.** On peut vendre pour
  loger la moins-value et **racheter immédiatement le même titre/ETF** sans
  délai de carence — l'exposition économique est conservée, seule la base
  fiscale est « rafraîchie ». (Rester cohérent économiquement : la manœuvre
  doit avoir une logique de portefeuille, pas seulement fiscale.)
- **Pour Tanguy** : à réserver aux années où une plus-value CTO est
  réalisée. Tant que rien n'est vendu avec gain, il n'y a rien à
  neutraliser — la récolte n'a d'intérêt que couplée à une plus-value de
  même année (ou pour constituer un stock reportable avant une grosse
  cession anticipée). Combinée à l'option barème (revenu ~0 → ~18,6 %),
  l'intérêt de la récolte est moindre les années à TMI basse : à arbitrer.

## Comparaison avec un PEA (pour les prochains apports)

| | eToro (CTO) | PEA |
|---|---|---|
| Univers | Monde entier (dont US) | Actions UE + ETF éligibles (dont synthétiques Monde/EM) |
| Imposition des ventes | Chaque année (31,4 % du gain) | **Aucune tant que l'argent reste dans le PEA** |
| Sortie après 5 ans | 31,4 % du gain | **18,6 %** du gain seulement |
| Déclaration annuelle | 3916-bis + gains | Rien à déclarer en cours de vie |
| Plafond | Aucun | 150 000 € de versements |

→ Sur un horizon 5-7 ans, le PEA est fiscalement taillé pour le mandat :
capitalisation sans frottement fiscal annuel + taux réduit à la sortie.
