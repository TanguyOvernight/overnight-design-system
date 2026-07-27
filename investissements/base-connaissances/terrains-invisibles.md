# Terrains de chasse invisibles — doctrine de détection hors-radar

Créé le 2026-07-27. Arsenal du Chasseur (`.claude/agents/chasseur-pepites.md`) :
comment trouver des marchés, niches et sociétés cotées qu'un particulier ne
croiserait JAMAIS en lisant la presse. Complète la rotation de
`chasse-quotidienne.md` — ne la remplace pas. Chaque terrain : pourquoi
l'inefficience PERSISTE / comment chasser (requêtes + sources) / achetabilité
pour Tanguy (PEA Fortuneo, CTO eToro) / drapeaux.

## Règles transversales (avant toute chasse invisible)

- **Achetabilité d'abord** : un signal inachetable est une note de radar, pas
  un signal. PEA = actions siège UE/EEE + ETF UCITS éligibles ; la place doit
  être ACCESSIBLE chez Fortuneo (Euronext oui ; Stockholm/Milan/Xetra : à
  vérifier au cas par cas dans l'interface — l'éligibilité PEA ne garantit pas
  l'accès courtier, le dire explicitement dans le rapport). eToro = US + grandes
  places (LSE, quelques UE) — vérifier que le ticker y existe.
- **Liquidité** : capi < 100 M€ = drapeau systématique au rapport ; < 50 M€ =
  quasi-inexploitable pour un ordre régulier (spread + carnet). Toujours donner
  capi + volume quotidien approximatif (source de cotation vérifiée, T1).
- **L'inefficience doit avoir une CAUSE nommée** (pas d'analystes, pas d'indice,
  vendeur forcé, complexité, barrière linguistique). Sans cause → ce n'est pas
  une inefficience, c'est un prix mérité.
- Ces terrains produisent des CANDIDATES STRUCTURELLES (à thèse lente), pas des
  signaux datés : elles passent quand même les 6 kill-tests et le pipeline
  Avocat/Arbitre, avec T2 (nouveauté) adapté — la « nouveauté » est alors la
  non-couverture démontrée, pas un fait daté.

## Terrain 1 — Hidden champions / monopoles de niche

Leaders mondiaux (n°1-3) de micro-marchés critiques : TIC (testing-inspection-
certification), capteurs, chimie de spécialité, équipement d'UN process
industriel. Littérature : Hermann Simon (« Hidden Champions », critères : < 4-5
Md$ de CA, leader mondial de sa niche, notoriété publique quasi nulle).
- **Pourquoi ça persiste** : produit B2B invisible du grand public, niche trop
  petite pour la recherche sell-side, communication volontairement discrète.
  Le TIC illustre le modèle : oligopole SGS/Bureau Veritas/Intertek (~20 % d'un
  marché ~250 Md€) + myriade de labos de niche — la réputation EST l'actif,
  moat quasi impossible à répliquer.
- **Comment chasser** : partir du PROBLÈME, pas de la société. Requêtes types :
  « who makes [composant/instrument critique] market leader », « [process
  industriel] equipment sole supplier listed company », « hidden champion
  [pays/secteur] Weltmarktführer börsennotiert » (l'allemand débloque le
  Mittelstand coté). Screener : Stockopedia a documenté un screen « hidden
  champions Europe » (qualité+momentum, leader de niche) ; sinon filtre
  qualité (marge op > 15 %, ROIC élevé, part de marché mondiale citée dans
  l'URD/rapport annuel). Sources : rapports annuels (section « position
  concurrentielle »), Aventis Advisors (guide TIC), moatsandmarkets.com,
  lettres Marcellus « Little Champs » (méthode Simon appliquée).
- **Achetabilité** : excellente en Europe — beaucoup sont français/allemands/
  suisses (PEA si UE/EEE ; Suisse = hors PEA → CTO ou renoncer). TIC : Bureau
  Veritas (Paris, PEA), SGS (Zurich, hors PEA), Intertek (Londres, hors PEA).
