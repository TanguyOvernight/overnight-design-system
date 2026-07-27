# Science de la réfutation — ACH, pondération des preuves, forensic avancé

Compilé le 2026-07-27 (Heuer/CIA, Pherson, I.J. Good, JAE/JAR/JF). Boîte à
outils de l'AVOCAT DU DIABLE (`.claude/agents/avocat-diable.md`). Complète
SANS répéter : science-prevision.md (base rates, petites mises à jour,
premortem), methodes-quantitatives.md et analyse-fondamentale.md (Beneish,
Sloan, 7 red flags, SBC). Étiquettes : [ROBUSTE] consensus répliqué ·
[DÉBATTU] preuves mitigées · [FRAGILE] heuristique indicative.

## 1. ACH — instruire par hypothèses rivales (Heuer, CIA)

Le cœur (Heuer, *Psychology of Intelligence Analysis*, CIA 1999, ch. 8) :
on ne prouve pas une thèse en empilant des preuves POUR — presque toute
preuve est compatible avec plusieurs récits. On retient l'hypothèse qui a
le MOINS de preuves CONTRE, après avoir tenté d'infirmer CHACUNE. [ROBUSTE
comme logique éliminatoire ; DÉBATTU comme outil : Dhami et al. 2019 et
une étude 2024 (N=161) montrent que la matrice seule ne réduit pas
fiablement le biais de confirmation et reste sensible au choix des
preuves ; la RAND (RR-1408) note le déficit d'évaluation des SAT. → Garder
les 3 gestes robustes : expliciter les rivales, chercher l'infirmant,
jeter le non-diagnostique.]

### La matrice type pour un signal d'investissement
4 hypothèses rivales, exhaustives, mutuellement exclusives :
- **H1** — thèse vraie ET pas encore dans le prix (la seule qui vaut CONFIRMÉ)
- **H2** — thèse vraie MAIS déjà pricée (le défaut que traque l'étape 2)
- **H3** — narratif intéressé : quelqu'un a BESOIN que ce récit circule (étape 4)
- **H4** — erreur factuelle ou de lecture (chiffre faux, one-off, périmètre)

Chaque fait vérifié ✅ (étape 1 de la charte) est noté C (cohérent) /
I (incohérent) / N (non pertinent) contre CHAQUE hypothèse. Puis :
1. **Diagnosticité d'abord** : un fait C avec les 4 (« le marché croît »,
   « le management est confiant ») pèse ZÉRO — pseudo-diagnostique,
   interdit à l'appui du verdict. Réflexe : demander P(fait | thèse
   FAUSSE), la question que le cerveau saute spontanément
   (pseudodiagnosticité, Doherty et al. 1979) [ROBUSTE].
2. **Verdict = l'hypothèse la moins infirmée**, jamais la plus « soutenue ».
3. **Sensibilité** (étapes 6 et 8 de l'ACH original) : nommer les 2-3
   faits qui portent SEULS la discrimination → re-vérification
   prioritaire ; en ⛔ le verdict plafonne (règle existante) ; ce sont eux
   qui donnent les vérifications DATÉES d'un AFFAIBLI (« la publication du
   JJ/MM tranche H1 vs H2 ») et le kill criterion d'un CONFIRMÉ.

### Key Assumptions Check + Quality of Information Check (CIA Tradecraft Primer 2009)
- **KAC** : écrire 3-5 prémisses implicites (« le management dit vrai »,
  « la demande continue », « le multiple historique est la bonne
  référence », « le précédent Y est comparable ») et classer : soutenue /
  correcte avec réserves / non soutenue. ≥ 2 non soutenues sous un fait
  central = château de cartes, quel que soit le nombre de C.
- **QIC** : pour chaque source-clé — QUI le dit, COMMENT le sait-il
  (témoin direct, calcul, ouï-dire), quel track record ? L'étape 1 vérifie
  le FAIT ; le QIC vérifie la CHAÎNE qui l'a transporté.

### Détection de déception — MOM / POP / MOSES / EVE (Pherson & Heuer)
Dès que H3 est plausible : **MOM** — Motif (levée à venir, vesting, short
à faire couvrir, gérant qui parle de son livre) / Opportunité (contrôle du
canal : IR, KPI maison invérifiables) / Moyens (historique de comm'
agressive) · **POP** — précédents du même émetteur (restatements,
sanctions, promesses ratées : meilleur prédicteur d'une déception
future) · **MOSES** — source manipulable ? (embargo, « exclusivité » = le
journaliste a été CHOISI) · **EVE** — preuve vérifiable indépendamment du
déclarant ? Règle : un MOM élevé ne rend pas le fait FAUX — il DÉGRADE son
poids (LR → 1) et hausse l'exigence de preuve (étape 4). Jamais de RÉFUTÉ
sur la seule incitation.

## 2. Pondération bayésienne — likelihood ratios praticables

Formalisme [ROBUSTE] (Peirce ; Good 1985 : « weight of evidence » = log du
LR) : cote après = cote avant × LR, où LR = P(preuve | H) / P(preuve | ¬H).
Depuis un ancrage de 30 % : LR 2 → 46 % ; LR 3 → 56 % ; LR 5 → 68 % ;
LR 0,5 → 18 %. Le plafond ±15 pts de la charte ≈ une cote ×2 (LR cumulé
~2) : c'est un BUDGET à répartir entre les preuves, pas par preuve.

