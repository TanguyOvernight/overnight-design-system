# Radar de catalyseurs — événements datés à venir

Mis à jour : **2026-07-27**. Chaque brief vérifie ce qui tombe sous 7 jours.
Ajouter tout nouvel événement daté découvert dans l'actualité ; purger le passé
en le journalisant si notable.

## 🛑 LES 4 RÈGLES D'ÉCRITURE D'UN SEUIL (encodées le 31/07/2026)

**Cause racine, pas incident.** En cinq jours, **cinq** données de prix
fausses ou périmées ont touché une décision — dont une **pendant**
l'arbitrage censé corriger les précédentes. Le canal ne se réparera pas :
les extraits de pages de cotation sont des caches **sans horodatage**. Il
faut donc un process qui reste juste **malgré un canal faux**.

**RÈGLE 1 — Deux ancrages INDÉPENDANTS et de NATURE DIFFÉRENTE.**
Aucun prix n'entre dans un verdict sans confirmation par deux sources de
nature différente, dont une non-cachable : (a) un article **horodaté**
citant prix **et** variation %, ou (b) une **capitalisation ÷ nombre de
titres**. **Un extrait de page de cotation vaut ZÉRO.**
*Efficace le 31/07* : 2,75 Md€ ÷ 44,9 M titres = 61,25 € a démasqué deux
snapshots Vicat comme pré-publication.

**RÈGLE 2 — Contrôle d'arithmétique interne, systématique, 5 secondes.**
Tout couple « prix + variation % » se vérifie : **prix ÷ (1 + %) =
clôture précédente implicite**, qui doit égaler la clôture connue. Sinon
le chiffre est faux **ou ne désigne pas ce qu'on croit**.
*Efficace le 31/07* : 67,80 ÷ 1,1282 = 60,10 ≠ 61,60 → a révélé que
« 67,80 € » était un **seuil technique franchi, pas un cours**. Ce test
aurait aussi attrapé l'erreur Investing.com du 30/07 et l'attribution MSFT
du 29/07 — **3 incidents sur 5 détectés par un calcul de 5 secondes.**

**RÈGLE 3 — Interdiction d'écrire un seuil sans cotation POST-événement.**
*C'est la règle qui a manqué le 30/07, et c'est la faute exacte.* Le
61,60 € n'était pas faux : il était **correct et périmé**. La faute fut
d'écrire un contrat de prix sur un titre ayant publié **la veille au
soir**, avec un prix **antérieur à la publication** — alors que le radar
portait « 29/07 — Résultats S1 Vicat ». L'information était dans le
fichier.
> **Si un catalyseur daté est passé et que le cours post-catalyseur n'est
> pas obtenu, le verdict est SUSPENDU, pas écrit.** « Verdict en attente
> de cotation » est une sortie légitime et sans honte. **Un jour de retard
> coûte moins cher qu'un contrat né mort.**

**RÈGLE 4 — Écrire les seuils en VALORISATION, pas en prix** *(le correctif
de fond)*. Un seuil « ≤ 56,00 € » devient **silencieusement faux** dès que
le prix, le nombre de titres, la dette nette ou l'EBITDA bougent. Un seuil
« ≤ 4,60x VE/EBITDA 2026e » est **auto-correcteur** : il ne se convertit en
prix qu'en allant chercher des données fraîches — **la conversion force la
vérification.**
> Si le contrat Vicat avait été écrit « VE/EBITDA 2026e ≤ 4,60x », il
> aurait été confronté le 31/07 à **5,33x** : un écart de *valorisation*,
> immédiatement lisible, au lieu d'un écart de prix invérifiable.
> **Un prix périmé n'aurait pas pu produire un contrat.**

**Format standard de TOUT seuil à partir du 31/07/2026** :
> **Multiple (primaire, contraignant) + le prix qu'il implique aux données
> vérifiées du jour (secondaire, indicatif, DATÉ).** Le multiple prime en
> cas de divergence.

**RÈGLE 5 — Une CORRECTION s'audite comme une affirmation** (ajoutée le
01/08/2026, après vérification de la Revue).

Le 30/07, l'Avocat m'a « corrigé » sur le cours de MSFT : selon lui,
399,30 $ était la clôture du 29/07 et 390,54 $ celle du 28/07. **J'ai
accepté la correction sans la vérifier.** Elle était **fausse**, et la
règle 2 — écrite le lendemain — la démasque en cinq secondes :

| Base supposée | Cours du 30/07 | Variation implicite | Presse |
|---|---|---|---|
| 390,54 $ | 451,58 $ | **+15,6 %** | ✅ « +15,5 %, plus fort bond de l'histoire » |
| 399,30 $ | 451,58 $ | +13,1 % | ❌ ne correspond à rien de publié |

Et ma donnée d'origine était **internement cohérente** : 390,54 × 1,0224 =
399,29 — le 399,30 était bien l'**after-hours**, exactement le +2,24 %
annoncé. La clôture du 29/07 était donc **390,54 $**.

⚠️ **Le VERDICT de l'Avocat (RÉFUTÉ) reste juste, et même renforcé** : le
titre a ouvert le 30/07 en gap et n'a jamais été achetable à 390 $ ce
jour-là. L'asymétrie était consommée — la conclusion était bonne, la
preuve était fausse.

> **Règle** : une correction reçue d'un agent — surtout quand elle est
> humiliante et donc psychologiquement crédible — subit **exactement les
> mêmes contrôles** (règles 1 et 2) qu'une affirmation initiale. Accepter
> une correction sans la vérifier, c'est déplacer sa confiance, pas
> l'exercer. **Le contrôle d'arithmétique interne s'applique aux
> corrections en priorité.**

## ⚖️ RÈGLE 6 — LA RÈGLE DU CHIFFRE RÉCONCILIÉ (05/08/2026)

Née d'un cas réel : la guidance de BPA d'Eli Lilly a **baissé de 0,25 $ au
point médian** le jour même où la société **relevait son CA de 3,0 Md$ et
son BPA sous-jacent de +2,78 $** — la baisse venant entièrement de
**3,03 $ de charges d'*acquired IPR&D*** issues de quatre acquisitions
finalisées au trimestre.

**Le piège à éviter** : croire qu'une clause ambiguë se lit de la même
façon selon qu'elle **autorise un achat** ou qu'elle **détruit un
dossier**. Les deux lectures naïves — mécanique (« le chiffre a baissé,
donc le dossier meurt ») et téléologique (« l'économie s'améliore, donc
tout va bien ») — partagent ce présupposé, et aucune ne pouvait trancher.

**§1 — Deux chiffres, toujours.** Toute condition portant sur une guidance
« abaissée / relevée / confirmée » se lit sur **(a) le chiffre publié** et
**(b) le chiffre sous-jacent réconcilié** — le publié retraité des seuls
éléments satisfaisant **cumulativement** les quatre tests du §2.

**§2 — Les quatre tests de retraitement (tous obligatoires) :**
1. **Chiffré et réconcilié par l'émetteur lui-même**, dans le communiqué,
   en $ par action, avec une arithmétique qui boucle au centime.
   *(Ici : +2,78 − 3,03 = −0,25 ✓)* — **jamais un retraitement calculé par
   moi.**