- **Drapeaux** : niche = dépendance à un seul marché final (T5) ; valorisation
  souvent déjà « qualité » (T1) ; small caps allemandes/suisses parfois
  illiquides.

## Terrain 2 — Cartographie de chaîne de valeur (macro → BOM → goulet → pure play)

Méthode : tendance macro → nomenclature physique (bill of materials, étapes de
process) → où est la CONTRAINTE de capacité → qui est le pure play coté le
moins couru. C'est la généralisation du « 2e dérivé des capex » déjà dans la
charte du Chasseur.
- **Pourquoi ça persiste** : le consensus s'arrête au 1er dérivé (le fournisseur
  évident) ; la BOM complète exige un travail d'ingénieur que peu d'analystes
  font. Praticiens qui documentent : Convequity (« AI Value Chain Bottlenecks »,
  cartographie pricing power maillon par maillon), SemiAnalysis (semis),
  lettres de fonds spécialisées, substacks « picks-and-shovels/materials
  bottleneck ».
- **Comment chasser** : (1) « [technologie] bill of materials cost breakdown
  teardown » ; (2) « [composant identifié] capacity constraint lead time
  supplier » ; (3) « [maillon] pure play listed company market share ». Le
  signal = maillon où la demande explose, l'offre est contrainte (délais qui
  s'allongent, prix qui montent — faits datés) et l'exposition cotée est PURE
  (>50 % du CA sur le maillon, sinon c'est dilué).
- **Achetabilité** : variable — souvent des équipementiers/chimistes UE (PEA)
  ou US/Asie (eToro pour US ; Japon/Taïwan souvent inaccessibles → le dire,
  chercher l'équivalent UE ou l'ADR).
- **Drapeaux** : goulet = cyclicité extrême quand la capacité rattrape (T5) ;
  vérifier que le goulet n'est pas déjà pricé (T1/T2 : si le titre a doublé,
  le marché a trouvé la BOM avant nous).

## Terrain 3 — Poches structurellement sous-analysées et ACCESSIBLES

### 3a. Serial acquirers nordiques (2e et 3e générations)
Modèle suédois (Lifco : EBITA composé ~22 %/an depuis 2001 ; Addtech,
Lagercrantz, Indutrade) — la génération CONNUE est chère. L'inefficience est
sur les jeunes clones dirigés par des anciens des maisons-mères : Röko (IPO
Stockholm 03/2025, ex-CEO de Lifco), Idun Industrier (~13-14× EV/EBITA, décote
sur les pairs prouvés), Berner Industrier (CEO ex-Lagercrantz, EBITA +70 % en
2025), Karnell.
- **Pourquoi ça persiste** : trop jeunes/petits pour les indices et la
  couverture ; le marché price la catégorie, pas le pedigree du management.
- **Comment chasser** : « new serial acquirer Nordic IPO [année] », « [société]
  förvärv acquisition niche », suivre REQ Capital (papiers « Acquisition-Driven
  Compounders »), In Practise, rollupeurope.com, compte AcquirerHQ,
  slowcompounding.substack.com. Signal = filiation du management + discipline
  de multiple d'achat (<10× EBITA) + décentralisation.
- **Achetabilité** : Suède = UE → PEA-éligible EN PRINCIPE ; vérifier que
  Fortuneo donne accès à Stockholm (sinon : inaccessibles en pratique — le
  rapporter tel quel, pas de contournement eToro garanti).
- **Drapeaux** : capi parfois < 500 M€, liquidité faible ; comptabilité
  d'acquisitions à surveiller (T4 : cash-flow vs EBITA ajusté).

