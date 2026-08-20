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
| C003 | 27/07 | Juge | Nexans | Le repli est un dérating MÉRITÉ, pas une inefficience (self-invalidation : S1 dé-risque GSI + FCF relevé à ≤130 €) | 58 % | 🚫 **NON SCORABLE — tranché le 15/08.** **Date enfin établie : le S1 2026 a été publié le 29/07/2026 à 08h11**, soit deux jours après l'ouverture de l'appel. Mais la condition est **ambiguë au point d'admettre deux lectures opposées** sur la même matière de fait — voir l'analyse ci-dessous. **Le défaut a été découvert à 9h, AVANT de connaître les faits** ; le lever maintenant serait infalsifiable | 🚫 |
| C004 | 27/07 | Juge | Ultragenyx | RARE = loterie, PASSE justifié (ne bat pas le cœur 5-7 ans) | ~~75-80 %~~ → **77,5 %** *(convention du 15/08, voir audit)* | ⏳ **CONDITION RESSERRÉE le 15/08, avant tout fait connu** : résout sur la **performance totale RARE vs MSCI World au 27/07/2027**. Les PDUFA des 23/08 et 19/09 deviennent des **jalons**, pas des conditions | ⏳ |
| C005 | 27/07 | Chasseur/macro | Fed | ~~Divergence Kalshi (~48 %) vs FedWatch (~82 %) sur une hausse en septembre~~ | **—** | 🚫 **NON SCORABLE — retiré du dénominateur le 15/08.** Aucune probabilité n'a jamais été enregistrée, et l'énoncé n'est pas une affirmation mais l'**observation d'un désaccord entre deux sources**. Rien à noter. **Aucune probabilité n'est rétro-ajustée** — remplacé par **C046**, ouvert ce jour, avant le FOMC | 🚫 |
| C006 | 27/07 | Juge | Plan du mois | Le cœur WPEA est le meilleur usage de l'euro de juillet | ~~75-80 %~~ | 🚫 **NON SCORABLE — retiré du dénominateur le 15/08.** Double défaut : fourchette au lieu d'un point, **et** condition de résolution **subjective et rétrospective** (« le cœur était-il le bon choix ? » est une question que je me poserais à moi-même, dont je choisirais la réponse). Un appel que je peux plaider ne mesure rien. **Pas de remplaçant** : la proposition n'est pas reformulable en test objectif | 🚫 |
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

## 🔍 AUDIT DE NOTABILITÉ DU REGISTRE — 15/08/2026 (Revue n°4)

**Ce que j'ai cherché** : pas si mes appels sont justes — si mes appels sont
**notables**. Un appel qu'aucune procédure ne peut noter n'est pas un appel,
c'est une phrase.

**Résultat : 4 appels sur 45 sont défectueux, et les 4 datent du même jour —
le 27/07, mon lot fondateur.** Aucun appel ouvert depuis le 30/07 n'est
atteint. Ce n'est pas un hasard : le format (`P` en point, condition datée et
vérifiable) s'est durci après coup, et **les appels écrits avant le
durcissement n'ont jamais été repassés au tamis**. Trois semaines de Revues
hebdomadaires ne l'ont pas vu, parce que **la Vérif' du samedi lit les appels
RÉSOLUS et ne relit jamais les appels OUVERTS.**

| Appel | Défaut | Traitement |
|---|---|---|
| **C003** Nexans | **Condition non datée** (« publication S1 2026 (imminente) ») **et composée** (deux questions dans un seul appel) | Date fixée aujourd'hui — voir ci-dessous |
| **C004** Ultragenyx | **Fourchette** 75-80 % au lieu d'un point (un Brier n'accepte pas d'intervalle) **et** condition composée (2 PDUFA + une perf à 12 mois) | **Convention déclarée : une fourchette résout à son POINT MÉDIAN → 77,5 %.** Condition resserrée sur la perf à 12 mois |
| **C005** Fed | **Aucune probabilité n'a jamais été écrite** (`P = —`), et l'énoncé décrit un désaccord entre deux sources au lieu d'affirmer quoi que ce soit | 🚫 **NON SCORABLE**, retiré du dénominateur. Remplacé par un appel neuf |
| **C006** Plan du mois | Fourchette **et** condition **rétrospective et subjective** — je serais à la fois juge et partie | 🚫 **NON SCORABLE**, retiré du dénominateur, **sans remplaçant** |

### La règle qui rend la réparation honnête

> **On ne rétro-ajuste jamais une probabilité. On peut préciser une
> CONDITION, à la stricte condition que rien de l'issue ne soit encore
> connu — et il faut l'écrire.**

Contrôle explicite, appel par appel : les PDUFA de C004 tombent les **23/08
et 19/09**, donc **dans le futur** ; la perf à 12 mois court jusqu'au
27/07/2027. **Rien n'est connu.** La convention « fourchette → médiane » est
déclarée **avant** toute résolution et vaudra pour tout appel futur.
Pour C005 et C006, je **n'invente pas** la probabilité manquante : un appel
sans probabilité écrite à l'avance est perdu, et le reconstituer aujourd'hui
serait exactement la triche que ce registre existe pour empêcher.

### 📕 C003 (Nexans) — pourquoi je le retire alors qu'il me rapporterait probablement

**Les faits, établis le 15/08** : Nexans a publié son S1 le **29/07/2026**.
**Guidance de FCF normalisé RELEVÉE**, de 210-310 M€ à **235-325 M€** *(les
deux bornes avant/après proviennent d'une même formulation — double lecture
indépendante)*. EBITDA ajusté relevé de 730-810 à **770-840 M€**. FCF réalisé
au S1 : **165,5 M€**. Contrôle arithmétique validé : `387,7 ÷ 3 248,6 =
11,93 %`, exactement la marge de 11,9 % annoncée. **Sur GSI** : projet
**toujours au carnet** (1,2 Md€ sur 7,7 Md€), livraison **repoussée au-delà
de 2029**, et *« la guidance ne suppose aucune exécution du projet GSI en
2026 »*. **Aucune provision trouvée — communiqué primaire inaccessible.**

**Les deux lectures, et elles sont toutes deux défendables :**

| Lecture | Raisonnement | Verdict | Brier |
|---|---|---|---|
| **A** — « dé-risquer » = *résoudre le risque* | Repousser au-delà de 2029 et sortir de la guidance, ce n'est pas résoudre : c'est **différer et porter**. Conjonction non remplie → l'appel TIENT | ✅ VRAI | **0,1764** |
| **B** — « dé-risquer » = *réduire l'exposition* | Relever le FCF **en supposant zéro GSI** prouve que le résultat **ne dépend plus** du projet. L'exposition est réduite → conjonction remplie → l'appel TOMBE | ❌ FAUX | **0,3364** |

> **Je ne peux pas choisir entre A et B aujourd'hui sans que le choix soit
> dicté par le résultat qu'il produit.** La convention que je me suis donnée
> ce matin est explicite : *on peut préciser une condition à la stricte
> condition que rien de l'issue ne soit encore connu.* L'issue est connue.
> **La porte est fermée, et c'est moi qui l'ai fermée avant de savoir ce
> qu'il y avait derrière.**

**Ce que ce retrait me coûte** — et c'est le point qui rend l'opération
honnête : sous la lecture **A, la plus naturelle des deux**, C003 vaudrait
**0,1764**, soit **mon troisième meilleur score** et il aurait fait baisser
mon Brier moyen. **Renoncer à C003 me prive d'un bon score plus
probablement qu'il ne m'évite un mauvais.** *Un scrupule qui rapporte n'est
pas un scrupule.*

⚠️ **Et le défaut de fond n'est pas l'ambiguïté du verbe : c'est la
CONJONCTION.** Un appel dont l'invalidation exige que **deux** choses
arrivent ensemble double les surfaces d'interprétation. **Règle ajoutée :
une clause d'auto-invalidation ne porte que sur UN fait.**

### Conséquence chiffrée, à dire sans l'adoucir

Le registre affichait **45 appels**. Il en compte **42 notables** — **C005,
C006 et C003 sortis**. Mon dénominateur futur est **plus petit de 3** que je
ne le croyais, donc la date à laquelle mon score deviendra interprétable
(20-30 résolutions, charte) **recule d'autant**.

**Et un quatrième est en sursis : C034**, non par défaut de format mais
**parce que le canal réseau le tue** — voir ci-dessous. Ce serait le
**premier appel détruit par le blocage plutôt que par une faute de
rédaction**. *Le coût du canal cesse d'être un inconvénient de mesure : il
commence à effacer des points de calibration.*

### ⏳ C034 (Lilly) — l'état a changé de nature, et ce n'est pas une bonne nouvelle

**Le 10-Q du T2 2026 EST déposé** : accession SEC `0000059478-26-000081`,
document `lly-20260630.htm`, période close au 30/06/2026. *(Existence
réconciliée par plusieurs listes de résultats ; le 8-K de résultats existe
séparément.)*

> **Le statut de C034 bascule de « la donnée n'existe pas » à « la donnée
> existe et je ne peux pas la lire ».** Le 04/08 j'écrivais : *« la donnée
> n'existe pas publiquement à ce jour — l'appel n'est ni gagné ni perdu, il
> attend »*. **Cette phrase est devenue fausse.** Ce n'est plus une attente,
> c'est une **panne de canal** — sec.gov est bloqué.

**Le chiffre qui circule, et pourquoi je ne le prends pas** : un résumé donne
un cash-flow opérationnel S1 2026 de **16 023 M$ contre 4 753 M$ au S1 2025**
— **×3,4 en un an**. C'est exactement le profil de chiffre qu'un résumé
automatique fabrique en confondant 6 mois / 12 mois / TTM. **Non lu dans le
10-Q → non utilisé.** *(La croissance du CA S1, ≈ +52 %, est elle aussi
**mon calcul** — `19,8 + 23,0 = 42,8 Md$` contre une base 2025
rétro-calculée à 28,2 — et non une ligne du document. Les deux trimestres
sont primaires ; l'agrégat ne l'est pas.)*

⚠️ **Piège désamorcé au passage** : un agrégateur titre « 1H 2026 : Revenue
$22.97B ». **C'est le T2 SEUL, mal étiqueté « 1H ».** À ne jamais reprendre
comme chiffre semestriel.

**Et je dois dire ce qui rend mon refus facile** : C034 est chiffré à
**40 %**. Le clore ✅ donnerait **0,36**, le clore ❌ donnerait **0,16**. Le
chiffre non vérifié pointe vers ✅ — c'est-à-dire vers **mon deuxième pire
score**. **Refuser de m'en servir ne me coûte rien.** *Un refus sans coût
n'est pas une vertu, c'est une coïncidence. Je le note pour ne pas
m'attribuer un mérite que la situation ne porte pas.*

**Ce que je fais de la butée du 17/08 — et je ne la déplace pas.** Contrôle
lundi. **Si le document reste illisible, C034 devient NON SCORABLE**, pas
« reporté ». Déplacer une butée parce que la donnée m'échappe est le même
geste que l'avancer parce qu'elle m'arrange — *j'ai refusé le second sur
Lilly le 11/08, je refuse le premier ici.*

### ✅ Nouvelle règle permanente de la Vérif' du samedi

> **La Vérif' des appels relit les appels OUVERTS autant que les appels
> RÉSOLUS.** À chaque Revue, contrôle de notabilité sur tout appel ouvert :
> (1) `P` est-il un **point** ? (2) la condition porte-t-elle **une date
> butée** ? (3) la condition est-elle **vérifiable par un tiers** sans mon
> jugement ? (4) l'appel affirme-t-il **une seule** chose ?
> Un appel qui échoue à l'un des quatre est réparé **le jour où on le
> découvre**, jamais le jour où il résout.

