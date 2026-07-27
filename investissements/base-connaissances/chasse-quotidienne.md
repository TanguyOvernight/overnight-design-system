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
| **Samedi (Revue)** | Smart money de la semaine | 13D récents (EDGAR full-text), cluster buys OpenInsider de la semaine, lettres de fonds fraîches, gros mouvements 13F (fenêtres trimestrielles) |
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
phases, 14 règles de recherche, 5 kill-tests systématiques, playbooks par
terrain, protocole jour creux). Trouve les signaux early, les source, les
étiquette. L'agent screening relève AUSSI chaque matin le chiffre du jour
des « Surveillances du Juge » (radar-catalyseurs.md) : déclencheur touché
ou approché < ~5 % → fast-track Arbitre → 🔔 PROPOSITION dans la
newsletter du jour même.

**Étage 2 — RÉFUTATION** : agent `avocat-diable`
(`.claude/agents/avocat-diable.md`, charte v2 : steelman d'abord,
protocole 6 coups, bibliothèque de base rates chiffrées, critères de
bascule anti-hedging). Reçoit chaque signal solide du Chasseur SANS son
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