2. **Événement discret et daté** (clôture d'acquisition, litige, cession),
   et non dérive du métier de base — prix, volume, coût unitaire, mix,
   change, remise.
3. **Aucune dégradation du CA guidé ni de la marge brute.** Si l'un des
   deux baisse, **le retraitement est INTERDIT** : la guidance est
   abaissée, point final. *(Ici : CA +3,0 Md$, marge brute +1,3 pt ✓)*
4. **Décision volontaire d'allocation de capital**, non un événement subi.

**§3 — Conséquences, ASYMÉTRIQUES et non négociables :**
> - Un instrument de **DESTRUCTION** (kill criterion, révocation) se
>   déclenche sur le **chiffre SOUS-JACENT**. Il vise un fait ; si le fait
>   visé est **vérifiablement absent**, il ne s'exécute pas. *Exécuter un
>   détecteur quand la chose détectée est démontrée absente n'est pas de la
>   discipline, c'est de la superstition.*
> - Un instrument d'**AUTORISATION** (condition de certificat, condition
>   d'achat) se lit sur le **chiffre PUBLIÉ**. Une autorisation de dépenser
>   ne s'ouvre jamais sur un retraitement.
> - **Corollaire : une ambiguïté ne se résout JAMAIS en faveur d'un achat,
>   ni en faveur d'une destruction que la preuve contredit.** Les deux
>   branches convergent vers l'inaction, qui est le défaut de la charte.

**§4 — Interdiction du panachage au prix.** Un retraitement admis pour
juger la **direction** de l'activité n'est **jamais** admis pour juger le
**prix payé**. Tout seuil de valorisation se calcule sur le **BPA publié**.
Symétrie obligatoire : si un jour la guidance publiée est **gonflée** par un
profit exceptionnel, ce profit doit être **retiré** du dénominateur,
**durcissant** le seuil de prix.

**§5 — Clause anti-abus de récurrence.** L'exemption tombe si la même
catégorie d'« exceptionnel » réapparaît sur **2 trimestres consécutifs** ou
**3 sur 12 glissants**. Au-delà, elle est récurrente donc opérationnelle, et
le critère de destruction se déclenche sur le **chiffre publié, sans
discussion**.

**§6 — Effet différé.** Toute modification d'une condition prend effet **au
test SUIVANT, jamais au test en cours.** *Une réécriture qui ne peut pas
aider le trimestre pendant lequel on l'écrit est une réécriture sûre.*

**§7 — Testabilité depuis le communiqué SEUL.** Aucune condition ne peut
dépendre d'une donnée produite par un canal non contrôlé et non horodaté
(transcript, commentaire de dirigeant, consensus d'agrégateur). *M3′ et R2
violaient toutes deux ce principe — c'est pourquoi elles se sont révélées
intestables le jour où il fallait les tester.*

### 🔑 La preuve qui a tranché, et elle est antérieure à l'événement

Lilly a annoncé le **26/05/2026** l'acquisition de **Curevo (1,5 Md$),
LimmaTech (0,78 Md$) et Vaccine Company (1,55 Md$)** — ~3,83 Md$ — dont la
clôture tombe **au T3**. Sur 893,8 M titres, elles produiront mécaniquement
une nouvelle charge d'IPR&D. **La largeur TOTALE de la fourchette de
guidance est de 1,00 $** : ~894 M$ d'upfront suffisent à la consommer.

> **Sous la lecture mécanique, le dossier n'était pas « en danger » au T3 :
> il était DÉJÀ CONDAMNÉ, par des contrats signés en mai, indépendamment de
> toute performance commerciale. Un critère de mort dont le déclenchement
> est déjà déterminé par le passé et découplé de la thèse n'est pas un
> critère de mort — c'est un compte à rebours.**
> Ce fait était vrai **avant** la publication du jour : il n'est donc pas
> contaminé par elle.

## 🔒 PRÉ-ENGAGEMENT LLY — trois arbitrages posés le 05/08 à 10h00, AVANT publication

Le screening du matin a trouvé **trois défauts dans la grille de certificat
écrite hier**. Je les tranche **avant d'avoir lu une ligne du communiqué** —
c'est la seule fenêtre où la décision est honnête. *« Décidez-le maintenant,
sinon la règle deviendra ce que le texte vous permettra qu'elle soit. »*

### ① M3 — « impact nul par traité » VAUT chiffrage. Décidé AVANT lecture.

**Le paradoxe** : M3 exige un impact Section 232 **chiffré** et ≤ 1,50 $,
et pose que le silence vaut échec. Or l'impact est **nul par traité** — les
signataires d'un accord MFN **et** d'un engagement d'onshoring ont un taux
de **0 % jusqu'au 20/01/2029**, et **Lilly figure parmi les 14 signataires**.
**Une société ne chiffre pas une ligne à zéro.**

> **ARBITRAGE** : la borne est établie par une **mesure publique,
> vérifiable et datée** — c'est un meilleur chiffrage que la parole du
> management. **M3 est réputée SATISFAITE sur la ligne douanière.**

**MAIS le rôle discriminant de M3 ne disparaît pas — il se déplace, et vers
plus dur.** L'exemption **a été payée**. Le vrai inconnu est le coût des
contreparties MFN : plafond Medicare à 50 $/mois, prix MFN garantis sur
**tout le pipeline futur**, Medicaid d'État, TrumpRx (Zepbound et
orforglipron passent d'un prix affiché de **1 086 $ à ~346 $/mois, −68 %**).
**Aucun chiffrage public en $ de BPA n'existe** — ni par la direction, ni
par un broker.

> **M3′ REMPLACE M3** : la direction doit **traiter explicitement le coût
> des contreparties MFN** — soit en le chiffrant, soit en confirmant que la
> guidance l'absorbe intégralement. **Ni chiffrage ni confirmation =
> ÉCHEC.**
> *Ce n'est pas un assouplissement : la ligne douanière allait passer de
> toute façon. La condition se déplace vers la variable qui porte
> réellement le risque de guidance.*

### ② M2 — la jambe incrétine est NON CONTRAIGNANTE. Constaté, pas corrigé.

Seuil calculé : **8,57 Md$ (T2 2025) × 1,35 = 11,57 Md$**.
**Or Mounjaro + Zepbound ont déjà fait 12,82 Md$ au T1 2026.** Pour manquer
le seuil, le T2 devrait **reculer de −9,8 % en séquentiel**, dans un
trimestre qui contient le lancement de Foundayo.

> **Constat honnête : la jambe incrétine de M2 ne peut plus jouer le rôle
> de discriminateur du cas (b) qui lui était assigné hier — parce que le T1
> 2026 a été publié entre-temps et l'a rendue triviale.** La jambe qui mord
> dans M2 est celle de la guidance ≥ 82,0 Md$, **qui duplique M4**.

**Je ne relève PAS le seuil.** Le modifier la veille d'un événement, même
de bonne foi, c'est l'ajuster à ce que j'anticipe. **Je constate la
faiblesse et je la publie** : le pouvoir discriminant du certificat repose
en réalité sur **M1 et M3′**, pas sur M2. À corriger **après** résolution,
pour le prochain contrat.

### ③ M1 — le seuil est plus dur qu'il n'y paraît. Assumé, non modifié.

**Le FCF de Lilly est écrasé sur le T3** :

| Période 2025 | FCF | % du FCF annuel |
|---|---|---|
| **S1 2025** | **1 545,9 M$** | **17,2 %** |
| T3 2025 | 6 748,2 M$ | **75,2 %** |
| T4 2025 | 675,9 M$ | 7,5 % |

> Exiger **FCF S1 2026 ≥ 5,5 Md$**, c'est exiger d'un semestre **61 % de
> tout le FCF de l'exercice 2025**, contre les **17 %** qu'a produit le
> S1 2025.

**Décomposition** : la jambe relative (« le FCF croît au moins aussi vite
que le CA ») **ne discrimine rien** — si l'absolu passe, le relatif passe
mécaniquement. **Tout M1 se joue sur : le T2 2026 livre-t-il ≥ 2,7 Md$ de
FCF ?** (2,8 Md$ acquis au T1.)

**Je maintiens le seuil.** C'est le test du mécanisme, et un test qui ne
mord pas ne teste rien. **Mais j'enregistre par avance la nuance** : un
échec de M1 sur la saisonnalité seule (T2 faible, capex au pic) n'est pas
le même fait qu'un échec sur une conversion structurellement cassée. **Si
M1 échoue, la lecture devra distinguer les deux — et la distinction s'écrit
maintenant, pas après.**

### ④ RÉSOLUTION DU 05/08 APRÈS PUBLICATION — ce que la grille a donné

| | Condition | Verdict |
|---|---|---|
| **M1** (cash) | FCF S1 2026 ≥ 5,5 Md$ | ⬛ **INDÉTERMINÉE** — tableau de flux derrière un hôte bloqué (403), 10-Q T2 non déposé |
| **M2** (moteur) | Mounjaro+Zepbound T2 ≥ 11,57 Md$ · guidance CA bas ≥ 82,0 Md$ | ✅ **SATISFAITE** — **14,87 Md$** et **85,0 Md$** |
| **M3′** (contreparties MFN) | coût chiffré **ou** absorption confirmée | ❌ **NON ÉTABLIE** — transcript non indexé. *« Non établi » ≠ « démontré absent »* |
| **M4** (guidance BPA) | non abaissée, **lue sur le PUBLIÉ** (§3) | ❌ **ÉCHOUÉE** — médian 36,25 → **36,00 $** |

> **CERTIFICAT T2 : NON DÉLIVRÉ, DÉFINITIVEMENT.** M4 étant échouée, la
> conjonction est morte quoi que disent le 10-Q et le transcript.
> **Fenêtre de DÉCISION fermée** — la garder ouverte alors qu'elle ne peut
> rien produire serait le canal par lequel la rationalisation entre.
> **Fenêtre de DONNÉE rouverte** au **17/08** pour C034 seul (calibration,
> aucune conséquence décisionnelle).

**K1 : NON DÉCLENCHÉ** (règle 6, §3 — les quatre tests du §2 sont
satisfaits). **K2 : impossible**, M2 étant satisfaite sans ambiguïté.
**Le contrat n'est ni échu ni renouvelé — le renouvellement unique reste
INTACT.** Butée 06/11, contrôle intermédiaire 05/09, inchangés.

⚠️ **La faute de rédaction sur M4 est PAYÉE** : par la perte du trimestre
et par un point de Brier (C035 = 0,49). **Elle n'est pas payée par une
exécution rituelle que la preuve contredit.**

### 🚧 PLAFOND D'INSTRUCTION — le coût d'attention devient un critère de mort

L'Arbitre a explicitement envisagé le PASSE au fond et l'a écarté, en le
disant : espérance ~+3 %/an net contre un hurdle de 7,0 %, déclencheur à
−28 %, P(achat avant le 06/11) ≈ 3 %, **tranche 1 = 44 €**. *« Un dossier
qui consomme plus d'attention que tout le reste du livre pour le plus petit
ticket du livre »* — violation caractérisée de la règle 4.

> **Le dossier LLY ne consomme plus AUCUN arbitrage complet avant le
> 06/11/2026.** Deux contrôles seulement — **05/09** et **print T3** —
> chacun lisible en **moins de 15 minutes depuis le seul communiqué**.
> **K7 : tout troisième arbitrage LLY sollicité avant le 06/11 déclenche un
> PASSE DÉFINITIF immédiat, sans examen du fond.**

## Surveillances du Juge (contrats datés — charte Arbitre v2)

Toute SURVEILLANCE émise par l'Arbitre vit ICI avec ses 4 champs. À
l'échéance sans déclencheur ni thèse renforcée → PASSE automatique (ou
renouvellement explicitement motivé). Stock max ~6 lignes.
**État au 07/08 : 4/6 — deux créneaux laissés VIDES délibérément**
(un créneau vide est un actif ; le remplir parce qu'il s'ouvre serait
fabriquer un déclencheur au lieu d'en trouver un).

| Affaire | Déclencheur d'achat précis | Échéance de re-test | Expiration si rien | Appel registre |
|---|---|---|---|---|
| **Séché SCHP (PEA)** — 📅 **date S1 CONFIRMÉE : mercredi 09/09/2026, après bourse** *(⚠️ source agrégateur unique, à reconfirmer sur groupe-seche.com)* | S1 : EBE ≥ 125 M€ ET France organique ≥ 0 % ET guidance 275-285 M€ confirmée ET cours ≤ 90 € → tranche 1 ~150 € ; arrêté strict + quantification PFAS → tranche 2 conditionnelle (plafond 5 %) | Publication S1 (butée 30/09/2026) ; point intermédiaire : arrêté boues (été 2026) | 3e warning OU EBE S1 < 110 M€ OU arrêté ≥10x plus laxiste/reporté au-delà du 01/01/2027 → PASSE auto | C012 |
| **LLY (CTO)** — *contrat réécrit le 04/08, conditions mises à jour le 05/08 (effet au T3, §6)* | **DEUX CLÉS.** **Clé A — CERTIFICAT au print du T3** : **M1′** FCF 9 mois 2026 **≥ 12,0 Md$** *(9M 2025 = 8 294,1 M$ ; concession de 0,5 Md$ chiffrée et datée au titre du pic de capex)* · **M2′** point **BAS** de la guidance CA FY26 **≥ 85,0 Md$** **et** marge brute non-GAAP T3 **≥ 86,0 %** non dégradée a/a *(la jambe incrétine est SUPPRIMÉE : non contraignante, 14,87 contre 11,57)* · **M3″** **prix réalisés US du T3 ≥ −8 % a/a, tels que publiés** *(remplace M3′, intestable : le coût MFN ne peut pas mordre sans traverser le prix réalisé US ; T2 = −3 % avec volumes +37 %)* · **M4′** guidance BPA non abaissée **selon la règle 6** (sous-jacent pour la destruction, publié pour l'autorisation, clause §5 armée). **Clé B — INCHANGÉE** : clôture **≤ 23,5x le médian de la guidance BPA non-GAAP PUBLIÉE** = **846,00 $** aux chiffres du 05/08 *(§4 : le retraitement n'est PAS offert au prix — 846 $, pas 917 $)*. **Tranche 1 = 44 €**, ≥ 3 tranches | Contrôle **05/09/2026** · butée **06/11/2026** · échéance de donnée **17/08** (10-Q, C034, calibration seule) | 06/11 sans conjonction → PASSE auto. **Renouvellement unique INTACT.** **K1** (règle 6, §5 armée) · **K2** · **K6** > 1 300 $ → couru · **K7** 3ᵉ arbitrage avant le 06/11 → PASSE DÉFINITIF · **R1** échec ph.3 · **R2′** **Foundayo T3 < 250 M$** *(remplace R2, intestable)* · **R3** · **R4** | **C033 · C034 · C036 · C037 · C038 · C039 · C040** |
| **Aubay (PEA)** | Cours ≤ 50 € OU scare optique sur le T3 | Publication T3 (fin oct. 2026) | Après T3 sans déclencheur → PASSE auto | C001 |
| **STM (STMPA, PEA)** | **≤ 42 €** ET P/E fwd < 30x ET ≥ 1 trim. de MB remontant vers 40 %+ | Résultats Q3 STM (fin oct. 2026) | Après Q3 sans les 3 conditions → PASSE auto | C007 |

**Budget : 4/6 créneaux** *(WMT supprimé le 07/08)*. **Deux créneaux sont
désormais libres, et ils le restent délibérément** — un créneau vide est un
actif, et la rareté des créneaux est ce qui donne du prix à celui qu'on
ouvre.

## 🔍 AUDIT DES CONTRATS — 3 sur 5 sont des seuils de PRIX PUR (04/08/2026)

Audit déclenché en préparant la publication d'Eli Lilly. La grille est celle
encodée au registre le 30/07 : *« un contrat doit tester le MÉCANISME de la
thèse, pas seulement sa photographie »*, et celle du 31/07 : *« un seuil ne
se justifie que par l'arithmétique, pas par un pourcentage rond »*.

| Contrat | Teste le mécanisme ? | Seuil justifié ? | Verdict |
|---|---|---|---|
| **Séché** | ✅ EBE S1 ≥ 125 M€ · France organique ≥ 0 % · guidance confirmée | ✅ | **Bien construit** |
| **STM** | ✅ P/E fwd < 30x · ≥ 1 trimestre de marge brute remontant vers 40 % | ✅ | **Bien construit** |
| **LLY** | ✅ **CORRIGÉ le 04/08** — certificat de mécanisme M1 (cash) · M2 (moteur incrétine) · M3 (tarif chiffré) · M4 (guidance) | ✅ **23,5x**, dérivé de la table d'espérance | **Réécrit AVANT l'événement** |
| **Walmart** | ❌ prix pur | ❌ seuil rond (100 $) | ✅ **RÉÉCRIT PUIS SUPPRIMÉ le 07/08 — PASSE.** Le seuil n'est pas dérivable (bande 25-38x, soit 70-106 $) et les conditions de mécanisme **ne peuvent pas mordre** (publicité +37 % contre une barre à +20 %). *Réparer un contrat n'oblige pas à le garder* |
| **Aubay** | ❌ prix pur **OU** « scare optique » — critère non mesurable | ❌ seuil rond (50 €) | 🔴 À réécrire avant le T3 (fin octobre) |

### Le défaut le plus dangereux : un contrat de prix pur n'interroge pas la CAUSE de la baisse

Un seuil de prix seul achète mécaniquement **quelle que soit la raison du
repli**. Or trois causes appellent des décisions **opposées** :
- **compression de multiple sur thèse intacte** → c'est le cas d'achat ;
- **la thèse commerciale se casse** → couteau qui tombe, surtout pas
  d'achat ;
- **choc exogène (tarifaire, réglementaire)** → dépend entièrement de la
  matérialité chiffrée, qui n'est connue qu'après la publication.

> **Un contrat qui achète à −11 % sans distinguer ces cas achètera dans le
> deuxième — celui où il ne faut surtout pas acheter.**

**Calendrier de correction, adossé aux catalyseurs** : LLY **avant le
05/08** ✅ · Walmart **avant le 20/08** ✅ *(fait le 07/08 — verdict PASSE)* ·
**Aubay avant le T3 (fin octobre) — seul défaut 🔴 restant.**
Chacune se fait **AVANT** l'événement, jamais après — une réécriture
post-événement est indistinguable d'une rationalisation.

### Purges journalisées du 31/07 — deux PASSE DÉFINITIFS

- **VICAT → ☠️ PASSE DÉFINITIF**, contrat supprimé, renouvellement unique
  consommé. Kill criterion n°3 (« dossier couru ») déclenché **sur le fond
  avant la forme** : le titre a fait **+13,15 % le 30/07 à 69,70 €** sur la
  guidance relevée, sans jamais franchir les 72,00 € formels. Espérance
  recalculée au vrai prix : **+4,79 %/an, sous le World nu (5 %)**.
  Les deux portes étaient devenues **logiquement inatteignables** :
  Porte A exigeait −19,7 % **ET** une guidance non abaissée, or tous les
  chemins vers 56 € (retournement cyclique, révision en baisse, choc
  construction) violent cette seconde condition. **C020 résolu ❌ · C021
  maintenu ouvert · C027 créé.**
- **MOBILITY GLOBAL → ☠️ PASSE**, aucun créneau ouvert. L'edge invoqué
  (vendeurs forcés post-spin) est **de flux, donc daté** : à J+21 séances
  le titre **monte** (+2,4 % en 3 semaines) et **6 analystes le couvrent
  déjà en « Buy » à 27,83 $**. Espérance **+2,28 %/an net de PFU**, et
  **+4,21 % même en supposant un bon print le 07/08** — *un contrat dont
  l'exécution réussie laisse encore l'euro sous le hurdle est un piège.*
  Ses 4 conditions se résolvaient **le même jour en sens opposés**
  (P jointe ≈ 4,5 %). **Publié 7 jours AVANT le catalyseur** — la lacune
  de couverture est fermée avant l'événement, par la porte du PASSE.
  **C028/C029/C030 créés**, dont deux se résolvent le **07/08**.
- **SANOFI → contrat de re-test EXPIRÉ**, sans renouvellement. 2 échecs
  sur 3 : cours **72,73 €** > 68 €, et **deux arrêts de programmes**
  annoncés (violation frontale de la 3ᵉ condition). Guidance pourtant
  **relevée** à ~+10 % à changes constants.
  📌 **Lecture de régime** : le 30/07, deux sociétés relèvent leur
  guidance — Vicat (cyclique, levier opérationnel) fait **+13,15 %**,
  Sanofi (pharma, risque pipeline) fait **−8,95 %**, plus forte baisse du
  CAC. Le marché paie le levier opérationnel cyclique et sanctionne le
  risque de pipeline. **Cela n'autorise aucune rotation** (ce serait du
  factor-timing, interdit) mais explique pourquoi les dossiers du jour se
  referment : on chassait dans une zone que le marché vient de re-noter.

### Purges journalisées du 30/07

- **MSFT renfort** → **RÉSOLU**. Print publié, thèse de renfort **RÉFUTÉE**
  par l'Avocat (25 %). Ligne supprimée. ⚠️ **La détention de 6 % n'est pas
  remise en cause** — le verdict portait sur le renfort. Appels C018/C019.
- **Nike (NKE, CTO)** → **contrat RETIRÉ** (budget de 6 créneaux).
  Justification écrite : déclencheur **qualitatif sans condition de prix**,
  aucun test de mécanisme ni de cash, ρ ≈ 0,55 en USD (n'apporte pas de
  diversification), rang dernier, sous le hurdle. **Sous les standards
  d'écriture d'aujourd'hui, ce contrat ne serait pas accepté.** L'appel
  **C008 reste ouvert** et se résout sur faits publiés — aucune perte de
  calibration. Nike **reste au classement** (aucune des 4 portes de sortie
  ne s'applique), en veille sans contrat.
- **Magnum** → **PASSE non renouvelé, aucun créneau consommé.** Réouverture
  sur FAIT et non sur date (capi ≤ 7,6 Md€ **ET** volume organique ≥ +2,0 %)
  → volontairement **pas de ligne radar**, pour ne pas déguiser une attente
  indéfinie en discipline. Appels C022/C023.

## Sous 7 jours 🔥 — **RAFRAÎCHI LE 15/08/2026**

> ⚠️ **Défaut d'hygiène corrigé aujourd'hui** : cette table affichait encore
> les échéances du **29-31 juillet**, périmées depuis plus de deux semaines,
> pendant que les vraies échéances de la semaine vivaient dans les tables
> « Août » et « Septembre » plus bas. **Une table intitulée « sous 7 jours »
> qui ne contient rien des 7 prochains jours est pire qu'absente : elle
> rassure.** L'ancien contenu est conservé sous « Historique » ci-dessous.

| Date | Événement | Impact / ce que j'en fais |
|---|---|---|
| ~~17/08~~ | ✅ **ÉCHÉANCE HONORÉE — C034 RÉSOLU LE 16/08, la veille de sa butée** | **✅ VRAI, Brier 0,3600.** CF d'exploitation S1 2026 **16 023 M$** contre 4 753 M$ ; FCF ≈ **10 823 M$**. Les deux jambes tiennent, la première **quelle que soit la donnée manquante** (capex S1 2025 introuvable mais borné ≥ 0 ⇒ croissance du FCF ≥ +127,7 % contre +52 % pour le CA). Résolu sur **réconciliation arithmétique triple**, pas sur lecture du 10-Q (sec.gov toujours bloqué). **Ligne close, ne plus la traiter comme une échéance ouverte** |
| **18/08** | **Résultats S1 NEPI Rockcastle** (NRP, Euronext Amsterdam) [MONO-SOURCE, à reconfirmer] — webcast **19/08 09h00** | 🟡 **INSTRUIT LE 16/08 — NON TRANCHÉ, présomption forte d'ÉLIGIBLE.** Les 3 obstacles se lèvent au raisonnement, **aucune preuve de rang (a) obtenue**. **① Siège** : N.V. néerlandaise depuis le **21/09/2022** (redomiciliation Île de Man → Pays-Bas), **ISIN NL0015000RT3** — résidente fiscale NL **par incorporation**, pas de zone grise ✅. **② Statut foncière — le point qu'on croyait mortel** : NEPI a **explicitement écarté** le régime REIT néerlandais en 2022 (*« pas la meilleure structure à ce stade »*), les revenus locatifs sont taxés **au niveau des filiales** (Roumanie 16 %, Pologne 19 %), et le régime FBI est **fermé à l'immobilier détenu directement depuis le 01/01/2025**. 🔑 **La preuve la plus forte est indirecte : NEPI *DEMANDE* un statut REIT néerlandais (25/02/2026) — on ne demande pas ce qu'on possède déjà** ✅. **③ Double cotation JSE : non bloquante** — le label « REIT » de la JSE est un **label boursier**, PAS un régime d'exonération néerlandais. *Ne pas confondre : c'est le piège du dossier.* 🔴 **RISQUE PROSPECTIF DATÉ ET NON RÉSOLU** : si les Pays-Bas légifèrent un régime REIT et que NEPI l'adopte, **les achats POSTÉRIEURS deviennent inéligibles au PEA**. Issue de la demande de février : **inconnue**. ⚠️ **PIÈGE D'ISIN** : l'ancien ISIN manxois **IM00BDD7WV31** circule encore dans plusieurs bases — **une ligne sous ISIN IM… ne serait PAS éligible.** Vérifier **NL0015000RT3** sur l'ordre |
| **18/08** | Production industrielle US, 15h15 | Contexte macro seulement |
| **19/08** | **Inflation FINALE zone euro** (flash du 31/07 : **2,9 %** contre 2,8 % en juin) | Contexte. *Pas d'appel ouvert dessus — et je n'en ouvre pas un pour meubler* |
| **~19/08** ⚠️ *date calculée* | 🔴 **Expiration du lock-up d'ArcelorMittal sur ~17,3 % de Vallourec** | **NE RIEN FAIRE AVANT.** Le vendeur le mieux informé du dossier redevient libre, **23 % sous son propre prix de sortie de mai (24,00 €)**. T6 en échec. *Les institutionnels servis à 24 € en mai sont de l'offre potentielle, pas des alliés* |
| **20/08, 14h00** | 🔴 **Résultats Walmart T2 FY27** | **Résout C042** (croissance de la publicité globale < +32 % a/a — annoncé à 42 %). Lisible **sur le communiqué seul**, condition pré-enregistrée le 07/08. Dossier TUÉ, l'appel survit : *un PASSE se note comme un achat* |
| **26/08, 22h20** | 🔴 **Résultats Nvidia T2 FY2027** — 22 % du portefeuille | Grille de pré-engagement écrite le 09/08, **17 jours à l'avance** (§ ci-dessous). ✅ **§3.4 RÉ-EXAMINÉ ET AMENDÉ LE 16/08, soit J−10** — le critère ④ (engagements d'approvisionnement) devient **conditionnel** : un plateau ne compte comme mauvaise surprise que si aucun transfert d'obligations d'achat vers un véhicule de financement n'est mentionné. *Sinon ④ est NON TESTABLE et je l'écris.* **Règle générale ajoutée : toute grille pré-engagée est relue à J−7 avec une seule question — « l'objet que je mesure existe-t-il encore sous la même forme ? »** |
| **27-29/08** | 🔴 **Jackson Hole — premier discours de Kevin Warsh comme président de la Fed** | Tombe **le lendemain de Nvidia**. Dans un régime où le débat porte sur une **hausse**, le premier Jackson Hole d'un nouveau président fixe le cadre |

### 📋 Complément du 16/08 — trois événements de la semaine que j'avais manqués

| Date | Événement | Statut |
|---|---|---|
| **19/08** | 🔴 **MINUTES DU FOMC des 28-29/07** *(règle des 3 semaines)* | **DÉRIVÉ**, non confirmé. ⚠️ **Contenu MONO-SOURCE NON VÉRIFIÉ (Newsquawk)** : taux maintenus à **3,50-3,75 %** avec **TROIS dissidences (Logan, Hammack, Kashkari) en faveur d'une HAUSSE de 25 pb.** **Si c'est exact, ce n'est pas un non-événement mais un risque haussier sur les taux** — voir la note C046 ci-dessous |
| **21/08** | **PMI flash d'août** — manufacturier + services, US / zone euro / RU / Japon | ✅ RÉCONCILIÉ. Probablement **le 2ᵉ événement macro de la semaine** après Walmart |
| **19/08** | Mises en chantier + permis de construire US ; NAHB le 18/08 | MONO-SOURCE |
| semaine | **Home Depot, Target, Lowe's, TJX** publient — traditionnellement **avant** Walmart | MONO-SOURCE, dates non trouvées. **Utiles comme signal précurseur sur le consommateur américain** |
| semaine | **Analog Devices** (analogique/industriel/auto) et **Fabrinet** (optique datacenter, proxy IA) | MONO-SOURCE, dates non trouvées |

> ⚠️ **C046 — je NE révise PAS sur les trois dissidences.** L'information est
> **mono-source et non vérifiée**. *Le 11/08, j'ai refusé de réviser C045 sur
> une « correction » qui s'est révélée fausse — et ce refus m'a protégé.*
> **Même geste ici.** Les minutes du 19/08 trancheront ; si les dissidences
> sont réelles, ce sera une information à intégrer **à la prochaine
> ouverture d'appel**, pas une révision rétroactive de C046.

> ✅ **Jackson Hole : mes dates 27-29/08 sont CONFIRMÉES** (Kansas City Fed +
> 2 sources), thème *« Financial Innovation: Implications for Payments and
> Policy »*, premier discours du président Warsh.
> 🔴 **Un agrégateur le place les 21-22 août — c'est le calendrier 2025
> recopié. FAUX.** *Même famille d'erreur que le mélange de millésimes subi
> sur Sipef la veille. Ne pas laisser cette date entrer dans un scénario.*

### 📋 Catalyseurs réglementaires datés — récolte de la chasse prospective du 16/08

**Aucun n'ouvre de dossier** (tous morts sur l'achetabilité ou sur la date).
Portés au radar comme **référentiel de dates**, pas comme candidats.