| Preuve (type) | LR indicatif | Lecture |
|---|---|---|
| Fait central contredit par un dépôt primaire | ~0 | ❌ → bascule RÉFUTÉ (déjà dans la charte) |
| Signal coûteux / contre-intérêt (cluster ≥ 3 initiés open market, guidance volontairement abaissée, rachat massif) | 3-5 | Le plus fort LR positif accessible : coûteux à simuler |
| 2e source PRIMAIRE réellement indépendante | 2-3 | Indépendance = origine ET intérêt distincts |
| Dépôt réglementaire confirmant le chiffre central | 1,5-2,5 | Nécessaire, pas suffisant (compatible H2/H3) |
| Révisions consensus BPA en hausse 3 mois | 1,5-2 | cf. methodes-quantitatives règle 7 |
| Short thesis publiée ciblée | 1,3-1,7 contre H1 | Indice, pas preuve (charte étape 3 : ~45 % de réussite LT) |
| Déclaration du management dans son intérêt | 1-1,2 | ~54 % des guidances sont positives : la norme, pas un scoop |
| Objectif de cours relevé | ~1 | À ignorer (science-prevision) |
| N-ième article citant la même source | 1 | Déjà compté — règle 1 ci-dessous |
| Preuve compatible avec toutes les hypothèses | 1 | Pseudo-diagnostique : zéro déplacement |

Valeurs [FRAGILE en valeur exacte, ROBUSTE en ordre] : en marchés publics,
une preuve isolée vaut rarement LR > 5 — d'où les petites mises à jour de
5-10 pts (science-prevision, règle 6). Quatre règles d'emploi :
1. **Anti-double-comptage** [ROBUSTE — documenté en méta-analyse, Senn
   2009] : compter les ORIGINES, pas les sources. 3 articles + 1 tweet
   citant le même communiqué = UNE preuve ; tracer chaque point
   d'ajustement jusqu'à son origine — même origine = déjà compté.
2. **Corrélation partielle** : deux preuves partageant méthode, données ou
   intérêt (2 brokers sur le même modèle, 2 médias sur le même embargo) ne
   s'additionnent pas — la seconde vaut moitié, au mieux.
3. **Question anti-pseudo-diagnostic** : « observerais-je AUSSI ce fait si
   la thèse était fausse ? » Si oui → LR ≈ 1 → aucun point.
4. **Budget** : le cumul reste dans le ±15 pts ; la table le RÉPARTIT.
   12 preuves faibles corrélées < 2 preuves indépendantes coûteuses.

## 3. Le crible causal — 4 pièges, 4 tests

| Piège | Déguisement typique | Test qui démasque |
|---|---|---|
| Corrélation habillée en causalité | « Culture forte / CEO visionnaire → surperformance » ; le récit DÉRIVE de la perf (halo — Rosenzweig 2007) [ROBUSTE] | Exiger le mécanisme + tester le sens inverse (la perf a-t-elle créé le récit ?) + chercher qui a le même facteur SANS l'effet |
| Survivorship / sélection | « Les 10 champions du secteur ont tous fait X » — échantillonnés à l'arrivée (le vice des *Good to Great*, Rosenzweig) | Le dénominateur : « combien ont fait X et ont DISPARU ? » Pas de groupe de comparaison = anecdote, pas preuve |
| Régression vers la moyenne déguisée en turnaround | « Nouveau CEO, les marges rebondissent déjà » — après un point bas extrême | Le point de départ était-il un extrême (crise, creux de cycle) ? Un rebond post-extrême est ATTENDU sans aucun talent : exiger l'amélioration VS PAIRS, pas vs soi-même |
| Base rate neglect dans l'analogie | « Le prochain Nvidia / Amazon » — analogie unique, vue de l'intérieur (Kahneman-Lovallo 1993) [ROBUSTE] | Classe de référence : combien de « prochains X » proclamés ont livré ? → bibliothèque de base rates de la charte ; à défaut, la construire |

Usage : passer au crible le steelman (étape 0) ET ta thèse inverse — une
thèse inverse bâtie sur un de ces pièges est un épouvantail.

## 4. Forensic avancé (au-delà de Beneish / Sloan / 7 red flags en base)

### Universel — le bilan qui gonfle
- **NOA bloat** (Hirshleifer-Hou-Teoh-Zhang, JAE 2004) [ROBUSTE en
  académique ; décoter post-publication, cf. methodes-quantitatives] :
  NOA = (actifs − cash/placements) − (passifs − dette), sur actifs N-1.
  NOA élevés = des ANNÉES d'accruals cumulés jamais validés par le cash —
  prédicteur négatif des rendements sur ≥ 3 ans (« sustainability
  effect »). Sloan voit UNE année ; les NOA voient l'HISTORIQUE. Vérif :
  NOA/actifs vs pairs + trajectoire 3 ans.