*C'est le même défaut de famille que l'incident d'intégrité du 08/08 (des
appels résolus marqués ⏳) : dans les deux cas, le registre se contredisait
lui-même et personne ne le relisait. La « règle du miroir » couvrait les
résolus. Elle couvre désormais les ouverts.*

## Appels ouverts le 30/07/2026 (arbitrage Vicat / Magnum / allocation)

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C018** | 30/07 | Avocat | action-US / 12 mois · CTO | MSFT | Acheté ~430 $ le 30/07/2026, MSFT surperforme le S&P 500 TR d'au moins **5 pts** sur 12 mois | **25 %** | 30/07/2027 : perf totale MSFT vs S&P 500 TR. **Kill intermédiaire au 29/10/2026** (T1 FY27) : bookings commerciaux < +15 % a/a **ET** Azure ≤ 44 % cc → thèse morte | ⏳ |
| **C019** | 30/07 | Avocat | action-US / 12 mois · CTO | MSFT | *Version faible* : MSFT surperforme **simplement** le S&P 500 TR sur 12 mois | **38 %** | 30/07/2027 : perf totale MSFT vs S&P 500 TR | ⏳ |
| **C020** | 30/07 | Juge | mid-cap-EU cyclique / pluriannuel · PEA | Vicat | **Couverture de surveillance** : le déclencheur réécrit se présente EN TOTALITÉ avant l'échéance — Porte A (≤ 56 € + guidance intacte + dette nette en baisse a/a) **ou** Porte B franchie puis ≤ 62 € sous 45 j | **42 %** (brute 43 %) | 15/03/2027 : clôture Euronext Paris + communiqué FY2026 | ❌ **RÉSOLU FAUX 31/07** — Brier **0,1764**. *Voir « Appels résolus »* |
| **C021** | 30/07 | Juge | mid-cap-EU cyclique / <1 an · PEA | Vicat | **Mécanisme** : FCF FY2026 **≥ 200 M€** ET dette nette au 31/12/2026 **≤ 1 060 M€** ET levier **≤ 1,30x** | **32 %** | Résultats FY2026 (~mi-février 2027), butée 15/03/2027 | ⏳ |
| **C022** | 30/07 | Juge | staples-EU / 12 mois · PEA | Magnum | **Le PASSE est justifié** : MICC ne surperforme PAS le MSCI World de plus de 5 pts sur 12 mois | **70 %** | 30/07/2027 : perf totale MICC (Amsterdam, EUR) vs MSCI World | ⏳ |
| **C023** | 30/07 | Juge | staples-EU / pluriannuel · PEA | Magnum | **Test d'élasticité GLP-1** : Magnum publie une croissance organique **en VOLUME négative** sur au moins un trimestre | **30 %** | Communiqués trimestriels MICC, avant le 31/12/2027 | ⏳ |
| **C024** | 30/07 | Juge | action-US défensive / <1 an · CTO | Walmart | **Couverture (réparation de lacune)** : le déclencheur d'achat (WMT ≤ 100 $ en clôture) se présente | **25 %** (brute 22 %, plancher de charte) | Clôture NYSE, avant le 31/12/2026 | ⏳ |
| **C025** | 30/07 | Juge | **comportement-client** / <1 an · CTO | Ordre de juillet | L'ordre du 30/07 (**400 € SWDA + 100 € IAU sur eToro**) est **exécuté** | **70 %** | Confirmation de Tanguy ou capture de portefeuille, au plus tard le **07/08/2026** | ❌ **RÉSOLU FAUX 08/08** — échéance passée sans confirmation. **Brier = 0,49** *(reclassé en `comportement-client` : voir ci-dessous)* |
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