| Date | Événement | Preuve |
|---|---|---|
| **22/09 → 20/10/2026** | **Arrêt définitif du réseau 2G d'Orange** en métropole, en 3 étapes ; fin de service en décembre 2026 | 2 sources |
| **31/12/2026** | Date limite d'adhésion à un éco-organisme — **REP emballages professionnels FR** | mono-source |
| **01/01/2027** | 🇳🇱 **Fin de la *salderingsregeling*** — loi adoptée le 17/12/2024 ; compensation de réinjection ramenée à ≥ 50 % du tarif nu jusqu'en 2030 | 2 sources |
| **01/01/2027** | Régulation de température obligatoire — **logements NEUFS uniquement** *(l'existant est repoussé au 01/01/2030 par le décret n° 2025-1343 du 26/12/2025)* | 2 sources |
| **20/01/2027** | Application du **règlement Machines (UE) 2023/1230** | 2 sources |
| **Janvier 2027** | Phase obligatoire **CORSIA** (couverture ~64 % → ~87 %) ; annulation des unités de phase 1 à échéance janvier 2028 | 2 sources |
| **2028** *(et NON 2027)* | Démarrage de l'**ETS2** bâtiments/transport routier — reporté au trilogue du 10/12/2025 | 2 sources |
| **01/01/2029** | **PPWR** : 90 % de collecte séparée des bouteilles PET et canettes ≤ 3 L ; **dérogation** aux États atteignant 80 % en 2026 | 2 sources |

**Deux pistes non explorées, faute de budget d'agent — à reprendre :**
**(1)** l'évaluation du seuil de 80 % en **Espagne** en 2026 (catalyseur daté
réel sur la consigne) ; **(2)** le **décret français annoncé pour garantir la
sécurité des ascenseurs** face à l'extinction 2G — *s'il crée une obligation
de mise en conformité assortie de sanctions, il change la nature du flux.*
**(3)** **Alfen** (Amsterdam), adjacente au thème néerlandais — *ni chiffrée
ni vérifiée ; son métier est le stockage industriel et les bornes, pas la
batterie domestique.*

