# Registre de calibration — le track record du comité

Le mécanisme qui transforme la pratique en amélioration MESURABLE. Principe
(Tetlock/GJP) : sans tracking, pas de calibration. Chaque appel probabiliste
du comité est consigné ICI, daté, avec sa condition de résolution
pré-enregistrée, puis noté (Brier) quand l'issue tombe. La « Vérif' des
appels » du samedi lit ce registre.

## Règles du registre
- **Pré-enregistrer la condition de résolution** À L'AVANCE (sinon
  l'évaluation est du hindsight). Ex. : « P=56 % qu'Aubay soit une vraie
  opportunité 5-7 ans » se résout mal à 5-7 ans — préférer des sous-appels
  résolubles : « P(X %) que [événement daté et vérifiable] ».
- **Juger le PROCESS, pas le résultat** (anti-resulting) : un bon appel à
  60 % qui ne se réalise pas n'était pas « faux » ; on note la calibration
  sur l'ENSEMBLE, pas cas par cas.
- **Échantillon** : un score de calibration n'est significatif qu'après
  ~20-30 appels résolus. Avant, on trace, on ne conclut pas.
- **Ce qu'on cherche** : sur/sous-confiance systématique (mes 70 % se
  réalisent-ils 70 % du temps ?) et les TYPES d'appels ratés (angle mort
  sectoriel, biais optimiste sur un type de signal).

## Format d'une ligne
`ID | date | agent | classe_réf | enveloppe | affaire | AFFIRMATION | P(%) | condition de résolution (datée) | statut | issue | note Brier`
(statut : ⏳ ouvert / ✅ résolu-juste / ❌ résolu-faux · Brier = (P−issue)²,
issue = 1 si réalisé, 0 sinon ; plus bas = mieux)

**`classe_réf`** (bucketing par classe de référence — indispensable au
diagnostic) : étiquette chaque appel (ex. `ETF-cœur` / `action-US` /
`small-cap-EU` / `or` / `macro` / `biotech-binaire`) ET son horizon
(`<1 an` / `pluriannuel`). On ne score jamais tout en vrac : le Brier PAR
CLASSE est ce qui révèle « bon sur les ETF larges et la macro, nul sur le
stock-picking US ». C'est ainsi que le comité apprend OÙ il n'a pas d'edge.

## Comment on lit le score (Brier + décomposition)
- **Brier global** = moyenne des (P−issue)². Échelle : **0 = parfait**,
  **0,25 = pile ou face** (0,5 systématique), **1 = confiant ET faux**.
- **Toujours comparer à un repère** (climatologie) : le Brier qu'on aurait
  eu en prédisant bêtement le taux de base de la période. Le score seul ne
  dit rien — c'est l'ÉCART au repère qui mesure la compétence.
  **Brier Skill Score = 1 − Brier / Brier_repère** : positif = on bat le
  taux de base ; négatif = on fait pire que de ne rien savoir.
- **Décomposition de Murphy** : `Brier = Fiabilité − Résolution +
  Incertitude`.
  - **Fiabilité / calibration** (bas = mieux) : quand on dit « 70 % », ça
    arrive-t-il ~70 % du temps ?
  - **Résolution / discrimination** (haut = mieux) : donne-t-on des probas
    DIFFÉRENTES aux cas qui divergent, ou colle-t-on tout autour de 50 % ?
    C'est la vraie valeur ajoutée. **On peut être parfaitement calibré et
    inutile** (toujours annoncer le taux de base) → il faut calibration ET
    résolution.
- **Courbe de calibration** (reliability diagram) : par tranche de proba
  (0-10 %, 10-20 %…), tracer proba moyenne annoncée (x) vs fréquence
  réelle (y). Sur la diagonale = parfait ; **sous** = SUR-confiance (on dit
  90 %, ça arrive 80 %) ; **au-dessus** = SOUS-confiance.

## Exemple chiffré (reproductible, sans stats) — 10 appels résolus
| # | classe | P | issue | (P−issue)² |
|---|---|---|---|---|
| 1 | ETF | 0,70 | 1 | 0,090 |
| 2 | action-US | 0,60 | 0 | 0,360 |
| 3 | ETF | 0,80 | 1 | 0,040 |
| 4 | or | 0,90 | 1 | 0,010 |
| 5 | action-US | 0,55 | 0 | 0,3025 |
| 6 | action-US | 0,40 | 0 | 0,160 |
| 7 | ETF | 0,75 | 1 | 0,0625 |
| 8 | action-US | 0,65 | 1 | 0,1225 |
| 9 | action-US | 0,50 | 0 | 0,250 |
| 10 | or | 0,85 | 1 | 0,0225 |