## Appels ouverts le 31/07/2026 (fast-track Vicat / Mobility Global)

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C027** | 31/07 | Juge | mid-cap-EU cyclique / 12 mois · PEA | Vicat | **Le PASSE à 69,70 € est justifié** : VCT ne surperforme PAS le MSCI World de plus de 5 pts sur 12 mois | **62 %** | 31/07/2027 : perf totale VCT (Euronext) vs MSCI World | ⏳ |
| **C028** | 31/07 | Juge | mid-cap-US spin-off / <1 an · CTO | Mobility Global | **Test du mécanisme (7 jours)** : MBGL publie un **EBITDA ajusté ≥ 175 M$** ET une **croissance organique CARFAX ≥ +3 %** | **28 %** | Communiqué du **07/08/2026**, avant bourse | ✅ **RÉSOLU VRAI 08/08** — Brier **0,5184**. *Voir « Appels résolus »* |
| **C029** | 31/07 | Juge | mid-cap-US spin-off / <1 an · CTO | Mobility Global | **Test de flux (l'edge est-il expiré ?)** : MBGL clôture **≤ 21,00 $** le 07/08/2026 | **38 %** | Clôture NYSE du **07/08/2026** | ✅ **RÉSOLU VRAI 08/08** — Brier **0,3844**. *Voir « Appels résolus »* |
| **C030** | 31/07 | Juge | mid-cap-US spin-off / 12 mois · CTO | Mobility Global | **Le PASSE est justifié** : MBGL ne surperforme PAS le MSCI World de plus de 5 pts sur 12 mois — *contre un consensus de 6 analystes « Buy » à 27,83 $* | **60 %** | 31/07/2027 : perf totale MBGL vs MSCI World | ⏳ |
| **C031** | 31/07 | Juge | staples-EU / <1 an · PEA | Magnum | **Test de sélection adverse** : **aucune offre ferme** sur MICC (Blackstone, CD&R ou autre) n'est déposée avant le 31/12/2026 | **70 %** | Communiqués MICC / autorités de marché au 31/12/2026 | ⏳ |

## Appel ouvert le 02/08/2026 (Prépa)

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C032** | 02/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | **Le déclencheur d'achat se présente** : LLY clôture **≤ 1 020 $** au plus tard le **07/08/2026** (semaine de la publication T2 du 05/08) | **15 %** | Clôtures NYSE du 03 au 07/08/2026 | ❌ **RÉSOLU FAUX 08/08** — Brier **0,0225**. *Voir « Appels résolus »* |

**Construction de C032, tracée** : base rate propriétaire — sur les
**4 dernières réactions** de LLY à publication (**−13,4 %** au T2 2025,
+3,0 % au T3 2025, +7,9 % au T4 2025, +9,8 % au T1 2026), **une seule
suffirait** au repli de **−11,2 %** requis depuis 1 148,84 $. Base
brute = 25 %.
**Correction à la baisse (−10 pts)** : (a) la seule réaction qualifiante
était causée par des **données cliniques** (orforglipron), pas par les
résultats ; (b) Goldman documente qu'un relèvement de guidance est **déjà
largement anticipé** — ce qui asymétrise vers le bas *l'ampleur* d'un
éventuel repli, mais réduit la probabilité d'un choc de la taille requise
en l'absence de nouvelle clinique.
⚠️ **Le consensus de BPA est INEXPLOITABLE** (5,83 $ Goldman à 7,74 $
Visible Alpha — 33 % d'écart) : la probabilité ne s'appuie donc **pas** sur
un écart au consensus, seulement sur la dispersion historique des
réactions. Assumé et écrit.

**Notes de calibration :**
- **C028 et C029 sont les appels les plus précieux du registre : ils se
  résolvent dans 7 jours**, sur une `classe_réf` (`spin-off`) totalement
  vierge. Deux points de Brier avant le 15/08.
- **La conjonction à 4 conditions (~8 %) n'est PAS enregistrée** : la
  charte plafonne hors [25 %, 75 %] et une conjonction n'est pas « quasi
  arithmétique » (ses branches ne le sont pas). Elle a été **décomposée**
  en C028/C029, tous deux dans la bande. *Respecter la règle plutôt que
  l'argumenter.*
- **C027 (62 %) et C030 (60 %)** sont délibérément peu confiants : aucun
  edge démontré, et C030 s'oppose à un consensus sell-side unanime.
- **Registre : 1 résolu / 31 ouverts** → toujours < 20 résolus, donc
  **aucun facteur de rétraction publié**. La règle par défaut a été
  appliquée mécaniquement et a modifié un appel du jour : Vicat 20 % →
  **25 %** — **dans le sens défavorable au verdict du Juge**. C'est
  l'usage prévu : la règle ne vaut que si elle fait mal.

## Appels ouverts le 04/08/2026 (réécriture du contrat LLY, AVANT l'événement)

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C033** | 04/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | **Le principe même de la réécriture** : conditionnellement à au moins une clôture ≤ 1 020 $ d'ici le 06/11/2026, **au moins une des trois conditions de mécanisme (M1, M2, M3) est en échec ou révoquée** au moment de cette clôture | **72 %** | Au 06/11/2026 : si aucune clôture ≤ 1 020 $ → appel **VOID**, non scoré. Sinon, grille M1/M2/M3 arrêtée à la date de la première clôture qualifiante | ⏳ |
| **C034** | 04/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | **Le test Vicat appliqué à LLY** : FCF S1 2026 croissant au moins aussi vite que le CA S1 2026, **et** ≥ 5,5 Md$ | **40 %** | ✅ **RÉSOLU VRAI le 16/08, la veille de sa butée.** CF d'exploitation S1 2026 **16 023 M$** contre 4 753 M$, capex ~5 200 → **FCF ≈ 10 823 M$**. Les deux jambes tiennent, la seconde **quelle que soit la donnée manquante** (capex S1 2025 introuvable, mais borné ≥ 0 ⇒ croissance du FCF ≥ +127,7 % contre +52 % pour le CA). **Brier 0,3600.** *Voir « Résolution du 16/08 »* — ancienne note : ⏳ **RESTE OUVERT au 05/08 — non résoluble.** Le tableau de flux existe (annexe `4-Q2-26-Press-Release-SCF.pdf`) mais **l'hôte est bloqué en 403** et le 10-Q T2 n'est pas encore déposé (attendu ~07-10/08). Six formulations tentées, dont une en français. **La donnée n'existe pas publiquement à ce jour — l'appel n'est ni gagné ni perdu, il attend.** Résolution reportée au dépôt du 10-Q | ⏳ |
| **C035** | 04/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | La **guidance BPA FY2026 est RELEVÉE** (médian > 36,25 $) | **70 %** | Communiqué du **05/08/2026** | ❌ **RÉSOLU FAUX 05/08** — Brier **0,4900**. *Voir « Appels résolus »* |
| **C036** | 04/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | **Ancien seuil, fenêtre neuve** : LLY clôture ≤ **1 020 $** au moins une séance entre le 05/08 et le **06/11/2026** | **30 %** | Clôtures NYSE, 05/08 → 06/11/2026 | ⏳ |

**C033 est l'appel qui compte** — il rend falsifiable la thèse entière de la
réécriture : *une baisse de cours sur LLY est plus souvent causée par une
casse de mécanisme que par une compression de multiple.* Fondement : sur les
4 dernières réactions à publication, **la seule baisse à deux chiffres
(−13,4 %, T2 2025) fut causée par des données cliniques** — donc une cause
(b), pas (a). **Si C033 se résout FAUX, j'aurai eu tort de complexifier le
contrat**, et ce sera un point net contre moi.

**C034 — le plus précieux du lot** : il se résout demain, sur une question
de **mécanisme**, dans la classe exacte où le comité s'est fait prendre sur
Vicat. 40 % : le FCF glissant est à **10,37 Md$** contre ~32 Md$ de résultat
net 2026e, et le capex tourne à **44 % du flux d'exploitation** avec un
programme de ~55 Md$ en déploiement. **Je ne parie pas que la conversion
s'améliore au pic du capex.**

**Cohérence d'échelle sur le seuil de 1 020 $** — les trois appels ne se
contredisent pas : **C032 (au 07/08) = 15 % < C036 (au 06/11) = 30 % <
C014 (au 30/06/2027) = 35 %**. Monotone.

**Ce qui n'est PAS enregistré, et pourquoi** : la conjonction complète
(prix ≤ 23,5x **ET** certificat délivré) vaut **~3 %**. Hors de la bande
[25 %, 75 %] imposée tant que moins de 20 appels sont résolus, et une
conjonction n'est pas « quasi arithmétique ». **Précédent Mobility Global du
31/07 : décomposer, ne pas arrondir.** Arrondir 3 % à 25 % injecterait au
registre une affirmation que je sais fausse.

### ⚠️ MENTION OBLIGATOIRE SUR C014 — changement de nature, pas de probabilité

**C014 est MAINTENU OUVERT, INCHANGÉ à 35 %.** Mais depuis le 04/08, il
**ne mesure plus le contrat du Juge** : le seuil du contrat est passé de
1 020 $ à ~852 $. Sa condition de résolution pré-enregistrée étant purement
mondaine (« cours de clôture NYSE, avant le 30/06/2027 »), il reste
parfaitement résoluble sur des faits publics.

> **La Vérif' du samedi ne doit PAS lire C014 comme « le déclencheur du Juge
> s'est présenté ».** Il mesure désormais **une prévision de cours**, rien
> de plus.

C'est le miroir exact du couple C020/C021 : **C020 est mort parce qu'il
portait sur MES portes ; C021 a survécu parce qu'il portait sur LE MONDE.
C014 est un C021.** Sa probabilité n'est pas révisée — réviser une
probabilité enregistrée est une fraude de calibration.

**État du registre : 1 résolu / 35 ouverts.** Cinq points de Brier tombent
cette semaine : **C034 et C035 demain**, **C032, C028 et C029 le 07/08**.
Le registre devient interprétable plus vite qu'il ne l'a jamais été.

## Appels ouverts le 05/08/2026 (après publication LLY — tous lisibles sur le COMMUNIQUÉ seul, §7)

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C037** | 05/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | Le communiqué du **T3 2026** fait apparaître des charges d'*acquired IPR&D* **≥ 1,00 $** de BPA | **65 %** | Communiqué T3, butée 30/11/2026 | ⏳ |
| **C038** | 05/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | **CA Foundayo T3 2026 ≥ 250 M$** | **55 %** | Communiqué T3, butée 30/11/2026 | ⏳ |
| **C039** | 05/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | **Prix réalisés US du T3 2026 ≥ −8 % a/a**, tels que publiés | **65 %** | Communiqué T3, butée 30/11/2026 | ⏳ |
| **C040** | 05/08 | Juge | pharma-US / <1 an · CTO | Eli Lilly | Le **point bas** de la guidance CA FY2026 n'est **pas abaissé sous 85,0 Md$** au print du T3 | **70 %** | Communiqué T3, butée 30/11/2026 | ⏳ |
| **C041** | **06/08** | Juge | énergie-services / 1-3 ans · PEA | **SBM Offshore** | **L'EBITDA directionnel du S2 2026 ressort ≤ 682 M$** — c'est-à-dire **sous le S1 2025**, malgré un carnet record de 35,6 Md$ et une guidance FY *relevée* | **78 %** | Résultats FY2026 (~février 2027) : **EBITDA directionnel FY publié − 1 310 M$**. NON RÉSOLUBLE si le périmètre « directionnel » cesse d'être publié | ⏳ |

**C041 — l'appel qui teste ma lecture, pas le titre.** Construction, entièrement
arithmétique : guidance FY EBITDA directionnel **~1 900 M$** − S1 réalisé
**1 310 M$** = **~590 M$ implicites au S2**. Pour que l'appel échoue, SBM
doit battre sa propre guidance de **+92 M$**, soit **~4,8 % de l'EBITDA FY**,
dans un semestre **privé de la plus-value ONE GUYANA** qui a porté le S1.

Les 22 % que je laisse à l'échec ne sont pas décoratifs : SBM guide
traditionnellement bas, une seconde cession d'actif est possible dans ce
modèle (le *Fast4Ward* se vend), et la mise en service des FPSO SEAP peut
avancer des reconnaissances de marge. **C'est le vrai chemin d'échec, et il
est nommé.**

> ⚠️ **Ce que cet appel ne dit PAS.** Il ne dit pas que SBM est un mauvais
> dossier — T5 est le seul test que le titre passe brillamment. Il dit que
> **la lecture naïve du communiqué (« +92 % d'EBITDA, guidance relevée »)
> est fausse**, et il le dit d'une façon qui me condamne si je me trompe.
> **Aucun contrat, aucun créneau de surveillance, aucun seuil** — T1 (+90 %
> sur un an) et T4 (cash-flow hors cession non obtenu) l'interdisent.
> *Un appel de calibration n'est pas une porte d'entrée déguisée.*

**C037 est l'appel qui peut me condamner** : base — Curevo 1,5 + LimmaTech
0,78 + Vaccine Company 1,55 = **3,83 Md$ annoncés le 26/05, clôturant au
T3**, plus AtaiBeckley ; 1,00 $ = 894 M$ d'upfront sur 893,8 M titres.
**S'il se résout VRAI, la clause §5 de la règle 6 s'arme et ma propre règle
tue le dossier.** L'incertitude porte sur le partage upfront/milestones,
non publié.

**C038 — dérivation de R2′** : 98 M$ réalisés sur un trimestre **partiel**
(force de vente activée le 17/04) ; le seul passage à un trimestre plein
donne ~196 M$ à taux constant. S'y ajoutent, **sur les dires de la
direction** : notoriété et prescriptions doublées en un mois, ~25 % des
nouveaux patients oraux démarrant sur Foundayo, campagne élargie au T3,
accès Medicare ouvert début juillet. **250 M$ est un plancher modeste au
regard de la trajectoire que la direction décrit elle-même** — sous ce
seuil, ce n'est plus un manque de consensus, c'est le démenti de la
direction par ses propres chiffres. *Seuil délibérément fixé bas plutôt que
« juste » : le taux de sortie de trimestre n'est pas publié, et un seuil bas
qui mord quand même est plus honnête qu'un seuil élevé bâti sur une
estimation fabriquée.*

**C039 — teste ce que M3′ n'a pas su tester** : le coût MFN/TrumpRx **ne
peut pas mordre sans traverser le prix réalisé US**. T2 = **−3 %** avec
volumes +37 %, avant le lancement Medicare de début juillet. Une
dégradation de 5 pts consommerait ~1,4 Md$ sur une base de CA US S2
estimée à ~28 Md$, soit **~70 % de la largeur entière de la fourchette de
guidance**. ⚠️ *La part US du CA (~⅔) est une hypothèse à vérifier sur le
10-Q — le seuil est provisoire tant qu'elle ne l'est pas.*

### ⚠️ MENTION OBLIGATOIRE SUR C033 — contenu rétréci, probabilité NON révisée

**C033 (72 %)** portait sur « au moins une des trois conditions M1, M2, M3
est en échec au moment d'une clôture ≤ 1 020 $ ». **M2 est désormais
satisfaite sans ambiguïté et M3 réputée satisfaite sur la ligne douanière
depuis le 05/08 matin : C033 ne repose plus que sur M1.** Son contenu s'est
rétréci.
> **Sa probabilité n'est PAS révisée** — réviser une probabilité enregistrée
> est une fraude de calibration. Même traitement que C014.

### ⚙️ Correction de process (issue de C035, niveau 3 — la plus dure)

**La charte contenait déjà l'antidote, et je ne l'ai pas appliqué à
moi-même.** La règle 16 impose d'obtenir toute probabilité décisive **deux
fois** — jugement global **et** arbre multiplicatif. Or C035 était une
**conjonction** : *P(relèvement du sous-jacent)* × *P(pas de charge d'IPR&D
compensatrice)* ≈ **0,85 × 0,55 ≈ 47 %**. Mon jugement global disait 70 %.
**Écart de 23 points — bien au-delà du seuil de 15 de la charte, qui
commande de creuser et de retenir la valeur BASSE.**

> **À 47 %, le Brier aurait été 0,2209 au lieu de 0,4900. La faute a coûté
> exactement 0,27 point de Brier — et ce n'était PAS une faute de
> connaissance comptable : c'était le non-usage d'un outil déjà écrit dans
> la charte.**

**Règle encodée** : *l'arbre multiplicatif de la règle 16 s'applique aux
APPELS DU REGISTRE avec la même force qu'aux verdicts. Tout appel dont
l'affirmation contient un « et », un « non abaissée », ou une condition
composée est une conjonction et doit être décomposé AVANT enregistrement.*

**Erreur de conception (niveau 2)** : l'appel portait sur une métrique que
**l'émetteur déplace à volonté par une décision discrétionnaire sans
rapport avec la thèse**. Prédire la guidance BPA publiée de Lilly, c'est
prédire **le calendrier de fusions-acquisitions de Lilly**.
→ *N'écrire un appel, ni une condition de contrat, que sur une grandeur que
l'émetteur ne contrôle pas (CA, volume, prix réalisé, part de marché) ou
sur laquelle il s'est publiquement engagé (plancher de guidance).*

### 🔬 Hypothèse à n = 3 — à surveiller, NE PAS conclure

| Appel | Nature | Brier |
|---|---|---|
| C032 (≤ 1 020 $ au 07/08) | **prix de marché** | ~0,0225 *(à acter le 07/08)* |
| C020 (mon contrat Vicat) | **construction interne** | 0,1764 |
| C035 (comptabilité d'entreprise) | **choix comptable** | **0,4900** |

**Motif possible** : les appels sur *le monde et les prix* seraient bien
calibrés ; ceux sur *les choix comptables et les constructions internes* ne
le seraient pas. **Si le motif tient après ~10 résolutions supplémentaires**,
conséquence : **réduction d'un cran du sizing** sur toute thèse dont le
mécanisme repose sur une prévision de chiffre publié plutôt que sur un fait
de marché. **n = 3 ne conclut rien.**

## Appels résolus

| ID | Affaire | Affirmation | P | Issue | **Brier** | Leçon |
|---|---|---|---|---|---|---|
| **C035** | **Eli Lilly** | La guidance BPA FY2026 est **RELEVÉE** (médian > 36,25 $) | **70 %** | **0 — ❌ FAUX.** Guidance passée de 35,50-37,00 $ (médian **36,25 $**) à 35,50-36,50 $ (médian **36,00 $**). 36,00 n'est pas > 36,25 | **0,4900** | **J'ai prédit la bonne ÉCONOMIE et la mauvaise COMPTABILITÉ.** Le BPA sous-jacent a bien été **relevé de +2,78 $** au point médian, et le CA de **+3,0 Md$** — mon raisonnement économique était juste. Mais la hausse a été **plus que compensée par 3,03 $ de charges d'*acquired IPR&D*** issues de quatre acquisitions finalisées au trimestre (Orna, Ajax, Centessa, Kelonia). Net : **−0,25 $**. **J'avais écrit l'appel sur le CHIFFRE PUBLIÉ sans anticiper qu'une charge non opérationnelle pouvait le renverser.** ⚠️ **Pire score du registre à ce jour** (référence C020 : 0,1764). |
| **C020** | **Vicat** | Le déclencheur réécrit se présente EN TOTALITÉ avant échéance (Porte A ≤ 56 € ou Porte B) | **42 %** | **0 — ❌ FAUX** (contrat terminé le 31/07 par PASSE définitif : le déclencheur ne peut plus se présenter) | **0,1764** | **P calculée sans conditionner sur un catalyseur inscrit à MON PROPRE radar** (résultats du 29/07). Un mid-cap qui publie a une dispersion de ±10-15 % en une séance : un seuil à −10 % avait donc une probabilité substantielle de devenir inatteignable **avant même que l'encre sèche**. C'est exactement ce qui s'est produit, en une séance (+13,15 %). |
| **C025** | **Ordre de juillet** | L'ordre du 30/07 (400 € SWDA + 100 € IAU sur eToro) est **exécuté** | **70 %** | **0 — ❌ FAUX.** Échéance du 07/08 passée sans confirmation | **0,4900** | **Appel mal CLASSÉ autant que mal chiffré** : rangé en `allocation`, il relevait de `comportement-client` — classe sans historique, où je prédis l'exécution de ma propre recommandation. Mais la vraie cause n'est pas l'optimisme : la capture Fortuneo du 07/08 montre que **Tanguy AGISSAIT** (PEA ouvert) et butait sur un **mur opérationnel**. Le mode d'échec non modélisé est la **FRICTION**, pas le désintérêt. Arbre correct : `0,85 × 0,40 × 0,80 ≈ 27 %` — **43 points sous mon chiffre**, exactement l'écart de C035. |

### ⚙️ Correction de process encodée (issue de C035) — écrire l'appel sur la BONNE grandeur

> **Un appel écrit sur un CHIFFRE PUBLIÉ doit anticiper les mécaniques
> comptables qui peuvent le renverser sans que l'économie change.**

C035 était juste sur le fond et faux sur la forme. Les trois familles de
mécaniques à considérer avant d'écrire un appel sur un agrégat publié :
**charges d'acquired IPR&D** (le prix d'achat d'un pipeline passé
immédiatement en charges — endémique en pharma), **éléments discrets
non récurrents** (le cas MSFT du 29/07, où 0,27 $ de « discrete items »
faisaient 54-66 % du beat), et **changements de durée d'amortissement**
(le cas MSFT du 30/07, bâtiments 15 → 25 ans).

**Règle** : *si l'appel porte sur une thèse ÉCONOMIQUE, l'écrire sur la
grandeur économique (CA, sous-jacent, volume) — pas sur l'agrégat publié.
Si l'appel porte délibérément sur le publié, le dire, et accepter d'être
noté sur la comptabilité autant que sur l'économie.*

### ⚙️ Correction de process encodée (issue de C020)

> **Tout déclencheur écrit à moins de 5 séances d'un catalyseur DATÉ doit
> voir sa probabilité calculée comme une MIXTURE sur les issues du
> catalyseur — jamais sur le prix pré-catalyseur.**

### 📐 Principe : un appel sur MON CONTRAT meurt avec mon contrat ; un appel sur LE MONDE lui survit

**C021 est MAINTENU OUVERT à 32 %, sans retouche**, alors même que le
dossier Vicat est clos. Distinction de principe :
- **C020** portait sur *mon déclencheur* → mort avec le contrat.
- **C021** porte sur *le FCF, la dette nette et le levier FY2026 de
  Vicat* → **entièrement vérifiable sur comptes publiés**, que l'on
  détienne le dossier ou non. Le fermer détruirait gratuitement de
  l'information de calibration **sur le seul mécanisme qui comptait**.

⚠️ **Et ses 32 % ne sont PAS révisés** à la lumière de la dette nette de
1 310 M€ obtenue depuis : **réviser une probabilité déjà enregistrée est
de la fraude de calibration.**

## Prochaines résolutions au calendrier
- **29/07** : AdComm FDA Capricor (deramiocel DMD) — pas un appel du comité,
  mais test de la détection santé.
- **05/08** : Résultats Q2 Eli Lilly — résout en partie le dossier LLY.
- **Fin juillet-août** : Publication S1 Nexans → résout C003.
- **23/08 & 19/09** : PDUFA Ultragenyx → alimentent C004.
- **Septembre** : FOMC → résout C005 (divergence Kalshi/FedWatch).

## Appels ouverts le 07/08/2026 — réécriture du contrat Walmart, AVANT l'événement

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C042** | 07/08 | Juge | action-US défensive / <1 an · CTO | Walmart | **Le mécanisme décélère** : le communiqué du T2 FY27 fait apparaître une croissance de la **publicité globale < +32 %** a/a | **42 %** | ❌ **RÉSOLU FAUX le 20/08** — publicité globale publiée à **+38 %** (cinq sources concordantes). **La décélération s'est INVERSÉE.** Brier **0,1764**. *Voir « Résolution du 20/08 »* | ❌ |
| **C043** | 07/08 | Juge | action-US défensive / 12 mois · CTO | Walmart | **Le PASSE est justifié** : WMT ne surperforme PAS le MSCI World de plus de **5 points** sur 12 mois | **68 %** | 07/08/2027 — performance totale WMT vs MSCI World | ⏳ |
| **C044** | 07/08 | Juge | action-US défensive / pluriannuel · CTO | Walmart | **Le seuil correctement dérivé ne se présente pas** : WMT ne clôture **jamais ≤ 80,00 $** avant le 31/12/2027 | **75 %** *(brute 78 %, plafond de charte appliqué)* | Clôtures NYSE, 07/08/2026 → 31/12/2027 | ⏳ |

**Construction de C042, tracée** : +46 % au T2 FY26 → +37 % au T1 FY27, soit
**−9 points sur 3 trimestres ≈ −3 pts/trimestre**. La tendance linéaire
projette **~+34 %** au T2 FY27. **Le seuil de 32 % est placé SOUS la
tendance, donc il mord des deux côtés** : il échoue si la décélération n'est
que tendancielle, il réussit si elle s'accélère. Base de comparaison qui se
durcit (6,4 Md$). **Grandeur non discrétionnaire** — une croissance de
chiffre d'affaires publicitaire, pas un agrégat comptable : conforme à la
correction de process encodée le 05/08 après C035. **Il se résout dans
13 jours et teste directement la lecture qui porte le PASSE.**

**Décomposition vérifiée** (règle du 05/08 : tout appel contenant un « et »
est une conjonction déguisée) : **aucun des trois n'est une conjonction.**
C042 = une métrique · C043 = une performance relative · C044 = un prix.

> ⚠️ **La conjonction à 4,95 % n'est PAS enregistrée telle quelle.**
> L'arbre multiplicatif de l'Arbitre donnait `22 % × 30 % × 75 % = 4,95 %`
> pour « un contrat WMT correctement écrit produit un achat qui bat le
> cœur ». Le plafond de charte l'aurait remontée à 25 % — **inscrire 25 %
> injecterait au registre une affirmation que je sais fausse.** Précédents
> MBGL (31/07) et LLY (04/08) : **décomposer, ne pas arrondir.**

### 🔄 MENTION OBLIGATOIRE SUR C024 — la nature change, la probabilité NE BOUGE PAS

**C024 est MAINTENU OUVERT et INCHANGÉ à 25 %** (« WMT ≤ 100 $ en clôture
avant le 31/12/2026 »). Depuis le 07/08, **il ne mesure plus le contrat du
Juge** — ce contrat n'existe plus, et le seuil correctement dérivé est
**80,00 $, pas 100 $**. Sa condition de résolution étant purement mondaine
(une clôture NYSE), il reste parfaitement résoluble.

> ⚠️ **La Vérif' du samedi ne doit PAS lire C024 comme « le déclencheur du
> Juge s'est présenté ».** Il mesure désormais **une prévision de cours**,
> rien de plus.

C'est le cas **C021/C014** à l'identique : *un appel sur MON CONTRAT meurt
avec mon contrat ; un appel sur LE MONDE lui survit.* **Sa probabilité n'est
pas révisée — réviser une probabilité enregistrée est une fraude de
calibration.**

### 🔬 Ce que cet arbitrage apprend sur MA façon d'écrire les seuils

L'Arbitre a validé mon arithmétique **terme à terme** (`1,075⁷ = 1,659048`,
`33,61x`, `31,31x/36,10x` — tout est exact) et a quand même conclu que ma
dérivation ne tenait pas. **Les deux ne sont pas contradictoires, et c'est
la leçon.**

1. **Mon hurdle de 7,5 % contredisait ma propre jurisprudence.** Le 04/08
   j'ai écrit pour LLY : *« ρ ≈ 0,45-0,55 lui vaut le bas de la bande de
   prime (2 pts, pas 3) → hurdle 7,0 % »*. Walmart est dans le **même
   bucket**. Appliquer 7,5 % à l'un et 7,0 % à l'autre est du favoritisme
   inversé. *Corrigé — et le PASSE tient quand même, avec le hurdle plus
   FAVORABLE.*
2. **Mon hypothèse centrale contredisait la seule source contrôlée du
   dossier.** J'ai rétracté de 19 % à 11 % en me croyant prudent. **Or le
   19 % n'existe pas dans les données de 2026** : Walmart guide **+6,1 %**.
   Mon « cas prudent » était **4,9 points au-dessus de ce que l'émetteur
   annonce**, à tenir sept ans. *Rétracter depuis un chiffre faux ne rend
   pas prudent — ça donne seulement l'impression de l'être.*
3. **🔑 L'erreur de niveau supérieur, que je n'avais pas vue.** Ma règle du
   05/08 dit : *n'écrire une condition que sur une grandeur que l'émetteur
   ne contrôle pas, ou sur laquelle il s'est publiquement engagé.* **Un
   multiple terminal à 7 ans n'est ni l'un ni l'autre : il n'est produit
   par aucun canal — il est produit par moi.**
   > C'est pourquoi la bande **ne peut pas être resserrée par plus de
   > travail**. Ce n'est pas une imprécision de mesure, **c'est un
   > paramètre libre.** J'avais diagnostiqué le symptôme (« la bande est
   > large, c'est le point faible ») sans nommer la cause — et sans la
   > cause, j'aurais cherché à réduire la bande en documentant davantage,
   > ce qui était impossible par construction.
4. **Le fait de réconciliation qui emporte tout** : trois dossiers mesurés
   indépendamment à trois dates donnent **+3,03 % (WMT), +3,04 % (Magnum),
   +3,01 % (LLY)** par an net. *Ce n'est pas une coïncidence — c'est ce que
   produit un actif de qualité acheté au prix que le marché demande pour de
   la qualité.* **Toute future candidate « compounder de qualité à prix de
   marché » doit désormais partir de l'hypothèse qu'elle vaut ~3 %/an
   net**, et démontrer pourquoi elle échappe à cette classe de référence.

### Signal d'invalidation du PASSE — enregistré, avec sa date

**J'aurai eu tort si, avant le 31/12/2027, WMT clôture ≤ 80,00 $ ALORS QUE
le dernier communiqué montre publicité ≥ +25 %, commerce en ligne ≥ +18 %
et plancher de guidance BPA non abaissé.** C'est l'état auquel l'Arbitre
assigne 30 % conditionnellement au prix : si le prix y va **avec** le
mécanisme intact, la décomposition des causes de baisse était fausse et le
créneau libéré aujourd'hui aura coûté un achat qui battait le cœur.

**Signal plus précoce, dans 13 jours** : si le communiqué du **20/08** montre
publicité **≥ +40 %** (ré-accélération contre +37 %) **et** un relèvement du
**plancher** de guidance BPA FY27 au-dessus de 2,80 $, la lecture « le
flywheel décélère et l'émetteur guide +6 % » est démentie **par les faits**,
et le PASSE se rouvre immédiatement — sans attendre un fait de prix.

## ❌ C025 RÉSOLU FAUX — Brier 0,49, et je m'étais trompé sur la NATURE de l'appel

**L'appel** : « l'ordre du 30/07 (400 € SWDA + 100 € IAU sur eToro) est
exécuté », P = **70 %**, échéance 07/08. **Échéance passée sans
confirmation → ❌. Brier = (0,70 − 0)² = 0,4900.** Deuxième pire score du
registre, à égalité quasi parfaite avec C035 (0,4900).

### Ce que je croyais mesurer, et ce que je mesurais vraiment

Je l'avais classé en `allocation`. **C'est faux : c'est un appel de la
classe `comportement-client`** — une classe où je n'ai **aucun historique**,
et où j'ai un **conflit d'intérêt structurel** : je prédis l'exécution de ma
propre recommandation. *Personne ne parie à 30 % que son conseil sera
ignoré.* **Reclassé, et la classe est créée.**

### 🔑 Mais la vraie leçon n'est pas l'excès d'optimisme — c'est un modèle FAUX

**Le 07/08, Tanguy m'a envoyé une capture Fortuneo : il a OUVERT un PEA.**
Il n'est pas alimenté, et il était bloqué sur un écran lui réclamant un
versement qu'il ne trouvait pas comment faire (le premier versement d'un
compte neuf est un virement POUSSÉ depuis l'extérieur — il n'y a pas de
bouton dans l'app).

> **Ce fait démolit l'explication commode.** J'aurais pu conclure « j'ai
> surestimé son engagement » — c'est faux. **Il agissait**, il a ouvert un
> compte, il s'est heurté à un mur opérationnel. Le mode d'échec que je
> n'avais pas modélisé n'est pas le désintérêt, c'est **la FRICTION entre
> une décision et son exécution.**

**Correction de process, et elle porte sur mes RECOMMANDATIONS, pas sur mes
probabilités :**

> Une recommandation du type « mets 400 € sur le WPEA » présuppose
> silencieusement un compte capable de recevoir l'ordre. **Cette
> présupposition n'était pas vérifiée, et elle était fausse.** Toute
> instruction doit désormais nommer **le chemin opérationnel**, pas
> seulement la décision : quel compte, alimenté comment, avec quel délai
> de virement, et quelle est la prochaine action physique à faire.
>
> *Un conseil qui ne peut pas être exécuté n'est pas un conseil prudent —
> c'est un conseil incomplet, et il se compte comme une erreur.*

**Ce que j'aurais dû prédire, et qui devient le format des futurs appels de
cette classe** : décomposer plutôt que globaliser. `P(Tanguy veut agir)` ×
`P(le chemin opérationnel est ouvert)` × `P(il le fait dans la fenêtre)`.
Au 30/07, la deuxième jambe valait au mieux 40 % — **aucun PEA n'existait
et le compte eToro n'avait jamais été testé sur un ordre**. Arbre :
`0,85 × 0,40 × 0,80 ≈ 27 %`. **Contre 70 % annoncés : 43 points d'écart.**

> C'est **exactement la faute de C035** — où l'arbre multiplicatif de la
> règle 16 donnait 47 % contre un jugement global de 70 %. **Deux fois la
> même semaine, le même écart de ~43 points, produit par la même cause :
> un jugement global là où une conjonction était en jeu.** La règle
> existait dans ma charte les deux fois.
>
> **Elle n'est donc pas un défaut de connaissance mais de DÉCLENCHEMENT.**
> Nouvelle contrainte, mécanique : **tout appel dont la réalisation exige
> plusieurs conditions indépendantes s'écrit comme un produit AVANT d'être
> chiffré globalement.** Si les deux nombres divergent de plus de 15
> points, c'est le produit qui est enregistré.

## 🔧 INCIDENT D'INTÉGRITÉ DU REGISTRE — découvert et réparé le 08/08/2026

**C'est la Revue du samedi qui l'a trouvé, en faisant ce pour quoi elle
existe : compter les appels résolus avant d'en tirer un score.**

Trois défauts, tous dans le même fichier, tous invisibles à la lecture :

| Défaut | Ce qu'il produisait |
|---|---|
| **C020 et C035 marqués ⏳** dans le tableau des appels ouverts, alors qu'ils étaient **résolus et scorés** dans la section « Appels résolus » | Le registre **se contredisait lui-même** sur son propre état |
| **Une ligne de tableau FUSIONNANT deux appels** (C035 et C020), l'identifiant de C020 ayant purement disparu | Un appel résolu **sans identifiant** est un appel qu'aucune requête ne retrouve |
| **C025 résolu ce matin mais absent** du tableau des résolus | Idem |

### Pourquoi c'est sérieux, et pas cosmétique

**Chaque statistique de calibration que j'aurais publiée aujourd'hui aurait
été fausse.** Un Brier moyen se calcule sur les appels résolus : avec deux
résolus invisibles sur trois, la Vérif' des appels aurait annoncé **1 appel
noté** au lieu de **3**, et la moyenne aurait été **0,4900** au lieu de
**0,3855**. *Un registre qui perd ses propres résolutions ne mesure plus
rien — il met en scène une mesure.*

**Et le défaut est structurel, pas accidentel** : le fichier tient chaque
appel à **deux endroits** (tableau des ouverts + tableau des résolus) sans
aucun mécanisme de synchronisation. **Une donnée dupliquée sans mécanisme
de cohérence finit toujours par diverger** ; ici il aura fallu neuf jours.

> **Correction encodée — la règle du miroir.** Résoudre un appel est un
> geste en **deux temps indissociables** : (1) inscrire la ligne dans
> « Appels résolus » avec son Brier et sa leçon ; (2) **remplacer le ⏳ du
> tableau d'origine par le verdict et un renvoi.** Un appel résolu à un
> seul endroit est un appel **non résolu**.
>
> **Contrôle de la Revue, à exécuter AVANT toute statistique** : compter
> les ⏳ et les résolus, et vérifier que chaque ligne du tableau des
> résolus porte **un identifiant unique**. Le contrôle qui a mordu
> aujourd'hui coûte dix secondes.

⚠️ **Aucune probabilité n'a été touchée, aucun Brier n'a été recalculé.**
Les trois scores (0,1764 · 0,4900 · 0,4900) sont ceux enregistrés à leur
date de résolution. **La réparation est de forme — la retoucher au fond
aurait été la fraude que la réparation cherche à empêcher.**

## 📉 PREMIÈRE LECTURE DU SCORE — 3 résolus, 3 FAUX, et le biais a un nom

| Appel | Affirmation | P | Issue | Brier |
|---|---|---|---|---|
| **C020** | Le déclencheur Vicat se présente en totalité | 42 % | ❌ | 0,1764 |
| **C035** | La guidance BPA de Lilly est relevée | 70 % | ❌ | 0,4900 |
| **C025** | L'ordre de juillet est exécuté | 70 % | ❌ | 0,4900 |

**Brier moyen = 0,3855.** Repère pile ou face : **0,25**.
**Je fais actuellement PIRE que de répondre 50 % à tout.**
P moyenne annoncée : **60,7 %** · réalisations : **0 sur 3**.

### ⚠️ n = 3 ne conclut RIEN — ma propre charte l'écrit

*« < 20-30 appels : anecdotique, on trace, on ne conclut RIEN. »* Trois
appels, c'est du bruit : trois pièces qui tombent du même côté n'ont rien
d'extraordinaire (probabilité 1/8 même avec une pièce parfaite).
**Je ne change donc AUCUN paramètre de sizing sur cette base.**

### 🔑 Mais le MOTIF, lui, est lisible — et il n'est pas statistique

Les trois appels ont la même forme logique. Regarde ce que chacun affirme :

- « le déclencheur **se présentera** »
- « la guidance **sera relevée** »
- « l'ordre **sera exécuté** »

> **Les trois prédisent qu'un ÉVÉNEMENT SE PRODUIRA. Les trois se sont
> résolus par un NON-ÉVÉNEMENT.** Ce n'est pas de la sur-confiance
> générique : c'est un **biais d'occurrence** — je sous-estime
> systématiquement la fréquence à laquelle *il ne se passe rien*.

C'est le biais le plus banal et le plus coûteux d'un système conçu pour
**chercher** des opportunités : l'attention se porte sur les chemins qui
mènent à l'action, et les chemins qui mènent à l'inertie ne sont pas
inventoriés avec la même énergie. *Le monde est fait d'inertie beaucoup
plus que mes appels ne le supposent.*

### La prédiction que ce diagnostic engendre — et elle est testable

Si le biais est réel, alors **mes appels récents devraient mieux scorer**,
parce qu'ils ont spontanément changé de forme : **C041** (l'EBITDA de SBM
au S2 **ne dépassera pas** 682 M$, 78 %), **C043** (Walmart **ne
surperformera pas**, 68 %), **C044** (Walmart **ne clôturera jamais** sous
80 $, 75 %) prédisent tous des **NON-événements**.

> **C'est une prédiction falsifiable sur ma propre calibration, et je
> l'enregistre comme telle** : si le biais d'occurrence est la bonne
> explication, ces trois-là doivent se résoudre VRAIS. S'ils se résolvent
> faux, mon diagnostic était une histoire commode et le vrai problème est
> ailleurs — de la sur-confiance pure, dans les deux directions.
>
> **Aucune correction de sizing avant ~10 résolutions supplémentaires.**
> Nommer un biais sur n = 3 est légitime ; agir dessus ne l'est pas.

## Résolutions du 08/08/2026 — Mobility Global et Eli Lilly

| ID | Affaire | Affirmation | P | Issue | **Brier** | Leçon |
|---|---|---|---|---|---|---|
| **C028** | **Mobility Global** | EBITDA ajusté T2 **≥ 175 M$** **ET** organique CARFAX **≥ +3 %** | **28 %** | **1 — ✅ VRAI.** EBITDA ajusté **202 M$** (+15,4 % au-dessus du seuil) ; CARFAX **+8 %** | **0,5184** | **Pire score du registre — et je l'ai voté contre mon intérêt** (voir ci-dessous). J'ai massivement sous-estimé un dossier que j'avais tué : les deux jambes passent, et l'EBITDA de très loin |
| **C029** | **Mobility Global** | Clôture NYSE **≤ 21,00 $** le 07/08 | **38 %** | **1 — ✅ VRAI.** Clôture **19,56-19,70 $**, jamais positive de la séance (plus haut 20,70 < clôture veille 20,73) | **0,3844** | Le titre a chuté de ~5 % sur un **CA manqué et une guidance de CA coupée**. J'avais raisonné « l'edge de flux a expiré, le titre dérive à la hausse » — vrai jusqu'au print, faux au print |
| **C032** | **Eli Lilly** | Clôture **≤ 1 020 $** au plus tard le 07/08 | **15 %** | **0 — ❌ FAUX.** LLY entre ~1 148 $ et ~1 192 $ toute la semaine | **0,0225** | **Mon meilleur score**, et il vient d'un appel où j'ai eu raison de dire que ça n'arriverait pas. *Un 15 % bien placé vaut mieux qu'un 50 % posé pour ne pas se tromper.* |

### 🔍 C028 — pourquoi je l'ai résolu VRAI alors que FAUX m'arrangeait

**Le fait** : résoudre VRAI me coûte **0,5184**, mon pire score. Résoudre
FAUX m'aurait donné **0,0784**, mon deuxième meilleur. **L'écart entre les
deux lectures vaut 0,44 point de Brier en ma faveur.**

**La porte de sortie existait, et elle était respectable.** Mon appel exigeait
une croissance **« organique »** de CARFAX. Or **aucune source ne qualifie
explicitement le +8 % de CARFAX d'organique** — c'est un chiffre publié. La
lettre du contrat autorisait le ❌.

**Pourquoi je ne l'ai pas prise :**
1. **Aucune acquisition sur la période** — la société venait d'être scindée
   de S&P Global, c'était son premier trimestre autonome.
2. **Au niveau groupe, publié et organique sont IDENTIQUES : 7 % et 7 %.**
   L'écart entre les deux notions est donc **nul** sur ce trimestre.
3. CARFAX est une activité domestique américaine : **pas d'effet de change**.

> **L'écart publié/organique vient des acquisitions, des cessions et du
> change. Aucun des trois n'existe ici. Le +8 % EST organique en substance,
> et le mot manquant est une absence de vocabulaire, pas une absence de
> fait.**
>
> Se retrancher derrière un mot manquant pour éviter 0,44 point de Brier
> aurait été la définition exacte de la fraude de calibration que tout ce
> registre est censé empêcher. **Un registre qu'on peut plaider est un
> registre qui ne mesure plus rien.**

⚠️ **Défaut de rédaction à corriger pour la suite** : mon appel employait
un terme (« organique ») que **l'émetteur n'utilise pas dans son
communiqué** — violation de la règle 7 (testabilité depuis le communiqué
seul). *N'écrire une condition qu'avec le vocabulaire que l'émetteur emploie
réellement.*

### 📌 Ce que MBGL apprend sur la décision, séparément du score

**Le PASSE du 31/07 n'est pas invalidé par ce print, et il faut le dire
précisément pour ne pas se payer de mots.** Ce que le trimestre montre :

| Fait | Lecture |
|---|---|
| EBITDA ajusté **202 M$**, marge **43 %** | La rentabilité était meilleure que je ne l'avais estimée |
| CA **468 M$**, **manqué de 6,28 M$** vs consensus | La croissance, elle, déçoit |
| BPA **0,18 $** contre **0,24 $** attendu (FactSet) | **−25 %** |
| **Guidance CA FY26 COUPÉE** à 1,87-1,885 Md$ | La révision est baissière |
| Guidance EBITDA **maintenue** à 745-760 M$ | *« CA coupé, EBITDA tenu » — la marge encaisse le choc* |
| Cause nommée par la direction | **Le passage à une offre groupée engagé fin 2025 n'a pas produit les bénéfices attendus** |
| Levier net **2,4×**, FCF S1 **177 M$** | Conforme à mon estimation de 2,6× post-spin |

> **Le titre a fait −5 % sur ce print.** Mon motif de PASSE était que
> l'espérance restait sous le hurdle **même en supposant un bon print**
> (+4,21 %/an). Le print n'a pas été bon. **La décision tient, mais mon
> APPEL était mal calibré** — et ce sont deux choses différentes qu'il
> faut refuser de confondre.

⚠️ **Divergence de consensus non résolue** : mon chiffre pré-publication de
« BPA normalisé 0,45 $ » **ne se retrouve dans aucune source**. La seule
référence sourcée est **FactSet à 0,24 $**. Contrôle qui valide le 0,18 $
publié : `53 M$ ÷ 0,18 = 294,4 M titres`, cohérent avec ~295,1 M en
circulation ✓. **Mon 0,45 $ était probablement un agrégat semestriel ou un
BPA ajusté non comparable — origine non identifiée, noté comme tel.**

## ❌ LE DIAGNOSTIC DE CE MATIN EST RÉFUTÉ — en trois heures, par des données déjà publiques

**Ce matin, sur n = 3, j'ai écrit un diagnostic et une prédiction
falsifiable :**

> *« Les trois prédisent qu'un ÉVÉNEMENT SE PRODUIRA. Les trois se sont
> résolus par un NON-ÉVÉNEMENT. […] je sous-estime systématiquement la
> fréquence à laquelle il ne se passe rien. »* — **biais d'occurrence.**

**Trois heures plus tard, C028 et C029 se résolvent.** Les deux prédisaient
qu'un événement se produirait (un seuil d'EBITDA franchi, un cours sous
21 $), **à faible probabilité (28 % et 38 %)**. Sous ma théorie, ils
devaient se résoudre **FAUX** — voire mériter des probabilités *encore plus
basses*.

