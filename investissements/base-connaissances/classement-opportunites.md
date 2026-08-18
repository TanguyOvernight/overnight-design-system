# CLASSEMENT DES OPPORTUNITÉS — la liste qui ne perd rien

**Règle fondatrice (demande Tanguy, 27/07/2026)** : « il ne faut pas
trouver une bonne affaire la veille et l'oublier le lendemain parce qu'on
a fait de nouvelles recherches. Tant que je n'ai pas signifié avoir mis
de l'argent sur le meilleur placement, il doit rester en liste. »

Ce fichier est la **mémoire persistante** du comité. Il est relu et
re-classé à CHAQUE édition. Une candidate n'en sort JAMAIS par oubli.

## Les 3 lois de la persistance

1. **Rien ne disparaît sans motif écrit.** Une candidate ne quitte ce
   classement que par l'une de ces quatre portes, toujours journalisée :
   - 💰 **EXÉCUTÉ** — Tanguy déclare avoir investi (mise à jour du
     portefeuille + décompte du budget) ;
   - ⏰ **EXPIRÉ** — échéance de re-test atteinte sans déclenchement →
     PASSE automatique (renouvellement possible UNE fois, motivé) ;
   - ☠️ **TUÉ** — verdict RÉFUTÉ, ou kill criterion déclenché ;
   - 📉 **DÉCLASSÉ** — une meilleure idée occupe désormais l'euro ET la
     candidate est descendue hors des 3 premiers rangs pendant 30 jours.
2. **Comparaison quotidienne obligatoire, ancienneté indifférente.** Toute
   nouvelle trouvaille du jour est classée sur le MÊME mètre que les
   anciennes. Une candidate de lundi qui reste meilleure le vendredi
   garde son rang — la fraîcheur n'est PAS un critère de qualité. À
   l'inverse, une trouvaille du jour ne prend la tête que si elle bat les
   sortantes sur le mètre commun, pas parce qu'elle est neuve.
3. **Veille du plaidoyer ≠ sortie de liste** (réconciliation avec la règle
   anti-ancrage). Après 3 éditions sans décision, une candidate cesse
   d'être RE-ARGUMENTÉE (plus de développement, plus de relance) mais
   **conserve sa ligne, son rang et son déclencheur**. Elle redevient
   bavarde uniquement sur fait nouveau. Anti-ancrage et anti-oubli sont
   ainsi tous deux respectés : on ne répète pas, on n'oublie pas.

## Le mètre commun (rappel — charte de l'Arbitre)
Rang = espérance nette d'impôt et de frais / risque, ajustée de la
corrélation au portefeuille (ρ élevé = hurdle doublé), comparée au coût
d'opportunité : **le cœur WPEA à 5 %/an net est le rang de référence**.
Une candidate classée SOUS le cœur est conservée pour son déclencheur,
pas pour son rang.

---

## CLASSEMENT AU 15/08/2026

### 🔴 CORRECTION MAJEURE DU 15/08 — le chemin `capi ÷ titres` est DÉMOLI, pas seulement suspect

Le 13/08 j'écrivais que `capi ÷ titres` n'était *« indépendant que si la capi
vient d'une autre source que le prix »*. **C'était trop indulgent. Le chemin
est faux même quand les sources diffèrent**, et la démonstration est
arithmétique :

> Sur un instantané frais de Séché : `655,21 M€ ÷ 7 857 732 = **83,38 €**`,
> alors que **la même page affiche 84,20 €**. **Les deux nombres ne bouclent
> pas** (−1,0 %).

**Ce que ça prouve** : une capitalisation affichée est **calculée par le site
à partir d'un prix**, et d'un prix **plus ancien** que celui qu'il montre.
Diviser la capi par les titres ne reconstruit donc pas un prix — **ça exhume
un prix périmé.**

**Conséquence directe et coûteuse : mon « 79,43 € au 04/08 » sur Séché
n'était pas le prix du 04/08.** C'était un prix antérieur, d'origine
indéterminée. Le « cohérent au centime près avec la transaction du 13/07 »
dont j'étais si content **était le symptôme, pas la validation** : il collait
à juillet parce que c'était un prix de juillet.

### 🎯 ET LE BIAIS SYSTÉMATIQUE A ENFIN UNE CAUSE — une hypothèse falsifiable

J'avais noté que **mes erreurs allaient toutes dans le même sens** (elles
rapprochaient un déclencheur, donc sous-estimaient les prix) et je
l'expliquais par un argument faible : *« une archive est d'autant plus servie
qu'elle correspond à un épisode de volatilité »*. **Meilleure hypothèse :**

> **Tous les modes de panne du canal dégradé ont en commun de renvoyer une
> donnée PLUS ANCIENNE** — instantané gelé (STM 46,17 €), clôture mal datée
> (LLY 1 148,61 $), capi périmée (Magnum), `capi ÷ titres` (Séché).
> **Dans un marché qui monte depuis des semaines, « plus ancien » signifie
> mécaniquement « plus bas » — donc « plus près d'un seuil d'achat ».**
> Le biais n'est pas dans les sources : **il est dans la conjonction d'un
> canal qui retarde et d'un marché qui monte.**

⚠️ **Je l'écris comme une HYPOTHÈSE, avec son test** — j'ai réfuté trois
théories en une semaine pour avoir sauté cette étape. **Prédiction
falsifiable : si le marché baissait plusieurs semaines, mes erreurs
devraient basculer et devenir systématiquement HAUTES.** Tant que ce test
n'est pas passé, ceci reste une explication plausible, pas un fait acquis.

### ✅ Le chemin de remplacement — et il est meilleur que tous les précédents

**Les déclarations réglementaires de RACHAT D'ACTIONS.** Deux lignes en ont
bénéficié aujourd'hui :

| Ligne | Document | Ce qu'il donne |
|---|---|---|
| **STM** | **Form 6-K** | 65 209 actions rachetées du **3 au 7 août** au prix moyen pondéré de **45,7643 € sur Euronext Paris** |
| **Aubay** | **déclaration hebdomadaire des transactions sur actions propres** | Un **prix moyen pondéré daté et officiel**, chaque semaine. Celle du **3-7 août existe** ; celle du 10-14 août n'était pas encore indexée |

> 🔑 **C'est un prix DÉCLARÉ PAR L'ÉMETTEUR dans un dépôt réglementaire.** Il
> ne peut être ni gelé, ni mal daté, ni mal converti — **les trois modes de
> panne qui m'ont fait publier trois faux chiffres.** Et il ne dépend
> d'**aucune** page de cotation.
>
> ⚠️ **Sa limite, écrite d'emblée** : un **VWAP hebdomadaire n'est pas une
> clôture**. Il ne peut **PAS** déclencher un seuil de prix — il sert à
> *contrôler* un prix obtenu ailleurs. *Le confondre avec une clôture serait
> la version « moyenne » de l'erreur d'instantané gelé.*

**C'est la voie pour débloquer Aubay, aveugle depuis 4 semaines.**

### ⚠️ L'état réel du canal est pire que « 403 » : il est FERMÉ

**Zéro `WebFetch` abouti aujourd'hui**, sur des hôtes pourtant distincts
(stooq, globenewswire, sipef.com, **sec.gov**). **Aucun document d'émetteur,
aucun dépôt SEC, aucun PDF n'a été lu.** Tout ce qui suit transite par des
**résumés de moteur de recherche** — des synthèses d'extraits, pas des
sources primaires.

**Et ce mode de défaillance est ACTIF, pas théorique** : sur SIPEF, le même
moteur a produit **quatre jeux de chiffres mutuellement incompatibles** sur
la même question, en mélangeant très probablement les millésimes 2024, 2025
et 2026.

---

### 🔴 CORRECTION D'ÉTAT DU 15/08 — le PEA n'a JAMAIS été ouvert

**Capture Fortuneo du 15/08, 12h02.** Elle ne montre qu'une section
**« Banque »** : un **compte courant** à **100,00 €**, carte reçue et à
activer. **Aucun compte-titres, aucun PEA.** La tuile « Bourse » est une
**sollicitation commerciale** — *« Vous souhaitez investir sur les marchés
financiers ? Envie de transférer votre PEA chez Fortuneo ? »* — c'est-à-dire
exactement ce qu'on affiche à quelqu'un **qui n'en a pas**.

**Ce que j'avais écrit le 07/08, et qui était faux** : *« PEA Fortuneo —
OUVERT le 07/08, NON ALIMENTÉ… il attend son premier virement, qui se pousse
depuis la banque externe »*. **Répété dans huit briefs consécutifs comme
l'action n°1.**

**La bonne reconstruction des faits** : ce que Tanguy a ouvert est le
**compte BANCAIRE** Fortuneo. Le « versement » que l'application réclamait
servait à **activer ce compte courant** — pas un plan d'épargne en actions.
**Et cette étape est FRANCHIE** : les 100 € sont là, la carte est arrivée.
*Ce que je prenais pour un blocage était une étape réussie.*

