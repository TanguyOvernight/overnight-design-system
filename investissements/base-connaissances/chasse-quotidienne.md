# La Chasse quotidienne — méthodologie du dénicheur d'opportunités

Créé le 2026-07-27 (demande Tanguy : « un vrai dénicheur qui me trouve très
tôt des marchés ou entreprises — basses qui vont remonter, ou émergentes —
en se basant sur la presse spécialisée, avec toute la puissance de Fable »).

## Principe

Chaque réveil de routine lance **2-3 agents de recherche EN PARALLÈLE**
(outil Agent, type general-purpose) — pas une simple recherche d'actualité :

1. **L'agent presse spécialisée du jour** (rotation ci-dessous) : scanne
   les sources à haut signal de son secteur et extrait des SIGNAUX EARLY.
2. **L'agent screening quantitatif** : la recette du jour de l'entonnoir
   (movers avec cause, cluster buys, révisions, 52w-low quality, liste de
   courses, événements techniques).
3. **L'agent contre-analyse** (si une candidate de la veille attend) :
   grille pépite complète + thèse inverse (qui vend et pourquoi).

La session principale consolide : candidates notées sur la grille (≥ 7 →
section AUTRES PISTES de la newsletter avec explication complète ; < 7 →
une ligne « étudié X, écarté parce que… »). Le travail de détection est
VISIBLE même quand il ne débouche pas.

## Ce qu'est un « signal early » (ce que les agents cherchent)

- Contrat/commande structurant qui change l'échelle d'une société
- Inflexion de marge ou de carnet AVANT que le consensus l'intègre
- Rupture technologique/réglementaire qui crée ou rouvre un marché
- Capex massifs annoncés par les géants → qui sont les fournisseurs cotés ?
- Cluster d'achats de dirigeants / entrée d'un activiste / OPA sectorielle
  (la 1ʳᵉ OPA d'un secteur décoté en annonce d'autres)
- Chute violente d'une valeur de qualité pour une raison identifiée
  temporaire (multiple, pas fondamentaux)
- Nouveau véhicule d'accès (reclassement d'indice, IPO à venir, listing)
- ⚠️ Anti-signal : ce qui fait déjà la une grand public est trop tard.
  Le bon signal est dans la presse SPÉCIALISÉE avant la généraliste.

## Calendrier de rotation des agents presse (1 secteur/jour)

| Jour | Terrain de chasse | Sources prioritaires (via WebSearch) |
|---|---|---|
| **Lundi** | Tech, IA, semis | The Information (titres), TechCrunch, Sifted (tech UE), SemiAnalysis/Chipstrat, VentureBeat — levées, ruptures produit, design wins, chaînes de valeur des capex hyperscalers |
| **Mardi** | Santé, biotech | Endpoints News, Fierce Pharma/Biotech, STAT News — readouts cliniques, décisions FDA/EMA, M&A pharma, plateformes technologiques |
| **Mercredi** | Industrie, énergie, défense | Usine Nouvelle, Defense News, contrats OTAN/DGA, IEA, capex énergie/infra — carnet de commandes, goulets d'étranglement, fournisseurs critiques |
| **Jeudi** | France & smalls Europe | Zonebourse « Small & Mid : les choix des stars de la gestion », reportings mensuels Indépendance AM/HMG/Raymond James, BFM Bourse, Market Review Euroland, forum Investisseurs Heureux — + positions courtes AMF sur valeurs suivies |
| **Vendredi** | Émergents & monde | Nikkei Asia, Economic Times (Inde), Caixin, flux EM (EPFR via presse), reclassements d'indices, réformes de marché |
| **Samedi (Revue)** | 🔧 **CHANTIER D'UNIVERS** *(remplace « smart money » depuis le 03/08/2026 — voir ci-dessous)* | Constituer ou exploiter un référentiel de valeurs peu couvertes, avec capi sourcée, exposition chiffrée, ticket et liquidité. Le terrain smart money est **hors service** : 7 sources initiés en 403, dont sec.gov, et les 3 replis testés échouent. **🔒 RE-TESTÉ ET RECONFIRMÉ le 15/08** — 6 portes rouvertes, 6 fermées (abcbourse, insiderscreener, transactions-amf.swaoo, data.gouv.fr, FSMA Belgique, Fortuneo). Le re-test était motivé par la date de dépôt des 13F du T2 (14/08) ; **il n'a rien produit.** Prochaine fenêtre 13F : 14/11/2026 — **ne pas replanifier ce terrain pour autant** |
| **Dimanche (Prépa)** | Prospectif & thèmes | Catalyseurs datés à venir (radar), thèmes pré-consensus (pipeline analyse-prospective : thème → thèse → timing → véhicule), revue des « étudiés-écartés » du mois |

### ⚠️ RÈGLE DE PRÉSÉANCE (encodée le 15/08/2026 — après l'avoir violée)

**Ce qui s'est passé** : le prompt de routine fixe « samedi = smart money ».
J'ai briefé le chasseur là-dessus **sans avoir lu ce fichier**, où le terrain
est classé hors service depuis le 03/08. Je ne l'ai vu qu'après, l'agent
tournant déjà.

> **1. Une mise HORS SERVICE écrite et motivée PRIME sur la rotation du
> prompt.** La rotation dit quel terrain viser ; ce fichier dit lesquels sont
> morts. Le second gagne.
>
> **2. Exception, et elle doit être NOMMÉE** : un **fait nouveau daté** peut
> justifier UN re-test. Le 15/08, ce fait existait — la date limite de dépôt
> des 13F du T2 était la veille. Un re-test sur fait nouveau est légitime ;
> un re-test par habitude de rotation ne l'est pas.
>
> **3. Un re-test s'arme toujours d'un REPLI.** Ne jamais laisser un canal
> mort produire une journée vide : le brief doit contenir le chantier de
> substitution dès le départ.
>
> **4. La cause racine** : la routine impose de lire la mémoire persistante
> AVANT la chasse. Je l'appliquais au seul `classement-opportunites.md`.
> **Un fichier de méthode est de la mémoire persistante au même titre qu'une
> liste de candidates** — `chasse-quotidienne.md` se lit avant de briefer,
> pas pendant que l'agent tourne.

## 🔴 DEUX RÈGLES DU TERRAIN RÉGLEMENTAIRE (encodées le 16/08/2026)

Chasse prospective du 16/08 : **8 mécanismes datés examinés, 0 retenu.**
Mais deux enseignements de méthode, tous deux coûteux à ignorer.

### ① LE REPORT EST LE MODE DE DÉFAILLANCE DOMINANT — vérifier la date AVANT d'analyser

**Sur 8 mécanismes, DEUX portaient une date FAUSSE dans les premiers
résultats de recherche** — et dans les deux cas c'était un **report** :