### 3b. Euronext STAR Milan
Segment qualité de Borsa Italiana : capi 40 M€-1 Md€, free float ≥ 35 %,
gouvernance et transparence renforcées OBLIGATOIRES — un filtre qualité
institutionnel gratuit sur des smalls que personne ne screene hors d'Italie.
- **Comment chasser** : liste officielle borsaitaliana.it (segment STAR) puis
  croiser avec un screener (marge, dette, ROIC) ; « STAR Milan [società]
  risultati » en italien ; couverture locale Milano Finanza / Il Sole 24 Ore.
- **Achetabilité** : Italie = PEA-éligible ; Milan est généralement accessible
  chez Fortuneo (à confirmer par ticker). Drapeaux : liquidité, gouvernance
  familiale (contrôle), Italie = prime de risque pays.

### 3c. Pologne (GPW) et Autriche (Vienne)
Pologne : 20e économie mondiale, marché re-noté depuis 2025 (cf. dossier
Undervalued-Shares sur le GPW) ; Autriche : porte d'entrée gouvernance-solide
vers la croissance CEE sans détenir du CEE direct. Sous-analysées car hors des
flux passifs mondiaux et barrière de langue.
- **Comment chasser** : « GPW spółka [secteur] wyniki » (le polonais débloque),
  stooq.pl et biznesradar.pl (screeners locaux gratuits), Undervalued-Shares
  (dossiers pays), Wiener Börse liste officielle + screenerhero pour Vienne.
- **Achetabilité** : PEA-éligibles en principe (UE) mais Varsovie/Vienne
  rarement accessibles chez un courtier PEA français → en pratique souvent
  INACCESSIBLES en direct ; le dire, et ne signaler que si un véhicule existe
  (ETF UCITS Pologne : hors PEA le plus souvent → CTO). Ne pas gonfler ce
  terrain : le réserver aux cas exceptionnels.

### 3d. AIM Londres et orphan stocks
AIM : marché non réglementé du LSE, décotes historiques post-Brexit/fiscalité.
Orphan stocks (0-2 analystes) : « neglected firm effect » — prime documentée
mais contestée (des études ne trouvent rien une fois la taille contrôlée — le
rappeler, c'est un terrain, pas une loi).
- **Comment chasser** : screener avec « nombre d'analystes ≤ 2 » + santé
  financière (TIKR/Koyfin gratuits, Stockopedia) ; « [société] no analyst
  coverage initiation » ; The Predictive Investor a documenté la recette.
- **Achetabilité** : AIM = HORS PEA (UK hors UE) ; eToro liste une partie du
  LSE — vérifier ticker par ticker. Orphans UE : PEA si place accessible.
- **Drapeaux** : l'absence de couverture cache aussi des fraudes (T4 renforcé) ;
  liquidité ; sur AIM, gouvernance légère par construction.

### 3e. Holdings décotées et préférentielles
Décotes sur ANR persistantes (30-40 % : Porsche SE ~33 %, cf. suivis
Unfair Advantage Capital, AVI « The Path Less Trodden ») ; actions
préférentielles allemandes décotées vs ordinaires (même cash-flow, moins de
droits de vote).
- **Pourquoi ça persiste** : conglomérat = pas de clientèle naturelle,
  fiscalité de holding, contrôle familial sans catalyseur. L'inefficience ne
  se ferme QUE sur événement : simplification, buyback massif, activiste.
- **Comment chasser** : « [holding] discount to NAV [trimestre] », suivre AVI
  (assetvalueinvestors.com), Unfair Advantage Capital (liste holdings UE),
  rapports semestriels des holdings (ANR publié). Signal = décote au-delà de
  sa moyenne historique + catalyseur identifié (pas la décote seule).
- **Achetabilité** : très bonne — GBL (Bruxelles), Peugeot Invest, Bolloré
  (Paris), Porsche SE, Heliad… majoritairement PEA. Investor AB : Stockholm
  (cf. 3a). Drapeau : une décote sans catalyseur peut durer 20 ans (T5).

## Terrain 4 — Marchés créés par la réglementation (« qui vend l'obligation ? »)

La réglementation crée des revenus OBLIGATOIRES : le client n'a pas le choix.
Chaîne type : norme → échéance datée → dépense forcée → qui encaisse ?
- **Cas 2026 documentés** : (1) PFAS/eau : limites UE eau potable en vigueur
  2026 → cycle de capex forcé chez les utilities → équipementiers/traiteurs
  (Veolia Paris-PEA, Xylem/Veralto US-eToro, ingénieristes) ; (2) NIS2 :
  cybersécurité OBLIGATOIRE pour les infrastructures critiques UE (eau,
  énergie, santé) → éditeurs/intégrateurs de conformité ; (3) EU ETS : quotas
  carbone étendus (maritime 70 % en 2026, aviation fin des quotas gratuits
  2026) → l'actif lui-même est investissable (ETC : WisdomTree Carbon,
  SparkChange Physical EUA) et le TIC/vérificateurs d'émissions encaissent la
  conformité ; (4) toute nouvelle norme = revenu récurrent pour le TIC
  (terrain 1 — recoupement voulu).
