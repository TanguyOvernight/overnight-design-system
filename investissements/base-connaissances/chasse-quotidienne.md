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