> 🔑 **L'erreur de méthode, et elle n'est pas de lecture** : j'ai interprété
> une capture d'écran ambiguë dans le sens de **mon propre récit** — celui
> d'un dossier qui avance — puis j'ai **propagé cette interprétation huit
> jours sans jamais la re-tester**, alors que je disposais d'un signal
> contraire évident : *Tanguy me disait ne pas trouver comment verser.*
> **J'ai traité son blocage comme une friction d'interface. C'était une
> information sur l'état réel du monde.**
>
> **Règle encodée** : *quand l'utilisateur décrit une impossibilité
> opérationnelle persistante, l'hypothèse par défaut n'est pas « il ne
> trouve pas le bouton » — c'est « le bouton n'existe pas, parce que l'objet
> n'existe pas ».* Une friction qui dure est un **fait sur le monde**, pas un
> problème d'utilisateur.

**Ce que ça change concrètement** : l'action n°1 n'est pas « faire le
virement », c'est **OUVRIR LE PEA** (parcours *ouverture*, **pas**
*transfert* — le transfert s'adresse à qui en détient déjà un ailleurs).
**Bonne nouvelle non anticipée** : le compte courant Fortuneo étant actif,
l'alimentation du PEA devient un **virement interne, instantané** — le délai
« nouveau bénéficiaire » de 24-48 h que je redoutais **tombe**.

**Ce que ça NE change pas** : l'horloge fiscale des 5 ans démarre au
**premier versement sur le PEA**. Ni l'ouverture du compte bancaire, ni les
100 € qui y dorment ne l'ont fait courir.

⚠️ **Un appel de calibration est concerné** : **C025** a été résolu ❌ le
08/08 avec pour diagnostic *« Tanguy AGISSAIT (PEA ouvert) et butait sur un
mur opérationnel »*. **La prémisse entre parenthèses était fausse.** Le score
(0,4900) ne bouge pas — l'issue reste FAUSSE, et on ne réécrit pas un appel
résolu. Mais **l'explication que j'en avais tirée reposait sur un fait
inexact**, et le mode d'échec « FRICTION » que j'avais encodé doit être
requalifié : ce n'était pas de la friction, **c'était une étape manquante que
je croyais franchie**. *Voir `registre-calibration.md`.*

### ⏱️ ÉTATS NON RE-TESTÉS — contrôle instauré le 16/08, **relevé au 17/08**

| État republié | Dernière vérif. | Âge | Statut au 17/08 |
|---|---|---|---|
| **PEA non ouvert** ; compte courant actif, 100 € | 15/08 | 2 j | ✅ frais |
| **Aubay — aucun cours fiable** | 25/07 | **23 j** | 🔴 **EN COURS DE LEVÉE** — la déclaration hebdo de rachat du 10-14/08 devrait être indexée aujourd'hui |
| **Séché — aucun cours daté** | 04/08 *(relevé invalidé le 15/08)* | **13 j** | 🔴 **PIRE QU'AVANT** : l'ancien chiffre est tombé sans être remplacé. **23 jours avant son échéance du 09/09** |
| **Frais Fortuneo** (1ᵉʳ ordre ≤ 500 € gratuit) | 08/08 | **9 j** | ⚠️ **NON RE-TESTÉ — et republié dans CHAQUE brief comme instruction d'exécution** |
| **WPEA — frais courants 0,20 %** *(conflit 0,52 % jamais tranché)* | 08/08 | **9 j** | ⚠️ **NON RE-TESTÉ.** ✅ **Délégué à Tanguy le 16/08** : lire la fiche à l'ouverture du PEA |
| **BESI — aucune donnée** | — | — | 🔴 Jamais établi |
| Fiscalité PFU 31,4 % / PEA 18,6 % | 27/07 | 21 j | ⚠️ NON RE-TESTÉ *(stable par nature)* |

> **Le tableau fait déjà son travail** : il a désigné Aubay et Séché comme les
> deux priorités du screening de ce lundi, **avant** que le jour ne commence.
> *Un contrôle qui ne change pas l'ordre du jour ne sert à rien ; celui-ci
> l'a changé.*

### ⏱️ (référence — état initial du 16/08)

**Application de la règle d'hier** : *tout état du monde que je republie sans
l'avoir re-vérifié depuis plus de 7 jours est marqué « non re-testé ».*
« PEA ouvert » avait été republié **huit fois sans un seul contrôle** — voilà
le tableau qui doit empêcher que ça recommence.

| État republié | Dernière vérification | Âge | Statut |
|---|---|---|---|
| **PEA non ouvert** ; compte courant Fortuneo actif, 100 € | **15/08** *(capture)* | 1 j | ✅ frais |
| **Aubay — aucun cours fiable** | 25/07 | **22 j** | 🔴 **NON RE-TESTÉ** — et c'est le trou lui-même qui a 22 jours |
| **Séché — aucun cours daté** | 04/08 *(et ce relevé est tombé le 15/08)* | **12 j** | 🔴 **NON RE-TESTÉ**, à 24 j de l'échéance du S1 |
| **Fortuneo Starter : 1ᵉʳ ordre du mois ≤ 500 € gratuit, puis 0,35 %** | 08/08 | **8 j** | ⚠️ **NON RE-TESTÉ** — *et je le republie dans CHAQUE brief comme une instruction d'exécution* |
| **WPEA — frais courants 0,20 %** *(conflit avec un 0,52 % distributeur, jamais tranché)* | 08/08 | **8 j** | ⚠️ **NON RE-TESTÉ** — l'écart vaut ~300 € sur 5 ans |
| **BESI — aucune donnée** | — | — | 🔴 Jamais établi |
| Fiscalité : PFU **31,4 %** / PEA > 5 ans **18,6 %** | 27/07 | 20 j | ⚠️ **NON RE-TESTÉ** — *stable par nature (loi de finances), mais republié quotidiennement* |

> 🔑 **Le plus gênant n'est pas le plus vieux, c'est le plus RÉPÉTÉ.** Les
> frais Fortuneo et le TER du WPEA sont republiés à chaque brief comme des
> instructions d'exécution — **ce sont eux qui feront agir Tanguy**, et ce
> sont eux qui ne sont plus contrôlés depuis huit jours. *L'ancienneté d'un
> fait compte moins que le nombre de décisions qu'il porte.*

### 🔴 CORRECTION DU 17/08 — ma « seule ligne vraiment réconciliée » ne l'était pas

Le 15/08, j'écrivais que STM était **« LA SEULE LIGNE VRAIMENT RÉCONCILIÉE »**,
par deux chemins prétendument indépendants : Paris **46,66 €** et NYSE
**53,92 $ ÷ 1,1536 = 46,74 €**, écart 0,17 %. **Les deux affirmations sont
fausses.**

**① Les chiffres étaient périmés d'un jour.** Clôtures réelles du **14/08** :
**47,67 €** à Paris et **54,29 $** au NYSE. Preuve du décalage :
`54,29 − 0,37 (variation du jour) = 53,92 $` — **mon « 53,92 $ du 14/08 »
était la clôture du 13/08.**

**② Et surtout, la MÉTHODE ne peut structurellement pas boucler :**

> **Paris clôture à 17h35. Le NYSE clôture à 22h00 heure de Paris.**
> Les deux « chemins » ne sont **pas simultanés** — ils sont séparés de
> **4 h 25 de cotation américaine**. Diviser une clôture de New York par un
> taux de change **ne peut pas** reproduire une clôture de Paris, et
> l'écart mesuré n'est pas une erreur de données : **c'est le mouvement de
> l'action entre 17h35 et 22h00.**

**Vérification sur les chiffres corrects du 14/08** :
`47,67 € × 1,158 (EUR/USD du jour) = 55,21 $` contre **54,29 $** cotés au
NYSE → **1,7 % d'écart**. *L'écart de 0,17 % du 13/08 n'était pas une
validation : c'était une journée où l'action n'a presque pas bougé entre les
deux clôtures.*

> 🔑 **J'ai pris une coïncidence pour une preuve, et je l'ai promue « seule
> ligne fiable du livre ».** *C'est le mode d'erreur le plus coûteux du
> registre : non pas un chiffre faux, mais une **fausse certitude** — qui
> fait cesser de chercher.*

**Le chemin n'est pas mort, il est mal spécifié.** Règle corrigée :

> **Un ancrage inter-place exige des cotations SIMULTANÉES, jamais deux
> clôtures.** Pour contrôler une clôture de Paris (17h35), il faut le cours
> de New York **à 11h35 heure de New York**, pas sa clôture. À défaut de
> cotation horodatée, **ce chemin est inutilisable.**

*Cinquième contrôle né de la panne du canal, et le premier qui invalide un
chemin que je croyais acquis : bouclage `veille × (1+var)` · `capi ÷ titres`
interdit · somme des composantes d'un indice · cohérence fourchette/cours ·
**et désormais la simultanéité inter-place**.*

### 🔴🔴 CORRECTION DU 18/08 — **ma correction d'hier était elle-même fausse**

Hier j'ai publié, dans le brief et dans ce fichier, que mon cours STM du
14/08 (**46,66 €**) était *« périmé d'un jour »* et devait être remplacé par
**47,67 €**. **C'est le 47,67 € qui est faux, et mon chiffre d'origine qui
était juste.**

**La preuve est arithmétique et elle est nette.** STM a clôturé à **49,06 €
le 17/08, en hausse de +5,15 %** *(plus forte hausse du CAC 40 ce jour-là)* :

| Candidat pour la clôture du 14/08 | Test | Résultat |
|---|---|---|
| **46,66 €** *(mon chiffre du 15/08)* | `49,06 ÷ 1,0515 = ` **46,6572** | ✅ **écart 0,003 €** |
| 47,67 € *(ma « correction » du 17/08)* | `47,67 × 1,0515 = ` **50,13** contre 49,06 cotés | ❌ **écart 1,07 €** |