**Les deux se sont résolus VRAIS.**

> **La théorie du biais d'occurrence a produit une prédiction fausse sur
> les deux premiers points de données disponibles. Elle est réfutée.**

### 🔴 Et l'aggravation, qui est la vraie leçon : les données EXISTAIENT DÉJÀ

**MBGL a publié le vendredi 07/08 avant bourse et a clôturé le 07/08 au
soir.** J'ai écrit ma théorie le **samedi 08/08 au matin** — *après* que les
faits soient publics, mais *avant* de les avoir lus.

> **J'ai théorisé sur trois points en laissant trois résolutions en attente
> alors que les données étaient déjà disponibles.** Ce n'est pas de la
> malchance : c'est un **ordre des opérations inversé**.
>
> **Règle encodée, mécanique** : la Revue **résout d'abord tous les appels
> échus, ensuite seulement calcule les statistiques et cherche des
> motifs.** Aucun diagnostic de calibration n'est écrit tant qu'un appel
> échu reste ouvert. *Un motif tiré d'un échantillon qu'on n'a pas fini de
> collecter est une histoire, pas une mesure.*

**C'est la TROISIÈME narration bâtie sur trop peu de points cette semaine** :
Palantir/AMD le 05/08 (un événement), le pétrole et les records le 06/08
(une séance), le biais d'occurrence le 08/08 (trois appels). **Trois fois,
la correction a suivi en 24 à 72 heures.** Le motif n'est pas dans les
marchés, il est dans ma façon de conclure.

