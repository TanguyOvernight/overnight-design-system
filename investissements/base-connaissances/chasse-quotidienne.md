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
| **Samedi (Revue)** | 🔧 **CHANTIER D'UNIVERS** *(remplace « smart money » depuis le 03/08/2026 — voir ci-dessous)* | Constituer ou exploiter un référentiel de valeurs peu couvertes, avec capi sourcée, exposition chiffrée, ticket et liquidité. Le terrain smart money est **hors service** : 7 sources initiés en 403, dont sec.gov, et les 3 replis testés échouent |
| **Dimanche (Prépa)** | Prospectif & thèmes | Catalyseurs datés à venir (radar), thèmes pré-consensus (pipeline analyse-prospective : thème → thèse → timing → véhicule), revue des « étudiés-écartés » du mois |

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