### 📋 Ajouts du chantier « smart money » du 15/08

| Date | Événement | Note |
|---|---|---|
| **14/11/2026** | Fenêtre de dépôt des **13F du T3 2026** | ⚠️ **Ne PAS replanifier le terrain smart money un samedi si le canal reste bloqué.** Le re-test du 15/08 a produit **0 signal sur 6 portes testées, 6 fermées** — la date de dépôt ne rouvre pas un canal mort |
| **non datée** | **Theon International** (THEON, Amsterdam) — publication FY 2026 | Point de contrôle unique : le **book-to-bill**. À **1,0x** au S1 2026 pendant que le CA fait **+35,4 %** — le carnet ne croît donc **pas plus vite que les ventes**. Un passage durablement **sous 1,0x** casserait le récit avant que le CA ne le montre. *Le « soft backlog de 1,46 Md€ » est l'agrégat de vitrine ; le book-to-bill est le chiffre contraignant* |
| **non datée** | **Exosens** (EXENS, Paris) — publication annuelle 2026 | Guidance relevée vers le **haut de fourchette : ~540 M€ de CA, ~178 M€ d'EBITDA ajusté**. À confronter au réalisé |

### Historique — l'ancienne table « sous 7 jours » (29-31/07, conservée)

| Date | Événement | Impact portefeuille/watchlist |
|---|---|---|
| 29/07 | **Résultats Microsoft Q4 FY26** (après clôture US) | MSFT détenu ; condition du renforcement watchlist (Azure ~40 %, capex) |
| 29/07 | **FOMC** — décision Fed (~25 % proba de hausse) | Tout le portefeuille ; ton de Warsh = volatilité |
| **29/07** | **Résultats S1 Vicat (VCT, Paris, PEA)** — comparable S1 2025 : EBITDA 331 M€ (-6,3 %) | Chasse PEA 27/07. Entrée conditionnelle : EBITDA S1 ≥ 340 M€ **ET** dette/EBITDA ≤ 1,5x **ET** cours ≤ 60 €. PASSE si > 70 € (couru) ou EBITDA < 320 M€ |
| **30/07** | **Résultats S1 The Magnum Ice Cream (MICC)** — 1ᵉʳ semestre post-démerger Unilever, webcast 11h CEST | Chasse CTO 27/07. ⚠️ **N.V. néerlandaise = éligible PEA** → si le PEA est ouvert, l'idée y va (pas au CTO : 12,8 pts de fiscalité). Entrée conditionnelle : organique ≥ +3 % **ET** marge EBITDA aj. en amélioration séquentielle **ET** coûts de séparation en décrue chiffrée **ET** dette/EBITDA ≤ 2,5x, capi ≤ ~8,8 Md€. PASSE si guidance abaissée ou levier > 2,7x |
| **30/07** | **Résultats S1 Sanofi (SAN, Paris, PEA)** — 1ᵉʳˢ résultats complets sous Belén Garijo (DG depuis le 29/04) | Chasse santé 28/07. Re-test conditionnel : cours ≤ **68 €** APRÈS publication **ET** guidance CA non abaissée **ET** aucun nouvel arrêt de programme. Contexte : arrêt de l'amlitélimab en dermatite atopique le 24/07 (-2,1 %, à 74,75 €) |
| 30/07 | Résultats Schneider Electric S1 | Thème électrification (watchlist potentielle) |
| 30-31/07 | Résultats SocGen, Crédit Agricole | Lecture santé bancaire FR / spread OAT |

## Août 2026

| Date | Événement | Impact |
|---|---|---|
| 31/07 | Résultats Cameco (BPA attendu 0,26 $, -49 %) | Thème uranium/énergie IA (veille, spot ~85,8 $/lb) |
| Début août | Ouverture « Corriger ma déclaration » impots.gouv.fr | Régularisation 3916-bis si compte ouvert ≤ 2025 |
| **26/08** ✅ **CONFIRMÉ PAR L'ÉMETTEUR** | **Résultats Nvidia T2 FY2027** — trimestre clos le 26/07 ; publication vers **13h20 PT**, conférence **17h00 ET = 23h00 Paris**. Communiqué NVIDIA du 29/07, quatre relais concordants *(page nvidianews en 403 — ancrage jugé suffisant, mais pas de lecture directe)* | NVDA = **22 % du portefeuille** — le rendez-vous du mois. 🔴 **INTITULÉ CORRIGÉ LE 17/08** — cette ligne écrivait *« Data Center scindé Hyperscale / AI-Cloud / Edge »*, **un triptyque qui n'existe pas**. La structure réelle : **DEUX plateformes** — *Data Center* et *Edge Computing* — le **Data Center** étant lui-même subdivisé en **Hyperscale** (clouds publics, **37,9 Md$**) et **ACIE** (*AI Clouds, Industrial & Enterprise*, **37,4 Md$**). CA du trimestre **81,6 Md$**. ⚠️ **Et la refonte n'est PAS à venir : elle est en vigueur depuis le T1 FY2027** (trimestre clos le 26/04/2026, publié en mai) — **antérieure à ma fenêtre de veille du 09/08.** Le 26/08 sortira donc avec des comparatifs déjà dans le nouveau format. *La grille détaillée §LES CINQ CHIFFRES portait, elle, la bonne structure et les bons montants — seul cet intitulé de résumé était faux. Un résumé faux au-dessus d'une grille juste est exactement ce qu'on relit en diagonale le soir du print.* 🎯 **La bonne question, apprise d'AMD le 05/08 : pas « bat-il le consensus ? » mais « la croissance porte-t-elle un levier de MARGE ? »** — AMD a fait +50 % de CA et +245 % de résultat opérationnel, et a chuté sur une guidance T3 à +41 % avec une **marge brute STABLE à ~56 %** |


## 🔒 PRÉ-ENGAGEMENT NVIDIA — grille écrite le 09/08, **17 jours avant** la publication

*Écrite quand aucune anticipation ne peut la contaminer. La méthode a payé
deux fois cette semaine : sur SBM (la soustraction `1900 − 1310 = 590` posée
le 31/07) et sur Eli Lilly. **NVDA pèse 22 % du portefeuille** — c'est
l'événement le plus conséquent du mois.*

### ⚠️ Trois corrections à MON briefing, avant toute chose