## 📊 LE SCORE RÉEL — n = 6, et il est mauvais dans les DEUX directions

| ID | P | Issue | Brier |
|---|---|---|---|
| C032 | 15 % | ❌ | **0,0225** |
| C020 | 42 % | ❌ | 0,1764 |
| C029 | 38 % | ✅ | 0,3844 |
| C035 | 70 % | ❌ | 0,4900 |
| C025 | 70 % | ❌ | 0,4900 |
| C028 | 28 % | ✅ | **0,5184** |

**Brier moyen = 0,3469.** Répondre **50 % à tout** donnerait **0,2500**.
**Brier Skill Score contre ce repère : −0,388.**

> **Je fais actuellement nettement PIRE que si je n'avais aucune opinion.**

### La structure du score — et elle est sans ambiguïté

| Tranche | Appels | Réalisés |
|---|---|---|
| **P ≥ 42 %** *(« probable »)* | C020, C035, C025 | **0 sur 3** |
| **P < 42 %** *(« peu probable »)* | C028, C029, C032 | **2 sur 3** |

> **Ce que j'annonce probable n'arrive pas. Ce que j'annonce improbable
> arrive.** Ce n'est **pas** un biais directionnel — ce n'est pas de
> l'optimisme, ce n'est pas un biais d'occurrence. **C'est de
> l'anti-calibration** : mes probabilités s'écartent de 50 % **dans la
> mauvaise direction**.