> **Ce que je retire** : l'affirmation « mes chiffres étaient périmés d'un
> jour ». **Ce que je maintiens intégralement** : la réconciliation
> inter-place du 15/08 était **invalide**, parce qu'elle appariait une
> clôture de Paris (17h35) à une clôture de New York (22h00). *Le défaut de
> méthode était réel ; la correction de fait qui l'accompagnait ne l'était
> pas.*

### 🔑 LA LEÇON, ET C'EST LA PLUS IMPORTANTE DE LA SEMAINE

**J'ai une règle exactement pour ça, et je ne l'ai pas appliquée.** Règle 5
d'écriture d'un seuil : ***une correction s'audite comme une affirmation.***

Le 47,67 € était **MONO-SOURCE et sans bouclage arithmétique**. Je l'ai
accepté en trente secondes — alors que j'aurais exigé deux ancrages pour un
chiffre ordinaire.

> **Pourquoi il est passé : il n'arrivait pas seul. Il arrivait emballé dans
> une démonstration de méthode brillante et vraie** *(les 4h25 entre les deux
> clôtures)*. **L'histoire a fait la persuasion à la place de la preuve.**
>
> **RÈGLE RENFORCÉE : un chiffre qui accompagne une correction de méthode
> est PLUS suspect qu'un chiffre nu, pas moins.** La qualité du raisonnement
> qui l'entoure ne transfère aucune fiabilité au nombre. *Les auditer
> séparément, toujours : le raisonnement d'un côté, le chiffre de l'autre.*

*C'est la deuxième fois qu'une de mes corrections est fausse — la première
était la « correction » du CPI le 10/08. Deux fois sur deux, le défaut est le
même : j'ai relâché le standard de preuve parce que je corrigeais.*

### 📊 LE CLASSEMENT AU 18/08 — 8 candidates, **AUCUN MOUVEMENT DE RANG**