- **Pourquoi ça persiste** : le texte réglementaire est public des ANNÉES avant
  la dépense ; personne ne lit les directives. L'edge = lire le calendrier
  d'application (dates de transposition/conformité), pas le communiqué.
- **Comment chasser** : « [directive/norme] compliance deadline [année] who
  provides », « [réglementation] transposition tracker » (ex. ECSO pour NIS2),
  « mandatory [obligation] market size listed companies ». Sources : EUR-Lex /
  ec.europa.eu (calendriers officiels), presse sectorielle de la conformité,
  agendas des sommets industriels (ex. PFAS Summit Europe).
- **Achetabilité** : bonne — beaucoup d'expositions UE (PEA) ; ETC carbone =
  HORS PEA (pas un ETF actions UCITS éligible) → CTO uniquement, et produit
  à futures/physique : le traiter comme une matière première, pas une action.
- **Drapeaux** : le politique donne et reprend (assouplissements EU ETS annoncés
  2026 — T5) ; les « pure plays conformité » micro-caps surfent le narratif
  (T4 : levées de capital en série).

## Terrain 5 — Pipelines d'événements (le calendrier EST l'edge)

Événements mécaniques ANNONCÉS À L'AVANCE que le marché traite mal : spin-offs
(vente forcée par les fonds indiciels du parent), sorties de faillite (aucune
couverture au jour 1, « fresh start »), fins de lock-up (offre datée),
migrations d'indices (achats/ventes forcés datés), décotes de closed-end funds
attaquées par des activistes.
- **Pourquoi ça persiste** : vendeurs NON économiques (contrainte de mandat,
  pas d'opinion sur la valeur) + absence de couverture initiale. C'est
  l'inefficience la plus documentée qui SURVIT à sa publication.
- **Sources gratuites qui listent À L'AVANCE** : spin-offs :
  stockspinoffs.com/upcoming-spinoffs, InsideArbitrage (section spinoffs),
  Event Driven Daily (calendrier), stockspinoffinvesting.com/upcoming ;
  reconstitutions d'indices : calendrier Russell (classements mai, final fin
  juin) + rebalancements trimestriels S&P — fenêtres CONNUES chaque année ;
  lock-ups : prospectus IPO (section lock-up) + recherches « [IPO] lock-up
  expiry date » ; trusts UK décotés : theaic.co.uk (données décotes gratuites,
  décote moyenne ~9,6 % début 2026, rachats record > 10 Md£ en 2025,
  campagnes Saba Capital) ; post-faillite : dockets PACER via presse
  restructuration + « emerged from chapter 11 listing » (pas de tracker
  gratuit propre — reconstruire, le dire).
- **Comment chasser** : « spin-off record date [mois] », « emerged from
  chapter 11 relisting [année] », « Russell reconstitution additions
  projected ». Croiser CHAQUE événement avec le radar-catalyseurs.md.