**Ce que je fais de ce constat — et ce que je n'en fais pas :**

- ❌ **Je ne change AUCUN paramètre de sizing.** n = 6, ma charte exige
  20-30 résolutions avant de conclure. Six pièces qui tombent ainsi n'ont
  rien d'extraordinaire.
- ❌ **Je ne propose PAS de nouvelle théorie explicative.** J'en ai produit
  trois cette semaine, toutes réfutées. **La quatrième serait la même
  erreur.** *La bonne réponse à « je viens de sur-interpréter n = 3 » n'est
  pas une meilleure interprétation de n = 6.*
- ✅ **Je publie le score tel quel dans la Revue**, y compris qu'il est pire
  qu'un pile ou face. C'est le seul engagement qui compte.
- ✅ **Un seul correctif mécanique, et il ne suppose aucune théorie** : la
  **règle du facteur de rétraction** déjà inscrite dans ma table de
  rétroaction s'applique — `P' = 0,5 + 0,8 × (P − 0,5)`. Elle réduit
  l'écart à 50 % **quelle que soit la direction de l'erreur**, donc elle
  vaut sous l'anti-calibration comme sous la sur-confiance simple.
  **Appliquée à partir d'aujourd'hui, à tout appel du Juge.**
  *Contrôle sur l'échantillon : elle aurait donné 0,3095 au lieu de 0,3469.
  Toujours pire que 0,25 — elle atténue, elle ne répare pas.*

## Appel ouvert le 09/08/2026 — premier appel passé au facteur de rétraction

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C045** | 09/08 | Juge | **macro-US** / <1 mois | CPI juillet | **La désinflation du cœur CALE** : l'inflation sous-jacente américaine de juillet ressort **≥ 2,5 % a/a** | **62 %** *(brut 65 %, rétraction appliquée)* | Publication BLS du **12/08/2026, 14h30 Paris** | ✅ **RÉSOLU VRAI 13/08** — sous-jacent publié à **2,5 %**. Brier **0,1444**. *Voir « Appels résolus »* |

**Construction, tracée** : juin 2026 = **2,6 % a/a** et **0,0 % m/m** ;
consensus de juillet = **2,5 %** [MONO-SOURCE]. L'appel dit donc que **le
consensus est légèrement trop optimiste** sur le cœur. Base : le sous-jacent
est structurellement plus visqueux que le headline, et la désinflation de
juin venait de l'énergie (**−5,7 %**, essence **−9,7 %**) — un canal qui ne
traverse le cœur que lentement et indirectement.

**Grandeur non discrétionnaire** : un indice publié par une agence
statistique, que personne n'a d'intérêt à orienter. Conforme à la correction
de process du 05/08.

> ⚙️ **Premier appel passé au facteur de rétraction** `P' = 0,5 + 0,8 ×
> (P − 0,5)`, encodé hier après un Brier de 0,3469 sur six résolutions.
> **65 % → 62 %.** L'écart paraît dérisoire ; il ne l'est pas sur la
> distribution : c'est mes 70 % qui deviennent 66 % et mes 15 % qui
> deviennent 22 %. **Sur l'échantillon existant, la règle aurait donné
> 0,3095 au lieu de 0,3469.**

**Note sur les scénarios de la Prépa (partition à trois branches)** : la
rétraction y a été appliquée **vers 1/3 et non vers 0,5**. *La rétraction
pousse vers l'ignorance, et l'ignorance sur trois branches vaut 1/3.*
Brut 45/25/30 → **43/27/30**. **Adaptation nécessaire de la règle, notée
dès sa première utilisation.**

## Résolution du 13/08/2026 — C045, et une comparaison qui vaut d'être notée

| ID | Affaire | Affirmation | P | Issue | **Brier** | Leçon |
|---|---|---|---|---|---|---|
| **C045** | CPI juillet | Le sous-jacent américain ressort **≥ 2,5 % a/a** | **62 %** | **1 — ✅ VRAI.** Publié à **2,5 %** exactement (contre 2,6 % en juin) — *rythme annuel le plus lent depuis mars 2021* | **0,1444** | Deuxième meilleur score du registre. Et **le premier appel où j'ai battu un marché de prédiction sur la même proposition** — voir ci-dessous |

**Les quatre chiffres publiés, contre consensus** : headline a/a **3,4 %**
(consensus 3,4 %) · headline m/m **+0,1 %** (+0,1 %) · **sous-jacent a/a
2,5 %** (2,5 %) · sous-jacent m/m **+0,2 %** (fourchette +0,1/+0,2 %).
**Trois sur quatre pile sur le consensus.**

### 🥊 Le fait qui rend cette résolution intéressante : j'ai battu Kalshi

Kalshi donnait **47 %** à un sous-jacent **≥ 2,5 %** — c'est-à-dire
exactement la proposition de C045. **J'ai dit 62 %. C'est arrivé.**

| | P annoncée | Brier |
|---|---|---|
| **Moi (C045)** | **62 %** | **0,1444** |
| **Kalshi** | ~47 % | 0,2809 |

⚠️ **Et je refuse d'en tirer quoi que ce soit.** Un appel ne prouve rien —
*c'est la cinquième fois cette semaine que je m'interdis de conclure d'une
résolution supplémentaire*, et j'ai réfuté trois théories en sept jours pour
avoir cédé à cette tentation. **Sur les deux autres questions du jour, les
marchés de prédiction ont d'ailleurs eu raison** (ils donnaient 15 % à un
headline > 3,4 % et 11 % à un cœur > 2,5 % : les deux ne sont pas
dépassés).

> **Ce que je note en revanche, et qui est méthodologique** : *un marché de
> prédiction est une classe de référence utilisable, pas un oracle.* Il vaut
> la peine de le consulter **avant** d'enregistrer un appel — et de noter
> l'écart, qui devient une mesure de plus.

### 📊 Le score après sept résolutions

| ID | P | Issue | Brier |
|---|---|---|---|
| C032 | 15 % | ❌ | **0,0225** |
| **C045** | **62 %** | **✅** | **0,1444** |
| C020 | 42 % | ❌ | 0,1764 |
| C029 | 38 % | ✅ | 0,3844 |
| C035 | 70 % | ❌ | 0,4900 |
| C025 | 70 % | ❌ | 0,4900 |
| C028 | 28 % | ✅ | 0,5184 |

**Brier moyen : 0,3180** (contre 0,3469 à n = 6). Repère « 50 % à tout » :
**0,2500**. **Toujours moins bon que de n'avoir aucune opinion** — mais
l'écart se réduit.

**n = 7. Ma charte exige 20-30 résolutions avant toute conclusion. Aucun
paramètre de sizing ne bouge.**

### Les scénarios de dimanche

**Headline sorti à 3,4 % → le scénario A se réalise**, celui auquel j'avais
donné la probabilité la plus élevée (**43 %**). B (≥ 3,6 %, 27 %) et C
(cœur ≥ 2,7 %, 30 %) ne se réalisent pas.

⚠️ **Le trou de partition que j'ai découvert ce matin n'a PAS mordu** —
l'issue est tombée proprement dans A. **Mais le défaut était réel, et je
l'ai trouvé AVANT la résolution, ce qui est le bon ordre.** *Un défaut qui
ne coûte rien cette fois-ci reste un défaut.*

---

## Appel ouvert le 15/08/2026 — C046, remplaçant de C005

| ID | Date | Agent | classe_réf | Affaire | Affirmation | P | Condition de résolution | Statut |
|---|---|---|---|---|---|---|---|---|
| **C046** | 15/08 | Juge | **macro-US** / <2 mois | FOMC septembre | **La Fed NE RELÈVE PAS ses taux** à la réunion du **16/09/2026** *(statu quo ou baisse — l'affirmation porte sur l'absence de hausse, une seule chose)* | **66 %** *(brut 70 %, rétraction appliquée)* | **Communiqué du FOMC du 16/09/2026** | ⏳ |

### Le marché a été consulté AVANT l'enregistrement — la règle du 13/08 appliquée

*« Un marché de prédiction est une classe de référence utilisable, pas un
oracle. Il vaut la peine de le consulter **avant** d'enregistrer un appel — et
de noter l'écart, qui devient une mesure de plus. »*

| Date de lecture | Issue | Proba | Source |
|---|---|---|---|
| fin juillet 2026 | **HAUSSE** | **~82 %** | CME FedWatch |
| 09/08 *(mon radar)* | HAUSSE | ~42-44 % | — |
| **12/08** | **STATU QUO** | **50,3 %** | **CME FedWatch** |
| **12-13/08** | **HAUSSE** | **32 %** | marché de prédiction |
| 12-13/08 | HAUSSE (réunion d'**octobre**) | 48,5 % | marché de prédiction |

**Marché implicite sur ma proposition (« pas de hausse ») ≈ 68 %.
Je dis 66 % après rétraction, 70 % avant. L'écart est de −2 points : je
n'affiche AUCUN edge, et c'est la position honnête** — ma classe `macro-US`
compte **un seul appel résolu** (C045). *Un bon score sur n = 1 n'est pas un
edge, c'est un tirage.*

⚠️ **Le troisième chiffre (BAISSE) n'a PAS été relevé.** Le résidu
`100 − 50,3 − 32 = 17,7 %` **boucle proprement**, mais c'est **ma
soustraction**, et elle mélange deux sources à deux dates. **Non inscrit
comme relevé.** *C'est exactement le trou de partition que j'ai trouvé dans
mes propres scénarios le 13/08 — sauf qu'ici je le laisse ouvert au lieu de
le combler.*

⚠️ **La lecture la plus fraîche date du 12/08 : elle a 2 à 3 jours et deux
séances.** Mon appel s'appuie donc sur un prix de marché légèrement périmé,
et je l'écris.

### 🚨 LE RÉGIME A CHANGÉ PENDANT QUE MON REGISTRE ÉTAIT FIGÉ

**En trois semaines, la hausse est passée de quasi acquise (~82 %) à
minoritaire (~32 %), le statu quo devenant l'issue modale (~50 %).** Le
déclencheur est daté : **−10 points en 24 heures sur la publication du CPI du
12/08** (headline 3,4 %, **sous-jacent 2,5 %** — plus lent depuis mars 2021).

> **La question pertinente n'est plus « hausse ou pas » mais « statu quo
> prolongé, ou bascule vers l'assouplissement ».** C005 — que je retire
> aujourd'hui pour défaut de forme — portait sur un débat qui **n'existe
> quasiment plus**. Il serait mort de vieillesse avant d'être noté.

### ⚖️ Une tension de méthode que je signale au lieu de l'esquiver

**Le facteur de rétraction appliqué à une probabilité ancrée sur un prix de
marché ne corrige pas de la surconfiance : il DÉGRADE de l'information.**
Passer de 70 % à 66 % m'éloigne d'un consensus à 68 % — c'est-à-dire du
chiffre le mieux informé dont je dispose.

**Je l'applique quand même**, mécaniquement, parce qu'une règle qu'on suspend
dès qu'elle gêne n'est pas une règle — *et parce que j'ai constaté ce matin
que ce même correcteur m'a coûté 0,0219 point sur C045 sans que je le
retire.* **Mais la limite est réelle et datée ici** : à revoir quand
l'échantillon permettra de trancher, pas avant.

> **Règle candidate, NON adoptée aujourd'hui** : *ne pas rétracter un appel
> dont la probabilité est explicitement ancrée sur un prix de marché
> observable.* Écrite pour être testée, pas pour être appliquée — je n'ai
> pas les données pour la valider, et l'adopter maintenant serait raisonner
> depuis un cas unique.

---

## 🔴 REQUALIFICATION DU 15/08 — le diagnostic de C025 reposait sur un fait faux

**Le score de C025 ne bouge pas** : 70 %, issue ❌, Brier **0,4900**.
*On ne réécrit pas un appel résolu, et l'issue reste ce qu'elle est.*

**Mais l'EXPLICATION que j'en avais tirée le 08/08 est à jeter.** J'avais
écrit : *« la capture Fortuneo du 07/08 montre que Tanguy AGISSAIT (PEA
ouvert) et butait sur un mur opérationnel. Le mode d'échec non modélisé est
la FRICTION, pas le désintérêt. »*

**La capture du 15/08 établit qu'aucun PEA n'a jamais été ouvert.** Ce qui
existe chez Fortuneo est un **compte courant** (100 €, carte reçue). La
parenthèse « PEA ouvert » était fausse — et elle portait tout le diagnostic.

### Ce que devient l'arbre de décomposition

J'avais reconstruit `0,85 × 0,40 × 0,80 ≈ 27 %` en nommant les trois
facteurs : intention, canal disponible, exécution. **Le facteur manquant
n'était aucun des trois.** La vraie chaîne comportait **une étape que je
n'avais pas modélisée du tout, parce que je la croyais déjà franchie** :
*l'ouverture du plan lui-même.*

> **Requalification** : le mode d'échec n'est pas la **FRICTION** (un
> utilisateur qui veut agir et bute sur une interface). C'est
> l'**ÉTAPE FANTÔME** — une étape que le conseiller coche mentalement comme
> acquise et cesse donc de vérifier, ce qui la rend invisible dans tous les
> arbres construits ensuite.

**C'est un mode d'échec plus dangereux que la friction**, pour une raison
précise : la friction se voit *(l'utilisateur se plaint)*, l'étape fantôme
**se camoufle dans la plainte de l'utilisateur**. Tanguy m'a dit ne pas
trouver comment verser. J'ai entendu « problème d'interface ». Il disait
« l'objet n'existe pas ».

### ✅ Règle permanente ajoutée

> **Quand l'utilisateur décrit une impossibilité opérationnelle qui
> PERSISTE, l'hypothèse par défaut n'est pas « il ne trouve pas le bouton »
> mais « le bouton n'existe pas, parce que l'objet n'existe pas ».**
> Une friction qui dure plus de quelques jours est un **fait sur l'état du
> monde**, à re-tester à la source — pas un problème d'utilisateur à
> contourner par de meilleures instructions.

**Contrôle associé** : tout état du monde que je répète dans un brief sans
l'avoir re-vérifié depuis **plus de 7 jours** doit être marqué comme
*non re-testé* dans le classement. **« PEA ouvert » a été republié huit fois
sans un seul contrôle.**

⚠️ **Et je note la direction de l'erreur, comme pour les prix** : elle allait
**dans le sens de mon propre récit** — celui d'un dossier qui progresse.
*C'est le deuxième biais directionnel identifié aujourd'hui, et il n'a rien à
voir avec le canal réseau : celui-ci est le mien.*

---

## ✅ RÉSOLUTION DU 16/08/2026 — C034 (Eli Lilly), et il me coûte

| ID | Affirmation | P | Issue | Brier |
|---|---|---|---|---|
| **C034** | **Le test Vicat appliqué à LLY** : FCF S1 2026 croissant au moins aussi vite que le CA S1 2026, **et** ≥ 5,5 Md$ | **40 %** | **1 — ✅ VRAI** | **0,3600** |

### Les chiffres, et comment ils ont été établis

**Flux net de trésorerie d'exploitation, 6 mois clos le 30/06/2026 :
16 023 M$** contre **4 753 M$** au S1 2025 — soit **×3,37**.

**Hier je refusais ce chiffre.** Il était MONO-SOURCE et son profil (×3,4 en
un an) est exactement celui qu'un résumé automatique fabrique en confondant
6 mois / 12 mois / TTM. **Aujourd'hui il est retenu, parce que trois chaînes
arithmétiques indépendantes se referment :**

| Chaîne | Calcul | Résultat |
|---|---|---|
| **1 — valide le S1 2025** | `4 753 + 8 800 (T3) = 13 553` → T4 2025 implicite **3 260** → total FY2025 = **16 813** | **exactement les 16 813 M$ publiés** ✅ |
| **2 — valide le S1 2026** | `16 023 − 5 300 (T1) = 10 723` pour le T2 seul, contre un **pic trimestriel de ~10 600** cité par une source distincte | **écart 1,2 %** ✅ |
| **3 — valide le capex** | `2 300 (T1) + ~2 900 (T2) = 5 200` | **exactement le chiffre d'allocation de capital S1 du communiqué** ✅ |

⚠️ **Aucune de ces valeurs n'a été LUE dans le 10-Q** (`lly-20260630.htm`,
accession `0000059478-26-000081`, déposé le 05/08) — l'hôte reste bloqué.
**La résolution repose sur la règle du chiffre réconcilié, pas sur une
lecture primaire.** C'est écrit pour que quiconque relira sache exactement
sur quoi ce point de calibration est assis.

### 🔑 Le raisonnement qui rend la conjonction résoluble malgré une donnée manquante

C034 est une **conjonction** — deux jambes.

**Jambe 2** : FCF S1 2026 = `16 023 − 5 200` ≈ **10 823 M$ ≥ 5 500** ✅
*(il faudrait un capex semestriel de 10,5 Md$ pour la faire tomber)*.

**Jambe 1** : elle exige la croissance du FCF, donc **le capex du S1 2025 —
INTROUVABLE.** Et pourtant elle se tranche :

> **Le capex est nécessairement ≥ 0, donc le FCF du S1 2025 est
> nécessairement ≤ 4 753 M$.** La croissance du FCF est donc **au minimum**
> `10 823 ÷ 4 753 − 1 = **+127,7 %**` — très au-dessus des **+52 %** de
> croissance du CA. **La donnée manquante ne peut jouer que dans un sens :
> plus le capex 2025 était élevé, plus la croissance est forte.**

**C'est la même forme de raisonnement qu'hier sur la provision GSI de
Nexans** — *une jambe non vérifiée ne bloque pas si elle ne peut couper que
d'un côté.* **Différence décisive avec C003, et c'est elle qui explique que
l'un se note et l'autre pas** : ici l'inconnue est **quantitative et
bornée** ; chez Nexans elle était **sémantique** (deux lectures opposées d'un
verbe). *Une borne se raisonne ; une ambiguïté de sens, non.*

### Ce que ça coûte, et l'ordre dans lequel c'est arrivé

**Brier 0,3600** — l'un de mes plus mauvais scores. **Moyenne : 0,3180 →
0,3233.**

| | n = 7 | **n = 8** |
|---|---|---|
| Brier moyen | 0,3180 | **0,3233** |
| Repère « 50 % à tout » | 0,2500 | 0,2500 |
| Climatologie | 0,2449 | **0,2500** *(taux de base exactement 4/8)* |
| **BSS** | −0,272 / −0,299 | **−0,293 sur les deux** |

> **Hier, je refusais ce chiffre en notant que le refus ne me coûtait rien —
> le clore m'aurait donné un mauvais score. Aujourd'hui, correctement
> réconcilié, il me coûte 0,36 et dégrade ma moyenne. J'ai refusé quand
> c'était gratuit, j'accepte quand c'est cher.** *C'est le bon ordre, et
> c'est tout ce qu'il y a à en dire.*

### Le motif se durcit — et je continue de ne pas le théoriser

| | n = 6 (08/08) | n = 7 (15/08) | **n = 8** |
|---|---|---|---|
| Annoncé **PROBABLE** (P ≥ 60 %) | 0/3 | 1/3 | **1/3** |
| Annoncé **IMPROBABLE** (P ≤ 42 %) | 2/3 | 2/4 | **3/5** |

**Ce que j'annonce improbable se réalise maintenant 3 fois sur 5.** Le motif
que je décrivais le 08/08, qui s'était *amolli* le 15/08, **se re-durcit**.

⚠️ **Et c'est précisément pour ça que je n'en tire toujours rien.** *Un motif
qui s'affaiblit puis se renforce au gré de chaque résolution unitaire est un
motif qui n'existe pas encore.* J'ai construit trois théories sur ce registre
en une semaine ; les trois sont mortes en moins de 72 heures. **n = 8 ; ma
charte exige 20-30. Aucun paramètre de sizing ne bouge.**

---

## 🔒 PRÉ-ENGAGEMENT DE PÉRIMÈTRE SUR C042 — écrit le 16/08, **4 jours avant** le print

**Le défaut découvert aujourd'hui** : mon chiffre de référence du T1 FY27
est **ambigu**. Deux formulations circulent pour le 21/05/2026 :
- **« publicité mondiale +37 % »** — celui que j'ai enregistré ;
- **« publicité totale +36 %, dont Walmart Connect +44 % »**.

**Ce ne sont pas deux mesures du même objet** : la publicité *globale*
inclut Vizio, Flipkart Ads et PhonePe ; *Walmart Connect* est le périmètre US
seul, et il croît **nettement plus vite** (+44 % contre +36/37 %).

> ⚠️ **Le piège est mortel pour l'appel** : lire jeudi un « Walmart Connect
> +X % » et le comparer à mon +37 % *global* ferait perdre — ou gagner — le
> pari **sur une erreur de périmètre**, pas sur une lecture du monde.

**Ce que je fige maintenant, avant tout fait connu :**

> **C042 se résout sur le chiffre que Walmart présente comme la croissance
> de son activité publicitaire GLOBALE (ou TOTALE) dans le communiqué du T2
> FY27.**
> **Si le communiqué ne publie QUE Walmart Connect (US), ou seulement un
> agrégat de définition différente, C042 est NON RÉSOLUBLE** — et je ne
> substitue **PAS** Walmart Connect à la publicité globale.
> *La branche A4 des scénarios de ce dimanche (6 %) couvre exactement ce
> cas.*

**Note sur la construction** : la tendance de C042 (`+46 % → +37 %`, soit
−3 pts/trimestre, projection **~+34 %**) a été bâtie sur le +37 %. Si le vrai
chiffre du T1 était **+36 %**, la projection tombe à **~+33 %** et le seuil de
32 % est **encore plus serré** — l'appel devient plus difficile à gagner, pas
plus facile. *Je le signale parce que l'incertitude joue contre moi, et que
c'est le sens dans lequel il faut la déclarer.*

⚠️ **Troisième critère pré-enregistré amendé pour cause de périmètre en
douze jours** : M3′ sur Lilly (05/08, intestable), ④ sur Nvidia (16/08, objet
déplaçable hors bilan), C042 aujourd'hui (deux périmètres publicitaires).
**Ce n'est plus une série d'accidents, c'est le coût structurel du
pré-engagement** — et il se paie en relectures à J−7, pas en regrets le soir
du print.

---

## ❌ RÉSOLUTION DU 20/08/2026 — C042 (Walmart), et un test que j'ai dû me passer à moi-même

| ID | Affirmation | P | Issue | Brier |
|---|---|---|---|---|
| **C042** | **Le mécanisme décélère** : la publicité globale de Walmart croît de **< +32 %** au T2 FY27 | **42 %** | **0 — ❌ FAUX.** Publiée à **+38 %** | **0,1764** |

### Le chiffre, et la série qu'il complète

**Publicité globale T2 FY2027 : +38 % a/a.** Concordant sur **cinq résumés
indépendants** datés du 20/08. *Ce n'est pas le T1 resservi : le T1 (+36/37 %)
apparaît séparément et est explicitement étiqueté « fiscal first quarter,
ended April 30 ».*

| Trimestre | Croissance |
|---|---|
| T2 FY26 | **+46 %** |
| T1 FY27 | +36/37 % |
| **T2 FY27** | **+38 %** |

**Ma tendance linéaire projetait ~+34 %. Le réalisé est +38 %.**

> **La décélération ne s'est pas seulement arrêtée : elle s'est INVERSÉE.**
> *Mon seuil était placé sous la tendance pour mordre des deux côtés. Il a
> mordu du côté où je ne regardais pas.*

**Branche réalisée : A3 (≥ +37 %), à laquelle j'avais donné 12 %.**
*J'avais mis **82 % de la masse** sur une décélération (A1 + A2). L'issue est
tombée dans ma troisième branche sur quatre.*

### 🪞 LE TEST QUE J'AI DÛ ME PASSER — parce que résoudre m'ARRANGE

**L'agent de relevé m'a recommandé de classer NON RÉSOLUBLE**, faute d'avoir
pu lire le libellé verbatim (`WebFetch` mort sur tous les domaines).
**J'ai résolu quand même. Voici pourquoi, et pourquoi c'était le point
délicat de la journée.**

🔴 **D'abord le fait gênant** : résoudre FAUX fait passer ma moyenne de
**0,3233 à 0,3069**. **L'issue m'améliore.** *C'est exactement la
configuration où un standard de preuve opportuniste se glisse sans qu'on le
voie.*

**Le test du miroir, posé explicitement** :

> *Avec la MÊME qualité de preuve — cinq sources concordantes disant
> « global advertising » — mais un chiffre de 30 % au lieu de 38 %, donc une
> issue qui me DÉGRADERAIT, est-ce que je résoudrais ?*
>
> **Réponse : oui.** La qualité de la preuve ne dépend pas de la direction du
> résultat. **Donc je résous.**

### Les trois raisons, dans l'ordre de leur force

**① Mon déclencheur de NON RÉSOLUBLE, tel qu'écrit le 16/08, n'est pas
atteint.** Il disait : *« si le communiqué ne publie QUE Walmart Connect
(US), ou seulement un agrégat de définition différente ».* **Ni l'un ni
l'autre** : le périmètre rapporté est bien **global**.

**② Précédent vieux de quatre jours, et il pointe dans le même sens.**
**C034 a été résolu le 16/08 sans lire le 10-Q**, sur réconciliation
arithmétique triple — et je l'avais écrit noir sur blanc : *« la résolution
repose sur la règle du chiffre réconcilié, pas sur une lecture primaire. »*
**Refuser ici appliquerait un standard plus strict que là-bas — et
précisément sur l'appel qui m'arrange.**

**③ « Lisible sur le communiqué SEUL » désignait un DOCUMENT, pas un acte de
lecture.** Écrit le 07/08 pour distinguer *« le communiqué suffit »* de
*« il faut le 10-Q ou la conférence »*. **L'accent était sur SEUL.**
*Sous la lecture inverse, presque aucun appel ne serait résoluble dans l'état
actuel de mon canal — ce qui ferait du blocage réseau un dispensateur
d'excuses.*

### ⚠️ Les deux réserves, inscrites

1. **Je n'ai pas lu le libellé verbatim.** La résolution repose sur cinq
   résumés concordants, pas sur le document.
2. **Un résumé isolé affirme « Walmart U.S. advertising also up 38 % ».**
   **Non corroboré, et le doublon exact est suspect** — au T1 les deux
   périmètres divergeaient nettement (+36/37 global contre +44 Connect).
   *Si le +38 % était en réalité un chiffre US mal étiqueté « global », la
   résolution serait fausse. Cinq sources contre une : je tranche, et
   j'inscris le risque.*

### 📊 Le score après neuf résolutions

| ID | P | Issue | Brier |
|---|---|---|---|
| C032 | 15 % | ❌ | **0,0225** |
| C045 | 62 % | ✅ | **0,1444** |
| C020 | 42 % | ❌ | 0,1764 |
| **C042** | **42 %** | **❌** | **0,1764** |
| C034 | 40 % | ✅ | 0,3600 |
| C029 | 38 % | ✅ | 0,3844 |
| C035 | 70 % | ❌ | 0,4900 |
| C025 | 70 % | ❌ | 0,4900 |
| C028 | 28 % | ✅ | 0,5184 |

**Brier moyen : 0,3233 → 0,3069.** *Meilleure amélioration depuis le début.*

| Repère | Valeur | BSS |
|---|---|---|
| « 50 % à tout » | 0,2500 | **−0,228** *(contre −0,293)* |
| Climatologie *(taux de base 4/9)* | 0,2469 | **−0,243** *(contre −0,293)* |

**Toujours négatif sur les deux — mais l'écart se réduit nettement.**
**n = 9 ; ma charte exige 20-30. Aucun paramètre de sizing ne bouge.**

**Discrimination** : annoncé **PROBABLE** (P ≥ 60 %) **1/3** · annoncé
**IMPROBABLE** (P ≤ 42 %) **3/6**. *Le motif « ce que j'annonce improbable
arrive » s'atténue à nouveau — troisième oscillation en trois semaines.
Je continue de n'en rien tirer.*

### 🎯 Ce que la résolution dit du DOSSIER, et il faut séparer les deux

**Le PASSE du 07/08 n'est PAS invalidé.** Il reposait sur la **valorisation**
(40,0x réels contre les « ~38x » annoncés) et sur le constat que **les
conditions de mécanisme ne pouvaient pas mordre**.

**Ce qui est invalidé, c'est ma lecture de la DÉCÉLÉRATION** — une lecture qui
accompagnait le dossier sans le porter.

> **J'avais raison de passer, et tort sur la raison que j'ai mise à côté.**
> *C'est précisément ce qu'un appel de calibration sert à révéler : sans
> C042, j'aurais gardé les deux convictions groupées, et j'aurais cru que la
> bonne validait la mauvaise.*

⚠️ **Et un fait à ne pas manquer dans le contexte** : le résultat
opérationnel de Walmart bondit de **+28,8 %**, *« aidé par 2,9 Md$ de
remboursements tarifaires »*. **Non récurrent.**

> 🔁 **Deuxième occurrence en trois jours du même motif** : chez **Nike**,
> ~0,52 $ des 0,72 $ de BPA proviendraient aussi d'une récupération
> tarifaire. **RÈGLE : sur les publications de la distribution américaine de
> ce trimestre, chercher la ligne « remboursements tarifaires » AVANT de lire
> le levier opérationnel.**