*(clôtures du lundi 17/08 ; les marchés européens viennent d'ouvrir)*

| Rang | Candidate | Chiffre vs déclencheur | Qualité | Mvt |
|---|---|---|---|---|
| **①** | **Cœur World** | 🔴 **PEA NON OUVERT.** Budget d'août **1 000 €** | ✅ 15/08 | **=** |
| **②** | **Or** | ❌ **Aucune clôture validée au 17/08.** Relevés intra-journaliers de **4 384 $ à 4 436 $ — 52 $ d'amplitude**. Le +35,70 $ d'un diffuseur implique une veille à 4 352,60 $, **incompatible** avec mes 4 364,96 $ → règle 2 échoue. 🔴 Garde-fou R : achat **INTERDIT** | ❌ REJETÉ. ⚠️ **Point structurel permanent** : *le spot or n'a PAS de clôture officielle unique* (marché OTC 24 h). Toute « clôture spot » est une **convention de diffuseur** | **=** |
| **③** | **Séché** | 🔴 **AGGRAVÉE — voir encadré.** Mon unique donnée n'est **pas un cours** | ❌ **PIRE QUE PRÉVU** | **=** |
| **④** | **Eli Lilly** | **1 190,41 $** au 17/08 → achat ≤ 1 020 $ : **+16,7 %** · déclassement ≤ 846 $ : **+40,7 %** | ⚠️ MONO-SOURCE, mais **cohérence interne OK** (clôture dans le range 1 163,50-1 198,52). ✅ **Dividende chiffré : 1,73 $, ex-date 14/08 = 0,15 % du cours** → *le détachement n'explique PAS le mouvement du 14/08. Mon raisonnement d'hier est confirmé* | **=** |
| **⑤** | **Magnum** | ✅ **10,40 Md€** au 14/08 (Amsterdam) → il faut **−26,9 %**, soit un cours de **12,41 €** | ✅ **LA MEILLEURE DONNÉE DU BRIEF** : `16,98 € × 612 259 739 titres`, le nombre de titres venant d'un **dépôt SEC 424B3 daté du 29/07/2026** — document réglementaire, non dérivé d'un cours | **=** |
| **⑥** | **Aubay** | **~56,85 €** (VWAP partiel 10-12/08) → **+13,7 %** au-dessus du seuil de 50 € | ✅ **Déclaration de rachat 10-14/08 TROUVÉE** : 529 + 250 titres le 10/08 à 56,66/56,70 € · 1 501 le 11/08 à **56,8667 €** · 1 953 le 12/08 à **56,8782 €** · 13-14/08 « proches de 57,00 € ». ⚠️ MONO-SOURCE, total hebdo et VWAP officiel introuvables | **=** |
| **⑦** | **STM** | **49,06 €** au 17/08 **(+5,15 %, plus forte hausse du CAC 40)** → **+16,8 %** au-dessus du seuil de 42 € | ✅ **Bouclage arithmétique** : `49,06 ÷ 1,0515 = 46,657` = **exactement mon chiffre du 15/08**. *Deux chemins indépendants convergent — cette fois c'en est vraiment une* | **=** |
| **⑧** | **Nike** | **39,09 $** au 17/08 — **−4,02 % en une séance** | ✅ **RÉCONCILIÉ** : `40,73 × (1 − 0,0402) = 39,093` ✓, deux éditeurs distincts. ⚠️ **Anomalie écartée** : un « plus bas 52 sem. à 39,41 $ le 17/08 » est **impossible** avec une clôture à 39,09 $ — *un plus bas ne peut pas être au-dessus de la clôture* | **=** |

### 🔴 SÉCHÉ — la ligne ne s'aggrave pas seulement, elle change de nature

**Correction de référentiel** : mon « **79,40 € au 13/07** », seule donnée
datée de la ligne, **n'est PAS une clôture de séance.** C'est une transaction
de **SMC53 SAS** (entité liée) portant sur **119 actions** — un **prix
d'exécution déclaré**, pas un cours de marché.

> **Ma ligne la plus aveugle l'est davantage que je ne le croyais : je n'ai
> jamais eu de cours Séché en août, et mon dernier « cours » de juillet n'en
> était pas un.**

**Et deux arrêtés mensuels manquent d'affilée** — ni le 30/06, ni le 31/07 ne
sont indexés, **18 jours après** l'arrêté du 31/07.

> 🧪 **TEST FALSIFIABLE, avec sa date** : *si la déclaration du 31/07
> n'apparaît pas d'ici **jeudi 20/08**, l'hypothèse « le programme de rachat
> est en pause » devient plus économique que « l'indexation est en retard ».*
> **Deux hypothèses, une date, et l'une des deux tombera.**

⚠️ **L'échéance est peut-être un jour plus proche** : un compteur de site de
cotation lu le 14/08 impliquait le **08/09**, contre mon hypothèse du 09/09.
**Retenir ~08-09/09, ±1 jour, non confirmé.**

### 🚨 CE QUE ÇA IMPLIQUE VRAIMENT — un contrat qui ne peut plus se déclencher

Le contrat Séché comporte **quatre conditions** : EBE S1 ≥ 125 M€ · France
organique ≥ 0 % · guidance 275-285 M€ confirmée · **et cours ≤ 90 €**.

> **Trois sont comptables et seront lisibles au communiqué. La quatrième
> exige un prix que je n'ai plus.** *Un contrat dont une condition n'est pas
> mesurable est un contrat qui ne peut pas se déclencher — même si le monde
> lui donne raison.*

**Ce n'est pas une mort de classement, c'est une mort opérationnelle**, et
elle a une date : **il me faut un cours Séché datable avant le ~08/09.** Le
rang ③ tient — le mètre est l'espérance ajustée du risque, et la thèse PFAS
+ redressement est intacte — **mais le compte à rebours porte désormais sur
ma capacité à MESURER, pas sur celle de la société à PERFORMER.**

### 🎯 Magnum — le piège nommé, et c'est la 4ᵉ vérification du biais

**Les 7,67 Md$ (≈ 6,56 Md€) qui auraient déclenché un achat sont
identifiés : c'est la VALORISATION D'INTRODUCTION EN BOURSE de décembre
2025.** *(Bloomberg, 08/12/2025 : « Trades at €7.9 Billion Value ».)*
**Huit mois d'âge.**

> **Quatrième vérification de l'hypothèse du 15/08, et la première où la
> provenance du chiffre est NOMMÉE** — non plus « périmé » en général, mais
> « le prix d'introduction ». *Séché, Magnum, Aubay, Magnum à nouveau :
> ancien → bas → à portée du seuil.*

### (état antérieur au 17/08, conservé)

| Rang | Candidate | Chiffre du jour vs déclencheur | Qualité | Mvt |
|---|---|---|---|---|
| **①** | **Cœur World** | 🔴 **PEA NON OUVERT** — action n°1 inchangée. Budget d'août **1 000 €** | ✅ vérifié le 15/08 | **=** |
| **②** | **Or** | **4 364,96 $/oz**, clôture du **14/08** (−0,64 %). 🔴 Garde-fou **R = 43,9 % > 35 % : achat d'or INTERDIT** | ✅ **RÉCONCILIÉ** : `4 364,96 + 28,13 = 4 393,09` veille, et `−28,13 ÷ 4 393,09 = −0,640 %` ✓. *Mes 4 371-4 373 $ n'étaient pas faux : c'était un relevé de 9h ET, la séance a fini plus bas* | **=** |
| **③** | **Séché** | 🔴 **TOUJOURS AVEUGLE.** Seul point daté : **79,40 € au 13/07** — un mois. Les lectures d'août (81,9 / 82,60 / 84,20 €) restent **toutes non datées**. Sous le seuil de 90 € dans **toutes** les lectures, mais **aucune ne le prouve à une date opposable** | ❌ **INTROUVABLE.** ⚠️ **Piège identifié** : le ticker **SCHP** est homonyme du *Schwab U.S. TIPS ETF* (USD) — il pollue toute requête en anglais | **=** |
| **④** | **Eli Lilly** | **1 180,16 $** au 14/08 → achat ≤ 1 020 $ : **+15,7 %** · déclassement ≤ 846 $ : **+39,5 %** *(contre +44,2 % au 12/08)* | ⚠️ **MONO-SOURCE**, non bouclée. ⚠️ **Le 14/08 était le détachement du dividende** — mais un dividende trimestriel sur un titre à 1 200 $ pèse une fraction de pour-cent : **il ne peut pas expliquer les −3,3 %.** *Le mouvement est donc réel — raisonnement de ma part, non sourcé* | **=** |
| **⑤** | **Magnum** | Capi implicite **~10,4 Md€** → il faut **−27 %** | 🔴 **PIÈGE DE LA RÈGLE 4, ACTIF.** Deux capis **non datées** à **33 % d'écart** : 11,40 Md$ et **7,67 Md$ (6,56 Md€)**. **La seconde passerait SOUS mon seuil de 7,6 Md€ et déclencherait un achat** — c'est exactement le profil que la règle interdit : bas, flatteur, à portée. Test de cohérence : `19,67 $ × 612,26 M titres ≈ 12,0 Md$ ≈ 10,4 Md€` ⇒ **la lecture basse est un artefact** | **=** |
| **⑥** | **Aubay** | ✅ **LA LIGNE SE DÉBLOQUE.** **~57,2-57,4 €** au 14/08 (fourchette certaine **57,0-58,4 €**) → **+14 à +15 %** au-dessus du seuil de 50 € | ✅ **Ancré sur un DOCUMENT RÉGLEMENTAIRE** — déclaration de rachat du 3-7/08 : **55,7733 € de VWAP le 03/08**, montée à **57,00 €** le 07/08. ⚠️ Clôture exacte indépartageable (57,2 ou 57,4 — un moteur a **permuté open et close**) | **=** |
| **⑦** | **STM** | **47,67 €** au 14/08 → **+13,5 %** au-dessus du seuil de 42 €, il faut **−11,9 %** | 🔴 **DÉCLASSÉE EN QUALITÉ** : la réconciliation dont je me prévalais est invalide *(voir encadré)*. MONO-SOURCE Paris | **=** |
| **⑧** | **Nike** | **40,73 $** au 14/08 (−1,21 %) | ✅ **LA SEULE LIGNE VRAIMENT RÉCONCILIÉE DU JOUR** : `40,73 + 0,50 = 41,23 $` = mon relevé du 13/08, et `−0,50 ÷ 41,23 = −1,213 %` ✓. **Deux chemins réellement indépendants** — une donnée antérieure hors recherche du jour, et une variation publiée qui reconstitue la veille | **=** |

### 🎯 Aubay — le déblocage confirme l'hypothèse du biais directionnel

**Ma dispersion avouée de « 49 à 57 € » doit être AMPUTÉE PAR LE BAS.** Le
document réglementaire prouve qu'Aubay s'échangeait à **55,77-57,00 € début
août** : **aucune lecture à 49-51 € n'est défendable.** Mes deux chiffres
douteux se rangent — 54,30 € ≈ fin juillet, 56,50 € ≈ début août : **périmés,
pas absurdes.**

> **Aubay n'était pas « peut-être proche de son seuil ». C'est la ligne la
> PLUS ÉLOIGNÉE d'un achat de tout le livre.** *La lecture basse suggérait
> exactement l'inverse — troisième vérification consécutive de l'hypothèse
> écrite le 15/08 : le canal renvoie du plus ancien, donc du plus bas, donc
> du plus proche d'un déclencheur.*

⚠️ **Et un fait de dossier que je n'avais pas** : Aubay a **relevé ses
objectifs le 23/07** — CA S1 **351,8 M€ (+30,8 % publié, +11,4 % organique)**,
guidance portée de 676-690 à **695-705 M€**. *Le dossier s'améliore pendant
que le point d'entrée s'éloigne.* **Le rang ne bouge pas** — le mètre est
l'espérance ajustée du risque, pas la distance au déclencheur — **mais le
contrat ≤ 50 € devra être ré-examiné avant le T3**, une guidance relevée
rendant un repli de 13 % moins probable à choc constant. *Je ne le modifie
pas aujourd'hui : déplacer un seuil parce que le prix s'en éloigne est le
mauvais motif.*

📅 **Rendez-vous à 18h00 aujourd'hui** : Aubay publie ses déclarations de
rachat **le lundi suivant, entre 17h50 et 18h05** (motif reconstruit sur 5
publications). Celle du **10-14/08 sort donc ce soir** — *ce n'était pas un
trou de recherche, c'était une attente de calendrier.*

### ❌ Séché : le chemin d'Aubay ne se réplique pas

**Séché publie ses déclarations de rachat MENSUELLEMENT**, arrêtées en fin de
mois et publiées 3-5 jours après. **Celle au 31/07 devrait exister** (publiée
vers le 4-5 août) — **non indexée à ce jour. C'est la meilleure cible de
relance**, même si elle ne donnera qu'un prix de fin juillet.

✅ Confirmé au passage : **7 857 732 actions au 01/06/2026** (12 987 335 droits
de vote théoriques) — *mon nombre de titres est juste. Mais **aucun prix n'en
a été tiré** : `capi ÷ titres` reste interdit.*

### (état antérieur au 15/08, conservé pour l'historique)

| Rang | Candidate | Env. | Chiffre du jour vs déclencheur | Qualité de la donnée | Statut | Mvt |
|---|---|---|---|---|---|---|
| **①** | **Cœur World** (hurdle 5 %/an net) | 🔴 **PEA — PAS OUVERT.** *(état corrigé le 15/08, voir encadré)* | 🔴 **J'AI DÉCRIT LE MAUVAIS BLOCAGE PENDANT 8 JOURS.** Ce qui est ouvert et actif chez Fortuneo, c'est le **COMPTE COURANT** (100 €, carte reçue) — **pas un PEA**. ⏱️ L'horloge des 5 ans n'a pas démarré, mais la marche à franchir n'est pas un virement : **c'est l'ouverture du plan.** Budget d'août : **1 000 €** | **immédiat** | 🟢 | **=** |
| **②** | **Or** (assurance) | CTO | **~4 371-4 373 $/oz** au 14/08 **à 9h00 ET** — soit **+1 %** sur la semaine. 🔴 **Garde-fou R (43,9 % > 35 %) : achat d'or INTERDIT ce mois-ci.** Écart à la cible toujours maximal : **0 % détenu contre 5-10 %** | ⚠️ **PAS une clôture spot** — le seul chiffre de clôture est celui des **futures décembre (4 432 $)**, non comparable (contango ~1,4 %) | 🟢 | **=** |
| **③** | **Séché Environnement** | PEA | ⚠️ **PRIX RÉVISÉ À LA HAUSSE, ET MA MARGE FOND.** Deux lectures d'août : **81,9 €** et **84,20 €**. Le seuil est ≤ 90 € : la ligne reste dessous, **mais de −6,4 % à −9,0 % seulement, contre les −11,7 % que j'annonçais.** 🔴 **L'arrêté PFAS boues n'est TOUJOURS pas paru** | ❌ **Les deux cours sont NON DATÉS → rejetés.** Et le 79,43 € qu'ils remplacent était **circulaire** | 🟡 | **=** |
| **④** | **Eli Lilly** | CTO | **1 220,28 $** → **+44,24 %** au-dessus du seuil de 846 $. 🔻 **REPASSE SOUS LA BARRE DES +45 %** (+45,05 % le 10/08). Le déclencheur de déclassement **n'est plus atteint dans sa substance**. Contrôle **05/09**, inchangé | ⚠️ Date non tranchée : « as of 13/08… previous close » ⇒ très probablement la **clôture du 12/08**. Motif d'instantané gelé non levé | 🟡 | **=** |
| **⑤** | **Magnum Ice Cream** | PEA | **~9,88 Md€** vs ≤ 7,6 Md€ → il faut **−23,1 %**. PASSE, réouverture sur fait | ✅ `11,40 Md$ ÷ 1,1536 = 9,883 Md€`, à **0,13 %** de mon relevé précédent. ⚠️ Variante concurrente **12,68 Md$ (10,99 Md€)** non tranchée | 🔴 | **=** |
| **⑥** | **Aubay** (ESN) | PEA | **4ᵉ SEMAINE SANS COURS FIABLE.** Lectures : 54,30 € · 56,50 € · dispersion avouée **49-57 €**. → écart au seuil de 50 € entre **+8,6 %** et **+13,0 %** | ❌ Le 56,50 € porte le **drapeau instantané gelé** (cours = clôture précédente, **à l'identique**, sans variation % ⇒ bouclage impossible). ✅ **Mais la conclusion « ne rien faire » est ROBUSTE à toute l'incertitude** — toutes les lectures sont au-dessus du seuil | ⚪ | **=** |
| **⑦** | **STM** (semi) | PEA | ✅ **46,66 € au 14/08** vs ≤ 42 € → **+11,1 %**, il faut **−9,99 %**. −0,9 % sur la semaine | ✅ **LA SEULE LIGNE VRAIMENT RÉCONCILIÉE.** Deux univers distincts : Paris **46,66 €** et NYSE **53,92 $ ÷ 1,1536 (change de source indépendante) = 46,74 €** — **écart 0,17 %**. *Contrôle bonus : le VWAP de rachat 6-K (45,7643 €, 3-7 août) est compatible* | 🔴 | **=** |
| **⑧** | **Nike** | CTO | **41,23 $** au 13/08 (clôture) — **−1,1 %** sur la semaine. Veille sans contrat | ⚠️ MONO-SOURCE. Le **40,80 $** du 14/08 est **intraday**, non retenu — *et c'est un chiffre BAS, donc suspect par construction* | 🔴 | **=** |

### Justification du non-mouvement — et pourquoi Séché ne bouge PAS malgré la correction

**Aucune candidate n'a changé de rang, et je ne fabrique pas de mouvement
pour faire vivre le tableau.** Le seul cas qui méritait examen est **Séché** :

- **Ce qui plaide pour la faire descendre** : son argument principal — *« la
  seule ligne SOUS son prix visé, de −11,7 % »* — était **partiellement un
  artefact de mesure**. La vraie marge est de −6,4 % à −9,0 %, et **aucun de
  ces deux chiffres n'est datable**. Le dossier a perdu à la fois de la marge
  et de la qualité de preuve.
- **Ce qui l'emporte** : le mètre commun est l'**espérance nette ajustée de
  la corrélation**, pas la marge au déclencheur. Une correction de 3 à 5 %
  sur le prix d'entrée ne déplace pas une espérance pluriannuelle sous celle
  d'une ligne qui, comme LLY ④, est **~4 points sous le hurdle**. Et Séché
  **reste la seule candidate dont le prix soit du bon côté de son seuil**.
- 🔑 **Le vrai enjeu n'est pas le rang, c'est le CONTRAT** : Séché se joue
  sur le **S1 du 09/09** (EBE ≥ 125 M€ **ET** France organique ≥ 0 % **ET**
  guidance 275-285 M€ confirmée **ET** cours ≤ 90 €). *Trois des quatre
  conditions ne dépendent pas du cours.* **Un prix révisé de 4 % ne change
  pas un contrat dont les trois quarts sont comptables.**

⚠️ **Ce que la correction change VRAIMENT, et il faut le dire** : le jour où
ce contrat se déclenchera, **je n'aurai pas de prix fiable pour vérifier la
quatrième condition.** Séché n'a **aucun cours daté depuis le 04/08** — et le
04/08 lui-même vient de tomber. **C'est la ligne la plus aveugle du livre**,
et son échéance est dans 25 jours.

### 📅 Séché — le sablier PFAS, mis à jour au 15/08

L'arrêté boues **n'est pas paru au JO**. Ce qui existe :
- **Circulaire interministérielle du 27/04/2026** (recherche des PFAS dans
  les boues destinées à l'épandage) — **Bulletin Officiel, pas Journal
  Officiel. Une circulaire n'est pas un arrêté.**
- **Arrêté du 20/04/2026** : il existe, mais il porte sur les PFAS **dans les
  EAUX** en entrée/sortie de STEP. **Ce n'est pas l'arrêté boues.**
- **Seuils provisoires en vigueur** (calqués sur la Wallonie, 2026-2028) :
  **40 µg/kg MS** (6 PFAS prioritaires) et **400 µg/kg MS** (22 PFAS) — *ce
  sont exactement les seuils de la condition C011*. Campagnes trimestrielles
  imposées aux plus grandes STEP **depuis le 01/07/2026**.
- **L'arrêté reste attendu « à l'été 2026 »**, pour une application au
  01/01/2027, sur avis du HCSP. **L'été administratif se termine le 21/09 ;
  la butée de C013 est le 30/09.** *La fenêtre se referme dans ~5 semaines.*

⚠️ **Réserve de méthode** : cette conclusion vient de la **convergence de
plusieurs commentateurs juridiques**, pas d'une consultation de Légifrance
(inaccessible). **Une absence dans un index n'est pas une preuve d'absence au
JO.**

---

## CLASSEMENT (état antérieur au 11/08, conservé pour l'historique)

Statut : 🟢 déclencheur proche/actionnable · 🟡 en attente d'un événement
daté · ⚪ surveillance longue · 🔴 sous le hurdle, conservée pour mémoire

⚠️ **Fiabilité des cours : DÉGRADÉE, 16ᵉ jour.** 403 au CONNECT sur 100 %
des hôtes. **Aucun cours ci-dessous n'a la qualité « clôture officielle »
sauf mention expresse — à revérifier chez le courtier avant tout ordre
exprimé en prix.** Les ordres exprimés en MONTANT ne sont pas affectés.

### ✅ NETTE AMÉLIORATION DU CANAL — 3 lignes sur 8 ont enfin un ancrage propre

Le blocage réseau n'a pas bougé, mais **la méthode a progressé** : là où je
cherchais des cotations, je reconstruis désormais les prix par des chemins
que le canal dégradé n'atteint pas.

| Ligne | Chemin de reconstruction | Résultat |
|---|---|---|
| **Séché** | `capi 624,16 M€ (04/08) ÷ 7 857 732 titres (déclaration AMF du 01/08)` | **79,43 €** — et il colle au centime à la transaction déclarée du 13/07 (79,40 €) |
| **STM** | STM et STMPA sont **la même action** (NL0000226223), arbitrée : `clôture NYSE 56,10 $ ÷ EUR/USD 1,1550`, les deux datées du 07/08 | **48,57 €**, validé par `capi 50,023 Md$ ÷ 56,10 = 891,7 M titres` |
| **Nike** | clôture horodatée **16:00:02 EDT**, validée par `61,86 Md$ ÷ 41,70 = 1,4834 Md titres` | **41,70 $** |

> 🔑 **La leçon vaut au-delà du jour** : quand le canal des cotations est
> mort, **les déclarations réglementaires (nombre de titres), les
> capitalisations datées et les cotations d'une AUTRE place reconstituent
> un prix que la page de cotation ne donne plus.** Trois chemins, aucun
> n'est une page de cotation.

**Restent sans ancrage propre** : **Aubay** (aucun cours d'août, 3ᵉ semaine —
le « 54,30 € +1,69 % » et la capi de 692 M€ **viennent du même instantané
non daté**, ce n'est donc PAS un double ancrage), **Magnum** (capi étiquetée
« août » sans jour), **l'or** (deux valeurs de la même famille de sources).

### 🎣 Trois faux positifs désamorcés, et le troisième est maintenant EXPLIQUÉ

| Faux chiffre | Ce qu'il aurait produit | Ce qu'il est réellement |
|---|---|---|
| STM « 46,17 € » *(que j'ai retenu vendredi)* | un écart au seuil sous-estimé de 4 points | **page affichant cours = clôture précédente : instantané GELÉ, indatable** |
| LLY « 1 148,61 $ » *(que j'ai PUBLIÉ le 07/08)* | +35,8 % au lieu de +40,2 % | **très probablement la clôture du 31/07** — un chiffre de juillet mal daté en août |
| Magnum « 6,56 Md€ » | **sous le seuil → réouverture à tort** | ✅ **arithmétique établie** : la page affiche « 7,67 Md$ (6,56 Md€) », soit un taux implicite de **1,169** contre un EUR/USD réel de **1,1550**. **Capi périmée ET taux périmé** |

> **Le biais reste orienté dans le même sens : les trois erreurs
> rapprochaient un déclencheur.** Motif mécanique inchangé — un déclencheur
> est un prix BAS, et une archive est d'autant plus servie qu'elle
> correspond à un épisode de volatilité.
>
> Conséquence de discipline : **aucun ordre exprimé en prix n'est
> exécutable sans revérification chez le courtier.** Les ordres en MONTANT
> (cœur) restent parfaitement sûrs.

⚠️ **Incident non résolu, reporté : la clôture LLY du 03/08.** Deux valeurs
circulent, **chacune internement cohérente mais mutuellement
incompatibles** : **1 113,43 $** et **1 121,36 $**. L'ancrage capitalisation
ne discrimine pas (écart 0,7 %, **sous sa résolution de ~1 %**). Sans
conséquence décisionnelle. *Le 05/08, le même ancrage a en revanche
parfaitement tranché — l'écart y était de 2,6 %.*

**8 candidates actives** (9 − **Walmart ☠️ TUÉ aujourd'hui**). Je ne
fabrique pas de lignes pour tenir le compte.

| Rang | Candidate | Env. | Situation vs déclencheur | Prochaine échéance | Statut | Mvt |
|---|---|---|---|---|---|---|
| **①** | **Cœur World** (hurdle 5 %/an net) | **PEA Fortuneo — OUVERT le 07/08, NON ALIMENTÉ** | 🟢 **Le blocage a changé de nature.** Le PEA existe ; il attend son **premier virement**, qui se pousse depuis la banque externe (pas de bouton dans l'app). ⏱️ **L'horloge fiscale des 5 ans démarre au PREMIER VERSEMENT, pas à l'ouverture — elle n'a donc pas démarré.** Budget d'août : **1 000 €** (C025 résolu ❌ : l'ordre de juillet n'a pas été exécuté, les 500 € se reportent) | **immédiat** | 🟢 | = |
| **②** | **Or** (assurance) | CTO | **~4 328 $/oz** (10/08) [MONO-SOURCE, pas de second ancrage de nature différente] — la fourchette non tranchée de vendredi (4 315-4 358 $) se resserre sur le **bas-milieu**. 🔴 **Mais le garde-fou R (43,9 % > 35 %) INTERDIT tout achat d'or ce mois-ci** : l'or est classé non-cœur, en acheter aggraverait l'écart. Reprend dès que R repasse sous 30 %, c'est-à-dire dès le 1ᵉʳ ordre. Écart à la politique toujours maximal : **0 % détenu contre une cible de 5-10 %** | **immédiat** | 🟢 | = |
| **③** | **Séché Environnement** | PEA | ✅ **79,43 € au 04/08** — **seule ligne SOUS son prix visé, −11,7 %**. Ancrage propre par capitalisation : `624,16 M€ (04/08) ÷ 7 857 732 titres (01/08, déclaration AMF) = 79,43 €`, **cohérent au centime près avec la transaction déclarée du 13/07 (79,40 €)**. ⚠️ *3ᵉ semaine sans clôture d'août au sens strict ; deux cours de 84,20 € et 82,60 € rejetés — non datés ET arithmétiquement incompatibles avec la capi qui les accompagne*. 🔴 **L'arrêté PFAS n'est TOUJOURS pas paru** — même formulation « été 2026 » qu'en avril, pour une application au 01/01/2027 : la fenêtre se referme dans ~6 semaines | S1 **09/09**, butée 30/09 | 🟡 | **=** |
| **④** | **Eli Lilly** | CTO | 🔔 **~1 227,1 $ au 10/08 (+3,48 %) → +45,05 % au-dessus du seuil de 846 $. LE DÉCLENCHEUR DE DÉCLASSEMENT EST ATTEINT DANS SA SUBSTANCE — mais pas dans sa DATE** (il est écrit « au contrôle du 05/09 »). **Je ne l'exécute pas par anticipation** : avancer une échéance parce que le résultat me convient est ce que j'ai refusé de faire sur C025. 🔒 **Pré-engagement : si l'écart dépasse encore +45 % le 05/09, le déclassement ⑤→⑦ est AUTOMATIQUE et sans discussion.** Contrôle : `1 185,85 × 1,0348 = 1 227,13` et retour à 1 185,86 ✓, sous le plus haut du jour (1 227,92) T2 : CA **22,974 Md$ (+47,7 %)**, guidance CA relevée de 3 Md$ à **85,0-87,0 Md$** *(et non 85-86 — corrigé)*, guidance BPA publiée **abaissée** par 3,03 $ d'IPR&D | contrôle **05/09** · butée 06/11 | 🟡 | **= (conservé)** |
| **⑤** | **Magnum Ice Cream** | PEA | **~9,87 Md€ vs ≤ 7,6 Md€ (+29,9 %)** — `11,40 Md$ ÷ 1,1550`. PASSE, réouverture sur fait. ✅ **Le faux positif du « 6,56 Md€ » est maintenant EXPLIQUÉ arithmétiquement** : la page affiche « 7,67 Md$ (6,56 Md€) », soit un taux implicite de **1,169**, incompatible avec l'EUR/USD réel de **1,1550** au 07/08. **Capi périmée ET taux périmé.** Deutsche Bank abaisse son objectif de 14,50 à 13,50 € | aucune (fait, pas date) | 🔴 | **=** |
| **⑥** | **Aubay** (ESN) | PEA | ~54,30 € vs ≤ 50 € (**+8,6 %**) — s'éloigne pour une **bonne** raison. S1 confirmé : CA **351,8 M€, +11,4 % organique** ; T2 **+12,2 % organique** ; international **intégralement organique** (+12,0 % au T2) ; **objectifs 2026 relevés**. ⚠️ *aucune clôture d'août ; un « 57 € » circule, rattaché au flux du 23/07* | T3 fin oct. | ⚪ | **=** |
| **⑦** | **STM** (semi) | PEA | ✅ **~47,07 € au 10/08 vs ≤ 42 € → +12,1 %. La ligne SE RAPPROCHE** (−3,1 % lundi, « Intel leads chips lower »). *Le repli des semis attendu du scénario B est arrivé sans attendre le CPI.* ⚠️ **Il faudrait encore −10,8 %, et deux conditions sur trois resteraient ouvertes.** Vendredi : 48,57 € *(et le « 46,17 € » retenu vendredi ne tient pas : page affichant cours = clôture précédente, instantané gelé)*. 🔑 **Méthode nouvelle et propre** : STM et STMPA sont **la même action** (NL0000226223), arbitrée entre NYSE et Paris → `clôture NYSE 56,10 $ ÷ EUR/USD 1,1550 = 48,57 €`, les deux datés du 07/08 ; capi 50,023 Md$ ÷ 56,10 = **891,7 M titres** ✓. Reconstruction du 06/08 : **46,91 €** → **+3,5 % sur la séance de vendredi**. ⚠️ *Dérivé, pas observé : aucune cotation Paris en euros datée* | Q3 fin oct. | 🔴 | **=** |
| **⑧** | **Nike** | CTO | ✅ **41,70 $ — clôture officielle horodatée du 07/08, 16:00:02 EDT**, validée par capi `61,86 Md$ ÷ 41,70 = 1,4834 Md titres` ✓. **−1,77 % en deux séances** — contrat retiré, veille sans contrat | ~fin sept. | 🔴 | **=** |

### Justification écrite de chaque mouvement

- **Vicat ③ → ☠️ TUÉ.** *Kill criterion n°3 déclenché sur le FOND avant de
  l'être sur la FORME.* Le titre a fait **+13,15 % le 30/07, à 69,70 €** —
  le contrat écrit la veille l'était sur la clôture du 29/07 (61,60 €),
  **antérieure à la publication**. L'espérance recalculée au vrai prix
  tombe de +6,74 % à **+4,79 %/an, soit SOUS le World nu (5 %)** et 1,7 à
  2,7 pts sous le hurdle ajusté de corrélation. Verdict **robuste sur toute
  la fourchette d'incertitude 68-70 €** et sur toute la bande 4-6 % de
  l'hypothèse World. Les deux portes du contrat étaient devenues
  **logiquement inatteignables en état de thèse intacte** : Porte A
  exigeait −19,7 % ET une guidance non abaissée, or les seuls chemins vers
  56 € violent cette seconde condition. Renouvellement unique consommé.
  **C020 résolu ❌ · C021 maintenu ouvert.**
- **Mobility Global ④ → ☠️ TUÉ.** PASSE. **L'edge nommé a expiré** : la
  thèse reposait sur des « vendeurs FORCÉS » (fonds S&P 500 inéligibles),
  un edge **de flux, donc daté**. À J+21 séances, le titre **monte** de
  +2,4 % en trois semaines (20,57 → 21,06 $) — un titre sous liquidation
  ne dérive pas à la hausse. Et l'obscurité, condition de survie d'un
  spin-off, n'existe pas : **6 analystes couvrent déjà le titre, consensus
  « Buy », objectif 27,83 $**. Espérance **+2,28 %/an net de PFU** — et
  **+4,21 % même en supposant un bon print le 07/08**, donc toujours sous
  le cœur nu. *Un contrat dont l'exécution réussie laisse encore l'euro
  sous le hurdle n'est pas un contrat, c'est un piège.* Contrat par
  ailleurs incohérent : ses 4 conditions se résolvaient **le même jour en
  sens opposés** (P jointe réelle ≈ 4,5 %). **C028/C029/C030.**
- **Magnum : SEUL mouvement de mérite du jour.** Deux lignes disparaissent
  au-dessus d'elle et **elle ne monte pas** — rétrogradation relative de
  2 rangs. Motif factuel : l'écart au seuil s'est **élargi** (+31 % contre
  +21 % hier), et la rumeur d'offre Blackstone/CD&R du 15/05 se lit en
  **sélection adverse** — deux des acheteurs les mieux informés de la
  planète regardent le dossier depuis 2,5 mois et n'ont **pas** déposé
  d'offre, pendant que la capi montait à 9,97 Md€. S'y ajoute un
  **surplomb vendeur permanent** : Unilever conserve 19,9 % à écouler sur
  5 ans — l'exact inverse d'une thèse de vendeurs forcés. **C031.**
- **Séché (+2), Aubay (+2), STM (+2), Nike (+2)** : décalages strictement
  mécaniques du 31/07, aucune réévaluation de mérite.

### Mouvement du 04/08 — LLY ④ → ⑤, WMT prend ④

**Un seul mouvement, une seule justification.** Première mesure d'espérance
de LLY conduite **au prix du jour** avec une table à trois scénarios :
**+3,01 %/an net de PFU**, soit **sous le World nu (5 %)** et **4,0 points
sous le hurdle ajusté de corrélation (7,0 %)**.

C'est **exactement le motif** qui a fait descendre Magnum le 30/07
(+3,04 %/an). L'appliquer à Magnum et pas à LLY serait du favoritisme.

**LLY ne descend pas plus bas** parce que : (i) son **mécanisme est intact
et testable dès demain**, alors que celui de Magnum est cassé ; (ii)
ρ ≈ 0,45-0,55 lui vaut le **bas** de la bande de prime (2 pts, pas 3) —
la santé diversifie sectoriellement, même si elle n'apporte aucune
diversification de devise ; (iii) son contrat est **vivant et daté**.

**Aucun autre mouvement** — on ne re-classe pas des lignes qu'on n'a pas
re-mesurées aujourd'hui.

### Mouvement du 05/08 — LLY CONSERVE ⑤, et le motif est important

**Ce qui pousserait à la rétrogradation** : l'écart au déclencheur passe de
**+31 % à +38 %** — désormais **pire que celui de Magnum ⑥ (+31 %)**. La
probabilité d'achat avant le 06/11 tombe à **~3 %**.

**Ce qui l'emporte** : le mètre commun n'est **pas** la distance au
déclencheur, c'est l'espérance nette ajustée de corrélation — et c'est
**exactement sur le mécanisme** que LLY et Magnum ont été départagées le
04/08. Le motif écrit ce jour-là était : *« son mécanisme est intact et
testable dès demain, alors que celui de Magnum est cassé »*.

**Demain a eu lieu, et le mécanisme ne s'est pas seulement montré intact —
il s'est renforcé** : CA battu de +13 % contre consensus (22,97 contre
20,26 Md$), volume **+60 %**, marge brute **+1,3 pt**, guidance CA relevée
de **3,0 Md$**. Chez Magnum : dette nette **+297 M€** sur une thèse de
désendettement, FCF intégralement issu du besoin en fonds de roulement.

> **Rétrograder LLY sous Magnum aujourd'hui reviendrait à récompenser un
> mécanisme cassé et à sanctionner un mécanisme confirmé, sur le seul
> critère de la distance au prix — c'est-à-dire à faire du prix un jugement
> de qualité. Refusé.**

**LLY reste une candidate conservée pour son déclencheur, pas pour son
rang** : espérance ~**+3 %/an net de PFU** contre un hurdle ajusté de
**7,0 %** — **~4 points en dessous**.

> 📉 **Déclencheur de déclassement, écrit maintenant** : si au contrôle du
> **05/09/2026** l'écart au seuil de 846 $ dépasse **+45 %** sans
> amélioration d'espérance, **LLY passe ⑤ → ⑦**, sous Magnum et sous
> Aubay, **sans nouvel arbitrage**.

### Mouvement du 06/08 — AUCUN, et la réconciliation LLY est faite

✅ **Réserve levée.** Le prix retenu hier était bien un pré-marché.
**Clôture officielle du 05/08 : 1 148,61 $ (+2,95 %)**, réconciliée par
trois contrôles : arithmétique (`1 148,61 ÷ 1 115,68 = +2,95 %`), chemin
indépendant (`1 147,45 − 31,76 = 1 115,69`, même clôture veille), et
**capitalisation** (`× 893,8 M = 1,027 T$` ≡ « 1,02 T$ » publié — qui
**rejette** le concurrent 1 178,37 $, lequel donnerait 1,05 T$).

> 🔑 **Ce que la séance enseigne** : ouverture 1 177,50 (**+5,5 %**), plus
> haut 1 215,94 (**+9,0 %**), midi ~1 190 (**+7 %**), **clôture 1 148,61
> (+2,95 %)**. Quatre chiffres circulent et **ils sont tous exacts** — ils
> diffèrent par l'heure de rédaction. Aucun contrôle arithmétique ne les
> départage : ils bouclent tous sur 1 115,68 $. **Seul l'ancrage
> capitalisation tranche — et il a une RÉSOLUTION (~1 %) qu'il faut
> connaître.** C'est pourquoi il avait échoué le 03/08 (écart 0,7 %) et
> mord ici (écart 2,6 %). Ce n'était pas une faiblesse de l'outil.

**Écart réel : +35,8 %**, contre +31,9 % au 04/08 — élargissement de
~4 points, **et non de 6 comme publié hier**. Déclencheur de déclassement
(>45 % au 05/09) : **non approché**. Motif de conservation du 05/08
(mécanisme confirmé contre mécanisme cassé chez Magnum) **inchangé**.

**Aucun autre mouvement.** Chasse à zéro, aucune ligne re-mesurée. **SBM
Offshore, instruit et publié ce matin, N'ENTRE PAS** : classé négatif
(EBITDA S1 gonflé par la cession du FPSO ONE GUYANA ; S2 implicite
~590 M$ contre 682 M$ au S1 2025). Il repart avec **un appel de
calibration (C041) et rien d'autre** — pas de créneau, pas de seuil.
*Un dossier instruit et classé négatif n'est pas une candidate.*

### Mouvement du 07/08 — ☠️ **WALMART TUÉ**, et le reste décale mécaniquement

⚠️ **Ce paragraphe a été réécrit en fin de matinée.** Je l'avais d'abord
conclu « aucun mouvement » après le re-classement de 9h — puis **l'Arbitre
saisi de la réécriture du contrat Walmart a rendu un PASSE**. Le mouvement
n'est pas venu du marché, il est venu de l'audit.

**WMT ④ → ☠️ TUÉ.** Motif complet en « Sorties enregistrées ». LLY ⑤→④,
Magnum ⑥→⑤, Aubay ⑦→⑥, STM ⑧→⑦, Nike ⑨→⑧ : **décalages strictement
mécaniques, aucune réévaluation de mérite.**

Les autres candidats au mouvement, examinés puis écartés :

- **Séché ③** — l'arrêté PFAS n'est toujours pas paru. C'est légèrement
  défavorable *(le point intermédiaire du contrat glisse vers sa butée)*
  mais **le contrat se joue sur le S1 du 09/09**, pas sur l'arrêté. Rang
  inchangé.
- **Or ②** — **+4,0 %** en deux jours, plus haut de 7 semaines. **Le prix
  de l'or n'entre pas dans ce classement** (`or-execution.md` interdit
  toute condition d'arrêt liée au prix). Son rang tient à l'écart à la
  cible — 0 % détenu contre 5-10 % — qui n'a pas bougé d'un pouce.
- **Aubay ⑥** — le S1 confirme un mécanisme sain (+11,4 % organique,
  objectifs relevés). *S'éloigner du déclencheur pour une bonne raison ne
  fait ni monter ni descendre un rang* : ça déplace la probabilité
  d'exécution, pas la qualité du dossier.

**Les deux entrées du chantier émergents (TEXAF, NEPI Rockcastle)
N'ENTRENT PAS au classement** : référentiel documenté, mais T1 non
instruisable (aucun prix frais) et **achetabilité PEA non levée pour
NEPI — critère éliminatoire**. *Un chantier remplit le référentiel, pas le
classement.*

### 🔒 Créneaux de surveillance : **4/6** — DEUX créneaux vides, délibérément

> **Un créneau vide est un actif, pas un gaspillage.** Le remplir parce
> qu'il vient de s'ouvrir serait la version « surveillance » de l'erreur
> tuée aujourd'hui chez Vicat : **fabriquer un déclencheur au lieu d'en
> trouver un.** Six lignes surveillées pour un portefeuille de ~1 000 €
> sont déjà une extravagance d'attention.

### Justification écrite de chaque mouvement

- **Or, ⑧ → ② (+6 — le seul vrai mouvement du jour).** Trois motifs, dont
  **aucun n'est le prix de l'or** : (i) c'est la seule ligne du livre qui
  **reçoit un euro aujourd'hui**, et un rang mesure l'usage marginal de
  l'euro ; (ii) l'écart à la politique est maximal — **0 % détenu contre
  une cible de 5-10 %**, aucune autre ligne n'a un écart pareil ; (iii)
  ρ < 0,3, la plus basse décorrélation du livre face à un portefeuille à
  85-90 % USD/tech. **Mouvement d'exécutabilité et d'écart à la cible, pas
  de conviction sur l'or** — `or-execution.md` interdit toute condition
  d'arrêt liée au prix, et le prix n'entre pas dans ce classement.
- **Vicat, ② → ③ (−1).** Le contrat a résolu sans achat. Surtout,
  l'espérance nette recalculée aujourd'hui (**+6,74 %/an**) est
  **marginale** face au hurdle ajusté de corrélation (6,5-7,5 %). Vicat
  n'est plus « en attente d'un déclencheur imminent », il est « en attente
  d'un prix inférieur de 10 % ». Il tient ③ parce que le mécanisme est
  intact et que c'est le dossier le mieux documenté du livre.
- **Séché, ⑥ → ⑤ (+1).** Mouvement **mécanique** (MSFT retiré au-dessus),
  pas une réévaluation de mérite — signalé comme tel pour ne pas donner
  l'illusion d'une promotion. Reste la seule ligne dont le prix est déjà
  bon, et la seule dont la date de publication n'est toujours pas annoncée.
- **Magnum, ④ → ⑥ (−2).** 4 conditions sur 5 échouées ; **dette nette en
  hausse de 297 M€ en six mois** sur une thèse de désendettement ;
  **totalité du FCF issue du besoin en fonds de roulement** ; volume en
  décélération pendant que le prix accélère ; levier 2,54x **croissant**
  dans le régime de taux le plus défavorable depuis 2007. Espérance nette
  **+3,04 %/an — sous le World nu**, avant toute prime satellite. Ne
  descend pas plus bas parce que ρ ≈ 0,3 et l'éligibilité PEA gardent une
  valeur d'option réelle à −21 %.
- **WMT, Aubay, STM, Nike (+1 chacun)** : **décalages mécaniques** dus au
  retrait de MSFT. **Aucune réévaluation de mérite.**
- **Mobility Global conserve ④** alors que son déclencheur est le plus
  proche du livre (+3,4 %). Motif : dossier de **grade C** (aucun chiffre
  vérifié aujourd'hui), logé au CTO (31,4 % de PFU à retrancher avant
  comparaison), et 2,6x de levier post-spin — la même pénalité de régime
  que celle appliquée à Magnum. **La qualité de preuve tranche l'égalité,
  pas la proximité du seuil.**

**Aucun autre mouvement.** Les positions relatives de LLY, Aubay, STM et
Nike n'ont pas changé et je ne fabrique pas de mouvement pour faire vivre
le tableau.

### ⚠️ Lacune de couverture signalée, non traitée aujourd'hui
**Mobility Global (④)** porte un déclencheur chiffré mais **n'a aucun
appel au registre** — exactement la violation découverte ce matin sur
Vicat. Son catalyseur tombe le **07/08**, avant qu'un créneau de
surveillance ne se libère. Instruction au Chasseur : **présenter Mobility
Global comme dossier instruit d'ici le 05/08**, avec le test décisif déjà
identifié (cash-flow opérationnel / EBITDA ajusté, levier 2,6x post-spin).
Un créneau et un appel lui seront ouverts alors, en déclassant le plus
faible des six.

## Sorties enregistrées (mémoire des refus — ne pas re-signaler sans fait NOUVEAU)

| Candidate | Sortie | Motif | Date |
|---|---|---|---|
| IBA (IBAB) | ☠️ TUÉ | RÉFUTÉ 25 % : valo PanTera démentie, pénurie Ac-225 en résolution (BMS internalise, TerraPower ×20), titre à 5 % de l'ATH — C010 | 27/07 |
| Viel & Cie (VIL) | ☠️ TUÉ | RÉFUTÉ 25 % : le mécanisme invoqué est faux (11,4 % du capital déjà chez Sycomore/Amiral/Quaero), décote déjà refermée aux ⅔, 77 % verrouillés — C017 | 27/07 |
| Ultragenyx | ☠️ TUÉ | PASSE : loterie FDA, CRL déjà essuyé — C004 | 27/07 |
| Besi | ☠️ TUÉ | PASSE : pas d'edge au prix, capi mal citée à l'origine — C002 | 27/07 |
| Nexans | ☠️ TUÉ | PASSE : dérating mérité, pas inefficience — C003 | 27/07 |
| Stalprodukt | ⏰ EXPIRÉ | Achetabilité non résolue (Varsovie hors périmètre Fortuneo) — radar d'apprentissage | 27/07 |
| D'Ieteren | ⏰ EXPIRÉ | Rumeur d'IPO vieille de 6 mois, vendeur = fonds de private equity (sélection adverse), 174 €/action = ticket impraticable en PEA. Réexamen si ≤ 150 € ou prospectus publié | 27/07 |
| Exail | ☠️ TUÉ | OPA Thales à 134 € — thèse 5-7 ans morte | 27/07 |
| **MSFT (renfort)** | ☠️ **TUÉ** | RÉFUTÉ 25 % : **la prémisse de prix était fausse** — 399,30 $ était la clôture du 29/07 (pas 390,54 $, qui était celle du 28/07) ; +8 % post-publication → ~428-431 $. **L'asymétrie était consommée avant qu'un ordre puisse passer.** Bookings commerciaux T4 **+10 %** contre +83 % sur l'exercice ; **45 % du RPO de 678 Md$ sur un seul client (OpenAI)** ; marge brute Microsoft Cloud 65 % contre 68 % ; FCF T4 **−23 %** ; **54-66 % du beat de BPA non opérationnel**. ⚠️ **Ne concerne QUE le renfort — la détention de 6 % est maintenue, aucune vente.** C018 / C019 | 30/07 |
| **Vicat (VCT)** | ☠️ **TUÉ** | **PASSE DÉFINITIF à 69,70 €.** Kill criterion n°3 (dossier couru) déclenché **sur le fond avant la forme** : +13,15 % le 30/07 sur la guidance relevée. Espérance recalculée **+4,79 %/an — sous le World nu (5 %)**, 1,7 à 2,7 pts sous le hurdle ; robuste sur toute la fourchette 68-70 €. Les deux portes du contrat étaient devenues logiquement inatteignables en état de thèse intacte. Renouvellement unique consommé. *Le titre n'a pas échoué — il a été rattrapé par son prix.* Prix de réouverture théorique : 59,4-62,9 €, soit 11-17 % sous le marché — **non écrit comme contrat**, toute réouverture repart d'un dossier neuf. C020 ❌ / C021 ouvert / C027 | 31/07 |
| **Mobility Global (MBGL)** | ☠️ **TUÉ** | **PASSE.** L'edge nommé — vendeurs forcés post-spin — **a expiré** : à J+21 séances le titre monte (+2,4 % en 3 semaines) et **6 analystes le couvrent déjà en « Buy » à 27,83 $**. Un orphelin n'a pas 6 analystes acheteurs 30 jours après sa cotation. Test du vendeur **sans réponse** (qui vend à 21 $, et pourquoi a-t-il tort ?). Espérance **+2,28 %/an net de PFU**, et **+4,21 % même si le print du 07/08 est bon** — le contrat échouait même en réussissant. Réouverture : **≤ 16,50 $ ET levier ≤ 2,0x** simultanément, **sans ligne au radar** (écrire un seuil à −22 % re-créerait l'erreur Vicat). C028/C029/C030 | 31/07 |
| **Walmart (WMT)** | ☠️ **TUÉ** | **PASSE au terme d'une réécriture conduite AVANT l'événement du 20/08 — et c'est la réécriture qui a tué le dossier, pas le marché.** Trois chiffres du dossier 6/10 ne survivent pas à la vérification, **tous flatteurs** : « ~38x » → **40,0x** sur la guidance de l'émetteur ; « profits +19 % » → guidance FY27 **+6,1 %** ; « publicité +46 % » → **+46 % au T2 FY26 puis +37 % au T1 FY27**, le chiffre retenu était le point haut d'une série qui décélère. Le 38x n'était atteignable qu'avec un BPA de 2,95 $, **5,4 % au-dessus du haut de la guidance** — donc via un consensus d'agrégateur, le canal que la règle 7 interdit. 🔑 **Le seuil n'est PAS dérivable, et ce n'est pas un manque de travail** : il dépend d'un multiple terminal à 7 ans, grandeur qu'aucun canal ne produit — *elle est produite par moi*. Bande réelle **25,0x à 37,9x, soit 70 $ à 106 $ : 51 % d'écart sur le prix.** Régime d'ambiguïté → borne basse **70 $ (−37,5 %)**, la seule adossée à une source contrôlée. 🔑 **Et les conditions de mécanisme ne peuvent pas mordre** : publicité à **+37 %** contre une barre à +20 % — il faudrait perdre **17 points en un trimestre**. Les resserrer ferait des deux jambes **le même pari mesuré deux fois**, et elles sont **anti-corrélées** : un défensif à comparables +4 % ne perd pas 29 % sur une compression de multiple isolée, il les perd sur une guidance coupée — l'état du monde où il ne faut surtout pas acheter. Espérance au prix du jour **+3,03 %/an net**, soit **4,0 pts sous le hurdle** — identique à Magnum (+3,04 %, tuée) et LLY (+3,01 %, rétrogradée) : *trois mesures indépendantes, le même résultat au centième*. Réouverture **sur FAIT, sans ligne au radar** : ≤ **28,5x** sur le médian de la guidance BPA publiée **ET** publicité ≥ +25 % **ET** commerce en ligne ≥ +18 %, **simultanément**. **C042/C043/C044** · **C024 maintenu ouvert, inchangé à 25 %, mais sa NATURE a changé** — il ne mesure plus mon contrat, seulement une prévision de cours | 07/08 |
| **Magnum Ice Cream** | *(reste au classement, rang ⑤)* | **PASSE non renouvelé, sans créneau de surveillance** — un contrat exigeant −21 % de prix ET une inflexion de volume est un PASSE avec des étapes supplémentaires. **Réouverture sur FAIT, pas sur date** : capitalisation ≤ 7,6 Md€ **ET** croissance organique en VOLUME ≥ +2,0 % sur le dernier trimestre publié, simultanément. Toute réouverture repart d'un dossier neuf devant le Chasseur et l'Avocat. C022 / C023 | 30/07 |

## Ce que la newsletter en fait

La section 🎯 SURVEILLANCES affiche les lignes **① à ⑥** (les six premiers
rangs), une ligne chacune, avec le chiffre du jour face au déclencheur.
Les rangs suivants ne sont visibles qu'en cas de mouvement de rang ou de
déclenchement. **Le classement complet vit ici** — Tanguy peut le
consulter à tout moment, rien n'y est perdu.