Somme = 1,42 → **Brier = 0,142**. Repères : pile ou face = 0,25 ;
climatologie (taux de base 6/10 = 0,6) = 0,24 →
**Brier Skill Score = 1 − 0,142/0,24 = +0,41** (bat nettement le taux de
base). Mini-courbe de calibration : tranche 0,40-0,59 → 0/3 réalisés
(SUR-estime) ; 0,60-0,74 → 2/3 (bien calibré) ; 0,75-0,90 → 4/4
(SOUS-confiant, on gagnerait à oser plus haut).

## Combien d'appels avant de conclure ?
L'intervalle de confiance du Brier est LARGE en petit échantillon (un
événement rare demande des centaines de paires). Repères pratiques :
- **< 20-30 appels** : anecdotique, on trace, on ne conclut RIEN.
- **~30-50 résolus** : première lecture grossière du Brier global.
- **~100+, avec ≥ 10-15 par tranche** : la courbe de calibration devient
  interprétable. Toujours regarder PAR classe (100 globaux mais 8 sur l'or
  = zéro conclusion sur l'or).

## Boucle de rétroaction : du registre vers le cerveau des 3 agents
On change les PROCESS/prompts selon la calibration mesurée, jamais selon le
dernier trade gagné ou perdu.
| Symptôme mesuré | Correction sur le système |
|---|---|
| **Sur-confiance** (points sous la diagonale — le cas le plus fréquent, humain ET LLM) | Facteur de rétraction : le Juge pousse toute proba vers 0,5 (ex. P' = 0,5 + 0,8·(P−0,5)). Durcir le mandat de l'Avocat (taux de base contradictoires obligatoires). |
| **Sous-confiance** (points au-dessus) | Autoriser le Juge à durcir les convictions fortes quand la thèse a survécu à l'Avocat. |
| **Résolution faible** (tout massé à 0,5-0,6) | Interdire les probas 0,45-0,55 sans justification ; exiger une fourchette de scénarios — le comité doit OSER trancher. |
| **Angle mort** (Brier mauvais sur une `classe_réf`) | Réduire la taille des positions de cette classe, exiger une source primaire de plus, déléguer moins au stock-picking et renforcer le cœur ETF. |
| **Kill criteria jamais déclenchés/respectés** | Bug de discipline : alerte automatique sur les `kill_criteria` échus. |
| **Resulting détecté** (post-mortem qui juge au résultat) | Réinjecter dans le prompt de revue : « évalue la décision avec l'info de l'ÉPOQUE uniquement ». |
| **Biais de sélection du registre** (découvert 30/07/2026 — voir ci-dessous) | Toute SURVEILLANCE ouverte ouvre simultanément son appel probabilisé. Sans quoi le registre ne mesure que les dossiers refusés. |

## ⚠️ RÈGLE DE COUVERTURE (encodée le 30/07/2026 — leçon Vicat)

**Toute surveillance ouverte avec un déclencheur chiffré ouvre
SIMULTANÉMENT un appel daté et probabilisé** sur la question : *« le
déclencheur se présentera-t-il en totalité avant l'échéance ? »* Pas de
surveillance sans appel — c'est une condition de validité du contrat, pas
une formalité.

**Pourquoi.** Le 30/07, Vicat est devenu le premier contrat de
surveillance résolu sur des chiffres réellement publiés (1 condition sur
3 remplie → pas d'achat). Le contrat a parfaitement fonctionné. Mais
**aucun appel n'avait été enregistré** : le dossier le plus décisif de la
semaine s'est résolu **sans rien apprendre sur ma calibration**.

**Le défaut est structurel, pas ponctuel.** Un appel naît naturellement
quand l'Avocat RÉFUTE (il pose une probabilité pour justifier son verdict
— C010, C017) ou quand le Juge PASSE. Il ne naît pas quand le Juge décide
de SURVEILLER, parce que la surveillance ressemble à une non-décision.
**C'en est une** : fixer trois seuils, c'est affirmer implicitement qu'ils
ont une chance raisonnable d'être atteints ensemble. Sans cette
affirmation écrite, le registre ne couvre que les dossiers écartés — un
**biais de sélection** qui rend le score de Brier ininterprétable, puisqu'on
ne mesure jamais les paris qu'on a choisi de garder ouverts.

**Corollaire anti-triche** : on ne crée JAMAIS d'appel rétroactif sur un
dossier déjà résolu. Un registre rempli après coup ne mesure plus rien.
La lacune Vicat est donc définitive et assumée — elle se répare pour la
suite, pas pour le passé.

**Second enseignement Vicat — la conception des conditions.** Les trois
conditions portaient sur l'EBITDA, le levier et le prix ; **aucune ne
regardait la conversion en cash**. Or le free cash-flow s'est retourné de
+44 à −36 M€ (80 M€), sur un dossier dont la thèse ENTIÈRE est le
désendettement. Règle : **un contrat doit tester le mécanisme de la thèse,
pas seulement sa photographie comptable.** Si la thèse est « il se
désendette », une condition doit porter sur le cash qui sert à se
désendetter.

**Troisième enseignement — la cohérence temporelle des conditions.** Un
contrat dont deux conditions divergent dans le temps n'est pas un
contrat : chez Vicat, le levier ne peut pas s'améliorer avant ~mars 2027
tandis que la guidance relevée éloigne le cours du seuil de prix. Règle :
**vérifier à l'écriture que les conditions peuvent être vraies EN MÊME
TEMPS, et à quelle date au plus tôt.** Sinon l'échéance est fictive et la
surveillance devient une attente indéfinie déguisée en discipline.

## Appels ouverts (semaine du 27/07/2026)

| ID | Date | Agent | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|
| C001 | 27/07 | Juge | Aubay | Achat justifié SI repli ≤ 50 € **ou** scare optique T3 | 56 % | À la publication T3 (fin oct. 2026) : le déclencheur s'est-il présenté et l'entrée aurait-elle battu le World depuis ? | ⏳ |
| C002 | 27/07 | Avocat | Besi | Pas d'edge au prix actuel (~227 €) : sous-performe ou ne bat pas le World à 12 mois | 75 % | 27/07/2027 : BESI vs MSCI World sur 12 mois | ⏳ |
| C003 | 27/07 | Juge | Nexans | Le repli est un dérating MÉRITÉ, pas une inefficience (self-invalidation : S1 dé-risque GSI + FCF relevé à ≤130 €) | 58 % | Publication S1 2026 (imminente) : provision GSI ? FCF révisé ? | ⏳ |
| C004 | 27/07 | Juge | Ultragenyx | RARE = loterie, PASSE justifié (ne bat pas le cœur 5-7 ans) | 75-80 % | Suivre : issue des PDUFA 23/08 + 19/09 et perf à 12 mois vs World | ⏳ |
| C005 | 27/07 | Chasseur/macro | Fed | Divergence Kalshi (~48 %) vs FedWatch (~82 %) sur une hausse en septembre | — | FOMC de septembre 2026 : hausse ou non | ⏳ |
| C006 | 27/07 | Juge | Plan du mois | Le cœur WPEA est le meilleur usage de l'euro de juillet | 75-80 % | Rétrospectif : à l'ouverture du PEA, le cœur était-il le bon choix vs les satellites CTO ? | ⏳ |
| C007 | 27/07 | Juge | STM | STMPA touche ≤ 45 € en clôture (le déclencheur d'achat surveillance approche) | 35 % | Cours de clôture Paris avant le 31/01/2027 | ⏳ |
| C008 | 27/07 | Juge | Nike | Nike publie ≥ 1 trimestre de croissance Direct/Digital POSITIVE (stabilisation ≠ couteau) | 38 % | Communiqués Nike sur ses 2 prochains rapports, avant le 30/04/2027 | ⏳ |
| C009 | 27/07 | Juge | Allocation juillet | L'euro de juillet est déployé sur WPEA (pas STM/Nike/or) une fois le canal débloqué | 80 % | Ordre WPEA exécuté au plus tard le 31/08/2026 | ⏳ |
| C010 | 27/07 | Avocat | IBA (RÉFUTÉ) | La thèse « actif caché PanTera » est morte : pas d'accord ferme ≥ 800 M€ d'ici fin 2027 ET/OU EBIT 2026 sous guidance (32 M€) | 75 % (= 1−25 % de la thèse) | Fin 2027 : deal PanTera ferme ≥ 800 M€ ? EBIT 2026 vs guidance ? (deal ferme → l'Avocat avait tort) | ⏳ |
| C011 | 27/07 | Avocat | Séché | Le couple redressement + PFAS-boues se valide : EBE 2026 ≥ 260 M€ publié SANS 3e warning ET arrêté boues applicable 01/01/2027 avec seuils ≤ 40/400 µg/kg | 40 % | Publication FY2026 (mars 2027) ; jalons : S1 sept. 2026, arrêté été 2026 | ⏳ |
| C012 | 27/07 | Juge | Séché | Le S1 2026 déclenche l'achat (EBE S1 ≥ 125 M€ ET France organique ≥ 0 % ET guidance 275-285 M€ confirmée) | 38 % (brute 35 %) | Communiqué S1, au plus tard le 30/09/2026 | ⏳ |
| C013 | 27/07 | Juge | Séché/PFAS | L'arrêté final boues est publié d'ici le 30/09/2026 avec application au 01/01/2027 maintenue | 62 % (brute 65 %) | JO / bulletin officiel au 30/09/2026 | ⏳ |
| C014 | 27/07 | Juge | action-US / pluriannuel · CTO | LLY | Le déclencheur d'achat fixé se présente : **LLY ≤ 1 020 $ en clôture** | 35 % | Cours de clôture NYSE, avant le 30/06/2027 | ⏳ |
| C015 | 27/07 | Juge | allocation / pluriannuel | Poche offensive | La poche offensive (150 €/mois, règles du 27/07) BAT le versement équivalent au cœur WPEA | 25 % (brute 16 %, plancher de charte) | 31/12/2027 : perf pondérée par dates d'achat vs WPEA acheté aux mêmes dates | ⏳ |
| C016 | 27/07 | Juge | allocation / <1 an | Garde-fou R | **R ≤ 25 % au 30/09/2026** (le régime 300/50/150 est structurellement légal) | 80 % | Calcul de R sur la capture du 30/09/2026 | ⏳ |
| C017 | 27/07 | Avocat | holding décotée sans catalyseur / 12 mois · PEA | Viel & Cie (VIL) | La décote N'EST PAS une inefficience capturable : au 31/07/2027 elle reste ≥ 30 % **ET** VIL ne surperforme pas le World de plus de 5 pts | 75 % (P(le signal a raison) = 25 %) | 31/07/2027 : recalcul de la décote aux cours + perf VIL vs WPEA. Jalons : S1 CFT fin août 2026 (marge > 18 % → bascule 40 %), semestriel Viel ~24/09 (autocontrôle > 9 % → bascule 45 %) | ⏳ |

## Appels ouverts le 30/07/2026 (arbitrage Vicat / Magnum / allocation)

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C018** | 30/07 | Avocat | action-US / 12 mois · CTO | MSFT | Acheté ~430 $ le 30/07/2026, MSFT surperforme le S&P 500 TR d'au moins **5 pts** sur 12 mois | **25 %** | 30/07/2027 : perf totale MSFT vs S&P 500 TR. **Kill intermédiaire au 29/10/2026** (T1 FY27) : bookings commerciaux < +15 % a/a **ET** Azure ≤ 44 % cc → thèse morte | ⏳ |
| **C019** | 30/07 | Avocat | action-US / 12 mois · CTO | MSFT | *Version faible* : MSFT surperforme **simplement** le S&P 500 TR sur 12 mois | **38 %** | 30/07/2027 : perf totale MSFT vs S&P 500 TR | ⏳ |
| **C020** | 30/07 | Juge | mid-cap-EU cyclique / pluriannuel · PEA | Vicat | **Couverture de surveillance** : le déclencheur réécrit se présente EN TOTALITÉ avant l'échéance — Porte A (≤ 56 € + guidance intacte + dette nette en baisse a/a) **ou** Porte B franchie puis ≤ 62 € sous 45 j | **42 %** (brute 43 %) | 15/03/2027 : clôture Euronext Paris + communiqué FY2026 | ⏳ |
| **C021** | 30/07 | Juge | mid-cap-EU cyclique / <1 an · PEA | Vicat | **Mécanisme** : FCF FY2026 **≥ 200 M€** ET dette nette au 31/12/2026 **≤ 1 060 M€** ET levier **≤ 1,30x** | **32 %** | Résultats FY2026 (~mi-février 2027), butée 15/03/2027 | ⏳ |
| **C022** | 30/07 | Juge | staples-EU / 12 mois · PEA | Magnum | **Le PASSE est justifié** : MICC ne surperforme PAS le MSCI World de plus de 5 pts sur 12 mois | **70 %** | 30/07/2027 : perf totale MICC (Amsterdam, EUR) vs MSCI World | ⏳ |
| **C023** | 30/07 | Juge | staples-EU / pluriannuel · PEA | Magnum | **Test d'élasticité GLP-1** : Magnum publie une croissance organique **en VOLUME négative** sur au moins un trimestre | **30 %** | Communiqués trimestriels MICC, avant le 31/12/2027 | ⏳ |
| **C024** | 30/07 | Juge | action-US défensive / <1 an · CTO | Walmart | **Couverture (réparation de lacune)** : le déclencheur d'achat (WMT ≤ 100 $ en clôture) se présente | **25 %** (brute 22 %, plancher de charte) | Clôture NYSE, avant le 31/12/2026 | ⏳ |
| **C025** | 30/07 | Juge | allocation / <1 an · CTO | Ordre de juillet | L'ordre du 30/07 (**400 € SWDA + 100 € IAU sur eToro**) est **exécuté** | **70 %** | Confirmation de Tanguy ou capture de portefeuille, au plus tard le **07/08/2026** | ⏳ |
| **C026** | 30/07 | Juge | allocation / <1 an · PEA | PEA Fortuneo | Le PEA est **ouvert ET exécutable** (un ordre passable) | **75 %** (brute 78 %, plafond de charte) | État du compte au **30/09/2026** | ⏳ |

**Traçabilité de la calibration mécanique** : registre à **0 appel résolu**
(< 20) → aucun facteur de rétraction publié n'est applicable. La règle par
défaut (plafonnement hors [25 %, 75 %] sur les classes sans edge démontré)
a été appliquée **mécaniquement** et a modifié deux appels : C024
(22 → 25 %) et C026 (78 → 75 %). C018 et C019 sont enregistrés **tels que
transmis par l'Avocat**, sans retouche du Juge.

**✅ Lacune structurelle FERMÉE.** Les 6 surveillances actives disposent
désormais toutes d'un appel probabilisé : Aubay **C001**, STM **C007**,
Séché **C012**, LLY **C014**, Walmart **C024**, Vicat **C020 + C021**. Le
biais de sélection qui rendait le score de Brier ininterprétable est
corrigé — **pour l'avenir seulement**, comme l'exige le corollaire
anti-triche.

⚠️ **Lacune résiduelle assumée** : **Mobility Global** porte un
déclencheur chiffré sans appel, et son catalyseur tombe le 07/08. Traité
par instruction au Chasseur (dossier instruit d'ici le 05/08), pas par un
appel improvisé.

**Note d'honnêteté sur C009** (« ordre WPEA exécuté au plus tard le
31/08/2026 », P = 80 %) : la décision du 30/07 exécute un ordre **SWDA en
CTO**, pas WPEA en PEA. **C009 reste ouvert, inchangé, et ne doit pas être
requalifié.** S'il se résout faux, ce sera un point de calibration
légitime contre le Juge — il aura surestimé la vitesse d'ouverture du PEA.
C'est le système qui fonctionne, pas un incident à masquer.

## Appels résolus
| ID | Affaire | Affirmation | P | Issue | Brier | Leçon |
|---|---|---|---|---|---|---|
| (aucun encore — les premières résolutions arrivent fin août : Nexans S1, LLY Q2 5/08, Capricor AdComm 29/07) | | | | | | |

## Prochaines résolutions au calendrier
- **29/07** : AdComm FDA Capricor (deramiocel DMD) — pas un appel du comité,
  mais test de la détection santé.
- **05/08** : Résultats Q2 Eli Lilly — résout en partie le dossier LLY.
- **Fin juillet-août** : Publication S1 Nexans → résout C003.
- **23/08 & 19/09** : PDUFA Ultragenyx → alimentent C004.
- **Septembre** : FOMC → résout C005 (divergence Kalshi/FedWatch).