| Ce que j'avais écrit | Le fait |
|---|---|
| Le segment « AI-Cloud » | **ACIE — *AI Clouds, Industrial and Enterprise***. Le périmètre inclut l'entreprise on-prem, le souverain et l'industriel : **ce n'est pas un détail de nommage**, ça change ce que le chiffre mesure |
| Terafab phase 1 = **16,8 Md$** *(publié dans la Revue d'hier)* | **Le dépôt de SpaceX lui-même estime la première phase à ~55 Md$** — écart de 38 Md$ relevé publiquement. Les deux chiffres ne mesurent probablement pas la même chose (investissement annoncé contre coût total de phase), **mais je ne peux pas le trancher, et j'ai publié le plus petit sans le savoir** |
| Capex hyperscaler 2026 ≈ **650 Md$** | **~725-750 Md$** après les relèvements de juillet (Alphabet jusqu'à 205, Meta 125-145, Amazon ~200). 🔑 **Conséquence : la projection « > 1 000 Md$ en 2027 » implique +35-40 %, pas +55 %. Le récit est nettement moins accélérant qu'il n'y paraît.** |

### 🕳️ La rupture de comparabilité INVISIBLE — le piège n°1

> **Depuis le T1 FY2027, les mesures non-GAAP de NVIDIA n'excluent PLUS la
> rémunération en actions (SBC).** L'historique a été retraité en
> conséquence. **Tout BPA non-GAAP publié avant le 20/05/2026 est sur
> l'ancienne base et n'est PAS comparable.**
>
> Cas réel déjà observé : un agrégateur a annoncé pour le T1 « BPA 2,39 $
> contre 1,75 $ attendu », quand la CFO Commentary donne **1,87 $**. Le
> 2,39 $ est **arithmétiquement incompatible** avec un résultat opérationnel
> de 53,5 Md$ sur ~24,2 Md d'actions.
> **Règle du soir : tout écart de BPA cité par un agrégateur dans les dix
> premières minutes est FAUX jusqu'à réconciliation avec le communiqué.**

### La série comparable — deux points, dont un seul publié

| | **T4 FY2026** *(reconstitué)* | **T1 FY2027** *(publié 20/05)* |
|---|---|---|
| CA total | 68,1 Md$ (+20 % séq) | **81,6 Md$** (+20 % séq, +85 % a/a) |
| Data Center | 62,3 Md$ | **75,2 Md$** (+21 % séq) |
| — Hyperscale | ≈ 33,9 Md$ [DÉRIVÉ] | **38 Md$ (+12 % séq)** |
| — ACIE | ≈ 28,2 Md$ [DÉRIVÉ] | **37 Md$ (+31 % séq)** |
| Marge brute GAAP / non-GAAP | 75,0 % / 75,2 % | **74,9 % / 75,0 %** |
| Marge opérationnelle | ≈ 65,0 % [DÉRIVÉ] | **65,6 %** |
| Stocks | 21,403 Md$ | **25,797 Md$** (+20,5 % séq) |
| Créances / DSO | n.c. | **40,7 Md$ / 45 j** (contre 51 j) |
| Engagements d'appro. | 95,2 Md$ | **119,0 Md$ (+25 % séq)** |
| **Guidance du trimestre suivant** | 78,0 Md$ → **+14,5 % séq** | **91,0 Md$ ±2 % → +11,5 % séq** ; MB 74,9/75,0 ±50 pb ; **AUCUN CA compute Data Center Chine assumé** |

*Méthode de reconstitution, reproductible : `38 ÷ 1,12 = 33,9` et
`37 ÷ 1,31 = 28,2`, **somme 62,1 contre 62,3 Md$ publiés** — l'écart de
0,2 vient de l'arrondi des « 38 » et « 37 ». **Cette réconciliation valide
à la fois la reconstitution et les deux montants de segment.***

> **Le 26/08 je disposerai de TROIS points, dont deux dérivés. Tout
> commentaire sur une « tendance Hyperscale » ce soir-là sera de la
> narration** — et j'en ai produit trois cette semaine, toutes réfutées.

### LES CINQ CHIFFRES QUI DÉCIDENT

**① La guidance T3 exprimée en % du CA T2 réalisé — jamais en absolu.**
Le pas séquentiel **guidé** décélère déjà : **+14,5 % → +11,5 %**. Calcul à
faire en direct : `guidance T3 ÷ CA T2 publié − 1`. **Mauvaise surprise : un
troisième pas sous +10 %.**
> C'est la lecture SBM transposée. Le communiqué titrera « ~+95 % a/a » — un
> chiffre **mécaniquement flatté par une base écrasée** (le T2 FY26 était à
> ~47 Md$, plombé par la Chine). *Spectaculaire et informationnellement
> vide.*

**② La marge brute GUIDÉE pour le T3 — pas celle réalisée au T2.**
🔑 **NVIDIA guide déjà ZÉRO levier de marge** : trois trimestres à
74,9-75,0 %. **Une marge « qui tient » n'est donc PAS une bonne nouvelle,
c'est le scénario central.** *C'est exactement l'erreur qui a coûté 7 % à
AMD le 05/08.* Mauvaise surprise : guidance T3 **sous 74,4 % GAAP**. Le
seul vrai bon signal serait **au-dessus de 75,5 %**.

**③ Hyperscale séquentiel CONTRE ACIE séquentiel.** T1 : **+12 % contre
+31 %**, ACIE pesant déjà ~49 % du Data Center. Mauvaise surprise :
**Hyperscale sous +8 % séq.**
> **Les deux lectures sont mauvaises, et c'est ce qui rend ce couple plus
> informatif que le total.** Si Hyperscale décélère avec 725-750 Md$ de
> capex client, **l'argent va vers leur propre silicium**. Si ACIE porte
> tout, la « diversification » devient une histoire de **circularité**.

**④ Engagements d'approvisionnement** — dans la **CFO Commentary**, livrable
**écrit** publié à 13h20 PT (donc conforme à ma contrainte « communiqué
seul », ce n'est pas un transcript). **95,2 → 119,0 Md$ (+25 % séq)**, dont
95 Md$ payables d'ici janvier 2027. Mauvaise surprise : **stable ou en
baisse.** *C'est le seul chiffre où NVIDIA engage du cash contractuel sur ce
qu'elle croit de son S2 — un plateau ici précède une révision de guidance
d'un ou deux trimestres.*

> ### 🔧 AMENDEMENT DU ④ — écrit le **16/08**, soit **10 jours AVANT** le print
>
> **Le défaut** : le critère ④ suppose que les engagements d'approvisionnement
> **de NVIDIA** capturent l'ensemble du cash contractuel engagé sur son S2.
> **L'alliance de financement de ~500 Md$ portée au radar casse cette
> hypothèse** : si des obligations d'achat sont assumées par un véhicule
> financé ou par des partenaires, **la ligne d'engagements de NVIDIA peut
> plafonner sans que cela signifie ce que le critère prétend lire.**
>
> 🔴 **Et le signal s'INVERSE, ce qui est le pire cas** : un plateau, que
> j'avais écrit comme « mauvaise surprise annonçant une révision de
> guidance », deviendrait le symptôme d'un **transfert comptable** — donc
> potentiellement d'une activité en hausse. *Un critère qui peut dire le
> contraire de ce qu'il mesure est pire qu'un critère absent.*
>
> **Le critère ④ devient donc, à compter de maintenant :**
>
> > Un plateau ou un recul des engagements d'approvisionnement compte comme
> > **mauvaise surprise SEULEMENT SI** la CFO Commentary **ne mentionne
> > aucun transfert, prise en charge ou externalisation d'obligations
> > d'achat** vers un véhicule de financement ou un partenaire.
> > **Si un tel transfert EST mentionné, ④ devient NON TESTABLE pour ce
> > trimestre, et je l'écris — je ne lis pas le plateau.**
> > *Si un total consolidé (NVIDIA + véhicule) est publié, c'est LUI qui
> > porte le test, et le seuil reste « stable ou en baisse » sur ce total.*
>
> ✅ **Légitimité de l'amendement** : écrit **10 jours avant la publication**,
> **rien de l'issue n'est connu**. C'est la même fenêtre que celle qui m'a
> autorisé hier à resserrer la condition de C004 — et la même qui m'a
> interdit de toucher à C003.
>
> ⚠️ **L'alliance de financement elle-même est un état NON RE-TESTÉ** (portée
> au radar, non revérifiée depuis). Si elle n'existe pas ou a changé de
> forme, l'amendement est simplement inoffensif : il n'ajoute une condition
> que dans un cas de figure précis.
>
> ### 🔁 Et c'est la DEUXIÈME fois ce mois-ci — le motif mérite un nom
>
> Le 05/08, j'ai dû remplacer **M3′** sur Lilly parce qu'il était devenu
> **intestable** : le coût MFN ne pouvait pas être observé sans traverser le
> prix réalisé US. Aujourd'hui, ④ devient conditionnel parce que l'objet
> mesuré **peut se déplacer hors du périmètre où je le mesure**.
>
> > **UN CRITÈRE PRÉ-ENREGISTRÉ SE PÉRIME QUAND L'ÉMETTEUR CHANGE LA FORME
> > DE SA PUBLICATION** — segmentation, périmètre de consolidation, véhicule
> > de financement. Le pré-engagement protège contre **mon** biais après
> > coup ; il ne protège **pas** contre une modification du référentiel par
> > l'émetteur.
> >
> > **Règle ajoutée** : toute grille pré-engagée est **relue à J−7**, et la
> > seule question posée est *« l'objet que je mesure existe-t-il encore sous
> > la même forme ? »*. Une relecture à J−7 est encore aveugle à l'issue —
> > **une relecture le soir même ne l'est plus.**
>
> *C'est exactement le piège n°1 que cette grille nommait elle-même — « la
> rupture de comparabilité INVISIBLE ». Je l'avais écrit pour la
> segmentation Data Center. Je ne l'avais pas appliqué à mes propres
> critères.*

**⑤ La marge OPÉRATIONNELLE, calculée à la main** (`RO ÷ CA`). 65,0 % →
**65,6 %**. Mauvaise surprise : **en recul séquentiel** avec un CA en hausse
de 11-16 %. *Si la marge brute est verrouillée à 75 % par le mix et le coût
mémoire, le seul levier restant est l'opex — et c'est là que la R&D Rubin et
les recrutements apparaîtront. Marge brute stable ET marge opérationnelle en
repli = le profil exact d'AMD.*

### Ce que le communiqué NE permettra PAS de trancher le soir même

**La concentration client est au 10-Q, pas au communiqué** — disponible ~J+1.
Points de comparaison : **T1 FY27 → 3 clients à 21/17/16 % = 54 %** ; T3 FY26
→ 4 clients à 22/15/13/11 % = **61 %**. **La concentration BAISSE.** Mauvaise
surprise : premier client **> 25 %**, ou retour à quatre clients > 10 %
totalisant > 60 %.

**Lisible au bilan condensé, en revanche** : stocks **114 jours de COGS,
rigoureusement stables** sur deux trimestres → **ne signaler un problème
qu'au-dessus de ~125 jours**, *jamais sur le montant absolu, qui monte
mécaniquement avec le CA* ; DSO **45 j** → seuil d'alerte **55-60 j** ;
provisions sur stocks (**0,8 Md$ au T1**), qui mangent directement les 75 %
de marge brute.

**🔍 Le rapprochement que personne ne fera à ma place** : mettre côte à côte
**la croissance séquentielle d'ACIE** et **la variation de la ligne
d'investissements** (titres de participation non cotés : **3,39 → 22,25 Md$
en un an**, ×6,6 ; **> 40 Md$ engagés sur les quatre premiers mois de 2026**,
dont 30 Md$ dans OpenAI, le Series E de xAI, 2 Md$ dans CoreWeave).
> **ACIE est précisément le segment où se trouvent les clients que NVIDIA
> finance. Si ACIE accélère pendant que la ligne d'investissements bondit,
> la croissance affichée est en partie AUTOFINANCÉE** — et ce chiffre
> d'affaires n'a pas la même qualité que celui d'Hyperscale.

### 🇨🇳 Le piège symétrique de la plus-value SBM

**La guidance T2 exclut TOUT CA compute Data Center Chine.** Si la guidance
T3 **réintègre** la Chine, le pas séquentiel affiché sera mécaniquement
supérieur **sans qu'un seul GPU de plus ait été demandé par le marché
occidental**.
> **Vérification obligatoire, en DIFF** : la phrase sur la Chine dans le
> paragraphe *Outlook* a-t-elle changé par rapport au 20/05 ? *Se lit comme
> un Risk Factor : c'est le changement de formulation qui informe, pas la
> formulation.*

### 🚫 Ce que je m'interdis d'avance

- **Lire le a/a.** Base écrasée par la Chine, aucune information.
- **Lire la réaction du cours comme un verdict.** **NVDA a baissé après
  QUATRE publications « beat-and-raise » consécutives**, dont **−1,8 % le
  20/05** après 81,6 contre 78 Md$ guidés. *C'est le soir où la tentation de
  lire le cours sera maximale, et le soir où elle sera la plus fausse.*
- **Crier au loup sur les stocks** en valeur absolue. Un faux positif ici me
  décrédibiliserait sur les cinq autres points.

### 🏭 Internalisation silicium — le calendrier tranche, pas l'opinion

**La tension que je signalais (SpaceX sur Vera Rubin ET Terafab) n'en est
pas une : ce sont deux horizons.** Terafab ne produit **rien avant fin
2027**, **rien en volume avant 2028** — et le PDK Intel 14A v0.9 n'arrive
qu'en **octobre 2026**, donc la conception ne peut pas commencer avant le
T4 2026. **Zéro impact sur FY2027 et FY2028.**

**La menace matérielle DANS la fenêtre est ailleurs, et elle est déjà
partiellement dans les comptes** : **Google TPU (~4,3 M unités projetées en
2026)**, **AWS Trainium 3 (GA décembre 2025, montée en cadence depuis le
T2 2026)**, et surtout **Google↔Anthropic — jusqu'à 1 M de puces / > 1 GW en
2026, puis jusqu'à 5 GW à partir de 2027**. *Un gigawatt non-NVIDIA est un
gigawatt perdu.* Repère agrégé à suivre : **Broadcom guide > 100 Md$ de CA
IA pour FY2027.**

> **Tout cela se lira en NÉGATIF dans UNE seule ligne : la croissance
> séquentielle d'Hyperscale.** Google, Amazon et Meta y sont logés. Nulle
> part ailleurs.

**Contexte d'entrée** : NVDA clôture **223,96 $ le 07/08** (+2,27 %), capi
**5,42 T$** — contrôle `5,42e12 ÷ 223,96 = 24,2 Md titres` ✓. Plus haut de
clôture historique **235,74 $ le 14/05** : le titre entre dans la
publication à **~5 % de son sommet**, après un SOX à −21 % en juillet et des
collectes record sur SMH/SOXX. **La barre est haute.**

⚠️ **Limite de preuve assumée** : `sec.gov` bloqué (403), **aucun document
primaire lu**. Les montants Hyperscale/ACIE sont de source secondaire — ils
réconcilient au dollar près, ce qui est une forte présomption, pas une
lecture. **Non tranché** : Hyperscale/ACIE/Edge sont-ils des segments
reportables ASC 280 ou une simple désagrégation de CA ? (le 10-Q du T1 cite
encore « Compute & Networking »). **Aucune information datée d'août 2026 sur
les licences d'exportation Chine** — c'est le piège n°5 et il reste ouvert.
| **07/08** | **Premiers résultats autonomes de Mobility Global (MBGL, NYSE)** — avant bourse, call 8h ET | Chasse CTO 27/07 : spin-off CARFAX de S&P Global, vendeurs FORCÉS (fonds S&P 500 non éligibles), ~11,6x EBITDA vs 18-22x les comparables. Entrée conditionnelle : cours ≤ 21 $ **ET** EBITDA aj. ≥ 175 M$ **ET** organique CARFAX ≥ +3 % **ET** guidance FY26 donnée. Test décisif : cash-flow opérationnel / EBITDA ajusté (levier 2,6x post-spin) |
| 27/08 | **Résultats S1 IBA (IBAB, Bruxelles, PEA)** — cash-flow, marge, langage PanTera (lire en diff vs S1 2025) | Chasse profonde 27/07 : goulet actinium-225 — ⚠️ thèse RÉFUTÉE par l'Avocat (C010), suivi documentaire seulement |
| **31/07/2026** (en vigueur) | 🔴 **DROITS DE DOUANE PHARMA SECTION 232 — structure à ÉTAGES** *(entrée corrigée le 04/08 : ma version du 03/08 était fausse sur le point le plus important)* | **Taux de tête : 100 % ad valorem** sur les médicaments de marque importés, en vigueur le **31/07/2026 pour les grands laboratoires** (29/09/2026 pour les autres). ⚠️ **MAIS ce taux ne s'applique PAS uniformément** — voir la structure ci-dessous. **Sujet n°1 du call Eli Lilly du 05/08.** Élément favorable à LLY : 750 M$ annoncés le 30/07 dans l'Ohio, dans un plan de ~55 Md$ d'investissements industriels américains présenté comme une réponse aux tarifs |

### ⚠️ La structure réelle des droits Section 232 — et pourquoi ma version du 03/08 induisait en erreur

**J'ai écrit et publié le 03/08 que le taux était de 100 % sur les
importations de médicaments de marque, avec pour corollaire « les
européens exportant sans capacité US sont perdants ». Ce corollaire est
FAUX.**

| Situation | Taux | Niveau de preuve |
|---|---|---|
| Taux de tête (pays sans accord) | **100 %** | ✅ proclamation présidentielle, KPMG |
| **Produits d'origine UNION EUROPÉENNE** | **plafonné à 15 %** au titre du *US-EU Framework Agreement* | ✅ **2 sources** (Crowell & Moring ; Fierce Pharma) |
| Signataire d'un accord de prix **MFN** | **0 % jusqu'au 20/01/2029** | ⚠️ MONO-SOURCE (Crowell) |
| **Plan d'onshoring approuvé** par le Department of Commerce | **20 %** pendant la mise en œuvre, sans concession de prix | ⚠️ MONO-SOURCE (Crowell) |
| Génériques et biosimilaires | **expressément EXCLUS « at this time »** selon Crowell | 🔴 **DIVERGENCE NON RÉSOLUE** — contredit frontalement ma version du 03/08 (« 0 % pendant 2 ans, puis 100 %, puis 200 % », d'après AJMC/PharmExec). **À trancher sur texte primaire avant tout usage.** |

**Conséquence sur toute thèse tarifaire** : le différentiel que j'invoquais
— « CDMO américain gagnant contre européen perdant » — reposait sur
**100 points d'écart**. Le différentiel réel, pour un laboratoire européen
ayant signé un MFN ou déposé un plan d'onshoring, est de **0 à 20 points**.
**Le mécanisme économique du signal est divisé par cinq, voire annulé.**

**Conséquence sur Eli Lilly — la vraie réponse, obtenue le 04/08 :**

> 🔑 **LLY bénéficie d'une EXEMPTION TARIFAIRE DE TROIS ANS**, négociée dans
> son accord **« Most-Favoured-Nation »** avec l'administration américaine,
> annoncé le **06/11/2025**. Source : **Global Trade Alert**, fiche de
> mesure officielle. *(Trois ans depuis novembre 2025 → fin 2028. ⚠️ Une
> source secondaire écrit « jusqu'en 2029 » — retenir la formulation
> officielle.)*

**La ligne douanière est donc largement neutralisée pour LLY. Mais elle a
été PAYÉE**, et les contreparties sont le vrai sujet :
- prix MFN sur les GLP-1 ; **Zepbound/tirzepatide et orforglipron plafonnés
  à 50 $/mois pour les bénéficiaires Medicare** ;
- **prix MFN garantis sur TOUS les nouveaux médicaments à venir** ;
- accès aux prix MFN pour **tous les programmes Medicaid d'État** ;
- distribution via la plateforme **TrumpRx** (lancée en janvier 2026).

> **⚠️ RECADRAGE DE LA QUESTION POUR LE CALL DU 05/08.** Ce n'est PAS
> « quelle facture douanière ? » — elle est proche de zéro. C'est
> **« quel coût de la contrepartie MFN ? »**, c'est-à-dire l'érosion de
> prix nette sur Zepbound, Mounjaro et Foundayo imposée par le plafond
> Medicare à 50 $/mois et par l'extension MFN à **tout le pipeline futur**.
> **Le risque de guidance est là, pas sur la ligne tarifaire.**

📌 **Trois versions successives de ma part, dont deux fausses** — journalisé
comme tel : le 03/08 « 100 %, exposition lourde » (faux, alarmiste) ; le
04/08 matin « plafonné à 15 % par l'origine UE » (vrai en général, mais ce
n'est pas le mécanisme qui joue ici) ; le 04/08 après-midi **« exemption
négociée de trois ans, payée en concessions de prix »** — c'est la bonne.
**Leçon : sur un dossier réglementaire, chercher d'abord si l'émetteur a
négocié un régime particulier, avant de lui appliquer le régime général.**

**Autre chiffre utile, sectoriel** : le Département du Commerce estime que
**~53 % des médicaments brevetés distribués aux États-Unis sont produits
hors du pays** — moyenne d'industrie, **aucune décomposition société par
société n'est publiée**. C'est probablement la question que poseront les
analystes demain, et le fait qu'elle n'ait pas de réponse publique explique
pourquoi elle sera posée.

**Périmètre confirmé** : le taux de tête s'applique aux **17 sociétés de
l'Annexe III** (dont Lilly, Pfizer, J&J, Merck) depuis le 31/07, et à
toutes les autres au 29/09. **Génériques et biosimilaires expressément
exclus** à ce stade (leur propre échéance est 2028) — ce qui **tranche la
divergence** signalée plus haut en faveur de la version Crowell.

⚠️ **Limite de preuve assumée** : WebFetch renvoie 403 sur crowell.com et
sur sec.gov/Archives. Le niveau de preuve est « cabinet tier-one + presse
spécialisée », **pas texte réglementaire primaire**.
| ~~02/08/2026~~ → **02/12/2027** | 🔴 **AI ACT — LE CATALYSEUR « HAUT RISQUE » A ÉTÉ REPORTÉ DE 16 MOIS** | **Correction majeure (chasse tech 03/08).** Le **Digital Omnibus on AI** — règlement **(UE) 2026/1744**, adopté par le Parlement le 16/06 et le Conseil le 29/06, **publié au JOUE le 24/07/2026, en vigueur le 27/07** — repousse les obligations « haut risque » **Annexe III** (recrutement, éducation, scoring de crédit) du **02/08/2026 au 02/12/2027**. Annexe I (IA embarquée) → **02/08/2028**. Haut risque du secteur public → 02/08/2030. **Toute thèse bâtie sur une « vague de dépense de conformité IA à partir d'août 2026 » (certification, audit, gouvernance de modèles) vient de perdre 16 mois — par un texte publié il y a dix jours. C'est un vent de FACE, pas un vent arrière.** Journalisé pour que ce catalyseur ne réapparaisse jamais sous sa forme périmée. *(Ce qui s'applique bien depuis le 02/08/2026 : application générale + obligations de transparence de l'art. 50 — divulgation chatbot, marquage des contenus générés.)* Sources : communiqué du Conseil de l'UE du 29/06/2026 + convergence de 6 cabinets |
| **02/12/2026** | AI Act — interdiction imagerie intime non consentie / CSAM + fin de la transition sur le marquage des contenus IA | **Seule échéance AI Act rapprochée qui subsiste** après le report |
| **Fin oct.** (date à confirmer) | **Résultats T3 2026 Technip Energies (TE, Euronext Paris, PEA)** | Chasse industrie 05/08 : **écartée par T2**, mais journalisée avec ses conditions de qualification. S1 publié le 30/07 : **carnet record 25 Md€ (~4,5 ans de CA), book-to-bill 3,5x** — mais **EBITDA récurrent 212 M€ contre 319 M€**, marge tombée à **5,8 % contre 8,7 %**, et **guidance de marge Project Delivery abaissée de 6,5-7,5 % à « > 5,0 % »** (perturbations Hormuz). Titre **−10,24 % le jour même**, à **29,74 € au 04/08** (−30,5 % sous son plus haut 52 sem., capi 5,14 Md€ — **prix réconcilié par capi ÷ 174,2 M titres ✓**). ✅ **Passe le test 60 $/100 $ le baril** : contracteur payé sur projets déjà signés, le CA 2027-2029 est contractuel — ce n'est pas un pari directionnel sur le pétrole. 🔴 **MAIS drapeau T4 NON LEVÉ** : *carnet record pendant que la marge s'effondre* est le motif exact du **« backlog acheté »** (précédents Saipem, Petrofac), et « recouvrement des coûts attendu, dépendant de discussions commerciales » = **créances de réclamation**, l'accrual le plus agressif du secteur. **Cash-flow opérationnel S1 et trésorerie nette hors avances clients non vérifiés** (403 sur le communiqué primaire). **3 vérifications avant toute réouverture** : (1) cash-flow S1 et trésorerie nette hors avances ; (2) chiffrage explicite et daté de l'impact Moyen-Orient ; (3) **la marge des 12,72 Md€ de commandes prises au S1** — si la direction ne la qualifie pas, l'hypothèse par défaut est qu'elle a acheté du carnet |
| **2027** | **Fugro / éolien offshore — la direction date elle-même la reprise à 2027** (31/07/2026) | **Marqueur sectoriel à opposer à toute future thèse éolien offshore** (Deme, Sif, Cadeler…). Fugro : carnet 12 mois **−13,9 %**, éolien offshore **−47 %**, « reset de marché plus profond et plus long ». Écartée le 05/08 comme **couteau qui tombe** : la cause est fondamentale, pas temporaire |
| ~~04/08~~ ✅ **PUBLIÉ — DOSSIER CLÔTURÉ NÉGATIF le 11/08** | **Stevanato Group (STVN, NYSE — CTO)** | 🔴 **UNE PRÉMISSE DE CETTE FICHE ÉTAIT FAUSSE, et elle portait toute la thèse.** J'y avais écrit *« capacités US (Fishers) et Latina quasi achevées — la capacité américaine est déjà bâtie et payée »*. **Le T2 dit l'inverse** : les lignes Fishers (Indiana) et Latina **ne sont pas commerciales avant fin 2026 / début 2027**, et le capex 2026 est guidé à **270-290 M€ bruts**. *La capacité n'est ni achevée ni payée.* — **T2 2026** : CA **302,0 M€ (+8 %)**, EBITDA ajusté **78,7 M€ (+21 %)**, marge 26 %, HVS **45 % du CA**, GLP-1 **~22-23 %**. 🔴 **MAIS : cash-flow opérationnel +31,9 M€ contre 65,7 M€ de capex décaissé → FCF −32,0 M€** ; dette nette **360,3 M€** pour 78,6 M€ de trésorerie. **Guidance : capex 270-290 M€ contre EBITDA 335-345 M€ = le capex absorbe 78 à 86 % de l'EBITDA ; FCF guidé 0 à +20 M€, soit un FCF/EBITDA de 0 à 6 %.** Et le retour au capex normal passe de 2027 à « **voire 2028** » dans le langage du call. ❌ **T4 déclenche ma propre règle écrite le 04/08 : « une capacité quasi achevée doit faire basculer le FCF ; sinon c'est un piège à capital ».** ❌ **T5 — le péage est CONTOURNABLE et il fuit déjà** : deux GLP-1 **oraux** sont approuvés (pilule Wegovy de Novo en 12/2025, **Foundayo/orforglipron de Lilly approuvé le 01/04/2026 et commercialisé depuis le 06/04**) — *un comprimé n'utilise ni seringue préremplie, ni cartouche, ni bouchon revêtu*. **Stevanato et West Pharmaceutical provisionnent eux-mêmes l'hypothèse d'un oral à 30 % du marché GLP-1.** ❌ **T2** : aucune sous-réaction — −4,57 % le jour même, **intégralement effacé en deux séances**, dérive nette nulle sur cinq séances. ❌ **T3** : 10 analystes couvrants, thèse **pré-écrite avant la publication**. ❌ **T6** : la famille détient **~94 % des droits de vote** (253,1 M d'actions de classe A à 3 voix sur 302,8 M) et **a VENDU 7,3 M d'actions à 26,00 $ en mars 2024 — elle n'a pas acheté à 20 $**. Prix triangulé ~**19,8-20,3 $**, −29 % sous le plus haut 52 sem. **RÉOUVERTURE — une seule porte, et les trois conditions doivent être SIMULTANÉES** : au T3, capex en décrue **ET** FCF trimestriel positif **ET** Fishers/Latina effectivement commercialisées |
| **Fin 2026 (JOUE)** | **Critical Medicines Act — publication au Journal officiel de l'UE** | ⚠️ **Ce n'est PAS un catalyseur daté.** Accord politique provisoire Conseil/Parlement le **12/05/2026** ; publication attendue « vers la fin 2026 » ; **date d'application NON CONFIRMÉE**. Application de la règle 16 : *un accord politique n'est pas une obligation effective* — ni date d'application, ni calendrier de montée en charge, ni obligation de dépense, donc **aucun flux mécanique à anticiper**. Exactement le piège qui a coûté le catalyseur « AI Act haut risque » le 03/08. **Ne devient instruisible qu'à la publication au JOUE.** Journalisé pour qu'il ne réapparaisse jamais comme « catalyseur 2026 » |
| **29/09** | Section 232 pharma — entrée en vigueur pour les laboratoires **autres que les grands** | Seule échéance tarifaire encore devant nous |
| **22/09** | **Résultats S1 complets SEMCO Technologies (ALSEM, Euronext Growth Paris, PEA)** | Chasse tech 03/08 : **écartée par T2 + T1 + T6**. Fabricant d'*electrostatic chucks* (mandrins qui maintiennent le wafer), fournisseur de rang 2 des équipementiers. CA S1 **19,9 M€ (+19,9 %)**, carnet **+30 %** [MONO-SOURCE], objectifs 2028 **confirmés et non relevés**. ⚠️ **Le tueur de fond est T6** : l'actionnaire de contrôle **ECM Technologies a cédé 10,8 % du capital à 45,00 € le 21/05/2026** (50 M€, placement accéléré) — *ce n'est pas un vendeur forcé, c'est l'initié le mieux informé qui révèle son prix de réserve*. Le 28/07 n'était qu'un **CA seul** : ni marge, ni cash-flow. Le 22/09 est la 1ʳᵉ vérification du **cash-flow face au capex** (automatisation + nouvelle usine) et de la marge EBIT > 40 % visée. **Ancrage naturel de réexamen : 45 €** |
| **05/08** | **Résultats S1 Heineken (HEIA, Amsterdam, PEA)** | Univers émergents-PEA (`univers-emergents-pea.md`, groupe C) : ~45-50 % d'exposition émergente estimée ; Afrique/Moyen-Orient à **+15,7 % de CA et +62 % de résultat opérationnel** en 2025. Lecture documentaire, aucun dossier ouvert |
| ~~12/08~~ → **13/08** ⚠️ *(date corrigée le 09/08 : deux agrégateurs donnent le 13/08 ; référence 2025 = 14/08 ; sipef.com inaccessible)* | **Résultats S1 Sipef (SIP, Bruxelles, PEA)** | Univers émergents-PEA, **groupe B — le gisement** : 100 % des actifs en Indonésie/PNG/Côte d'Ivoire mais ventes facturées Suisse 34,3 % / Singapour 10,1 %, donc **structurellement mal classée par les screeners**. ⚠️ Titre déjà à son plus haut historique (101,40 €, ⅔ d'un mois de poche offensive pour UNE action) et flottant réduit. **À instruire, pas à acheter** |
| **Fin août** | **Résultats S1 Mota-Engil (EGL, Lisbonne, PEA)** — réf. 27/08/2025 | Univers émergents-PEA, **groupe A** : **78 % du CA consolidé émergent** (Afrique 2 129 M€ +22 %, LatAm 2 006 M€ −33 %), backlog 16,2 Md€, ticket **4,67 €** — le meilleur profil de l'univers. Priorité n°1 à instruire : liquidité réelle et structure de dette d'un contract miner |
| **Fin août** | **Résultats S1 Ageas (AGS, Bruxelles, PEA)** — réf. 27/08/2025 | Univers émergents-PEA, **groupe C** : **52 % du RÉSULTAT opérationnel net vient d'Asie** (860 M€ sur 1 650 M€), 26 M de clients asiatiques. Difficulté d'instruction : **JV non consolidées** → tester le cash qui remonte réellement à Bruxelles |
| **08/09** | **Résultats S1 Rubis (RUI, Paris, PEA)** | Univers émergents-PEA : 87 % du CA hors Europe développée. ⚠️ Dossier écarté le 31/07 (récit de gouvernance issu d'un site SEO, démenti par l'AG du 10/06) — suivi documentaire |
| ~~06/08~~ → **~novembre 2026 (trading update T3)** | ✅ **PUBLIÉ le 06/08 — dossier INSTRUIT ET CLASSÉ NÉGATIF, la clé de lecture posée le 31/07 a tenu.** S1 2026 : CA directionnel **4,9 Md$ (+112 %)**, EBITDA directionnel **1 310 M$ (+92 %)** dont **Turnkey 813 M$** (vs 225), RN **826 M$ (4,90 $/action)**, dette nette **−1 971 M$ à 3 680 M$**, carnet pro-forma record **35,6 Md$**, guidance FY **relevée** à CA ~7,6 Md$ / EBITDA ~1,9 Md$, dividende intérimaire 0,5075 €/action payable le **03/09**. 🎯 **LA SOUSTRACTION QUI TRANCHE : 1 900 − 1 310 = ~590 M$ d'EBITDA implicites au S2, soit MOINS DE LA MOITIÉ DU S1 et SOUS le S1 2025 (682 M$).** Le S1 a encaissé la plus-value de cession du **FPSO ONE GUYANA** — le désendettement de 2 Md$ en six mois le prouve mécaniquement — et le relèvement de guidance (**+100 M$**) est très inférieur à la sur-délivrance du seul S1. **« EBITDA +92 % et guidance relevée » achète une décélération guidée ; le cours à −1,0/−1,5 % le jour même n'est pas une sous-réaction, c'est une lecture correcte.** Prix **32,00 €** réconcilié par un ancrage de qualité rare — **prix moyen des rachats déclarés** (programme 227 M€, 43,88 % exécuté au 05/08) — et titres reconstruits par deux voies (84,3 M€ ÷ 0,5075 = 166,1 M ; 826 ÷ 4,90 = 168,6 M) → capi ~5,3 Md€ ; contrôle : 31,84 ÷ 0,9845 = 32,00 ÷ 0,9895 = **32,34 € de clôture veille implicite ✓**. ❌ **T1** (+90 % sur un an) · ⚠️ **T4 SUSPENDU** (cash-flow opérationnel **hors cession** et marge Turnkey d'exécution isolée non obtenus, 403 sur le PDF) · ⚠️ **T6 drapeau inversé** (la contrepartie acheteuse dominante est **l'émetteur lui-même** — acheter avec le buyback ne donne aucun avantage nommable) · ✅ **T5** est le seul test brillamment passé. **AUCUN seuil écrit, AUCUN créneau consommé** (règle 3 + T4 suspendu). **Appel C041 ouvert (78 %).** Le juge de paix est le **T3 de novembre — 1ᵉʳ trimestre sans effet ONE GUYANA**, seul moment où le COÛT du carnet devient lisible. *Entrée d'origine ci-dessous, conservée pour mémoire :* | Chasse émergents 31/07 : **candidate structurelle**, pas un signal. C'est le seul grand pure-player capex émergent identifié en zone PEA (N.V. néerlandaise, ~32,7 € au 31/07, capi 5,41 Md€ — prix réconcilié par capi ÷ 165,3 M titres). **Écartée aujourd'hui par T1** (+57 à +97 % sur un an, haut de fourchette 52 sem. 20,80-37,34 €) **et T2** (contrats FPSO SEAP-I/II Petrobras signés le 29/05, ~7,8 Md$, largement diffusés ; guidance 2026 déjà relevée au T1). **À lire pour constituer la fiche, pas pour acheter.** Le chiffre décisif est **le COÛT du carnet** : un carnet record avec un cash-flow Turnkey qui ne suit pas = drapeau T4. Réexamen sur repli marqué avec fondamental intact |
| **18/08** | **Résultats S1 NEPI Rockcastle (NRP, Euronext Amsterdam)** [MONO-SOURCE, à reconfirmer] | Chantier émergents 07/08, **groupe B2 (anomalie de PAVILLON)** : N.V. néerlandaise dont **100 % des actifs sont en Europe centrale et orientale** (> 8 Md€, 60 centres commerciaux, Roumanie 1ᵉʳ / Pologne 2ᵉ). Ticket **~8 €**, excellent. 🔴 **Éligibilité PEA NON RÉSOLUE — critère ÉLIMINATOIRE non levé** (foncière + double cotation JSE). ⚠️ Endettement et LTV non instruits ; rendement affiché ~7,17 % — *sur une foncière, autant un signal de risque qu'une aubaine*. **Référentiel, aucun dossier ouvert** |
| **07/09** | **Résultats S1 TEXAF (TEXF, Euronext Bruxelles)** — *calendrier de la société, source PRIMAIRE* | Chantier émergents 07/08, **groupe B2** : société belge dont **100 % des actifs ET du CA sont à Kinshasa (RDC)** — **la plus forte exposition émergente de tout l'univers**, devant Mota-Engil (78 %). S1 2025 : CA record 18,2 M€, EBITDA récurrent +16 %. 🔴 Capi **~126 M€, sous le seuil de 150 M€** ; **liquidité non mesurée** ; risque pays RDC ; convertibilité non instruite. ⚠️ **Piège désamorcé** : capi 126 M€ vs patrimoine 135,5 M€ n'est PAS une décote sur actif net tant que la dette nette est inconnue. **Référentiel, aucun dossier ouvert** |
| **03/09** | **SBM Offshore — paiement du dividende intérimaire** (0,5075 €/action) | Jalon de flux, sans conséquence décisionnelle. Noté parce qu'un détachement explique un décrochage de cours qui n'est pas une information |
| **27/08** | **Résultats annuels Pernod Ricard** (exercice clos au 30/06/2026) | Une des **deux seules** valeurs du CAC 40 restant à publier. Terrain France — à re-viser un jeudi |
| **Fin août** | **Résultats S1 Eiffage** | L'autre. ⚠️ *38 des 40 valeurs du CAC ont publié entre le 16 et le 31/07 — la saison S1 française est DERRIÈRE nous, pas en cours. À vérifier avant de définir un terrain de chasse, pas après* |
| **22/09** (après clôture) | **Résultats S1 COMPLETS Sidetrade (ALBFR, Euronext Growth Paris, PEA)** — marge, résultat, cash-flow (calendrier officiel émetteur) | Chasse FR 30/07 : piste ÉCARTÉE par T2 (le CA S1 du 21/07 a fait +11,3 % dès le 22/07, ~+22 % en 8 jours — dossier couru, découvert 8 jours trop tard). Le 21/07 était un **CA seul** : ni marge ni cash-flow → T4 non vérifiable, or le point décisif d'un SaaS en accélération commerciale est le COÛT des bookings record (S&M vs CF opérationnel). **Réouverture SEULEMENT si** : cours ≤ ~180 € (sous le niveau pré-annonce) **ET** marge opérationnelle S1 en progression **ET** cash-flow qui suit les bookings. Freins : action ~217 € sans fractionnement en PEA (≈ 1,5 mois de poche offensive pour 1 titre), liquidité Growth non mesurée, drapeau structurel agents IA (~234 Md$ de dépense logicielle exposée d'ici 2030, Gartner) |
| **20/10** (après clôture) | CA T3 2026 Sidetrade | Confirme ou infirme la durabilité du record de prises de commandes (ARR T2 +168 %) |

## Chasse profonde 27/07 — jalons découverts (hors surveillances actées)

| Échéance | Événement | Signal |
|---|---|---|
| Sept. 2026 (date à confirmer) | Résultats S1 Séché (SCHP, Paris, PEA) — 1ʳᵉ quantification PFAS/boues ? EBITDA +5-10 % tenu ? | Marché de destruction PFAS créé par la circulaire du 27/04/2026 (en instruction) |
| ~Nov. 2026 | T3 Stalprodukt (Varsovie) — 1er trimestre plein sous sauvegardes acier UE (01/07/2026) | GOES/transformateurs — achetabilité PEA non résolue : radar d'apprentissage seulement |
| ~2029 | Montée en capacité commerciale PanTera (Ra-226 photonucléaire) + usine TerraPower Philadelphie | Jalon long du goulet Ac-225 |
| Post-2026 | Montée de la dépense PFAS eau potable UE (lag 3-5 ans, ~3,6 Md€ d'ici 2036 — Bluefield) | Thème structurel |

## Jalons santé récoltés (chasse du 28/07)

| Échéance | Événement | Intérêt |
|---|---|---|
| ~fin sept./oct. 2026 | Décision de la Commission européenne sur l'obicetrapib (avis CHMP positif du 24/07) | Milestones Menarini pour NewAmsterdam Pharma (Nasdaq → CTO, PFU 31,4 %) — veille seulement |
| S2 2026 | Lecture phase 2 amlitélimab en maladie cœliaque (Sanofi) | Seule valeur résiduelle d'un actif que le marché vient d'écrire à zéro |
| Fin T3 2026 | Sortie de la cell therapy chez Lakefront (ex-Galapagos, Amsterdam/Bruxelles, PEA) — one-off 125-175 M€ | Purge le bruit comptable ; capi ~1,68 Md€ vs trésorerie guidée 1,975-2,050 Md€ (VE négative) mais ⚠️ cash-burn et gouvernance = drapeaux |
| Fin T4 2026 | Dépôt de NDA FDA d'Abivax (obefazimod, colite ulcéreuse) | Jalon ; thèse NON rouverte au prix actuel (+1 700 % en 2025) |

## Septembre 2026

| Date | Événement | Impact |
|---|---|---|
| **27-29/08** | 🔴 **JACKSON HOLE — PREMIER DISCOURS DE KEVIN WARSH comme président de la Fed.** Thème : *« Financial Innovation: Implications for Payments and Policy »* [MONO-SOURCE, à reconfirmer] | **Événement structurant de la fin du mois, et il tombe le LENDEMAIN de Nvidia.** Dans un régime où le débat porte sur une **hausse** de taux (~42-44 % de probabilité en septembre), le premier Jackson Hole d'un nouveau président fixe le cadre. *Manqué au radar jusqu'au 09/08* |
| **12/08, 14h30** | **CPI américain de juillet** — consensus **3,4 %** a/a, sous-jacent **2,5 %** [MONO-SOURCE] | Juin : headline **−0,4 % m/m / +3,5 % a/a** (contre 3,8 % attendus, plus forte baisse mensuelle depuis 2020, énergie −5,7 %) ; sous-jacent **0,0 % m/m / 2,6 % a/a**. **Appel C045 ouvert** |
| **13/08, 14h30** | PPI américain de juillet — consensus +0,1 % m/m [MONO-SOURCE] | Juin : **−0,3 % m/m, +5,5 % a/a** contre 6,2 % attendus |
| **14/08** | Ventes au détail US 14h30 (**consensus formel non publié**) · PIB zone euro T2 2ᵉ estimation ~11h00 (flash +0,4 % t/t) · Michigan prélim. 16h00 | — |
| **18/08** | Production industrielle US 15h15 | *Manqué au radar jusqu'au 09/08* |
| **19/08** | Inflation FINALE zone euro (flash du 31/07 : **2,9 %** contre 2,8 % en juin) | *Manqué au radar jusqu'au 09/08* |
| 10/09 | **BCE** (~93 % proba hausse à 2,50 %) | Taux euro, valeurs domestiques FR |
| 15-16/09 (à confirmer) | FOMC | Macro globale |
| 21/09 | **Reclassement FTSE du Vietnam en « émergent »** | Watchlist XFVT — catalyseur daté |
| ~24/09 | Sommet Trump-Xi attendu | Tech US-Chine, semi, émergents |

## Fin 2026 - 2027

| Échéance | Événement | Impact |
|---|---|---|
| Novembre 2026 | **Expiration de la trêve commerciale Chine-USA** (Busan) | Risque macro majeur identifié |
| **Sept-oct 2026 (rumeur : 23/10, ticker ANTH)** | **IPO Anthropic** — S-1 déposé 01/06, réunions investisseurs en cours (MS/GS/JPM, 24/07) ; valo Série H ~965 Md$ | Watchlist — analyser le S-1 public dès parution sur EDGAR ; règle : JAMAIS le jour 1 (cf. SPCX -47 % vs pic) |
| Mai 2027 | **Grèce : EM → Marchés Développés MSCI, en UNE SEULE ÉTAPE** (et non graduellement) — annoncé le 23/06/2026, effet à la revue d'indice de mai 2027 | ⚠️ **Effet de flux net probablement NÉGATIF, à rebours de l'intuition** : le pays sort d'indices EM où son poids est significatif pour entrer dans des indices DM où il sera minuscule. Un « upgrade » n'est pas une bonne nouvelle de flux. Vérifié sur communiqué MSCI IR (23/06/2026) — chasse émergents 31/07 |
| 2027 | IPO OpenAI probable (> 1 T$ visé) | Watchlist |
| 2027 | IPO Databricks évoquée | Veille |
| Continu | Levée Mistral ~20 Md€ (en négociation 06/2026) | Veille tech FR |
| Trimestriel | Revue de composition CAC 40 (Euronext) | Base de connaissances |
| Saisonnier | Saisons de résultats : oct-nov (T3), fév-mars (annuels), avr-mai (T1), juil-août (S1) | Fenêtres de briefs renforcés |

## 🛢️ ORMUZ — le fait macro dominant du 05/08, et le dossier qu'il rouvre À MOITIÉ

Le secrétaire au Trésor **Bessent** a déclaré qu'un accord avec l'Iran pour
**rouvrir le détroit d'Ormuz** pourrait intervenir « dès mardi ou
mercredi » ; **des navires y transiteraient déjà**. **Brent −5,3 % mardi à
~79 $** (plus bas depuis le 10/07), **WTI ~74,50 $** — **plus de 10 % en
deux séances**. Moteur des records du 05/08 : **CAC 40 8 669,30 en clôture
(+0,03 %)**, record intra-séance 8 693,89 ; **Dow 54 349 (+0,5 %)**, record ;
S&P 500 −0,2 % ; Nasdaq −0,8 %.

📌 **Seuil de mandat** : « Brent > 100 $ durable → réduction de voilure ».
On s'en **éloigne franchement**. Aucune action requise — noté parce que le
mandat l'exige.

### 🚫 Technip Energies — le vent de face NOMMÉ s'inverse, et je ne rouvre pas

TE a abaissé sa guidance de marge Project Delivery de 6,5-7,5 % à
« > 5,0 % » **en invoquant explicitement les perturbations d'Hormuz**, et
j'ai écarté le dossier le 05/08. Une réouverture **annule la cause
déclarée**.

> **Et c'est exactement pourquoi il faut s'en méfier.** J'ai tué un dossier
> il y a 24 heures ; une nouvelle macro spectaculaire me tend une raison de
> le ressusciter. **Les trois vérifications exigées restent TOUTES les trois
> en suspens** : (1) cash-flow opérationnel S1 et trésorerie nette hors
> avances clients ; (2) chiffrage **explicite et daté** de l'impact
> Moyen-Orient ; (3) marge des **12,72 Md€** de commandes prises au S1.
> **Aucune n'est satisfaite par une déclaration du Trésor américain.**
>
> Le drapeau qui a tué TE n'était **pas** Hormuz : c'était **« carnet record
> pendant que la marge s'effondre »** — le motif du *backlog acheté*
> (précédents Saipem, Petrofac) — et des **créances de réclamation** en
> guise de recouvrement attendu. **Ormuz ne touche à rien de tout ça.**
>
> *Un titre ne redevient pas achetable parce qu'une de ses mauvaises
> nouvelles s'annule ; il le redevient quand ce qu'on ne savait pas devient
> su.* Et si la réouverture est réelle, elle est **publique et immédiatement
> dans le prix** — aucun edge à courir derrière. **Rendez-vous inchangé :
> T3, fin octobre.**

| **~19/08/2026** ⚠️ *date calculée, à confirmer* | 🔴 **EXPIRATION DU LOCK-UP D'ARCELORMITTAL SUR ~17,3 % DE VALLOUREC** | **Le fait que personne n'a relié à la guidance dégradée du 30/07.** ArcelorMittal — actionnaire industriel **siégeant au conseil** — a vendu **10,0 % du capital à 24,00 € le 19/05/2026** avec un lock-up de **90 jours calendaires** depuis un règlement attendu vers le 21/05. **Il redevient libre de céder 17,3 % de plus sur un titre à ~18,54 € (07/08), soit 23 % SOUS son propre prix de sortie.** Le titre avait déjà chuté de ~10 % le jour du placement de mai. ⚠️ **Lecture** : ce n'est pas un signal d'achat, c'est **une date à ne pas ignorer avant d'acheter sur faiblesse**. *Les institutionnels servis à 24 € en mai sont de l'offre potentielle, pas des alliés.* À confirmer sur le prospectus (inaccessible, 403) |

## 🔴 VEILLE NON DATÉE — la décision JEDEC sur l'épaisseur des packages HBM

**Aucune date publique. Et pour tout le complexe du packaging avancé, elle
vaut plus que n'importe quelle publication de résultats.**

Des membres du JEDEC — **dont Samsung Electronics et SK Hynix** — discutent
depuis le **15/07/2026** de **relever la limite d'épaisseur des packages HBM
de prochaine génération**. Si la contrainte se relâche, les fabricants de
mémoire **restent sur le micro-bump/TCB et repoussent l'adoption du collage
hybride**.

> 🔑 **La leçon de méthode, encodée le 10/08** : j'avais qualifié
> l'assemblage de *« péage indifférent au vainqueur de la guerre des
> puces »*. **Vrai de l'assemblage en général, FAUX du collage hybride** —
> qui n'est pas une obligation physique mais **un choix de norme**.
> **Un péage qu'un comité de normalisation peut supprimer n'est pas un
> péage : c'est une option sur une norme.**
>
> **Règle** : avant de qualifier une position de « péage », vérifier s'il
> existe un chemin technique **ou normatif** qui le contourne. Un goulet
> physique et un goulet conventionnel ne se valorisent pas pareil.

**Conséquence directe** : c'est le déclencheur binaire du dossier **BESI**
(kill confirmé le 10/08 — réouverture sur décision JEDEC tranchée, ou
commande mémoire annoncée nommément, ou prix < ~140 €). Prochain rendez-vous
BESI : **22/10/2026, 07h00 CET**, où la mise à jour « commandes collage
hybride mémoire » sera de nouveau attendue — **son omission au 23/07 a fait
reculer le titre malgré des chiffres records.**

## Conditions de marché à surveiller (non datées, seuils du mandat)

- Brent **> 100 $ durable** → scénario réduction de voilure (cf. mandat).
  **État au 05/08 : ~79 $, en repli de >10 % en deux séances** (Ormuz)
- Spread OAT-Bund **> 90 pb durable** → alerte valeurs domestiques FR
- FOMC : passage effectif à une **hausse** de taux → re-pricing global
- DXY : cassure sous ~98 → vent favorable émergents (renforcer l'idée Inde)

---

## 🔴 NVIDIA — §3.4 RÉSOLU LE 17/08, à J−9 : l'alliance de 500 Md$ est datée et son traitement est connu

**Ce que je cherchais depuis le 09/08** : *l'alliance de financement
déplace-t-elle hors bilan l'élément que ma grille prétend mesurer ?*
**Réponse : OUI, et de la manière la plus difficile à lire.**

### Les faits, datés et primaires

| Élément | Fait |
|---|---|
| **Date d'annonce** | **10/08/2026** — *donc DANS ma fenêtre de veille, un jour après l'écriture de la grille* |
| Source | Communiqué **NVIDIA** (nvidianews) + reprise Bloomberg/Fortune |
| Partenaires | **Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR** |
| Montant | **plus de 500 Md$** de capitaux tiers à mobiliser |
| **Statut juridique** | 🔴 **des MOU — PAS des accords définitifs** |
| **Traitement** | La dette est **délibérément maintenue HORS du bilan de NVIDIA**, routée via des **plateformes de financement indépendantes** |
| **Sens des flux** | ⚠️ **Ce n'est PAS une dépense de NVIDIA** : chaque firme souscrit indépendamment et dirige les fonds vers **LES CLIENTS** de NVIDIA |
| Non divulgué | L'engagement de **chaque** firme, et **les actifs/contrats d'usage servant de collatéral** |

### 🎯 L'INSTRUCTION DE LECTURE DU 26/08 — et elle change d'endroit

> **Ces 500 Md$ risquent de n'apparaître NI en dette, NI en engagement
> reconnu** : statut MOU + véhicules tiers + bénéficiaires qui sont les
> clients, pas l'émetteur.
>
> **Donc : ne pas les chercher dans le compte de résultat ni au bilan.**
> **Aller lire la note ENGAGEMENTS ET PASSIFS ÉVENTUELS, et toute clause de
> GARANTIE ou de BACKSTOP.** C'est là, et nulle part ailleurs, que se joue la
> question posée par §3.4.

**Le couplage à surveiller, déjà écrit le 09/08 et qui devient opérationnel** :
**ACIE est précisément le segment où se trouvent les clients que NVIDIA
finance.** Si **ACIE accélère** pendant que **la ligne d'investissements
bondit**, la croissance et le financement pointent vers les mêmes
contreparties. *Repère du T1 : Hyperscale **+12 %** séquentiel contre ACIE
**+31 %**.*

### ⚠️ Un chiffre tiers que je note sans l'adopter

Une estimation d'analyste évoque une **sous-évaluation de la dépréciation
d'environ 176 Md$ sur 2026-2028** à l'échelle du secteur, gonflant les
résultats publiés. **MONO-SOURCE, non vérifié, et d'un ordre de grandeur
extraordinaire.** Je l'inscris comme **question à poser**, pas comme fait :
*si l'infrastructure financée hors bilan s'amortit plus vite que prévu, le
porteur du risque n'est pas celui que le bilan désigne.*

### Ce que ça ne change PAS

**Aucune probabilité, aucun seuil, aucun contrat n'est modifié.** Ce
pré-engagement précise **où lire**, pas **quoi conclure**. *La grille du
09/08 tient ; elle gagne une adresse.*