- **Décomposer les accruals avant d'accuser** : part « normale » (suit la
  croissance du CA — Jones 1991, modifié Dechow et al. 1995) vs part
  discrétionnaire. Sans régression : accruals qui montent SANS croissance
  du CA correspondante = discrétionnaire présumé. Dechow-Dichev 2002 : la
  qualité d'un accrual = finit-il en cash ? Vérif : les créances/stocks
  d'il y a 2 ans sont-ils devenus du CFO — ou des write-offs
  « exceptionnels » (aveu rétroactif de résultats gonflés) ?

### Par type de société — les vérifs sectorielles
- **SaaS / abonnement** [praticien, Maxio 2026] : (1) billings implicites
  = CA + Δ deferred revenue — s'ils décrochent sous le CA, la croissance
  vitrine vit sur le stock de contrats ; (2) deferred revenue qui BAISSE
  avec un CA « stable » = pipeline qui se vide ; (3) RPO/cRPO vs
  croissance affichée ; (4) marge brute > 10 pts au-dessus des pairs et
  (5) développement capitalisé > ~40 % de la R&D = drapeaux de maquillage.
- **Industrie / contrats longs (percentage-of-completion)** : (1) marges
  de contrat étrangement CONSTANTES en période de coûts volatils =
  estimations de coûts totaux pilotées [ForensicRisk] ; (2) unbilled
  receivables / contract assets qui gonflent plus vite que le CA = revenu
  reconnu mais pas facturable ; (3) révisions de coûts tardives, groupées.
- **Retail / stocks** [Schilit, *Financial Shenanigans*] : (1) décomposer
  l'inventaire (annexe) — produits FINIS qui gonflent plus vite que les
  matières premières = demande qui cale (l'inverse = montée en charge
  volontaire, bénin) ; (2) stocks ET marge brute qui montent ensemble =
  démarques pas passées ; (3) rotation des stocks vs pairs.
- **Vente via distributeurs (pharma, conso, semis)** : channel stuffing —
  créances qui bondissent en fin de période + remises/retours
  exceptionnels aux distributeurs + « bill and hold ». Cas canoniques :
  Bristol-Myers Squibb (~1,5 Md$ de CA gonflé 2000-01, 150 M$ d'amende
  SEC 2004) ; Sunbeam 1997-98.

### Le langage des rapports — l'obfuscation se mesure
- **Loughran-McDonald (JF 2011)** [ROBUSTE] : dictionnaires FINANCIERS
  dédiés (négatif, incertitude, litigieux…) — ~3/4 des mots « négatifs »
  de Harvard ne le sont pas en finance. Hausse des mots d'incertitude et
  litigieux ↔ fraudes, faiblesses de contrôle. Usage sans NLP : comparer
  le MÊME document N vs N-1 — nouveaux hedges (« substantial doubt »,
  « covenant »), risk factors qui gonflent, et la métrique-star (ARR, NRR,
  cohortes) qui DISPARAÎT = elle s'est retournée.
- **Li (JAE 2008)** [ROBUSTE sur la direction] : rapports plus longs et
  moins lisibles → résultats MOINS persistants ; l'obfuscation cache la
  non-durabilité. (Métrique Fog critiquée — Loughran-McDonald JF 2014
  préfèrent la simple longueur [DÉBATTU sur la métrique, pas l'effet].)
- **Larcker-Zakolyukina (JAR 2012)** [ROBUSTE en drapeau, DÉBATTU en
  exploitation] : sur les calls suivis de restatements, les dirigeants
  « déceptifs » font PLUS de références au savoir général (« comme chacun
  sait ») et d'émotions positives EXTRÊMES (« fantastic »), MOINS de mots
  d'anxiété et de références à la valeur actionnariale ; modèle > hasard
  de 6-16 % ; portefeuille high-deception : alpha −4 à −11 %/an. Usage :
  Q&A esquivé + superlatifs + « nous » impersonnel = drapeau qui déclenche
  le forensic chiffré ci-dessus.

## Intégration à la charte (renvois)
- Matrice H1-H4 → s'instruit à l'étape 3 ; H2 = étape 2, H3 = étape 4,
  H4 = étape 1 : l'ACH fait converger les 6 coups vers UN verdict.
- Table LR → discipline l'ajustement ±15 pts des base rates ; l'anti-
  double-comptage protège aussi la règle 1 (asymétrie déjà encodée).
- Crible causal → steelman (étape 0) et thèse inverse. Forensic sectoriel
  → étape 4. Vérifications datées d'un AFFAIBLI = les 2-3 faits porteurs
  de l'analyse de sensibilité ACH.

Sources : CIA Tradecraft Primer 2009 · Heuer 1999 ch. 8 · Dhami et al.,
Applied Cognitive Psychology 2019 · Good 1985 · Senn, BMC 2009 ·
Rosenzweig 2007 · Kahneman-Lovallo 1993 · Hirshleifer et al., JAE 2004 ·
Dechow-Dichev, TAR 2002 · Loughran-McDonald, JF 2011/2014 · Li, JAE 2008 ·
Larcker-Zakolyukina, JAR 2012 · Schilit. URLs : rapport du 27/07/2026.