- **Achetabilité** : spin-offs UE = PEA ; spin-offs US = eToro (vérifier que
  eToro crédite les titres du spin-off — pas garanti, drapeau opérationnel
  réel) ; trusts UK = hors PEA, partiellement sur eToro.
- **Drapeaux** : le spin-off est un sac mixte (dette refilée à la spin-co —
  lire le Form 10/prospectus, T4) ; post-faillite = actionnaires précédents
  laminés, vérifier la nouvelle structure de dette.

## Terrain 6 — Science → cote (brevets et littérature en avance de phase)

Brevets = 18-36 mois d'avance (déjà règle 9 de la charte) ; ici la méthode
inverse : partir d'une percée scientifique (publication, abstract de congrès)
et remonter vers QUI la commercialise.
- **Comment chasser** : (1) percée repérée (Nature/Science, abstracts pré-
  congrès — ASCO, ESMO, conférences semis) → (2) « [technologie] patent
  assignee » sur Google Patents : qui dépose en grappe ? → (3) le déposant
  est-il coté, ou est-il fournisseur/licencié d'un coté ? Requêtes :
  « [technologie] commercialization listed company », « [université/labo]
  spin-out IPO licensing ». La recherche académique confirme que l'activité
  brevets hors du cœur historique d'une société précède volatilité et
  re-rating — c'est un indicateur d'inflexion, pas une preuve.
- **Achetabilité** : aléatoire — souvent non coté (le dire et suivre le
  licencié coté) ; biotechs UE (PEA) ou US (eToro).
- **Drapeaux** : distance labo→revenu se compte en années (T5) ; les
  micro-caps « à brevet miracle » sont le terrain de chasse préféré des
  promoteurs (T4 maximal).

## Terrain 7 — Royautés hors mines et modèles économiques rares

Modèles à cash-flows contractuels sans capex : royautés pharma, catalogues
musicaux, redevances diverses. Rares en bourse = mal compris = mal pricés.
- **État des lieux 2026** : musique — les véhicules purs européens ont DISPARU
  de la cote (Hipgnosis absorbé par Blackstone/Sony 2024, Round Hill par
  Concord) : la décote a été fermée par des OPA, preuve que le terrain payait.
  Restent : Universal Music Group (Amsterdam — PEA, le plus grand détenteur
  de catalogues), Reservoir Media (US, petit — eToro), Believe (Paris) côté
  distribution. Pharma : Royalty Pharma (Nasdaq, eToro) = le géant ; le modèle
  « synthetic royalties » explose en Europe (>20 % des deals mondiaux) mais
  via des véhicules NON cotés — surveiller toute IPO du modèle en Europe
  (signal de terrain neuf). Autres modèles rares : opérateurs de bourses,
  registres, dépositaires (revenus de péage réglementaire, souvent PEA).
- **Comment chasser** : « royalty company IPO Europe [année] », « [société]
  royalty monetization listed », « catalogue acquisition multiple NPS » ;
  sources : royaltymonetization.com, Goodwin/Avance (études deals), presse
  spécialisée musique (MBW).
- **Pourquoi ça persiste** : pas de case sectorielle GICS naturelle, analystes
  généralistes désarmés devant l'actuariat des cash-flows.
- **Drapeaux** : sensibilité aux taux (duration longue), valorisation des
  catalogues = hypothèses discrétionnaires (T4 : écart entre « fair value »
  déclarée et prix de marché des transactions comparables).

## Priorisation pour la rotation (rappel opérationnel)

Par rendement/accessibilité pour Tanguy : T5 événements (calendriers gratuits,
achetable) > T4 réglementation (edge de lecture, PEA-friendly) > T1 hidden
champions et T3e holdings (PEA direct) > T3a nordiques et T3b STAR (selon accès
Fortuneo) > T2 chaîne de valeur (déjà partiellement dans la charte) > T7
royautés (peu de véhicules) > T6 science (long) > T3c/3d Pologne-Autriche-AIM
(souvent inachetable — radar seulement).