| Thème | Date servie | Date RÉELLE | Texte |
|---|---|---|---|
| Décret thermostat France, parc **existant** | 01/01/**2027** | **01/01/2030** | décret n° **2025-1343 du 26/12/2025** |
| **ETS2** (marché carbone bâtiments/transport) | 01/01/**2027** | **2028** | trilogue du **10/12/2025** |

**Le décret thermostat serait passé d'« obligation sur ~37 millions de
logements dans 16 mois » à « obligation sur le neuf, soit ~1 % du parc par
an ».** Toute la thèse tenait à cette date.

> **RÈGLE : sur tout thème réglementaire, la première requête n'est PAS
> « quel est le mécanisme » mais « ce texte a-t-il été reporté ou modifié ? »**
> — requête ciblée « report / postponement / décret modificatif », **avant
> toute analyse.** Un texte se date à son **obligation effective**, jamais à
> sa publication.
>
> 🎯 *Signe de qualité d'une source : le report du décret thermostat a été
> confirmé par **Delta Dore, fabricant de thermostats** — un acteur qui
> n'a aucun intérêt à annoncer que son marché obligatoire recule de trois
> ans. **Une source qui parle contre son propre intérêt vaut deux sources
> neutres.***

### ② UN PÉAGE CRÉÉ PAR UNE RÈGLE PEUT ÊTRE DÉFAIT PAR LE FAISEUR DE RÈGLE

**CORSIA** avait tout du goulot parfait : phase obligatoire en janvier 2027,
couverture passant de ~64 % à ~87 % des émissions de l'aviation
internationale, demande estimée à **170-236 Mt CO2e** contre seulement
**~41 Mt d'unités éligibles** vérifiées. Une pénurie de 4 à 6 pour 1.

**Ce qui l'a tué** : la Commission européenne a **assoupli les critères de
qualité** des crédits de phase 1 — *précisément parce que l'offre était très
en deçà de la demande.*

> **Un goulot dont l'autorité peut réduire la contrainte par décision
> administrative n'est pas un goulot.**

**C'est la TROISIÈME espèce de contournement en trois semaines, et il faut
les tenir ensemble** :

| Dossier | Le péage supposé | Par quoi il est contourné |
|---|---|---|
| **BESI** (10/08) | assemblage hybride de puces | une **décision de comité de normalisation** |
| **Stevanato** (11/08) | flacon/seringue des anti-obésité | un **comprimé** — substitution produit |
| **CORSIA** (16/08) | pénurie d'unités carbone éligibles | **le régulateur relâche sa propre règle** |

> 🔑 **La généralisation** : *un péage RÉGLEMENTAIRE porte une voie de
> contournement de plus qu'un péage physique — celle du faiseur de règle.*
> Et cette voie s'ouvre **d'autant plus que le péage est rentable**, puisque
> c'est la rareté elle-même qui déclenche la pression politique.
> **Un goulot réglementaire trop beau est auto-destructeur.**

**Même schéma sur la consigne / PPWR** : deux échappatoires légales — la
**dérogation aux États atteignant 80 % de collecte en 2026**, et la
**consigne DIGITALE** que la Belgique laisse tester (un smartphone remplace
la machine). *C'est littéralement le cas « un comprimé remplace le flacon »,
transposé.*

### ③ INVERSION DU TERRAIN : chasser à partir du VÉHICULE, pas de la RÈGLE

**Le constat, et il est structurel** : sur 8 mécanismes, **3 sont morts faute
de véhicule achetable** — pas faute de qualité.

- *Fin de la salderingsregeling néerlandaise au 01/01/2027* (loi adoptée le
  17/12/2024) : **le meilleur mécanisme de la session** — l'autoconsommation
  devient du jour au lendemain la seule valeur du parc PV résidentiel
  néerlandais. **Encaisseurs : tous privés** (Zonneplan, HomeWizard, Sessy)
  ou hors zone.
- *Extinction de la 2G en France* (arrêt Orange **22/09 → 20/10/2026**) :
  ~**11,8 M d'appareils**, coût ≥ **685 M€** *(MONO-SOURCE, portée par une ONG
  militante — ordre de grandeur, pas un fait)*. Obsolescence pure, datée,
  **non contournable**. **Encaisseurs : Kone (Helsinki, exclu), Schindler
  (Suisse, exclu), Otis (immatériel).** Le seul pure play français, Cogelec,
  **n'est plus coté.**
- *REP emballages professionnels FR* (01/01/2027) : aucun véhicule identifié.

> **L'ACHETABILITÉ N'EST PLUS UN FILTRE EN AVAL : elle est devenue la CAUSE
> PREMIÈRE de mortalité des thèmes réglementaires** — parce que l'Europe fait
> payer ses obligations par des acteurs privés ou nordiques.

**RÈGLE : le terrain réglementaire se chasse désormais À PARTIR DU
VÉHICULE.** On part de la liste des small/mid caps Paris-Amsterdam-Bruxelles
et on demande, pour chacune : *quelle obligation datée tombe dans son carnet ?*
**Partir de la règle produit des thèmes brillants et inachetables** — la
session du 16/08 en a produit trois d'affilée.

*C'est la même conclusion que le chantier défense de la veille (5 sociétés,
aucune achetable-non courue-documentée) : deux terrains consécutifs disent
que le point de départ est le mauvais.*

### ⚠️ CORRECTION DE CETTE RÈGLE, 24 HEURES APRÈS — l'inversion marche, et ne suffit pas

**Appliquée au terrain tech le 17/08. Résultat mesurable :**

| | Partir du THÈME (14-16/08) | **Partir du VÉHICULE (17/08)** |
|---|---|---|
| Sociétés achetables trouvées | ~2 sur 13 | **4 sur 5** |
| Événements datés trouvés | 8, mais chez des acteurs privés/nordiques | **4, tous chez des cotés PEA** |
| Requêtes | 14 | **12** |
| Signaux retenus | 0 | **0** |

> **L'inversion résout le problème d'ACHETABILITÉ. Elle ne résout pas le
> problème de PRIX.**
>
> Sur une place aussi étroite que Paris-Amsterdam-Bruxelles, les ~10
> véhicules tech praticables sont **suivis par tout le monde**, et leur
> événement daté est **repricé le jour même** : Soitec **+24 % en une
> séance** le 23/07, TKH **+9,5 %** le 11/08, Melexis avec un **objectif de
> consensus médian SOUS le cours**.
>
> **🔑 Je suis passé d'un mur d'ACHETABILITÉ à un mur d'EFFICIENCE. C'est un
> progrès de diagnostic, pas un progrès de rendement.**

**La conséquence, et il faut l'accepter plutôt que de la contourner** : sur
ce terrain, **chercher une sous-réaction à une nouvelle publiée est une
impasse structurelle** — cinq zéros le disent. Ce qui reste vivant :

1. **Les anomalies qui jouent APRÈS l'événement, pas avant.** Le *drift
   post-scission* est documenté académiquement et se joue **à la cotation de
   l'entité séparée**, pas au vote. *TKH est le cas d'école en cours :
   l'AGE du 03/09 n'est PAS le moment intéressant ; la cotation de
   l'Electrification séparée l'est.*
2. **Les sociétés structurellement sous-couvertes** — le chantier d'univers,
   pas la veille d'actualité.
3. **Les décotes sans événement**, où il n'y a rien à repricer *(Barco :
   sous sa valeur comptable, près de son plus bas 10 ans, et **aucun**
   catalyseur avant février 2027)*.

### 🔢 NOUVEAU CONTRÔLE ARITHMÉTIQUE — la fourchette 52 semaines périmée

Détecté le 17/08 sur TKH : fourchette servie **31,54 – 48,14 €** alors que le
cours **daté** du 14/08 est **52,65 €**.

> **Un plus-haut 52 semaines INFÉRIEUR au cours du jour est une
> impossibilité arithmétique.** La fourchette est donc périmée — et une
> fourchette périmée fait paraître un titre **plus proche de son sommet**
> qu'il ne l'est, ou l'inverse.
>
> **Usage autorisé d'une fourchette non datée : borne basse historique
> seulement. Jamais comme mesure de distance au sommet.**

*Quatrième contrôle du même genre, tous nés d'une panne du canal : bouclage
`cours_veille × (1+var)`, `capi ÷ titres` interdit, somme des composantes
d'un indice, et désormais la cohérence fourchette/cours.*

### ✅ Une règle encodée hier a mordu aujourd'hui

**Equasens** portait le Ségur numérique en santé Vague 2 — mécanisme
réglementaire financé et daté, taillé pour un éditeur de logiciels de santé
français, sur le seul véhicule tech **décoté** de la session (−24,4 % sur un
an).

**Tué par la règle du report, écrite la veille** : le calendrier a **déjà
glissé deux fois** *(fin de réalisation 17/03/2027 → **22/06/2027** ; solde
16/06/2027 → **28/09/2027**)*. Et par la règle 16 : Ségur V2 a produit
**0,6 M€ au S1 2026 sur un CA de 124,5 M€ — 0,5 %.** *Une optionnalité, pas
un marché créé.*

> **La règle du report a fait son travail avant même que j'écrive la
> thèse.** *Elle avait 24 heures.*

## Brief type d'un agent presse (template)

> « Tu es un chasseur d'opportunités d'investissement. Date : [date].
> Scanne via WebSearch l'actualité SPÉCIALISÉE [secteur du jour] des
> 3-7 derniers jours ([sources du jour]). Extrais 3-5 SIGNAUX EARLY
> (définition : [liste ci-dessus]). Pour chaque signal : (1) le fait précis
> daté avec sa source ; (2) la ou les sociétés COTÉES exposées (ticker,
> place) ; (3) pourquoi c'est early (qu'est-ce que le consensus n'a pas
> encore intégré) ; (4) le risque évident ; (5) la prochaine étape de
> vérification. Ignore ce qui fait déjà les gros titres généralistes.
> Réponse dense, factuelle, sources en liens. »

## Brief type de l'agent contre-analyse (candidate retenue la veille)

> « Analyse adversariale de [société]. (1) Passe la grille : qualité /3
> (Novy-Marx, ROIC 5 ans, F-Score), prix /3 (reverse DCF : quelle
> croissance est pricée ?, EV/EBIT vs historique), catalyseur /2, risque
> /2. (2) Construis la MEILLEURE thèse inverse : qui vend, pourquoi, que
> disent les shorts ? (3) Kill criteria mesurables si achat. (4) Verdict
> /10 et sizing selon regles-vente-sizing.md. »

## Le pipeline à trois étages (mis à jour 27/07 — agents dédiés)

**Étage 1 — DÉTECTION** : agent `chasseur-pepites` (défini dans
`.claude/agents/chasseur-pepites.md`, charte v2 : budget de session en 3
phases, 16 règles de recherche, 6 kill-tests systématiques, playbooks par
terrain, protocole jour creux, arsenal terrains-invisibles.md). Trouve les
signaux early, les source, les
étiquette. L'agent screening relève AUSSI chaque matin le chiffre du jour
des « Surveillances du Juge » (radar-catalyseurs.md) : déclencheur touché
ou approché < ~5 % → fast-track Arbitre → 🔔 PROPOSITION dans la
newsletter du jour même.

**Étage 2 — RÉFUTATION** : agent `avocat-diable`
(`.claude/agents/avocat-diable.md`, charte v2 : steelman d'abord,
protocole 6 coups, instruction ACH par hypothèses rivales, bibliothèque
de base rates chiffrées, pondération des preuves par likelihood ratios,
critères de bascule anti-hedging). Reçoit chaque signal solide du Chasseur SANS son
contexte (indépendance volontaire) et tente de le détruire. Verdict :
CONFIRMÉ / AFFAIBLI / RÉFUTÉ + probabilité ancrée sur base rate.

**Étage 3 — ARBITRAGE** : agent `arbitre-investissement`
(`.claude/agents/arbitre-investissement.md`, charte v2 : qualité du débat
notée A/B/C, arbre de probabilité multiplicatif, table d'espérance à 3
scénarios sur verdict serré, test de corrélation au portefeuille, feedback
de calibration mécanique). Reçoit le dossier HAUSSIER (Chasseur) ET le
dossier BAISSIER (Avocat) sur les signaux CONFIRMÉS et AFFAIBLIS, les pèse
impartialement depuis l'état GLOBAL du portefeuille, et rend la décision :
ACHAT (montant + programme) / SURVEILLANCE (contrat 4 champs : déclencheur
précis + échéance de re-test + ligne radar + expiration) / PASSE. C'est lui qui
formalise ce que la session principale faisait implicitement — un juge
neutre, ni chasseur ni avocat, pour éviter que l'Avocat ait le dernier
mot par construction. Les RÉFUTÉS ne vont pas à l'arbitrage (morts,
journalisés avec le fait tueur).

La session principale reprend la décision de l'Arbitre pour la
newsletter (elle peut la nuancer mais journalise tout désaccord).
Dialectique : Chasseur (thèse) → Avocat (antithèse) → Arbitre (synthèse).

⚠️ Si les agents personnalisés ne sont pas chargés dans la session
(erreur « agent type not found ») : utiliser general-purpose en collant le
contenu du fichier de définition en préambule du prompt.

## Règles de la chasse

1. **La rareté fait le signal** : 0 pépite trouvée = le dire ; ne jamais
   forcer. Mais chaque semaine doit produire ≥ 1 candidate JAMAIS évoquée
   (règle de sang neuf).
2. **Trois étages obligatoires** (ci-dessus) : un signal presse n'entre
   JAMAIS en newsletter sans être passé par l'Avocat du Diable. Le signal
   frais se raconte (« détecté, à l'étude — verdict demain »), la reco
   attend le verdict + la grille.
3. **Les grandes entreprises comptent autant que les petites** : « être au
   bon moment au bon endroit » vaut pour un géant en promo injustifiée
   (le setup MSFT) autant que pour une small inconnue. La grille est la
   même.
4. **Traçabilité** : chaque signal détecté est journalisé (retenu, à
   l'étude, écarté + raison) — c'est la matière de la revue d'ancrage
   mensuelle et de la Vérif' des appels.
5. **Budget d'agents** : 2-3 agents par routine, pas plus (coût/temps).
   Les sprints profonds multi-agents restent déclenchés par Tanguy.
6. **On ne peut pas détecter une exposition sous-estimée sans référentiel
   de comparaison** (diagnostic du 31/07/2026). Voir le chantier ci-dessous.

## 📉 DIAGNOSTIC DE RÉGIME — 4 chasses à zéro d'affilée (30/07 → 03/08)

France-smalls · émergents · smart money · tech : **quatre terrains, quatre
zéros.** Ce n'est pas une méthode défaillante, et il faut résister à deux
mauvaises réactions : baisser la barre, ou multiplier les requêtes.

**Ce que les quatre sessions disent en commun :**
- **T2 (nouveauté) tue presque tout.** Le marché re-note violemment depuis
  mi-juillet (Nasdaq −3,2 % sur le mois, MSFT +15,5 % en une séance, Vicat
  +13 % et Sanofi −9 % le même jour). Dans ce régime, **une information
  publiée est intégrée en heures**, pas en semaines.
- **Le terrain d'actualité est structurellement épuisé.** Le 03/08 l'a
  montré au plus près : la piste « fournisseur de rang 2 dont le donneur
  d'ordre annonce un capex » — la bonne piste en théorie — a mené aux deux
  seules valeurs PEA du créneau, **toutes deux déjà à +70 % et +82 % en
  2026**, et étiquetées « pépite des semi-conducteurs » par la presse
  boursière grand public. **Le 2ᵉ dérivé en PEA n'est pas un angle mort,
  c'est un consensus de place small-cap.**
- **Ce qui a produit de la valeur, c'est le CHANTIER**, pas la veille : la
  constitution de l'univers émergents-PEA (02/08) a révélé une poche
  entière — les sociétés dont les *actifs* sont émergents mais les *ventes
  facturées ailleurs*, que les écrans de screening classent mal.

### 🔁 CONFIRMATION du 05/08 — le zéro est STRUCTUREL, et c'est la 2ᵉ fois

Le terrain défense a produit **exactement le même mécanisme** que le terrain
émergents le 31/07, et cela transforme une anecdote en motif :

> **Le goulet est réel, documenté, vérifiable — et aucun de ses maillons
> n'est cotable en PEA.**

- **Émergents (31/07)** : la contrainte d'achetabilité élimine ~90 % du
  champ ; les meilleurs actifs (CDMO, distribution africaine, logistique
  portuaire) ont quitté la cote.
- **Défense (05/08)** : la liste officielle des goulets de la base
  industrielle et technologique de défense française **existe, est publique
  et fiable** (rapport du Sénat) — poudres et nitrocellulose, forgeage de
  grosses pièces, électronique durcie. **Eurenco, Aubert & Duval,
  ArianeGroup, Roxel, Manoir : tous non cotés ou hors route PEA.**
  **Terrain réel, véhicule inexistant.**
- **Santé (04/08)** : idem — le façonnier avec capacités américaines, maillon
  gagnant du régime tarifaire, est **privé (PCI, Recipharm, GRAM) ou suisse
  (Lonza, Siegfried, Bachem)**.

**Trois terrains, trois fois le même mur — et ce n'est PAS un mur
d'information, c'est un mur d'achetabilité.** La consigne « chercher le
fournisseur de rang 2-3 dans un goulet vérifié » est méthodologiquement
juste ; elle échoue sur l'univers, pas sur la méthode.

**Conséquence : un chantier d'univers rend plus qu'une veille d'actualité**
sur ces terrains. Prochains chantiers à programmer le samedi :
« fournisseurs de défense cotés hors grands maîtres d'œuvre, routes
Paris/Amsterdam/Bruxelles » ; puis « sociétés à VE < trésorerie en zone
PEA » (le screening VE<cash n'est pas atteignable par recherche indexée —
il demande un référentiel constitué).

### 🔴 CORRECTION du 05/08 — ma lecture de régime du 04/08 est INVALIDÉE

**Ce que j'ai écrit hier**, sur la base de Palantir (beat sur les 4 lignes
→ **+15 %**) : *« le sentiment sur les valorisations IA extrêmes n'est PAS
en phase de purge — il est en phase de RE-VALIDATION par les
fondamentaux. »*

**AMD a publié le soir même et a battu sur les QUATRE mêmes lignes** — CA
11,5 Md$ (+50 %), **Data Center 6,7 Md$ (+107 %)**, BPA non-GAAP 1,66 $,
guidance T3 12,7-13,3 Md$ — **et le titre a perdu 8,94 % en after-hours.**

> **Deux « beat » complets, deux réactions opposées à 24 heures
> d'intervalle. L'hypothèse « re-validation par les fondamentaux »
> n'explique pas AMD.**

**L'hypothèse rivale explique les deux** : *le marché re-valide le
LOGICIEL et purge le HARDWARE.* C'est exactement le **SOX −1,9 % contre
Nasdaq +2,1 %** que j'avais noté le 03/08 — **et que j'avais rangé en
observation secondaire au lieu d'en faire l'hypothèse principale.**

**Ce que ça change concrètement** : **NVDA pèse 22 % du portefeuille et
publie fin août.** AMD est le substitut disponible le plus proche, et **il
est négatif**. Ce n'est pas un signal d'action — la charte interdit de
vendre sur le prix, et le critère d'alerte NVDA (« capex abaissé par deux
grands acheteurs ») n'est pas près de se déclencher. Mais c'est un **fait
qui invalide une phrase publiée**, et la correction est due.

**Leçon de méthode** : j'ai tiré une loi de régime **d'une seule
observation**, en reléguant l'observation contradictoire du même jour au
rang de note. **Une lecture de régime exige au moins deux événements de
même nature, et doit expliquer les DEUX** — sinon c'est une narration
construite sur le dernier fait vu.

### 📉 Marqueur de régime — la défense européenne ne paie plus le récit

**Indice défense européen −12 % depuis mi-janvier contre Stoxx 600
+7,5 %.** Rheinmetall **−40 % depuis son pic de janvier**, *malgré* une
guidance de croissance de CA de **+45 % en 2026**.

> **Le thème ne paie plus le récit, il paie l'EXÉCUTION.** Sur ce terrain,
> la prochaine chasse doit viser les **écarts d'exécution** (marge tenue vs
> promise, conversion du carnet en cash), **pas les carnets de commandes**
> — qui sont désormais intégralement pricés, voire sanctionnés.

Illustration du jour : **Dassault Aviation** publie un S1 à +46 % de CA et
+83 % de résultat opérationnel, carnet 45,4 Md€ → **+10 % dès l'ouverture**,
réaction proportionnée, fait consommé. **Exosens** relève ses objectifs et
**recule**, après +149 % en 2025 et +24 % YTD.

**Conséquence encodée** : le créneau du samedi, dont le terrain « smart
money » est hors service, devient un **CHANTIER D'UNIVERS**. On ne cherche
plus l'information fraîche là où mille personnes la cherchent ; on
construit des référentiels de valeurs peu couvertes, puis on y cherche le
mal-pricé. **Un référentiel se périme lentement ; une actualité se périme
en heures.**

⚠️ **Ce diagnostic ne justifie PAS d'assouplir les kill-tests.** Quatre
zéros honnêtes valent mieux qu'un signal fabriqué : sur la même période,
le système a évité un contrat mort-né sur Vicat, un renfort MSFT à
l'asymétrie déjà consommée, et un faux « drift » Sidetrade fondé sur des
cotations périmées de 25 %. **Le refus est la compétence, pas l'échec.**

## ✅ CHANTIER CLOS le 02/08/2026 — univers émergents accessible en PEA

Ouvert le 31/07 après un 0 signal, **livré le 02/08** : 12 sociétés
documentées, 4 écartées avec motif, 32 requêtes.
**→ Le référentiel vit désormais dans `univers-emergents-pea.md`.**

Les trois enseignements qui changent la façon de chasser ce terrain :
1. **La route PEA passe par Lisbonne et Bruxelles, pas par Paris** — les
   deux seules sociétés à CA majoritairement émergent sont portugaises
   (Mota-Engil 78 %, Jerónimo Martins ~79 %). Pas d'équivalent français.
2. **Chercher dans le groupe B** — actifs 100 % émergents mais ventes
   facturées ailleurs (Sipef facture 34 % en Suisse : ce sont des desks de
   négoce). **C'est là que les écrans de screening se trompent, donc là que
   le terrain est le moins couru.**
3. **Le champ accessible a RÉTRÉCI sur dix ans** : plus de banque ni de
   télécom émergente sur Euronext, la distribution africaine est partie avec
   le retrait de CFAO, la logistique portuaire avec la cession Bolloré.
   **Le 0 signal du 31/07 était mécanique, pas malchanceux.**

⚠️ **Action bloquante en attente** : vérifier que Fortuneo route Euronext
Lisbonne et Bruxelles. **L'éligibilité PEA ne garantit pas l'accès du
courtier** — sans cette vérification, la moitié de cet univers n'existe que
sur le papier.

## 🗓️ CORRECTION DE MÉTHODE — vérifier le CALENDRIER avant de définir le terrain (06/08/2026)

**7ᵉ zéro consécutif.** Il est propre, mais une partie de sa cause était
**dans ma main, pas dans le marché**.

J'ai briefé le Chasseur du jeudi sur une « saison S1 en cours » sur la cote
française. **Elle était terminée** : 38 des 40 valeurs du CAC 40 ont publié
**entre le 16 et le 31 juillet** ; il ne restait qu'**Eiffage** (fin août)
et **Pernod Ricard** (27/08). J'ai envoyé un agent chasser un gisement que
j'avais moi-même décrit comme ouvert alors qu'il venait de se refermer.

> **C'est le même schéma que le 0 des émergents du 31/07**, dont l'analyse
> post-mortem a montré qu'il était « mécanique, pas malchanceux » — le champ
> accessible avait rétréci sur dix ans. Deux fois de suite, le zéro était
> **prévisible avant le lancement**, par une vérification que je n'ai pas
> faite.

**Règle encodée** : avant de définir le terrain d'un jour, **vérifier l'état
du calendrier de publication de ce terrain**. Un terrain dont la saison est
close ne produit pas de faits neufs — il produit des archives, et les
archives sont exactement le piège documenté ci-dessous.

Corollaire pour la rotation : quand le terrain du jour est en creux de
calendrier, **le convertir en chantier d'univers** (comme le samedi) plutôt
que de lancer une chasse d'actualité qui n'a rien à trouver. La rotation
sert la couverture, pas le rituel.

### 🎣 3ᵉ piège d'archive en six jours — et le plus dangereux des trois

Une requête sur la séance du 06/08 a remonté : **CAC 40 −0,60 % à
8 408,27 pts · Hermès −11,03 % · Sanofi −8,95 % · STM −3,55 % à 42,90 €**.

**Écarté par cohérence temporelle croisée** : le CAC a inscrit un record en
séance à **8 642,32 pts** et clôturé à **8 613,82 pts le 03/08**. Un indice
à 8 408 le 06/08 impliquerait **−2,4 % en trois séances** sans qu'aucune
autre source ne le mentionne.

**Pourquoi celui-là était le pire** : l'article citait **trois valeurs déjà
sous surveillance** et donnait **STM à 42,90 €**, soit **+2,1 % du
déclencheur de 42 €** — dans la bande de fast-track. Repris sans contrôle,
il déclenchait un arbitrage sur une **archive de fin juillet**.

> **Le contrôle qui a mordu n'est pas arithmétique.** Les règles 1 et 2
> vérifient qu'un chiffre est *interne­ment cohérent* — cet article l'était.
> Ce qui l'a démasqué, c'est un **ancrage sur un événement de marché connu
> et daté** (le record du 03/08). **Un chiffre d'indice se vérifie contre
> l'histoire de l'indice, pas contre lui-même.**


## 🗓️ LE CALENDRIER PRIME SUR LA ROTATION (encodé le 12/08/2026)

**Quatre jours d'affilée — 09, 10, 11 et 12/08 — j'ai dû constater que le
terrain du jour était en creux de calendrier.** Ce n'est pas quatre
coïncidences : **la saison de résultats européenne s'est achevée le
31 juillet et la rotation sectorielle continue de tourner comme si elle
durait.**

**Le diagnostic corrige une conclusion trop rapide du 06/08.** J'avais alors
décidé de convertir les créneaux creux en chantiers d'univers. **C'était un
pansement** : ça occupe le créneau sans traiter la cause — et la répétition
d'un format finit par en faire un rituel.

> 🔑 **Le calendrier n'a pas disparu, il a DÉMÉNAGÉ.** Ce qui publie en août,
> ce sont précisément les valeurs de l'univers émergents-PEA :
> **Sipef (12-13/08) · NEPI Rockcastle (18/08) · IBA, Ageas, Pernod Ricard
> (27/08) · Mota-Engil et Eiffage (fin août) · TEXAF (07/09) · Séché
> (09/09)**. **Sept des huit rendez-vous du mois tombent sur des terrains que
> la rotation ne visite qu'un jour sur sept.**

### La règle

> **Quand une publication d'une société de mon univers documenté tombe dans
> les 48 heures, elle DEVIENT le terrain du jour, quel que soit le jour de
> la semaine.** La rotation sectorielle ne s'applique qu'aux jours sans
> échéance.
>
> *Une rotation existe pour éviter les angles morts. Quand elle en produit
> un — regarder la défense le jour où une candidate documentée publie —
> elle travaille contre son propre objet.* **La rotation redevient ce
> qu'elle aurait toujours dû être : un générateur de couverture pour les
> jours vides, pas un ordonnanceur qui prime sur les faits.**

⚠️ **Ce que cette règle NE fait PAS** : elle ne relâche aucun kill-test et
ne crée aucune pression à trouver. *Suivre le calendrier fait regarder au
bon endroit ; ça ne fait pas apparaître d'opportunité là où il n'y en a
pas.* Les zéros de la période restent des zéros mérités.

## 🔬 CE N'EST PAS LE MÊME ZÉRO — typologie encodée le 18/08/2026

Deux terrains consécutifs, deux zéros, **deux causes qui n'ont rien à voir**.
Les confondre ferait croire à une méthode défaillante ; les distinguer dit où
chercher.

| Terrain | Achetabilité | Cause du zéro | Ce que ça signifie |
|---|---|---|---|
| **Tech (17/08)** | 4 véhicules sur 5 | 🔴 **MUR D'EFFICIENCE** — bons dossiers, prix déjà fait *(Soitec +24 % en une séance, TKH +9,5 %, Melexis avec un objectif de consensus SOUS le cours)* | **Le marché a raison plus vite que moi.** Rien à faire sur ce terrain par la veille d'actualité |
| **Santé (18/08)** | **5 véhicules sur 5** | 🔴 **MUR DE QUALITÉ** — les rares décotés le sont **pour de vraies raisons** : covenant menacé, concurrence asiatique, substitution orale, cash dépensé | **Le marché n'a pas tort.** *Et c'est plutôt une bonne nouvelle : je ne rate rien* |

> 🔑 **Un zéro d'efficience dit « tu arrives trop tard ». Un zéro de qualité
> dit « il n'y avait rien à prendre ».** Le premier est un problème de
> méthode, le second n'en est pas un. **Les compter ensemble comme
> « 6 zéros » efface la seule information utile.**

### ✅ L'inversion tient sur l'achetabilité — deuxième vérification

| | Achetables | Non achetables |
|---|---|---|
| Partir du THÈME (14-16/08) | ~2 | 11 |
| **Partir du VÉHICULE** (17/08 tech) | **4** | 1 |
| **Partir du VÉHICULE** (18/08 santé) | **5** | **0** |

*Aucune suisse, aucun nordique, aucun AIM proposés aujourd'hui.* **La règle
d'achetabilité a cessé d'être un filtre en aval : elle est devenue le point
de départ, et elle ne coûte plus de pistes.**

### 🕳️ MAIS une des trois zones survivantes est VIDE sur mes places

J'avais encodé le 17/08 trois zones où l'efficience mord moins. **La chasse
d'aujourd'hui les a testées toutes les trois. Résultat :**

1. **Drift post-événement — GISEMENT INEXISTANT ICI.** Aucune scission santé
   cotante à Paris/Amsterdam/Bruxelles. Et surtout : **Euronext a passé une
   année entière sans IPO majeure** *(Bloomberg, 07/01/2026)* — la biotech
   européenne part au Nasdaq, la belge **Agomab y a levé 200 M$ en février
   2026**. **Le gisement post-introduction n'existe pas sur mes places : il a
   émigré.**
2. **Sociétés sous-couvertes** — testée avec **Guerbet** (zéro analyste,
   ticket minuscule) : **tuée sur les fondamentaux**, pas sur la couverture.
3. **Décotes sans catalyseur** — testée avec **Lakefront** : voir la règle
   ci-dessous.

> **Une stratégie de repli dont un tiers du gisement n'existe pas sur les
> places accessibles doit être rétrécie, pas répétée.**

### 💰 NOUVELLE RÈGLE — une décote sur trésorerie n'est pas une erreur de prix

**Lakefront Biotherapeutics** (ex-Galapagos, Amsterdam + Nasdaq) : capi
~**1,54 Md€** pour une trésorerie guidée à ~**2 Md€** fin 2026. Le cas d'école
de la décote sur cash.

**Deux faits la démolissent :**
- **L'objectif de cours médian de 5 analystes est à 23,59 $, soit ~15 % SOUS
  le cours de 27,09 $.** *Le marché paie déjà plus cher que ce que les
  analystes justifient — l'exact inverse d'une sous-réaction.*
- **Le retour de capital est PLAFONNÉ** (jusqu'à 150 M$, soit ~9 % de la capi,
  et un rachat de 50 M€) **pendant que 758,5 M€ de trésorerie sont sortis au
  S1 2026.**

> **RÈGLE : une décote sur trésorerie mesure la PROBABILITÉ QUE LE CASH SOIT
> DÉPENSÉ, pas une inattention du marché.** Avant de la traiter comme une
> opportunité, chercher **ce qui autorise l'actionnaire à récupérer ce cash**
> — plafond de rachat, clause contractuelle, contrôle familial. *Sans droit
> de tirage, ce n'est pas de la trésorerie, c'est le budget de quelqu'un
> d'autre.*

### 🔁 « Mécanisme réel, encaisseur privé ou cassé » — TROISIÈME occurrence

Le **Critical Medicines Act** (accord Parlement-Conseil du 12/05/2026) visait
à réduire la dépendance aux principes actifs extra-européens — **45 % des
importations viennent de Chine**. Un texte fait sur mesure pour un producteur
d'API européen coté.

**Les encaisseurs** : Seqens, Fareva, Recipharm — **tous privés** ; Siegfried
est **suisse** (exclu) ; le seul coté en PEA, **EuroAPI**, a perdu **141,5 M€
au S1 2026** et chuté de **27 % en une séance**, *« balayée par la concurrence
asiatique »*.

Et **le contournement n°3 est intégré au texte dès l'origine** : le CMA
fonctionne par **incitations et préférence dans les marchés publics**, pas par
interdiction d'importer. ⚠️ **Règle 16** : texte final au JOUE attendu
**fin 2026**, date d'application confirmée **à ce moment-là**. *Un accord
politique n'est pas une obligation de dépense.*

> **Défense (15/08), réglementaire (16/08), santé (18/08) : trois terrains,
> le même schéma.** *En Europe, la règle est écrite pour un secteur dont les
> acteurs ne sont pas cotés là où je peux acheter.*

### ⏳ Le test de la CAUSE TEMPORAIRE — formalisé sur Guerbet

**Guerbet** ressemblait à la décote idéale : produits de contraste, chute
violente pour une cause **identifiée et nommée** (le site de Raleigh), zéro
couverture, ticket minuscule.

**Ce qui la tue** : l'entreprise elle-même écrit que les ralentissements de
production **« continueront de s'accentuer tout au long de l'exercice 2026 »**,
pendant qu'elle obtient un **waiver de covenant** pour les trois tests des
30/06/2026, 31/12/2026 et 30/06/2027, avec un **risque probable de
non-respect du ratio dette/EBITDA de 3,5x** — plafond déjà relevé à **4,8x**
fin 2025 — et un **FCF guidé entre −50 et −70 M€**.

> **RÈGLE : une cause « temporaire » qui S'AGGRAVE sur 24 mois pendant qu'un
> covenant saute n'est plus une cause temporaire — c'est la situation.**
> Le test n'est pas « la cause est-elle identifiée ? » mais **« l'émetteur
> annonce-t-il lui-même son atténuation, avec une date ? »**

⚠️ **Et le refinancement à conclure d'ici le 31/10/2026**, avec des
actionnaires familiaux qui *« confirment leur engagement à accompagner la
société »* : **au radar comme risque de DILUTION, pas comme opportunité.**


## 🚫 TROISIÈME ESPÈCE DE ZÉRO — le MUR D'ACCÈS (encodé le 20/08/2026)

La typologie du 18/08 en comptait deux. **La chasse France & smalls du 20/08
en a révélé une troisième, et c'est la plus insidieuse parce qu'elle
ressemble aux deux autres.**

| Espèce | Ce que le zéro signifie | Ce qu'il m'apprend sur le terrain |
|---|---|---|
| **Mur d'EFFICIENCE** *(tech, 17/08)* | « Tu arrives trop tard » — prix déjà fait | **Beaucoup** : le terrain est vivant mais rapide |
| **Mur de QUALITÉ** *(santé, 18/08)* | « Il n'y avait rien à prendre » — le marché n'a pas tort | **Beaucoup** : je ne rate rien |
| 🆕 **Mur d'ACCÈS** *(France-smalls, 20/08)* | **« Je n'ai pas pu regarder »** | 🔴 **RIEN. Absolument rien.** |

**Les faits du 20/08** : **six domaines de cotation refusés**, dont
`live.euronext.com` en source primaire, plus les deux écrans de plus-bas
52 semaines et l'agrégateur AMF. **Un terrain France/small caps se chasse sur
le PRIX** — sans lui, il ne reste que des récits.

> **RÈGLE : un terrain qui échoue sur l'ACCÈS n'est pas « chassé à zéro », il
> est NON INSTRUIT.** *Il ne compte pas dans le décompte des zéros, et il ne
> dit rien de la productivité du terrain.*
>
> **Pourquoi ça compte vraiment** : j'ai huit zéros ce mois-ci. Les compter
> ensemble me ferait conclure « ma méthode ne trouve rien ». **Mais un zéro
> d'accès ne mesure pas ma méthode, il mesure mon tuyau.** *Mélanger les
> trois, c'est se fabriquer un faux diagnostic sur soi.*

**Conséquence opérationnelle** : le terrain France & smalls du 20/08 est
**à rejouer** dès qu'un chemin de prix fonctionne, et **l'angle des
publications du 17-20/08 n'a jamais été ouvert** — c'est un angle mort
entier, pas une absence de matière.

### 🕸️ Et une découverte sur ce terrain précis : il est POSSÉDÉ par le spam

**Trois des quatre premières requêtes ont ramené des guides de screeners et
des listicles SEO** au lieu de faits d'entreprise.

> **Le vocabulaire naturel de ce terrain — « small cap française »,
> « pépite » — est POSSÉDÉ par le contenu généré.** C'est le terrain le plus
> pollué de ma rotation.

**Le seul canal ayant produit des faits primaires datés est le fil de presse
réglementé (GlobeNewswire), interrogé par FORMULATION MÉTIER** : *« carnet de
commandes »*, *« résultats semestriels 2026 »*, *« activité du premier
semestre »*.

> **RÈGLE POUR LE JEUDI : attaquer d'emblée par le FIL DE PRESSE PRIMAIRE,
> jamais par le NOM DU SEGMENT.** *Chercher « small cap française » revient à
> demander au spam de se présenter.*

### 📖 Un mot d'émetteur à savoir lire : « résilient »

**Riber** (ALRIB) a publié un carnet de commandes qualifié de **« résilient »**
au 30/06/2026.

> **« Résilient » est un mot de PRUDENCE, pas d'INFLEXION.** Le communiqué ne
> dit pas *book-to-bill > 1*, il dit *« on tient »*. **Sur un dossier
> valorisé ~55x les bénéfices, la nuance décide.**

*(Riber tuée par ailleurs sur T1, et sans appel : fourchette 52 semaines
**2,85 € → 18,50 €**, un facteur **6,5**, dont +29 % sur le seul mois de
janvier 2026. Et deux capitalisations discordantes — 289 M€ contre 323 M€ —
symptôme classique d'agrégateurs non rafraîchis.)*

## 📄 LE TEST DU DOCUMENT MANQUANT — encodé le 24/08/2026

**Le meilleur résultat de la chasse du 24/08 n'est pas un signal, c'est un
TEST.**

**Le cas** : toute la presse parle du *« spinoff vote »* de **TKH Group** le
03/09. J'ai voulu instruire le **drift post-scission** — l'anomalie où les
actionnaires reçoivent des titres qu'ils n'ont pas choisis et les vendent
mécaniquement.

**Le dossier est mort, et il est mort proprement :**

> **Une scission néerlandaise (*juridische splitsing*) impose le dépôt public
> d'un « DEMERGER PROPOSAL » (*splitsingsvoorstel*) chiffré, avec ratio
> d'échange. TKH n'en a publié AUCUN.**
>
> *Contre-exemple, à la même période et sur la même place* : **JDE Peet's a
> publié exactement ce document le 15/01/2026.** *Donc le document existe,
> il est public, et son absence est une information.*

**Ce que TKH fait à la place** : un **dual-track vente stratégique / IPO**
piloté par J.P. Morgan, **dont le produit revient en CASH à TKH**. Et l'AGE
ne demande pas l'approbation d'un traité de scission — elle demande
l'approbation *« à des conditions qui seront finalisées par le Directoire »*.
**Un blanc-seing, pas une scission.**

**Confirmation par le langage de l'emploi des fonds** : TKH parle du produit
*« y compris le produit des cessions »*. 🔑 ***On ne dit « produit » que s'il
y a encaissement.*** Une distribution en nature ne produit rien à encaisser.

### ✅ LA RÈGLE

> **Quand un mécanisme juridique exige un DOCUMENT SPÉCIFIQUE pour exister,
> l'absence de ce document réfute le mécanisme — quoi que dise la presse.**
>
> **Cherche le document, pas le récit.** *« Vote de scission » dans un titre
> de presse ne vaut rien contre un splitsingsvoorstel qui n'existe pas.*

**Et le kill vaut dans LES DEUX branches** : même si le dual-track bascule
vers l'IPO, **il n'y a pas de distribution forcée, donc pas de vendeurs
mécaniques, donc pas de drift.** *Le dossier est mort dans les deux issues
possibles — c'est ce qui rend le verdict solide.*

**Le déclencheur de résurrection, nommé** : *si un jour un
splitsingsvoorstel est déposé au registre du commerce néerlandais avec un
ratio d'échange, le dossier redevient exactement celui que je cherchais.*

---

## ⚠️ CORRECTION DE MA RÈGLE DU 17/08 — une incompatibilité invalide la PAIRE

**Ce que j'avais encodé le 17/08**, après le cas TKH : *« un plus-haut
52 semaines INFÉRIEUR au cours du jour est une impossibilité arithmétique →
la fourchette est périmée. »*

🔴 **La règle est incomplète, et l'omission est intéressée.**

| Les deux données de l'époque | |
|---|---|
| Cours « daté » du 14/08 | **52,65 €** |
| Fourchette 52 sem. | **31,54 – 48,14 €** |

**J'en ai conclu que la FOURCHETTE était périmée. Mais la même
incompatibilité se résout tout aussi bien par : LE COURS est faux.**

**Et c'est probablement le cours.** Un relevé du 24/08 donne **48,46 € au
19/08** avec une fourchette **32,42 – 49,48 €** — *coherente, puisque
48,46 < 49,48.* **Mon 52,65 € dépasse le plus-haut des DEUX fourchettes.**
*Et « 31,54 – 48,14 » ressemble à une version antérieure de « 32,42 – 49,48 » :
une fourchette monte avec le temps.*

> **J'ai choisi, entre deux lectures également disponibles, celle qui gardait
> MON chiffre.** *Ce n'est pas un biais directionnel — TKH n'a pas de seuil
> chez moi. C'est un biais de possession.*

### ✅ RÈGLE CORRIGÉE

> **Une incompatibilité entre un cours et une fourchette invalide LA PAIRE,
> pas seulement l'un des deux membres.** Tant qu'un troisième point
> indépendant ne tranche pas, **les deux sont suspects et aucun ne s'écrit
> comme un fait.**
>
> *Corollaire : quand deux de mes données se contredisent, la lecture qui
> conserve mon chiffre antérieur est celle dont je dois me méfier le plus.*

**Troisième fois ce mois-ci qu'une règle doit être raffinée par le cas même
qui la teste** *(champ définitionnel le 21/08, conception des tests le 20/08,
et celle-ci)*. **Une règle qui n'a jamais été exercée ne sait pas encore ce
qu'elle omet.**

## 🔬 LE MODE DE PANNE EST DIAGNOSTIQUÉ — et ce n'est PAS la complaisance (25/08/2026)

**Hier j'ai encodé une technique** : *« quand une date compte, la tester en
proposant une date FAUSSE. Si le moteur l'accepte, tout ce qu'il dit sur ce
sujet est suspect. »*

**Deux tests exécutés aujourd'hui. Deux REFUS nets :**

| Test | Amorce proposée | Réponse du moteur |
|---|---|---|
| **NVIDIA** | *« earnings report **Thursday August 27** »* | **Refus explicite** : *« Wednesday, August 26 — **not Thursday, August 27** »*. Il a corrigé le jour de la semaine **de lui-même** |
| **AUBAY** | déclaration *« réalisées le **23 août** »* — **un dimanche, jour sans bourse** | **Refus** : *« I did not find specific information about transactions specifically realized on August 23 »*, et rappel des périodes réellement publiées |

> 🔑 **Le moteur RÉSISTE à l'amorce de date. Il n'invente pas.**

### Alors quel est le mode de panne réel ?

**Le RÉÉTIQUETAGE TEMPOREL : une donnée VRAIE servie sous une DATE FAUSSE.**

**Trois occurrences le même jour :**

| Chiffre servi « au 24/08 » | Ce que c'était réellement |
|---|---|
| S&P 500 **7 674,37** · Nasdaq **26 180,46** | **mes propres clôtures du 21/08, au centième près** |
| Nike **40,75 $** | ma chaîne du 21/08, dérivée d'un centime |
| Marge brute *« T3 »* **74,8 % / 75,0 %** | le **T3 FY2026**, clos le 26/10/**2025** — un an d'âge |

*Et une réponse portait même une contradiction interne : le titre de
l'article disait « Nasdaq, S&P 500 slide » pendant que le résumé annonçait
+0,43 %.*

### ⚠️ LA CORRECTION À MA RÈGLE D'HIER

> **Le test de la date fausse ne détecte PAS ce mode-là.**
> **Il teste si le moteur INVENTE. Il ne teste pas s'il RECOPIE.**
>
> **Seul le bouclage `veille × (1 + variation)` attrape le réétiquetage** — et
> il l'a attrapé **trois fois aujourd'hui** pendant que l'autre test regardait
> ailleurs.

**Les deux tests restent utiles, mais ils couvrent des modes DIFFÉRENTS** :

| Test | Détecte | Ne détecte pas |
|---|---|---|
| **Date fausse** | l'invention, la complaisance | le réétiquetage |
| **Bouclage arithmétique** | le réétiquetage, l'incohérence interne | une donnée fausse mais interne­ment cohérente |

> **RÈGLE CONSOLIDÉE : le bouclage contre MA PROPRE SÉRIE VALIDÉE est le seul
> contrôle qui attrape le mode dominant.** *Mes ancrages validés ne sont pas
> des archives — ils sont l'instrument de mesure. Sans eux, un réétiquetage
> est indétectable, parce qu'il est vrai partout sauf sur la date.*

### 🎯 Un troisième contrôle, découvert aujourd'hui : l'IMPOSSIBILITÉ INTERNE

**Eli Lilly** : le moteur a donné une **clôture de 1 255,40 $** et, dans la
**même réponse**, un **plus-bas de séance de 1 255,50 $**.

> **Une clôture ne peut pas être INFÉRIEURE au plus bas de la séance.**
> **La réponse se réfute elle-même**, sans avoir besoin d'aucune donnée
> externe.

*À ajouter à la liste des contrôles d'impossibilité, avec le plus-haut
52 semaines sous le cours du jour.* ~~et le VWAP identique sur quatre places~~
🔴 **— ce dernier est RETIRÉ le 26/08, voir ci-dessous.**

### ☠️ 26/08 — LE « CONTRÔLE STRUCTUREL SUR AUBAY » EST RETIRÉ : c'était un FAUX contrôle

**Ce que j'avais écrit le 25/08** : *« un prix moyen pondéré ne peut pas être
identique à quatre places différentes — c'est un artefact ou une
reconstruction, pas une mesure »*, à propos du VWAP de rachat Aubay de
**57,00 €** sur XPAR / CEUX / TQEX / AQEU.

> 🔴 **C'est faux.** La provenance a été retrouvée : **déclaration de
> transactions sur actions propres du 17/08/2026**, 366 titres —
> **197 XPAR · 66 CEUX · 42 TQEX · 61 AQEU**. **Une déclaration de rachat
> reporte un prix moyen pondéré GLOBAL, répété sur chaque ligne de place.**
> *Ce n'est pas une anomalie : c'est le format réglementaire.*

### 🔑 Pourquoi un faux CONTRÔLE est pire qu'une fausse donnée

**Une donnée fausse coûte une donnée. Un contrôle faux coûte toutes les
données qu'il rejettera.** *Celui-ci écartait systématiquement **les
déclarations de rachat réglementaires** — c'est-à-dire exactement le chemin
qui a débloqué Aubay le 17/08, et le seul canal documentaire qui me reste
pendant que l'egress est fermé.* **Je m'étais fabriqué un filtre contre ma
propre meilleure source.**

### ✅ Le rejet restait bon — mais pour un motif meilleur

**57,00 € n'est pas une clôture : c'est un VWAP d'exécution sur 366 titres.**
Même parfaitement authentique, **il ne mesure pas l'objet mesuré par un cours
de séance.** *C'est une erreur de **TYPE**, pas de véracité.*

> **RÈGLE (26/08) — l'ordre des questions est imposé** :
> **① De quel TYPE est cette donnée ?** *(clôture · VWAP d'exécution ·
> intraday · prix de référence · transaction de personne liée)*
> **② Seulement ensuite : est-elle vraisemblable ?**
>
> *J'ai eu raison par accident le 25/08. **Un bon verdict rendu pour un
> mauvais motif est un échec de méthode déguisé en succès** — il ne se
> détecte qu'en remontant à la provenance.*

⚠️ **Ce qui SURVIT de l'épisode** : le second contrôle instauré le 25/08 —
*une clôture ne peut pas être inférieure au plus-bas de la même séance* —
**tient**. C'est une **contradiction interne**, pas une conjecture sur un
format. *La différence entre les deux est exactement ce qui sépare un
contrôle d'impossibilité d'un préjugé.*

---

## 🛡️ DEUX CONTRÔLES AJOUTÉS LE 02/09/2026 — et l'un d'eux ouvre une famille nouvelle

### ① LE CAS DÉGÉNÉRÉ — mon bouclage a un angle mort structurel

**Deux cours servis avec `veille = clôture` et `variation = 0,00 %`** *(Aubay
54,90 € · Eli Lilly 1 160,00 $)*.

> `54,90 × (1 + 0,00) = 54,90` ✅ **Le bouclage valide, et ne prouve rien.**
>
> ☠️ **L'équation est une TAUTOLOGIE : elle est vraie pour n'importe quel
> nombre.** *Le contrôle que j'ai érigé en meilleur garde-fou est
> **structurellement aveugle** à cette forme.*

**C'est la case « donnée fausse mais internement cohérente » de la table du
25/08, rencontrée pour la première fois en vrai.**

> ✅ **RÈGLE** : **`variation = 0,00 %` ET `veille = clôture` → RÉPONSE
> DÉGÉNÉRÉE, rejet automatique**, quelle que soit la vraisemblance du niveau.
>
> ⚠️ *Les deux niveaux étaient plausibles (−3,4 % et −1,24 % contre mes
> ancrages). **C'est précisément pourquoi il ne faut pas les prendre** : un
> chiffre invérifiable ne devient pas vérifiable en étant vraisemblable.*

### ② L'INVARIANT D'ÉMETTEUR — une famille de contrôle NOUVELLE

**Une déclaration mensuelle a été servie sous le nom de Séché avec
147 454 887 actions. Séché en a 7 857 732.** *Facteur ×18,8 : c'est un autre
émetteur, dont le document a été recollé sur le nom.*

> 🔴 **Pourquoi c'est le piège le plus dangereux du corpus** : *il ne porte pas
> sur un cours d'agrégateur mais sur un **DOCUMENT RÉGLEMENTAIRE** — le canal
> que cette doctrine classe le plus haut, et le seul ouvert quand l'egress est
> fermé.*
>
> **Ni la date ni le bouclage ne l'attrapent** : le document est probablement
> authentique et cohérent. **C'est le NOM qui a été substitué.**

> ✅ **RÈGLE** : **le nombre d'actions composant le capital est un INVARIANT
> par émetteur.** *Le conserver, et le vérifier sur tout document
> réglementaire servi sous ce nom.*
>
> **Invariants établis** : **Séché = 7 857 732** · **STM ≈ 915 M** *(déduit de
> trois ratios concordants)*.

> 🔑 **Ce que cette règle inaugure** : *tous mes contrôles antérieurs testent
> la **DATE** (réétiquetage) ou la **COHÉRENCE** (bouclage, impossibilités).*
> **Celui-ci teste l'IDENTITÉ — « ce document parle-t-il bien de l'entreprise
> qu'il prétend ? »** *Nouvelle famille, et elle n'avait aucun représentant
> jusqu'à aujourd'hui.*

### 📐 Corollaire — un contrôle se déduit du DOCUMENT, pas du besoin

**J'ai transposé à Séché le contrôle `actions × VWAP = montant` qui marche
sur Aubay et STM. Séché ne publie pas ce document** — sa déclaration mensuelle
art. 223-16 porte l'autodétention et les droits de vote, **pas un prix**.

> **Le contrôle disponible se déduit du FORMAT du document, jamais du besoin
> de l'analyste.** *Demander à Séché le contrôle d'Aubay, c'est demander une
> réponse à une question que son document ne pose pas.*
>
> *Contrôle réellement disponible chez Séché :*
> `autodétention ÷ actions = %` — *vérifié : `91 080 ÷ 7 857 732 = 1,159 %`,
> arrondi émetteur 1,16 % ✅*

---

## 🔒 03/09/2026 — L'HÉRITAGE DU REJET, et une QUATRIÈME famille de contrôle

### ① L'HÉRITAGE DU REJET — les chiffres faux COLLENT

**Deux cours rejetés le 02/09 en cas dégénéré** *(Aubay 54,90 € · Lilly
1 160,00 $)* **sont revenus le 03/09 — non comme cours, mais comme VEILLE d'un
nouveau calcul.**

| Servi le 03/09 | Veille impliquée | Statut |
|---|---|---|
| Aubay 54,50 € *(−0,73 %)* | `54,50 ÷ 0,9927 = ` **54,90 €** | 🔴 rejeté la veille |
| Lilly 1 163,80 $ *(+0,33 %)* | **1 160,00 $** | 🔴 rejeté la veille |

**Les deux bouclages sont arithmétiquement PARFAITS.** *C'est ce qui les rend
dangereux : un bouclage impeccable sur une fondation pourrie a toutes les
apparences d'une validation.*

> ✅ **RÈGLE** : **un calcul dont une entrée a été rejetée HÉRITE DU REJET**,
> quelle que soit la qualité du calcul.
>
> **Corollaire opérationnel** : *tenir une **LISTE DE QUARANTAINE NOMMÉE**, et
> pas seulement rejeter au fil de l'eau.* **Un chiffre rejeté qui n'est pas
> mémorisé revient le lendemain déguisé en prémisse.**

**🔒 QUARANTAINE au 03/09** : Séché **82,60 €** *(non daté, 4 occurrences)* ·
Aubay **54,90 €** *(dégénéré, 2 occurrences)* · Lilly **1 160,00 $**
*(dégénéré)* · Nike **40,75 $** *(réétiquetage)* · Séché **77,80 €**
*(non daté)*.

### ② LA COHÉRENCE INTERNE — quatrième famille, et la moins coûteuse

**Un paquet servi sur Séché contenait, dans la même réponse** : *« Oddo relève
son objectif de 105 à **115 €** »* **et** *« plus haut objectif analyste :
**100 €** »*.

> ☠️ **115 > 100. La réponse se réfute elle-même.**
>
> **Et aucun de mes trois autres contrôles ne l'aurait attrapée** : *le
> bouclage ? aucun prix à chaîner. Le test de date ? aucune date affirmée.
> L'invariant d'émetteur ? le nombre d'actions n'était pas en jeu.*

**LES QUATRE FAMILLES DE CONTRÔLE, désormais complètes** :

| # | Famille | Ce qu'elle teste | Coût |
|---|---|---|---|
| ① | **DATE** | le réétiquetage temporel | moyen |
| ② | **COHÉRENCE EXTERNE** | le bouclage contre MA série validée | élevé *(exige une série)* |
| ③ | **IDENTITÉ** | le document parle-t-il de la bonne entreprise ? | faible *(un invariant mémorisé)* |
| ④ | **COHÉRENCE INTERNE** | la réponse se contredit-elle elle-même ? | **quasi nul** |

> 🔑 **La ④ ne demande AUCUNE donnée — juste de lire la réponse ENTIÈRE avant
> d'en extraire un chiffre.** *C'est le contrôle le moins cher du corpus, et
> c'est le dernier que j'ai ajouté.*

### ③ LE MUR D'ACCÈS A UNE GRANULARITÉ

*Encodé le 20/08 comme un état binaire. Il est en réalité **sélectif**, et la
fracture est défavorable :*

| Canal | État au 03/09 |
|---|---|
| Documentaire / émetteur / fils réglementés | 🔴 **FERMÉ** |
| Cotation indices & grandes valeurs | 🟢 **OUVERT** |
| Cotation **petites valeurs** | 🔴 **CONTAMINÉ** *(chiffres collants)* |

> **Le prix des gros passe ; le document et le prix des petits ne passent
> pas.** *C'est exactement l'inverse de ce dont un terrain France-smalls a
> besoin.*
>
> ✅ **RÈGLE** : *classer le mur d'accès par **type de canal** ET par **taille
> de capitalisation**. Le déclarer « ouvert » ou « fermé » globalement fait
> perdre l'information qui décide de ce qu'on peut instruire.*

---

## ☠️ 04/09/2026 — MES ANCRAGES SONT LA MATIÈRE PREMIÈRE DES FAUX

**Un agent a proposé** : *« le CAC est passé parce que mon ancrage avait 24 h ;
le S&P a été réétiqueté avec ce même ancrage — la différence est la FRAÎCHEUR
de ma série. »* **Testé avant adoption, et corrigé** : les deux ancrages
avaient **le même âge (1 jour)**. *La fraîcheur n'explique rien.*

### Le vrai mécanisme

| | Servi | Diagnostic |
|---|---|---|
| **CAC** | 8 286 *(+0,07 %)* → chaîne sur 8 280,63 ✅ | un vrai chiffre neuf |
| **S&P** | **7 666,60** présenté comme clôture du **03/09** | 🔴 **mon ancrage du 02/09, au centième** |

> ☠️ **Un chiffre que j'ai validé est, par construction, un VRAI chiffre. C'est
> donc le matériau le plus commode pour fabriquer un faux crédible.**
>
> **Mes ancrages sont à la fois ma défense et la matière première de ce qui
> m'attaque.** *Plus j'en accumule, plus je détecte — et plus il y a de vrais
> chiffres disponibles à redater.*

### ✅ RÈGLE — la coïncidence exacte est un SIGNAL, pas une confirmation

> **Quand un chiffre servi coïncide EXACTEMENT avec un de mes ancrages sous une
> date POSTÉRIEURE, ce n'est pas une corroboration : c'est le signal de
> réétiquetage le plus fort qui existe.**
>
> *Une clôture identique au centième à celle de la veille est déjà improbable.
> Identique à un ancrage que je détiens, elle est suspecte par construction.*

**Occurrences du motif** : ① mes clôtures du 21/08 servies « au 24/08 » ·
② Lilly **1 174,61 $** servi « au 31/08 » · ③ S&P **7 666,60** servi
« au 03/09 ».

⚠️ **Et le piège d'aujourd'hui est le pire de la famille** : *le 82,60 € de
Séché n'est pas revenu comme cours, il est revenu **habillé d'une variation**
(« 82,60 €, +0,61 % »), ce qui fabriquait un **82,10 € « calculé »**
d'apparence irréprochable.* **Seul l'héritage du rejet l'a arrêté — et cette
règle avait été écrite la veille, sur le motif exact qu'elle a attrapé.**

---

## ☠️ 07/09/2026 — LE RÉÉTIQUETAGE VERS LE **FUTUR**, et une cinquième famille

### ① Un faux daté de MERCREDI PROCHAIN

**Servi le 07/09** : *« Résultats Semestriels H1 2025 **(Publiés le 9 Septembre
2026)** »* — **la date exacte d'une publication que je surveille**, avec les
chiffres **réels** du S1 2025.

> **Le réétiquetage vers le PASSÉ est détecté depuis le 01/08. Le
> réétiquetage vers le FUTUR — un faux servi À L'AVANCE sur une échéance
> attendue — est inédit.**
>
> ✅ **Seule la COHÉRENCE INTERNE l'a arrêté** *(un S1 2025 ne se publie pas en
> septembre 2026)*. **Ni le bouclage, ni ma série, ni l'invariant d'émetteur
> ne pouvaient : les chiffres sont vrais et cohérents entre eux.**

> 🔴 **RÈGLE — LE TEST DE COLLISION AVANT TOUTE ÉCHÉANCE SURVEILLÉE** :
> *mémoriser les COMPARATIFS de l'année précédente **avant** l'événement. Si
> les chiffres servis comme « année N » égalent mes comparatifs « N−1 », c'est
> le faux — **pas un résultat décevant**.*
>
> ⚠️ **Et noter le sens du piège** : *un artefact peut me faire REJETER un
> dossier autant que l'accepter. **Les faux ne poussent pas tous à acheter.***

### ② CINQUIÈME FAMILLE — la COHÉRENCE RELATIONNELLE

**Le RATIO entre deux séries suivies séparément.**

| | Nasdaq ÷ S&P |
|---|---|
| Mes ancrages du 02/09 | **3,4197** |
| Servis au 04/09 | **3,4342** |
| Dérive | **+0,42 % sur deux séances** — plausible |

> **Un réétiquetage aveugle ne préserve pas un ratio inter-indices au
> millième.** *Si l'un des deux chiffres venait d'une autre séance, le ratio
> sauterait.*
>
> 🔑 **Son mérite unique : elle fonctionne quand je n'ai validé NI l'un NI
> l'autre des deux chiffres.** *C'est le seul contrôle qui produise de
> l'information sur **deux inconnues simultanées**.*
>
> **Elle ne promeut pas en ancrage — elle sort de la suspicion.** *Nouvel
> état disponible : « non ancré, non suspect ».*

### ③ Le canal a un TROISIÈME état — le synthétiseur seul

| Canal | 03/09 | **07/09** |
|---|---|---|
| Documentaire / émetteur / fils réglementés | 🔴 fermé | 🔴 **fermé, `curl` direct compris** |
| Cotation indices & grandes valeurs | 🟢 ouvert | 🟡 **synthétiseur uniquement** |
| Cotation petites valeurs | 🔴 contaminé | 🔴 contaminé |

> ☠️ **Quand le seul canal ouvert est un synthétiseur, il n'y a plus de source
> primaire : chaque fait arrive sans page consultable, donc SANS DATE
> VÉRIFIABLE À LA SOURCE.**
>
> **La famille ① (DATE) est DÉSARMÉE.** *Les familles ② (cohérence externe),
> ④ (interne) et ⑤ (relationnelle) portent tout le poids — elles seules ne
> dépendent d'aucune source.*
>
> **Mesure du jour : 3 pièges d'archive sur 3 dossiers instruits — 100 %.**

---

## 🛑 08/09/2026 — LE TEST DE DISPERSION : la première règle qui dit QUAND ARRÊTER

### Le constat — le canal ne sert plus un faux, il sert un ÉVENTAIL

**Quatre prix pour Séché dans une seule session, mutuellement incompatibles**
*(écart extrême +3,9 %)* : **79,50** *(dégénéré)* · **82,60** *(quarantaine)* ·
**81,10** *(double tueur)* · **79,50 re-servi sous une date postérieure**
*(coïncidence)*.

> 🔑 **Quand quatre prix incompatibles arrivent, l'information n'est pas
> « lequel est vrai » — c'est que LE CANAL NE PORTE PLUS DE PRIX DU TOUT.**

### ✅ LA RÈGLE

> **Si un canal sert, dans une même session, TROIS valeurs ou plus mutuellement
> incompatibles pour le même instrument : on cesse de chercher laquelle est
> vraie. On déclare le canal NON PORTEUR pour cet instrument, et on arrête d'y
> dépenser des requêtes.**

**Coût mesuré de son absence, le jour où elle a été écrite** : *6 requêtes
dépensées sur le cours de Séché pour 4 rejets ; **3 auraient suffi**. Les 3
perdues manquaient au terrain santé.*

### 🔬 Pourquoi c'est une famille NOUVELLE

| Mes règles antérieures | Celle-ci |
|---|---|
| répondent à **« ce chiffre est-il vrai ? »** | répond à **« dois-je continuer à demander ? »** |
| protègent contre l'**erreur** | protège contre le **GASPILLAGE** |

> ⚠️ **Et le gaspillage se paie sur un AUTRE terrain que celui où il a lieu.**
> *Les requêtes brûlées sur un canal mort ne manquent pas au dossier qu'on
> instruisait — elles manquent à celui qu'on n'a jamais ouvert.*

### 📐 Un recoupement inédit entre deux contrôles

**Le prix de 81,10 € a été tué DEUX FOIS, par deux chemins indépendants** :

> **a)** `81,10 ÷ 0,9988 = 81,20 €` de veille impliquée — **mais la même
> réponse annonce « previous close 65,30 € »**, soit 24 % d'écart.
> → **COHÉRENCE INTERNE** *(née le 03/09)*
>
> **b)** `81,10 ÷ 0,9878 = 82,10 €` de veille hebdomadaire impliquée —
> **exactement le chiffre en quarantaine**.
> → **HÉRITAGE DU REJET** *(né le 03/09)*

**Deux familles écrites le même jour, se recoupant pour la première fois cinq
jours plus tard.** *Un corpus de contrôles devient redondant avant de devenir
complet — et la redondance est un signe de santé, pas de gaspillage.*

---

## 🗓️ 10/09/2026 — LE CONTRÔLE DE CALENDRIER, et la VARIATION AUTO-CALCULÉE

### ① Une chaîne dont la validité dépend d'un JOUR FÉRIÉ

**Le S&P du 08/09 boucle sur l'ancrage du 04/09** *(−0,584 % → −0,58 % servi)*.
**Chaîner un mardi sur un vendredi serait normalement une faute** — ici c'est
licite : **le 07/09/2026 est le premier lundi de septembre, LABOR DAY, et Wall
Street était fermée.**

> ✅ **RÈGLE** : *avant de chaîner deux clôtures, vérifier que la veille
> calendaire est bien une **séance ouvrée SUR CETTE PLACE**. Un férié rend
> licite un chaînage autrement fautif — et le rend fautif ailleurs.*
>
> 🔑 **Contrôle croisé élégant** : *Paris A eu une séance le 07/09, New York
> non.* **Deux réponses indépendantes s'accordant sur une asymétrie de
> calendrier entre deux places — un réétiquetage n'invente pas ça.**

### ② LA VARIATION AUTO-CALCULÉE — un piège qui MIME le bouclage

**Sur Nike, le « −2,8 % » n'a pas été servi par la source : il a été calculé
par le synthétiseur à partir de ses deux propres chiffres.**

> ☠️ **Un bouclage sur une variation que le répondeur a lui-même déduite est
> aussi vide qu'un cas dégénéré — mais il ne se voit pas.**
> *Le cas dégénéré s'annonce (`variation = 0,00 %`). Celui-ci a l'air normal :
> la variation est simplement **dérivée des deux nombres qu'elle prétend
> relier**.*

> ✅ **RÈGLE** : *exiger que la variation soit **SERVIE PAR LA SOURCE**, pas
> déduite. Si clôture, veille et variation viennent du même paragraphe sans
> attribution distincte, le bouclage ne prouve rien.*

### ③ Le RATIO prouve la CO-SESSION, pas seulement la vraisemblance

*Le ratio Nasdaq ÷ S&P recalculé sur la paire du 04/09 reproduit **3,4342 au
millième** — **preuve indépendante que les deux chiffres étaient de la MÊME
séance**.* **Et son SIGNE suit la logique** *(le 09/09, le Nasdaq baisse plus,
donc le ratio recule — il recule)*.

> 🔑 **Un réétiquetage aveugle ne produit pas le bon signe par hasard.**

### ④ Le SENS du faux — troisième confirmation

**Les trois valeurs STM servies sont AU-DESSUS de mon ancrage** *(43,95 ·
44,94 · 46,64, jusqu'à +11 % du seuil)*.

> **Un faux ici ne pousse pas à ACHETER : il éloigne du seuil et ferait
> CLASSER le dossier.** *Après la bande STM du 26/08 et le faux Séché du
> 07/09, c'est la **troisième** fois qu'un artefact menace de me faire
> renoncer.* **Les faux ne poussent pas tous à acheter.**

---

# 11/09/2026 — Quatre acquis, dont une prédiction réfutée

## ① 🧪 LA PREMIÈRE PRÉDICTION SUR LE CANAL — et elle est FAUSSE

**Posée le 10/09** : *« le chiffre Lilly 1 149,36 $, rejeté comme cas dégénéré,
reviendra demain en VEILLE d'un calcul impeccable — c'est ce qu'a fait le
1 160,00 le 03/09. »* → ❌ **RÉFUTÉE. Aucun calcul ne s'appuie dessus.**

### 🔑 RÈGLE NOUVELLE — **le motif d'héritage dépend du FORMAT de réponse**

Le motif du 03/09 supposait un canal servant des **paires (clôture, variation)**
— seul format dans lequel un chiffre peut occuper la case « veille ».
Aujourd'hui le canal sert un **triplet intraday (bas, clôture, haut)** et
laisse le répondeur fabriquer les pourcentages.

> **Un chiffre en quarantaine ne peut pas revenir en veille d'un calcul si le
> canal a cessé de produire des calculs.**
>
> *La prédiction était juste sur le mécanisme et fausse sur sa PRÉMISSE.*
> **Avant de prédire le comportement d'un canal, vérifier que son FORMAT est
> stable — un motif observé sur un format ne se transporte pas sur un autre.**

⚠️ **Et la faiblesse était annoncée d'avance** : le motif venait d'**une seule
observation**. *Un motif tiré d'un cas est une anecdote.* **Le coût du test a
été nul — il se lisait dans les données déjà collectées pour le screening.**
**C'est le bon prix pour une hypothèse faible : ne pas la financer, la lire en
passant.**

## ② ⚠️ LE TRIPLET INTRADAY N'EST PAS CHAÎNABLE — donc pas validable

`1 121,07 ≤ 1 125,49 ≤ 1 139,50` : **cohérence interne parfaite.** Et pourtant
**1 125,49 n'est PAS promu ancrage.**

> **La cohérence interne est NÉCESSAIRE, jamais SUFFISANTE.** *Un triplet
> bas/clôture/haut se vérifie tout seul et ne se raccroche à rien : il ne
> touche aucune de mes séries validées.* **Un chiffre qui ne peut être chaîné
> à rien de connu reste non validé, aussi bien formé soit-il.**

🆕 **Et le piège de la variation auto-calculée était présent, en clair** : les
deux seuls pourcentages servis (`+0,4 % au-dessus du bas`, `−1,2 % sous le
haut`) sont **dérivés par le répondeur de ses propres chiffres**. **Bouclage
MIMÉ, valeur probante nulle.**

## ③ 🛑 L'OR — quatrième canal non porteur, et une violation de cohérence interne

Quatre valeurs pour le même jour **dans une seule réponse** (4 405,88 ·
4 365,50 · 4 374,110 · 4 316,76), écart extrême **0,93 %**. Et la réponse se
réfute elle-même : veille impliquée `4 405,88 ÷ 1,0018 = 4 397,96` **contre
4 316,76 annoncé comme veille dans le même paragraphe — 1,88 % d'écart**.

**→ DISPERSION : arrêt immédiat, zéro requête de plus.**

⚠️ **Piège de TYPE évité au passage** : mon ancrage 4 395,16 $ est un **relevé
intraday de 1h00 EDT**, pas une clôture. **Le chaîner à un « previous close »
aurait été une faute de type, pas de véracité** — et j'aurais conclu à un faux
là où il n'y avait qu'une comparaison illégitime.

🔴 **Quatre canaux non porteurs en quatre jours** (Séché · STM · Aubay · Or).
**Ce n'est pas une série de pannes, c'est un motif** : *la contamination frappe
exactement là où mes lignes sont le plus près d'un déclencheur.*

## ④ 🔑 ACHETABILITÉ — **le PALIER TARIFAIRE avant le TICKET**

Règle de doctrine, à appliquer **avant** toute instruction :

> **Le ticket unitaire ne décide de rien. C'est le palier tarifaire de la PLACE
> qui décide, et il est indifférent au prix de l'action.**

Démonstration : Mota-Engil à **4,67 €** était portée au référentiel comme *« le
meilleur ticket de l'univers »*. À Lisbonne, Fortuneo facture **0,20 % (min
20 €) + 30 € de courtage étranger**, avec un **minimum de 400 € par ordre
depuis le 06/08/2026** → **50 € de frais sur 400 €, soit 12,5 % à l'achat et
25 % sur l'aller-retour.** *Une action à 4,67 € et une action à 300 € y coûtent
exactement les mêmes 50 €.*

**Conséquence opératoire** : l'**ACHETABILITÉ ÉLIMINATOIRE** se teste désormais
sur la **PLACE**, avant même de regarder le titre. Euronext **Paris, Bruxelles,
Amsterdam** = meilleur tarif, pas de seuil. **Lisbonne = routée mais
économiquement fermée** pour une poche de 150-300 €/mois.

> 🔑 **Un obstacle levé vaut souvent mieux qu'un signal : le signal se périme,
> l'obstacle se garde.** *Cette réponse retire du référentiel la candidate que
> j'y avais classée n°1 — sans qu'une seule requête d'instruction lui ait été
> consacrée.*

## ⑤ ✅ Corroboration narrative non sollicitée — un contrôle gratuit de plus

En cherchant les clôtures du 10/09, un article de marché décrit la veille comme
*« après une chute de près de 2 % »*. **Mon ancrage du 09/09 était −1,94 %.**

> **Une corroboration de NATURE DIFFÉRENTE (narrative contre numérique),
> obtenue sans l'avoir demandée, est le contrôle le moins cher qui existe.**
> *À noter systématiquement : elle ne coûte rien et elle est, par
> construction, non fabriquée pour répondre à ma question.*

---

# 12/09/2026 — Trois règles neuves, dont une sixième espèce de panne

## ① 🆕 LE **CANAL VIDE** — sixième espèce de panne, et la plus flatteuse

**Constat** : sur le terrain smart money, trois requêtes ont rendu trois fois
un **numéro de document AMF** (Infotel `2026DD1137335`, Viridien `226C1504`,
Teleperformance `226C1503/05`) — **jamais un nom, jamais un SENS (achat ou
vente), jamais un montant.**

| Canal **DISPERSÉ** *(08/09)* | Canal **VIDE** *(12/09)* |
|---|---|
| sert **trop** de valeurs, incompatibles | en sert **zéro** |
| se trahit par le **désaccord** | **paraît coopératif** : il rend un objet RÉEL |
| danger : **retenir un faux** | danger : **croire qu'on progresse** |

> 🆕 **CRITÈRE D'ARRÊT, symétrique de celui du 08/09** : *trois requêtes qui
> rendent l'EXISTENCE d'un document sans jamais son CONTENU → **canal VIDE**,
> arrêt immédiat.*
>
> ⚠️ **Le vide est plus dangereux que le dispersé, précisément parce qu'il ne
> se trahit pas.** *Un numéro de document AMF est un objet réel : il donne le
> sentiment d'avoir avancé.* **Le dispersé ment ; le vide flatte.**

**Et le coût est réel** : 3 requêtes pour 0 fait — *des requêtes qui manquent
au terrain que je n'ai jamais ouvert.*

## ② 🆕 LE **BOUCLAGE INVERSÉ** — l'antidote exact de la variation auto-calculée

**Le 10/09** : la veille venait du répondeur → le bouclage était **vide**, il
MIMAIT un contrôle. **Le 12/09 sur Aubay** : la veille vient de **MA mémoire
persistante**, écrite au radar avant la session et **jamais servie au canal**.

| | 2026 servi | 2025 *(mon radar)* | Ratio | Taux publié |
|---|---|---|---|---|
| S1 | 351,8 M€ | 268,96 | +30,80 % | **+30,8 %** ✅ |
| T2 | 173,6 M€ | 132,82 | +30,70 % | **+30,7 %** ✅ |
| T1 *(par différence)* | 178,2 M€ | 136,14 | +30,89 % | — |

> **RÈGLE : quand la veille vient de ma mémoire et non de la réponse, le
> bouclage est IMMUNISÉ PAR CONSTRUCTION contre la variation auto-calculée.**
> *Le répondeur ne peut pas ajuster ses chiffres à un comparatif qu'il n'a
> jamais vu.*
>
> 🔑 **Un comparatif stocké vaut une source indépendante.** *Et il ne coûte
> rien — à condition d'avoir tenu le radar. C'est le rendement différé d'une
> écriture faite des semaines plus tôt sans savoir à quoi elle servirait.*

## ③ 🆕 UN ANCRAGE PEUT TUER UN CHIFFRE D'UN **AUTRE** INSTRUMENT

Le WTI servi à **101,19 $** portait **+8,77 % sur 24 h** → veille impliquée
**93,03 $**. Or mon fait validé du 10/09 est *« brut américain > 100 $
franchi »*. **Incompatible** — et le récit du jour dit REPLI, pas +8,77 %.

> **Le WTI n'est pas un instrument que je suis.** Mais j'avais un fait daté sur
> le brut américain, et il a suffi. **Mes ancrages forment un RÉSEAU, pas une
> collection de fiches indépendantes** — et le réseau est plus dense que la
> liste des choses que je surveille.

## ④ La règle du palier tarifaire a payé **le jour même**

Stockholm (Systemair, AddLife, Crafoord), Londres et l'AIM (Ashtead
Technology, Genuit, Elliott/LSEG) : **quatre candidates éliminées à coût nul,
avant tout kill-test.** *L'obstacle se garde ; le signal se périme.*

**Et l'asymétrie du terrain smart money est structurelle, pas conjoncturelle** :
> **Tout ce qui est atteignable est inachetable ; tout ce qui est achetable est
> inatteignable.** Les registres d'initiés nordiques et britanniques sont
> publics, indexés et scrapés en temps réel — et hors périmètre. Les
> déclarations AMF sont dans le périmètre — et enfermées dans des PDF BDIF non
> indexés.

## ⑤ Une « PROCHAINE VÉRIFICATION » nommée à l'avance ferme un dossier en UNE requête

**Rubis** : ouverte le 11/09 avec son test décisif écrit (*« cash-flow
opérationnel et variation du BFR »*), **classée négatif le 12/09 en une
requête** — cash-flow opérationnel **223 M€ contre 276 M€, −19 %**.

> 🔑 **C'est la leçon la plus transférable de la semaine.** *Un dossier laissé
> « à instruire » sans test nommé se rouvre tous les mois et se re-paye à
> chaque fois. Un dossier laissé « à instruire » AVEC son test nommé se ferme
> à la première occasion, au prix d'une requête.*

## ⑥ Rappel appliqué : la règle de la coïncidence exacte (04/09) exige une CONTRE-ÉPREUVE

Le S&P a bouclé à **0,00013 %** — une quasi-coïncidence, donc un signal
d'alarme. **Contre-épreuve** : une fabrication depuis mon ancrage aurait donné
`7 591,70 × 1,0086 = 7 656,99`, soit **0,01 de PLUS que le chiffre servi**.
*Le résidu d'arrondi plaide pour l'indépendance.* **Et surtout : ce n'est pas
le chiffre SERVI qui coïncide avec un ancrage, c'est la veille RECONSTRUITE —
ce qui est précisément l'objet du bouclage, pas un symptôme de réétiquetage.**

---

---

# 13/09/2026 — ⚠️ ENTRÉE ÉCRITE APRÈS COUP (le 16/09) — deux règles qui manquaient ici

> ☠️ **Défaut de tenue signalé par un agent le 16/09, et il est réel** : les
> règles ci-dessous ont été écrites le 13/09 **dans le journal du jour, pas
> dans ce fichier.** *Le journal raconte une journée ; ce fichier est la
> mémoire méthodologique persistante.* **Une règle qui ne vit que dans un
> journal daté est une règle que je ne relirai jamais.**
>
> 🔑 **C'est exactement la faute que le classement a commise deux fois en
> septembre** — la matière écrite au bon endroit au mauvais moment, ou au bon
> moment au mauvais endroit. *Correction de procédure : toute règle formulée
> un jour donné est recopiée ici LE JOUR MÊME, même si elle est déjà au
> journal.*

## ① SOMMER À 100 % N'EST PAS UNE PREUVE DE COUVERTURE

Le 06/09, cinq scénarios Séché sommaient à 100 % — **et l'issue réelle n'était
dans aucun.**

> **Cinq cases qui totalisent 100 % ne couvrent l'espace des possibles que si
> j'ai réussi à imaginer tout ce qui pouvait arriver** — ce qui est exactement
> l'hypothèse que l'échec réfute. **Une somme à 100 % est une contrainte
> d'ÉCRITURE, pas une preuve de COUVERTURE.**

## ② ÉNUMÉRER LES CAUSES AVANT LES ISSUES

*Je listais des issues et je leur attribuais des probabilités.* **Désormais :
lister d'abord les MÉCANISMES qui peuvent produire une issue, puis regarder
quelles issues partagent un mécanisme. Celles-là reçoivent une probabilité
CONJOINTE, assignée une seule fois.**

**Origine de la règle** : le 06/09, j'avais mis 13,5 % sur « pas de cours » et
5 % sur « comptes illisibles » — **deux risques qui passaient par le MÊME canal
cassé, chiffrés comme s'ils étaient indépendants.**

## ③ UNE CASE RÉSIDUELLE EXPLICITE, ≥ 5 % ET ≤ 25 %

Un scénario nommé **« autre chose, que je n'ai pas su imaginer »**.

> **C'est la seule façon de rendre un jeu exhaustif PAR CONSTRUCTION plutôt
> que par énumération.** *Et sa taille est une information : si je dois lui
> donner 20 %, c'est que je ne comprends pas le dossier — et je dois le dire
> plutôt que de fabriquer cinq cases pour masquer le trou.*
>
> ⚠️ **Plafond à 25 %** : *le résiduel ne doit pas devenir une décharge où je
> range ce que j'ai la flemme d'instruire.* **Au-delà, le dossier n'est pas
> prêt à être scénarisé, et c'est ça qu'il faut écrire.**

---

# 14/09/2026 — ⚠️ ENTRÉE ÉCRITE APRÈS COUP (le 16/09) — aucune règle neuve, et c'est la bonne réponse

**Le 14/09 n'a produit AUCUNE règle méthodologique nouvelle.** Ses acquis sont
des FAITS, et ils vivent au radar : le niveau du pétrole promu ancrage
(settlement WTI 100,05 $ au 11/09), la cause structurelle du choc pétrolier, et
la déclaration du canal FedWatch comme dispersé.

> 🔑 **Je l'écris explicitement plutôt que de laisser un trou dans la
> série.** *Un fichier de méthode qui saute deux jours ressemble à un fichier
> mal tenu ; il faut pouvoir distinguer « rien à dire ce jour-là » de « oublié
> de l'écrire ».* **Le 13/09 était le second cas. Le 14/09 est le premier.**

# 15/09/2026 — Quatre acquis, dont deux corrections contre moi

## ① 🆕 LE CONTRÔLE DES **SIGNES** DE RÉSIDUS — plus fort que leur taille

Trois bouclages du 14/09, contre-épreuve de coïncidence faite sur les trois.
Résidus : **+0,18 / −0,25 / +0,83**.

> **Une fabrication à partir de mes ancrages produirait un biais COHÉRENT** —
> le fabricant applique la même opération aux trois séries. **Trois signes
> indépendants sont la signature de trois arrondis indépendants, donc de trois
> chiffres réels.**
>
> 🔑 **Regarder les SIGNES d'une série de résidus, et pas seulement leur
> magnitude.** *Ça ne coûte rien et ça tranche là où la magnitude reste
> ambiguë.* **Ne s'applique qu'à une SÉRIE : un résidu isolé n'a pas de
> signe informatif.**

## ② ⚠️ LE SENS DU FAUX PEUT S'INVERSER SUR LE MÊME INSTRUMENT

**STM, 10/09** : trois faux, **tous AU-DESSUS** de mon ancrage — ils
éloignaient du seuil et menaçaient de me faire **classer** le dossier.
**STM, 14/09** : un −6,6 % non validé qui donnerait **~40,7 €, SOUS mon seuil
de 42,00 €** — il **rapproche** du seuil.

> 🔴 **C'est la configuration la plus dangereuse d'un canal contaminé : un
> chiffre non validé qui déclencherait un ACHAT.**
>
> *Un faux qui me fait renoncer coûte une occasion. Un faux qui me fait
> acheter coûte de l'argent* — **et il arrive déguisé en bonne nouvelle.**
>
> **RÈGLE : la vigilance doit être ASYMÉTRIQUE.** *Un chiffre non validé qui
> va dans le sens de mon envie mérite plus de méfiance, pas moins.*
> ⚠️ **Et ma propre heuristique de biais directionnel ne protège PAS ici** :
> elle a déjà échoué quatre fois en août (bande STM 43,x) en rejetant des
> données VRAIES. **La règle n'est pas « rejeter ce qui m'arrange », c'est
> « exiger le même bouclage, sans l'alléger parce que le chiffre plaît ».**

## ③ ☠️ AVANT DE DÉCLARER UN CANAL EN PANNE — vérifier que le document peut EXISTER

**Le CHMP n'était pas un canal vide.** La plénière **se termine le jeudi
17/09**, et les *meeting highlights* se publient **après sa clôture** —
invariant vérifié sur trois plénières 2026.

> ☠️ **Demander le contenu du 14-17/09 le 15/09 au matin, c'est demander un
> document qui ne peut pas exister.** **J'ai imputé au canal, trois jours de
> suite, ce qui était une faute de CALENDRIER dans MA question.**
>
> **Coût : 3 requêtes — et pire, une règle neuve (le canal vide, écrite le
> 12/09) appliquée à un cas qu'elle ne couvre pas.** *Une bonne règle mal
> appliquée finit par être discréditée par ses faux positifs : c'est le même
> danger que le faux contrôle du 25/08, sous une forme plus discrète.*
>
> 🆕 **RÈGLE** : **avant de déclarer un canal vide, dispersé ou non porteur,
> vérifier que le document demandé peut EXISTER à la date où on le demande.**
> *Un canal ne peut pas être vide d'un document qui n'est pas encore écrit.*

✅ **Et un blocage indéfini devient une échéance** : réouverture **le 18/09**,
une requête, sur une URL nommée.

## ④ 🔑 LE TEST DE COLLISION SAIT **INNOCENTER** — et c'est ce qui en fait un contrôle

**HiPay** sert un contenu **S1 2026 chiffré** alors que la société « publie le
16/09 » : **signature exacte du réétiquetage vers le futur.**

**Résolu par le TYPE, en une requête** : le **29/07 = le chiffre d'affaires**,
le **16/09 = les résultats** (EBITDA, marge). **Deux documents, pas un faux.**

> 🔑 **Un contrôle qui ne sait qu'accuser est une superstition.** *Celui-ci sait
> disculper — c'est ce qui le distingue d'un réflexe de méfiance.*
> **Et la distinction employée est exactement celle qui structure Aubay :
> un communiqué de CA n'est pas un communiqué de résultats.**

## ⑤ 🆕 ACHETABILITÉ — le TARIF et la LIQUIDITÉ sont DEUX obstacles, pas un

HiPay est sur **Euronext Growth Paris** : **la place est la bonne**, aucun
surcoût étranger. **Mais la liquidité d'une valeur de cette taille est un
obstacle distinct.**

> **Le palier tarifaire décide de ce que l'ordre COÛTE ; la liquidité décide
> de s'il PASSE, et à quel écart.** **Deux tests, pas un** — et tous deux
> **avant** l'instruction. *Le 11/09 j'ai découvert que le ticket ne décidait
> pas, que c'était le palier. Aujourd'hui je découvre que le palier ne décide
> pas tout non plus.*

## ⑥ 🆕 LIMITE DE PROTOCOLE — les six kill-tests présupposent un DOSSIER

Sur un canal vide, **T1, T3, T4, T5 et T6 sont inapplicables ; seul T2 mord.**
**T4 FORENSIC est structurellement désarmé : on ne peut pas nommer le chiffre
qui manque à un paquet qui n'existe pas.**

> *« Quel kill-test échoue ? » est une question MAL POSÉE sur un terrain
> stérile.* **La réponse n'est pas « T4 », c'est « il n'y a pas de paquet ».**
> ⚠️ **Forcer une réponse en nommant un test donnerait l'illusion d'avoir
> instruit ce qui n'a jamais existé** — et remplirait le journal de faux
> négatifs argumentés.

## ⑦ ☠️ Un chiffre rejeté ne revient pas parce que le monde s'est déplacé vers lui

Le WTI **101,19 $** avait été tué le 12/09 *(veille implicite 93,03 $ contre
102,48 $ réels)*. Le 15/09, le marché est effectivement **vers 101-102 $**.

> **Il n'est PAS réhabilité.** *Un chiffre se valide par sa CHAÎNE, pas par sa
> ressemblance avec la réalité du moment.* **Un faux qui devient vrai par
> accident reste un faux : sa provenance n'a pas changé, et c'est la
> provenance qui décide.**

---

# 17/09/2026 — Deux acquis, dont un faux contrôle que je m'étais fabriqué

## ① 🆕 LA SONDE NEUTRE — une requête qui sauve une séance

**Face à une série de refus d'accès, sonder un domaine HORS du terrain du
jour** *(Wikipédia, ou n'importe quel domaine générique)*.

| Résultat de la sonde | Diagnostic | Parade |
|---|---|---|
| **sonde neutre PASSE** | **allowlist sectorielle** | le terrain est mal choisi → **changer de domaine** |
| **sonde neutre BLOQUÉE** | **fermeture globale** | **aucun changement de terrain ne sauvera la séance → ARRÊTER** |

> ☠️ **Sans elle, on dépense le budget à essayer un septième puis un huitième
> émetteur, et on conclut « canal vide sur X » — c'est-à-dire la faute CHMP
> sous une autre forme : imputer à un CANAL ce qui est une propriété de MA
> CONNEXION.**
>
> **Coût : 1 requête. Ce qu'elle sauve : le reste du budget, et un faux
> diagnostic qui salirait des dossiers non lus.**

🆕 **Espèce de zéro à ajouter à la typologie** : **NON OUVERT PAR FERMETURE
TOTALE DE CANAL.** *Distinct de « chassé à zéro », « canal vide », « canal
dispersé », « canal non porteur ».*
> **Contre la contamination, un bouclage. Contre la fermeture, rien** — sinon
> une action extérieure. *Les deux pannes n'appellent pas la même réponse, et
> les confondre fait perdre des séances entières.*

## ② ☠️ LA RÉCONCILIATION ÉDITORIALE N'EST PAS DE L'INDÉPENDANCE

**Le 14/09, j'ai écrit qu'une date était « mono-source levée » parce qu'elle
était *« relayée par trois canaux »* — Option Finance, ABC Bourse, BFM Bourse.**

> 🔴 **Trois éditeurs qui relaient le MÊME communiqué émetteur ne sont pas
> trois sources : c'est UNE source relayée trois fois.**
> **La réconciliation éditoriale mesure la DIFFUSION, pas l'INDÉPENDANCE.**

**C'est un FAUX CONTRÔLE**, de la famille de celui retiré le 26/08 *(« un VWAP
identique sur quatre places est impossible »)* — et **le deuxième fabriqué sur
le même émetteur.**

> 🔑 **Et celui-ci est d'une espèce plus dangereuse.**
> *« Une donnée fausse coûte une donnée. Un contrôle faux coûte toutes les
> données qu'il rejettera. »* **Mais un contrôle faux PERMISSIF ne rejette
> rien : il fait ACCEPTER.** *Il ne se signale par aucun manque — il produit
> une fausse confiance, qui ne fait de bruit que le jour où elle se casse.*
>
> **RÈGLE : une source n'est INDÉPENDANTE que si elle peut CONTREDIRE.**
> *Trois relais d'un même communiqué ne peuvent pas se contredire : ils
> recopient.* **Compter des relais, c'est compter des exemplaires.**
>
> ✅ **La bonne corroboration reste celle qui est de NATURE différente** — un
> récit contre un chiffre, un ratio contre un niveau, un comparatif stocké
> contre une variation servie. *C'est ce qui a marché sur Nike le 13/09 : ce
> n'était pas le nombre de relais, c'était la STRUCTURE (quatre sortants,
> quatre entrants du même secteur).*

## ③ Rappel appliqué : sur un canal FERMÉ, l'absence n'est pas une information

**Le « 7,5 % » d'Aubay n'est pas réapparu aujourd'hui — et ça ne vaut pas
test.** *Aucun contenu n'a été servi : l'absence est mécanique, pas
informative.*

> **Un test de quarantaine ne compte que si le canal pouvait, en principe,
> servir le chiffre.** *Enregistrer « non réapparu » un jour de fermeture
> gonflerait artificiellement la confiance dans une quarantaine qui n'a rien
> eu à arrêter.*

## ④ Et une limite de protocole, étendue

Le 15/09 : *« les six kill-tests présupposent un DOSSIER »*.
**Aujourd'hui, la même limite s'applique au SCREENING** : les sept contrôles
de bouclage **présupposent un chiffre servi**.
> **Nommer un contrôle qui échoue faute de matière donne l'illusion d'avoir
> instruit.** *Le bon mot est « inapplicable », pas « échoué ».*

## ⑤ 🔧 CORRECTION DU MÊME JOUR — la sonde neutre se fait DANS LES DEUX SENS

Le matin du 17/09 j'ai conclu *« fermeture TOTALE d'egress »* sur une sonde
Wikipédia bloquée. **La sonde était bonne, la conclusion était trop large.**

> ☠️ **`api.github.com` répondait 200 pendant tout ce temps — je poussais mes
> commits à la seconde où j'écrivais « fermeture totale ».** *J'avais la
> contre-preuve sous la main et je ne l'ai pas regardée.*
>
> **Une sonde qui ÉCHOUE établit qu'un domaine est bloqué. Il faut une sonde
> qui RÉUSSIT pour établir l'ÉTENDUE.** *Une seule direction de test ne mesure
> jamais une frontière — elle en établit un côté.*
>
> 🆕 **RÈGLE CORRIGÉE** : sonder **un domaine attendu BLOQUÉ et un domaine
> attendu PASSANT**. *Sans le second, on confond « large » et « total », et on
> renonce à des canaux qui fonctionnent.*

### Et la panne était DOUBLE, avec deux remèdes différents

| Canal | Où il s'exécute | Panne | Remède |
|---|---|---|---|
| **WebSearch** | **côté Anthropic**, hors conteneur | indisponibilité passagère | **aucun — rétablie seule** |
| **WebFetch / curl** | **depuis le conteneur**, via le proxy | **allowlist d'egress** | **action d'administration** |

> 🔑 **Deux canaux tombés ensemble ne sont pas une panne, ce sont deux
> pannes.** *Les confondre m'a fait déclarer perdue une séance dont la moitié
> des moyens était récupérable en une requête.*
>
> ⚠️ **Et le coût a été réel** : une journée entière classée « zéro d'accès »,
> alors que le screening — qui tourne sur WebSearch — était redevenu possible.

### 🔴 Un 403 de politique ne se contourne pas

Le manuel du proxy : *« Do not retry or route around it — report the blocked
host. »*
> **Un 403 de politique n'est pas un obstacle technique à surmonter, c'est une
> décision d'administration.** *Chercher un miroir ou un relais tiers pour
> passer outre reviendrait à traiter une règle comme un bug.*

---

# 17/09/2026 (soir) — Quatre règles, dont deux nées d'un chiffre REFUSÉ

## ⑥ 🆕 LIRE LES VERBES — le détecteur le moins cher du corpus

**« attendue », « serait », « devrait », « vise », « repose sur »** →
**ANTICIPATION**.
**« s'établit », « ressort à », « atteint », « affiche »** → **RÉALISÉ**.

> **Zéro requête, et il a mordu DEUX FOIS EN DEUX JOURS** : Aubay *(« la marge
> devrait ressortir autour de 7,5 % »*, 23/07) et Virbac *(« l'amélioration
> **attendue** repose… », « **serait** complétée par… »*, 17/09).
>
> 🔑 **Le piège « anticipation servie comme réalisé » n'est pas propre à un
> émetteur : c'est une famille, et elle a une signature GRAMMATICALE.**
> *Chercher un mode verbal coûte moins qu'un bouclage et attrape une classe
> entière de faux.*

## ⑦ ☠️ UNE QUARANTAINE REFUSE UN **TYPE**, ELLE NE PRÉDIT PAS UNE FAUSSETÉ

**Le cas qui le démontre** : Aubay avait guidé vers **~7,5 %** en juillet et a
livré **7,5 %** le 16/09. **L'anticipation était exacte au dixième.**

> **La quarantaine avait raison quand même — mais pas pour la raison que j'ai
> revendiquée le 16/09 au soir.**
>
> ✅ **Ce qu'elle a évité** : résoudre un appel sur une phrase au futur,
> c'est-à-dire **avoir raison pour une mauvaise raison**.
> ❌ **Ce qu'elle n'a PAS évité** : le FAUX, qui était réel et seulement
> **prématuré de 24 heures**.
>
> ☠️ **J'avais écrit « j'ai évité un score erroné » là où il fallait écrire
> « j'ai évité de scorer sur une anticipation ». La seconde est vraie, la
> première me flattait.**
>
> **RÈGLE : ne JAMAIS lever une quarantaine au motif que le réalisé confirme
> l'anticipé.** *Ce qui lève une quarantaine, c'est un document du bon TYPE à
> la bonne DATE — indépendamment de l'égalité des valeurs.*

## ⑧ 🆕 UNE RECONSTRUCTION BÂTIE POUR SAUVER LES CHIFFRES N'EST PAS UNE VALIDATION

Sur le WTI, deux paquets s'entretuaient *(le 16/09 exigeait 105,82 $ au 15/09 ;
le 15/09 donnait 101,39 $ — 4,43 $ d'écart)*. **Une reconstruction à UN seul
réétiquetage expliquait tout, bouclait exactement sur mon ancrage du 11/09 et
collait au récit du pipeline saoudien.**

> 🛑 **Refusée.** *C'est le biais de possession appliqué non plus à un chiffre
> mais à un PAQUET.*
>
> **RÈGLE : quand la seule lecture qui rend mes données cohérentes est une
> lecture que j'ai dû INVENTER, le blanc est la bonne réponse.**
> *Une hypothèse construite pour rendre les données compatibles ne les valide
> pas — elle mesure mon ingéniosité, pas leur véracité.*

## ⑨ 🆕 RÉFLEXE DE PREMIÈRE ÉTAPE — la question de l'heure, avant toute requête

**Trois fois la même faute en une semaine** : CHMP *(15/09)*, Aubay *(15/09 au
soir)*, Robertet *(17/09)*. **ACTIA épargnée en dépensant zéro requête.**

> **AVANT toute requête sur un émetteur** : **« ce document paraît-il avant ou
> après clôture, et suis-je après ce moment ? »**
>
> *Les publications françaises tombent massivement à **18h00**.* **Interroger
> le matin du jour J revient à interroger la veille** — et l'absence constatée
> n'est alors pas une information sur le canal, c'est une information sur ma
> montre.

## ⑩ ✅ Le contrôle du ratio ne fait pas que valider — il OBJECTE

Le 16/09, le ratio Nasdaq/S&P a **bouclé** ✅ *et* **produit la principale
objection à ma propre prédiction** : le Nasdaq a surperformé un jour de
décision hawkish, l'inverse de la réaction de manuel.

> **Un contrôle qui ne sait que confirmer est une superstition.** *Celui-ci a
> confirmé la co-session ET contredit la thèse dans le même calcul.* **C'est
> ce qui en fait un instrument.**

## ⑪ ✅ Et l'illustration POSITIVE de la règle d'indépendance écrite le matin

**Virbac** *(+7,4 % à change constant → +4,0 % publié)* et **Robertet**
*(+4,9 % → −0,7 %)* subissent le **même vent contraire de change** au S1 2026,
**chacun sur son propre document, deux émetteurs sans lien.**

> 🔑 **Deux émetteurs indépendants qui POURRAIENT se contredire et ne se
> contredisent pas : c'est de la vraie corroboration.** *À opposer terme à
> terme aux cinq relais d'un même communiqué Aubay — qui, eux, ne peuvent pas
> se contredire.* **La règle du matin trouve son cas positif le soir même.**

---

# 18/09/2026 — Trois règles, dont un faux contrôle de l'espèce SYMÉTRIQUE

## ⑫ ☠️ LE CONTRÔLE FAUX **RESTRICTIF** — le symétrique du 17/09, et le plus flatteur

**Hier j'ai écrit** : *« les publications françaises tombent massivement à
18h00 — interroger le matin du jour J revient à interroger la veille. »*
**ACTIA publie à 07:00**, prouvé par **deux horodatages antérieurs** *(27/03 à
07:00, 20/05 à 07:00)*. En regard : **Virbac 17:45, Robertet 18:15.**

| | Effet | Signal émis |
|---|---|---|
| **Faux contrôle PERMISSIF** *(17/09 : « trois relais = trois sources »)* | fait **ACCEPTER** | aucun — produit une fausse confiance |
| **Faux contrôle RESTRICTIF** *(18/09 : « les Français publient à 18h »)* | fait **RENONCER** | aucun — **et il ressemble à de la discipline** |

> ☠️ **Les deux sont silencieux. Le second est en plus AUTO-FLATTEUR** : *un
> blanc produit par un contrôle trop sévère se lit comme de la rigueur.*
> **J'ai failli déclarer introuvable un document déjà servi — et j'en aurais
> tiré un motif de satisfaction.**
>
> 🆕 **RÈGLE : l'heure de publication est un invariant d'ÉMETTEUR, pas de
> PLACE.** *Elle se lit gratuitement sur les horodatages des deux communiqués
> précédents, présents dans n'importe quel listing.* **Interroger l'horloge de
> l'émetteur, pas celle du pays.**

## ⑬ 🆕 UN MAJORANT SUR UNE PÉRIODE LARGE CLÔT UN TEST NOMMÉ SUR UNE PÉRIODE ÉTROITE

Test nommé : *les prises de commandes du **S1 2025** attribuables au Big Event
Rental d'EVS.* **Non servi. Mais l'ANNÉE ENTIÈRE l'est : 14,8 M€** — **plus
petit que le recul du seul semestre (18,7 M€). Il tranche a fortiori.**

> **Quand un chiffre nommé n'est pas servi, demander si un agrégat ENGLOBANT
> suffirait à décider.** *Souvent il est plus facile à obtenir, et une borne
> qui tranche vaut la mesure exacte.*
>
> ✅ **Et le même jour, symétriquement** : X-FAB refuse de chiffrer Erfurt →
> **borne INFÉRIEURE calculée (> 26,5 M$/trimestre, > 106 M$ annualisés).**
> **Deux dossiers, deux bornes, deux verdicts — sans jamais obtenir le nombre
> demandé.**

## ⑭ 🆕 L'AGRÉGAT FLATTEUR EST CELUI QUI REÇOIT LA GRANULARITÉ

**ACTIA publie l'EBITDA PAR DIVISION et le résultat opérationnel au SEUL
niveau GROUPE.** *Mobility affiche une marge d'EBITDA de 5,2 % contre 3,2 % —
mais au niveau groupe, les amortissements consomment **78 % de l'EBITDA**.*

> **RÈGLE : quand un émetteur détaille un agrégat et pas l'autre, regarder
> lequel des deux le flatte.** *La granularité n'est pas neutre : c'est un
> choix éditorial, et il a un sens.*
> 🛑 **Aucune clé d'allocation n'étant servie, la marge opérationnelle de
> Mobility n'a PAS été calculée.** *Le non-clos du test EST le résultat.*

## ⑮ ✅ LA PAIRE AUBAY / VIRBAC — la règle ⑦ a désormais son cas SYMÉTRIQUE

| | Anticipation en quarantaine | Réalisé | Verdict |
|---|---|---|---|
| **Aubay** *(16/09)* | ~7,5 % | **7,5 %** | **exacte au dixième** |
| **Virbac** *(17/09)* | 19,3 % | **18,8 %** | **fausse de 0,5 pt** |

> 🔑 **Deux cas, deux issues opposées, en 48 heures.** *La règle « une
> quarantaine refuse un TYPE et ne prédit rien » n'était appuyée que sur le cas
> où elle jouait CONTRE moi — elle pouvait passer pour une rationalisation
> d'échec.* **Elle a maintenant son cas symétrique. Elle est établie.**

🆕 **Et Virbac ajoute une signature** : *le comparatif (18,3 %) était EXACT, et
c'est le chiffre de TÊTE qui était gonflé — l'amélioration surestimée d'un
facteur 2.*
> **On ne truque pas la RÉFÉRENCE, on truque le PROGRÈS.** *Un comparatif faux
> se repère par bouclage ; un progrès faux se raconte.* **Vérifier l'écart, pas
> seulement les niveaux.**

## ⑯ 🔑 « UN ÉMETTEUR QUI PROMET D'AMÉLIORER DOCUMENTE L'ÉTAT PRÉSENT »

Robertet *« réaffirme son engagement en faveur d'une meilleure liquidité et de
l'animation de son titre »*.
> **Une promesse d'amélioration est un aveu.** *Même famille que le
> « résilient » de Riber et que les « effets ponctuels favorables » de Robertet
> 2025 — qui, eux, ne se sont pas reconduits, et ça s'est vu en euros
> (EBITDA −6 % sur un CA en hausse).*

## ⑰ 🆕 UN ÉVÉNEMENT MESURÉ SUR DEUX SÉANCES N'EST PAS DEUX ÉVÉNEMENTS

Le Nasdaq a surperformé le 16/09 **et** le 17/09, tous deux autour du FOMC.
*Tentant d'y voir deux observations convergentes, donc un régime.*
> **Non : le 16 et le 17 ENCADRENT un seul FOMC**, et le 17 est explicitement
> décrit comme un rebond post-Fed. **L'objection au ratio reste OUVERTE ; elle
> n'est pas promue en lecture de régime.**

---

# 21/09/2026 — Le jour où un contrôle a accusé MES propres chiffres

## ⑱ 🔑 UN CONTRÔLE QUI NE PEUT ACCUSER QUE L'EXTÉRIEUR N'EST PAS UNE VÉRIFICATION

**Deux contrôles indépendants — le bouclage ET le ratio — ont accusé la MÊME
jambe (S&P), dans le MÊME sens, au MÊME ordre de grandeur (~3,3 pts).**

**Et la conclusion possible n'est pas celle que j'attendais** : *si le Nasdaq
et le paquet du 18/09 sont bons, c'est **mon ancrage du 17/09 (7 640,82)** qui
est faux de ~3 points — et le ratio-ancrage 3,4575 avec lui.*

> 🔑 **C'est la première fois qu'un de mes contrôles met en cause un de mes
> PROPRES ancrages validés plutôt qu'un chiffre servi.**
> **Un système qui ne peut accuser que l'extérieur n'est pas un système de
> vérification, c'est une défense.** *Et une défense finit toujours par
> protéger une erreur.*
>
> ⚖️ **Règle : ne pas trancher tant qu'un seul chiffre peut le faire.** *La
> paire (ancrage ; ratio) est marquée **CONDITIONNELLE à sa jambe S&P**, et
> un test nommé la ferme en une requête.*

## ⑲ ☠️ UNE HYPOTHÈSE PEUT SE RÉFUTER SUR LA DONNÉE QU'ELLE RÉCLAMAIT

**Hypothèse posée** : *« le résidu S&P vient de l'arrondi à l'unité — le
précédent du CAC du 16/09 le montre. »*

| | Arrondi | Décimale | Effet |
|---|---|---|---|
| **CAC 16/09** | 0,0069 % | **0,0018 %** | ✅ divisé par 3 |
| **S&P 18/09** | −2,81 | **−3,06** | 🔴 **AGGRAVÉ** |

> **Le résidu GRANDIT quand la précision augmente. L'arrondi n'était pas la
> cause.**
> 🔑 **Demander plus de décimales était la BONNE question, et la réponse est
> NON.** *C'est la forme la plus propre qu'une réfutation puisse prendre : se
> casser sur exactement la donnée qu'on avait réclamée.*
>
> ⚠️ **Le piège évité** : *un précédent qui a marché une fois n'est pas un
> mécanisme.* **Le remède d'hier n'est pas le remède d'aujourd'hui.**

## ⑳ 🆕 LA GRANULARITÉ SÉLECTIVE — pire que l'agrégat flatteur

Le 18/09 j'écrivais *(règle ⑭)* : **« l'agrégat flatteur est celui qui reçoit
la granularité »** *(ACTIA publie l'EBITDA par division, le résultat
opérationnel au seul niveau groupe)*.

**EVS en donne une version plus grave** : elle **CHIFFRE** le Big Event Rental
*(14,8 M€ sur 2025)* et **REFUSE de chiffrer** le Moyen-Orient — **alors que
c'est le Moyen-Orient qui porte toute la charge de la preuve.**

> ☠️ **La composante VÉRIFIABLE est publiée ; celle dont dépend la
> démonstration ne l'est pas.** **Ce n'est pas une omission, c'est une
> SÉLECTION.**
>
> **RÈGLE : quand un émetteur chiffre une partie de son explication et pas
> l'autre, regarder laquelle des deux SUFFIRAIT à trancher.** *Si c'est
> précisément celle qui manque, l'explication entière est non démontrable —
> et « non démontrable » n'est pas « réfutée », mais c'est inutilisable de la
> même façon.*

## ㉑ 🔑 Deux dossiers sans lien, une seule signature

**EVS et X-FAB** : *un agrégat ajusté construit par l'émetteur, reposant sur une
composante qu'il refuse de chiffrer* — **Moyen-Orient / Erfurt**.
**Deux compteurs de trois séances, deux clôtures négatives, même mécanisme.**

> ⚠️ **Et ce sont les DEUX seules candidates arrivées jusqu'au compteur.**
> *La règle des 3 séances n'a pas filtré du bruit : elle a filtré **tout ce que
> j'avais**.*
> 🔑 **C'est une information sur mon gisement, pas seulement sur ces deux
> sociétés** : *les dossiers qui survivent à ma détection sont précisément ceux
> qui reposent sur un ajustement non vérifiable.* **Si mon crible ne retient
> que ça, c'est le crible qu'il faut examiner.**

## ㉒ ✅ Un anti-signal servi, identifié, écarté — avec trois motifs

Papier servi : *« AI frenzy — ces valeurs européennes ont gagné plus de 100 %
cette année »*.
**① Daté du 21/05** *(quatre mois — mort au sens de T2)* · **② les deux
véhicules sont Helsinki et Francfort** *(hors périmètre)* · **③ « déjà +100 %,
dans la presse généraliste » est la définition du TROP TARD.**
> **Le bon signal est dans la presse spécialisée AVANT la généraliste.**

🎁 **Invariant d'émetteur relevé à coût nul** : **Neurones publie APRÈS
CLÔTURE.** *Série en cours : ACTIA 07:00 (×3) · Virbac 17:45 · Robertet 18:15 ·
Neurones après clôture.*

---

## ㉓ LE COMPARATIF DOIT ÊTRE CELUI DE L'ÉMETTEUR *(22/09/2026)*

**Quand un émetteur publie « X contre Y », Y est la SEULE base de comparaison
admissible.** Substituer un Y tiré de ma mémoire, d'une autre période ou d'un autre
périmètre transforme un fait en verdict — **et le verdict devient le mien, pas celui
des chiffres.** Comparatif absent → **le blanc est la réponse**, on n'en fabrique pas un.

**Naissance de la règle :** Aubay, marge S1 « 7,5 % vs 9,1 % ». L'émetteur écrivait
**7,5 % contre 7,2 %**. Le 9,1 % était un ordre de grandeur **annuel** opposé à un
**semestre** — faute de dénominateur. **J'en avais tiré un avertissement sur résultats
là où la marge montait.**

> ⚠️ **Deux règles antérieures auraient dû suffire, et n'ont pas mordu :**
> - **Bouclage inversé** — un comparatif tiré de ma mémoire est *immunisé par
>   construction* : il sert de référence, donc rien ne peut le contredire.
> - **Granularité sélective** — je l'avais forgée contre les émetteurs. **Je l'ai
>   subie :** j'ai vérifié le terme vrai (7,5 %) et jamais celui qui portait la charge
>   de la preuve (9,1 %).
>
> 🎯 **Une règle écrite mais non déclenchée ne protège de rien.** ㉓ existe pour
> transformer deux principes passifs en **un geste obligatoire : citer littéralement
> le comparatif de l'émetteur avant tout verdict.**

## ㉔ UN DÉCLENCHEUR TOUJOURS SATISFAIT N'EST PAS UN DÉCLENCHEUR *(22/09/2026)*

**Un seuil vrai en permanence ne discrimine rien : c'est un décor.** Il donne
l'apparence d'une surveillance active là où aucune condition de déclenchement réelle
n'existe.

> **Test de validité, à passer à l'écriture ET en revue : le seuil était-il FAUX le
> jour où il a été posé ?** Si non, il n'encode pas une décision — il encode une
> illusion de vigilance, et il doit être réécrit ou retiré.

**Naissance de la règle :** Séché, déclencheur « clôture ≤ 90 € ». Trois relevés
indépendants au 22/09 *(78,80 / 81,10 / 82,60 €)* et les relevés d'août *(79-84 €)*
sont **dispersés sur la décimale mais unanimes sur la zone**. *Application du majorant :*
**toutes les valeurs candidates répondent OUI à « ≤ 90 € ? », donc la dispersion
n'affecte pas cette question.** Le seuil était satisfait **sans interruption depuis
~7 semaines** — et n'a jamais rien déclenché.

**Conséquence : Séché sort en PASSE, motif « déclencheur non discriminant » —
et non « faute d'accès au prix ».** *Le motif prévu accusait le canal ; le vrai défaut
était de conception, et il était de moi.*

---

## ㉕ AVANT DE DÉCLARER UN CANAL DISPERSÉ, TESTER LE DÉCALAGE D'UNE SÉANCE *(23/09/2026)*

**Deux valeurs « incompatibles » pour une même séance sont très souvent UNE valeur de
cette séance et UNE valeur de la veille.** Test : *l'une boucle-t-elle sur l'autre par
la variation servie ?* Si oui, **ce n'est pas de la dispersion, c'est une série
décalée — et on récupère DEUX ancrages datés au lieu d'en perdre deux.**

**Naissance :** le 22/09 j'avais jeté le CAC entier *(8 139 vs 8 140,34 pour le 21/09)*.
Le 23/09, deux valeurs à nouveau pour le 22/09 : `8 138,94 × 1,0020 = 8 155,22`, et
**8 154,91 tombe dans la bande d'arrondi**. → **8 138,94 = clôture du 21/09**,
**8 154,91 = clôture du 22/09**. *Rétroactivement, le 8 139 était juste et le 8 140,34
faux.* **J'avais jeté la bonne donnée avec la mauvaise.**

> ⚠️ **Ce que ça dit de la règle de dispersion :** elle protège de l'erreur **en
> détruisant aussi de la vérité**, et ce coût était invisible — *un blanc ne proteste
> pas.* Elle reste valide **quand le bouclage échoue**. Elle devient destructrice
> quand on l'applique sans avoir tenté ce test.

**Variante purement arithmétique, à ne pas confondre avec une dispersion :** le Nasdaq
servi à « +0,4 % » et « +0,5 % » — `27 244 ÷ 27 122,09 = +0,4495 %`. **Deux arrondis
d'un même nombre de part et d'autre de la bascule ne sont pas une contradiction.**

## ㉖ UNE SOURCE DISQUALIFIÉE SUR LA FORME SE RÉHABILITE PAR UN BOUCLAGE **TIERS**, JAMAIS SUR ELLE-MÊME *(23/09/2026)*

**Avant de compter un bouclage comme une confirmation : QUI a fourni l'AUTRE jambe ?**
Même émetteur des deux côtés → **le test ne vaut rien, quelle que soit la précision du
résultat.**

> 🔑 **Un bouclage n'est une preuve que s'il POUVAIT échouer.**

**Naissance :** `ad-hoc-news.de` est disqualifié sur la forme *(agrégat auto-généré,
sans auteur nommé — règle 6)*. Pourtant :
- **STM** : sa valeur du 21/09 est confirmée le 22/09 par une **page de cotation** → bouclage **tiers** ✅
- **Eli Lilly** : son implicite tombe sur un ancrage venu d'**un autre relais** → **tiers** ✅
- **Nike** : boucle au centime… **sur son propre chiffre de la veille** → 🔴 **auto-référentiel**, confiance dégradée

**Ce départage réhabilite la source par TEST et non par signature** : deux
transcriptions exactes vérifiées de l'extérieur. **La disqualification de forme reste
le bon réglage par défaut** — elle interdit d'utiliser la source SEULE ; elle
n'autorise pas à jeter un de ses chiffres qui boucle sur un ancrage indépendant.

> ☠️ **C'est le bouclage inversé dans sa forme la plus discrète : celle qui RÉUSSIT.**
> Un contrôle qui réussit trop bien doit être suspecté d'être circulaire.

---

## ㉔-bis AVENANT — AUDITER UN DÉCLENCHEUR **COMPOSÉ**, C'EST TESTER LA CONJONCTION *(24/09/2026)*

**Né d'une mauvaise application de ㉔, deux jours après l'avoir écrite.**

Le 22/09 j'ai déclaré le déclencheur Séché *« un décor, satisfait sans interruption
depuis 7 semaines »*. **Le contrat était : « une CLÔTURE DATÉE ≤ 90 € ».** Deux termes.
**Je n'ai testé que le second.**

> **Un terme de VÉRIFICATION — « daté », « bouclé », « confirmé par un tiers » — n'est
> pas une formalité administrative : c'est toute la protection du seuil.** Un
> déclencheur dont le terme de mesure ne passe jamais n'est pas « toujours vrai » :
> il est **toujours faux**, et il fait son travail.

**㉔ reste valide** *(un seuil doit être faux le jour où on l'écrit — celui de Séché
l'était)*. **C'est l'application qui a échoué.**

### ☠️ Le mécanisme réel : QUAND UN ÉCHEC DEVIENT UNE DÉCOUVERTE
Deux lectures de la même situation étaient disponibles :
| Lecture | Ce qu'elle dit de moi |
|---|---|
| *« mon canal est cassé pour la 5ᵉ fois »* | échec d'instrumentation — ingrat, répétitif |
| *« j'ai trouvé un défaut de conception profond »* | découverte — valorisante, numérotable |

**J'ai pris la seconde et j'en ai fait une règle.** Et mon argument du majorant
s'appuyait sur des valeurs **en quarantaine** — *or une valeur mise en quarantaine
l'est parce que sa GRANDEUR est douteuse : elle ne peut donc borner rien du tout.*

> 🚨 **SIGNAL D'ALERTE À GARDER : quand un échec se transforme en découverte
> méthodologique, vérifier d'abord que l'échec n'était pas simplement un échec.**
> *C'est le faux contrôle RESTRICTIF — il fait renoncer, il est silencieux, il est
> flatteur.* **Même espèce que la célébration fausse du 16/09.**

### Et la variante PERMISSIVE s'est présentée le même jour, sur C013
Un arrêté daté, réel, **favorable à ma thèse** et qui **améliorerait mon Brier** — mais
portant sur un **autre objet** *(exonération fiscale vs encadrement de l'épandage)*.
**Refusé.** *Les deux espèces de faux contrôle se sont présentées dans la même
journée, et elles se ressemblent : toutes deux offrent une issue confortable.*

---

## ㉗ LE CANAL HUMAIN — TANGUY A UN TERMINAL QUI MARCHE, ET JE NE L'AI JAMAIS UTILISÉ *(24/09/2026)*

**Constat, écrit le jour où Séché meurt d'un défaut d'accès au prix :**

> **Séché est sortie du classement après ~7 semaines sans cours exploitable.
> Pendant ces 7 semaines, Tanguy disposait d'un compte Fortuneo affichant en
> permanence une page de cotation Séché. Je ne lui ai pas demandé UNE fois.**

*La page existe, je l'ai même vue passer dans mes résultats de recherche :
`bourse.fortuneo.fr/actions/cours-seche-environnem-SCHP-FR0000039109-23`. Elle m'est
inaccessible. Elle ne l'est pas pour lui.*

### La faute n'est pas d'avoir un canal cassé — c'est de ne pas avoir vu le canal ouvert
J'avais **déjà écrit le principe** le 18/09, après m'être trompé deux fois sur des
instruments de mémoire : *« sur ce qu'il peut voir, son écran vaut mieux que ma
mémoire. »* **Je l'ai appliqué aux INSTRUMENTS et jamais aux PRIX.** *Une règle
énoncée dans un cas particulier ne se généralise pas toute seule.*

> 📌 **RÈGLE : quand une donnée m'est structurellement inaccessible et que Tanguy peut
> l'afficher en dix secondes, LA DEMANDER EST UN CANAL — pas un aveu d'échec, pas un
> dérangement.**
>
> **Le coût réel de ne pas demander vient d'être payé** : un dossier instruit pendant
> sept semaines, sorti sans conclusion, alors que la donnée manquante était à un
> message de distance. **C'est plus cher que n'importe quelle question.**

**Condition d'emploi** : ne demander que ce qu'il peut voir sans effort *(une page de
cotation de son courtier, un écran d'ordre, une de ses positions)* — **jamais** une
recherche, une lecture de document ou un calcul. *Le canal humain sert à LIRE un
écran, pas à faire mon travail.*

⚠️ **Et une donnée servie par Tanguy reste une donnée à dater** : « le cours affiché
maintenant » est un instantané, pas une clôture. **Lui demander explicitement la
CLÔTURE et sa DATE**, sinon je reproduis le piège de l'instantané gelé avec une source
de plus.
