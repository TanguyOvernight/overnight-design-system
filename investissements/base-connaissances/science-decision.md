# Science de la décision — rendements attendus, incertitude, agrégation

Compilé le 2026-07-27. Le socle académique du JUGE : ce qui manquait entre
la prévision (science-prevision.md), la calibration (registre) et les règles
de vente/sizing. Ne répète rien — complète. Tags : [ROBUSTE] = consensus
académique / [DÉBATTU] = littérature divisée / [FRAGILE] = indicatif.

## A. Rendements attendus : le hurdle devient une FOURCHETTE documentée

Principe (Ilmanen, *Expected Returns* 2011 ; *Investing Amid Low Expected
Returns* 2022) : rendement attendu = revenu (yield) + croissance ±
revalorisation. Jamais « la moyenne historique » brute. [ROBUSTE]

| Classe | Attendu nominal/an (10 ans, devise locale) | Source (date) | Tag |
|---|---|---|---|
| Actions US | **3,9-5,9 %** (growth 2,3-4,3 ; value 5,8-7,8) | Vanguard VCMM déc. 2025 | [ROBUSTE] méthode, chiffres = estimation |
| Actions dév. ex-US | **4,9-6,9 %** (abaissé de 6,9-8,9 après le rally 2025) | Vanguard déc. 2025 | idem |
| Actions EM | ≈ comparable ou > US selon Vanguard/RA ; chiffre 2026 non vérifié | à re-vérifier avant usage décisif | [FRAGILE] |
| Obligations US agg | **3,8-4,8 %** (≈ yield de départ) ; EM souveraines hedgées 5,1-6,1 % | Vanguard déc. 2025 | [ROBUSTE] |
| Or | Réel long terme ≈ 0 (« constante dorée ») ; prix réel 2024-2026 ~2× sa norme → espérance décennale ≤ 0 si retour à la moyenne (jusqu'à −4 %/an réel) | Erb & Harvey FAJ 2013 + SSRN 2024 | constat [ROBUSTE], retour à la moyenne [DÉBATTU] |
| Cash | Réel légèrement positif | AQR CMA 2026 | [ROBUSTE] |
| Repères transversaux | AQR : 60/40 global **réel ~3,4 %/an**, primes comprimées (méthode Shiller E/P) · CAPE S&P ~40,9 (juil. 2026) → E/P Shiller ~2,4 % réel · ancre INconditionnelle : actions monde ~5 %/an réel 1900-2024 (DMS Yearbook) | AQR déc. 2025 ; GuruFocus | [ROBUSTE] |

**Le World recalculé** (~70 % US + 30 % dév. ex-US) : **4,2-6,2 % nominal
brut** → net PEA (PS 17,2 % à la sortie, atténué par le report) ≈ 3,5-5,5 %.
→ **Nouvelle hypothèse EV World par défaut : 5 %/an net (fourchette 4-6),
révision trimestrielle.** L'ancien « ~6 % net » devient la borne HAUTE
(scénario : profits IA tenus ET aucune compression de multiple). Les
prévisions sont en USD ; le change EUR non couvert ajoute du bruit, pas de
biais espéré (profil, §change).

**Conditionner sans timer — la nuance exacte** :
- La relation CAPE→rendement 10 ans est réelle mais SURVENDUE : R² long
  horizon gonflés par les observations chevauchantes (Boudoukh-Israel-
  Richardson, FAJ 2019 — l'échantillon effectif est minuscule) [ROBUSTE] ;
  et le value-timing du marché déçoit hors échantillon depuis 1958
  (Asness-Ilmanen-Maloney, « Market Timing: Sin a Little », JOIM 2017)
  [ROBUSTE]. Usage légitime : ajuster l'**ATTENTE** (hurdle, plan
  d'épargne). Usage interdit : ajuster l'**ALLOCATION** ou le calendrier
  DCA (« sin a little » = au mieux une dose homéopathique — pour nous :
  zéro).
- **Un hurdle abaissé n'est PAS un feu vert satellites** : la même
  valorisation comprime l'espérance des satellites actions (surtout tech
  US corrélée). La prime exigée (+2-3 pts/an, doublée si corrélé — règle
  17) est INCHANGÉE. Le vrai gagnant d'un CAPE 41 : les classes dont
  l'attente conditionnelle DÉPASSE le World (value, ex-US) — cohérent
  avec le bonus diversification du mandat.

## B. Ambiguïté : quand la probabilité elle-même est incertaine

Knight (1921) / Ellsberg (QJE 1961) : le RISQUE a des probas connues (l'EV
s'applique) ; l'AMBIGUÏTÉ a des probas inconnues — l'EV pur y devient de la
fausse précision. [ROBUSTE] Réponse formalisée : décider sur le pire prior
plausible (maxmin, Gilboa-Schmeidler 1989) ; en portefeuille, les règles
multi-prior donnent des positions plus petites, plus stables, meilleur
Sharpe hors échantillon (Garlappi-Uppal-Wang, RFS 2007) [ROBUSTE].

**Déclencheurs du régime d'ambiguïté** (mesurables, alignés grille) :
écart arbre/global > 15 pts qui PERSISTE après avoir creusé la branche ;
ou désaccord Chasseur/Avocat > 30 pts non résolu par l'instruction ; ou
classe sans taux de base exploitable (biotech pré-données, small-cap sans
historique). Alors l'EV pur cède la place à :
1. **P_bas retenu** (maxmin léger — étend la règle existante « retenir la
   valeur basse ») ;
2. **Test de dominance** : l'option n'est retenue que si elle reste
   acceptable sur TOUTE la fourchette de P — un achat bon seulement dans
   le haut de la fourchette → SURVEILLANCE ou PASSE ;
3. **Taille ÷ 2** vs Kelly ¼ (soit ~Kelly ⅛) si on agit quand même ;
4. **Le cœur 1/N comme défaut robuste** : la naïveté diversifiée bat les
   optimisations hors échantillon (DeMiguel-Garlappi-Uppal, RFS 2009)
   [ROBUSTE] — académiquement, « dans le doute, le cœur » n'est pas de la
   paresse, c'est la règle optimale sous ambiguïté.
**Minimax regret** (Savage 1951) : légitime UNIQUEMENT pour les décisions
rares, quasi irréversibles, à P indéfinissable (ex. lump sum vs étalement,
choix d'enveloppe) — « quelle option minimise le pire regret ? ». Jamais
pour les paris répétés (là, EV + Kelly gouvernent). Limites connues :
peut ignorer de l'info, sensible aux alternatives ajoutées. [DÉBATTU]

## C. Ergodicité : pourquoi le sur-pari détruit même à EV positive

Peters (« Optimal leverage from non-ergodicity », Quantitative Finance
2011 ; Nature Physics 2019) : la richesse est MULTIPLICATIVE → la moyenne
d'ensemble (EV sur des mondes parallèles) diverge de la moyenne temporelle
(TA trajectoire unique). Exemple canonique : pari +50 %/−40 % à pile ou
face — EV +5 % par lancer, croissance temporelle **−5 % par lancer** :
l'EV monte, le joueur qui répète est ruiné. [ROBUSTE — mathématique]
Kelly maximise précisément la croissance temporelle ; au-delà de ~2×
Kelly, elle devient NÉGATIVE à EV positive. Le ¼ Kelly existant n'est pas
de la prudence décorative : c'est l'assurance contre l'erreur d'estimation
de l'edge, dans un jeu où le sur-pari est fatal et le sous-pari bénin.

**La règle d'ergodicité (formulation pour le verdict)** : « Tanguy ne vit
qu'UNE trajectoire. Maximiser le taux de croissance de SA trajectoire,
jamais l'espérance des mondes parallèles. Conséquences : (1) aucun
enthousiasme d'EV ne franchit le plafond Kelly ¼ ; (2) le veto drawdown
prime l'EV — un drawdown qui interrompt les versements tue le moteur ;
(3) l'EV ne devient réelle qu'étalée sur des petits paris NON corrélés —
un gros pari unique n'a pas d'espérance, il a deux issues. »

## D. Agrégation : combien vaut vraiment l'accord Chasseur/Avocat ?

- **Décompte de l'accord corrélé** [ROBUSTE] : k avis dont les erreurs
  sont corrélées ρ ≈ au mieux 1/ρ avis indépendants (Clemen-Winkler 1985).
  ρ = 0,5 → JAMAIS mieux que 2 avis indépendants, quel que soit k ;
  ρ = 0,7 → ~1,4. Chasseur et Avocat lisent largement les mêmes sources
  (presse financière, mêmes publications) → leur ρ est ÉLEVÉ : **leur
  accord vaut ~1,4 avis, pas 2**. Opérationnel : l'accord ne resserre la
  P que s'il passe par des chemins DISJOINTS (sources primaires
  différentes, cadres différents : fondamental vs flux). Même source
  citée des deux côtés = UN avis, et la recherche de contamination
  (protocole d'instruction) devient un calcul, plus un soupçon.
- **Extremizing conditionnel** [ROBUSTE, périmètre précis] : moyenner des
  probas écrase vers 0,5 quand chaque juge ne détient qu'une PART de
  l'info → l'agrégateur pousse la moyenne vers l'extrême (Baron-Mellers-
  Tetlock et al., Decision Analysis 2014 ; Satopää et al., IJF 2014 —
  transformation logit, exposant ~1,5-2,5 au GJP). MAIS la justification
  est la DIVERSITÉ d'information : si l'info est partagée, il n'y a rien
  à extrémiser (les équipes de superforecasters convergentes n'en ont
  presque pas besoin). Règle : extrémiser (modérément, vers la borne de
  la fourchette) SEULEMENT si Chasseur et Avocat convergent par des
  chemins disjoints ET que le registre ne montre pas de sur-confiance sur
  la classe ; sinon, ne PAS extrémiser — décompter (ci-dessus).
- **Ordre du protocole GJP** (Mellers et al. 2014) : pondérer par la
  calibration passée (le registre le fait dès 20 appels) → PUIS
  extrémiser conditionnellement. Jamais l'inverse.

## E. Le test « QUI VEND ? » — avant tout ACHAT

Théorie : entre agents rationnels sans besoin de liquidité, aucun échange
n'a lieu (no-trade, Milgrom-Stokey 1982) — si ton ordre est servi,
quelqu'un a CHOISI de te vendre. Le coût mesuré de l'ignorer : le trading
des particuliers taïwanais perd **−3,8 pts/an** agrégés, gains captés par
les institutions en quelques semaines (Barber-Odean-Lee-Liu, RFS 2009) ;
le quintile de ménages US le plus actif sous-performe de ~6,5 pts/an
(Barber-Odean, JF 2000) ; > 80 % des day traders perdent sur 6 mois.
[ROBUSTE]
**Protocole (3 questions, grille étape 3bis)** — cadre BAIT de Mauboussin
(« Who Is on the Other Side? », 2019 : edge Comportemental / Analytique /
Informationnel / Technique) :
1. **Qui est plausiblement en face ?** (fonds forcé de vendre, sortie
   d'indice, fin d'exercice fiscal, particulier paniqué, insider…)
2. **Pourquoi vend-il ?** Réponses qui AUTORISENT l'achat : vendeur
   CONTRAINT (edge technique), horizon plus court que le nôtre (edge
   comportemental — notre seul avantage structurel durable), info publique
   mal digérée qu'on a VÉRIFIÉE en primaire (edge analytique).
3. **Et si c'est lui l'informé ?** Sans réponse nommable à 1-2, l'hypothèse
   par défaut est : la contrepartie en sait plus → pas d'ACHAT. Grossman-
   Stiglitz garantit qu'un edge rémunère l'info COÛTEUSE : cite le travail
   primaire payé (document, transcript, donnée) — sinon l'edge est un récit.

## F. Erreurs documentées des comités — et leur garde-fou mécanique

| Erreur (source) | Mécanisme | Garde-fou du Juge |
|---|---|---|
| **Escalade d'engagement** (Staw 1976 ; Jin-Scherbina, RFS 2011 : les gérants gardent leurs perdants, les gérants NOUVEAUX vendent les perdants hérités et la perf s'améliore) [ROBUSTE] | Le coût enterré (temps d'analyse, verdicts passés) plaide pour continuer | Revue « héritier » : juger chaque ligne/surveillance comme si on la recevait AUJOURD'HUI sans historique. Une surveillance ne se renouvelle qu'UNE fois sans fait nouveau daté ; le 2e renouvellement = PASSE automatique |
| **Disposition institutionnel** (Frazzini, JF 2006 : les fonds tiennent leurs perdants → sous-réaction aux mauvaises nouvelles) [ROBUSTE] | Le prix d'achat sert de référence et retarde la vente | **Le PRU est interdit de citation dans un verdict** (seule exception : calcul fiscal CTO). Une thèse se juge aux fondamentaux vs kill criteria, jamais à « on est à −18 % » |
| **Narrow framing** (Kahneman-Lovallo, Mgmt Science 1993 ; Barberis-Huang-Thaler 2006) [ROBUSTE] | Juger chaque pari isolément → trop timide sur les petits paris favorables ET aveugle à l'agrégation | Juger la CONTRIBUTION au portefeuille (règle 17) et décider par POLITIQUE : « quelle est ma règle pour TOUS les cas de ce type ? » — un satellite de 2-3 % dimensionné ne se refuse pas comme un all-in, il se juge en paquet |
| **Churn return-chasing** (Goyal-Wahal, JF 2008 : 3 400 sponsors — on embauche après 3 ans de surperf, on vire après la sous-perf ; ensuite les virés font ≥ les embauchés) [ROBUSTE] | Remplacer une ligne par sa cousine qui vient de briller | Aucun swap de ligne/ETF vers un « récent gagnant » sans fait fondamental NOUVEAU daté (la perf relative passée n'en est pas un) — prolonge la règle 10 des ventes |

## G. Ajouts proposés à la charte de l'Arbitre (compacts)

**Ajout 1 — dans « L'arithmétique d'espérance », remplace la parenthèse
« (défaut ~6 %/an nominal net en PEA — à revérifier) » :**
> EV World de référence : table de `science-decision.md` §A — défaut
> **5 %/an nominal net en PEA (fourchette 4-6)**, révisé trimestriellement
> sur CAPE/CMA à date. Le conditionnement à la valorisation ajuste
> l'ATTENTE (le hurdle), jamais l'allocation ni le calendrier DCA
> (Asness : le value-timing déçoit hors échantillon). Hurdle abaissé ≠
> prime satellite abaissée : +2-3 pts/an, doublée si corrélé, inchangée.

**Ajout 2 — nouvelle étape 3bis de la grille (entre « Edge nommable » et
« Décomposition ») :**
> 3bis. **Qui vend, et combien vaut l'accord ?** (a) Test du vendeur
> (BAIT) : nomme QUI est en face et POURQUOI il vend (contraint / horizon
> court / mieux informé) — sans réponse, l'informé c'est lui → pas
> d'ACHAT. (b) Décompte de corrélation : accord Chasseur/Avocat sur
> sources partagées ≈ 1,4 avis, pas 2 (Clemen-Winkler) ; extremizing
> réservé aux convergences par chemins disjoints (§D). (c) Ambiguïté
> persistante (écart > 15 pts non résolu, désaccord > 30 pts) → régime
> §B : P_bas, dominance, taille ÷ 2, ou PASSE.

## Sources
- Vanguard, 2026 Economic & Market Outlook (déc. 2025) : https://corporate.vanguard.com/content/corporatesite/us/en/corp/who-we-are/pressroom/press-release-vanguard-releases-2026-economic-and-market-outlook-121025.html · prévisions : https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/vemo-return-forecasts.html
- AQR, 2026 Capital Market Assumptions (Alternative Thinking Q1 2026) : https://www.aqr.com/Insights/Research/Alternative-Thinking/2026-Capital-Market-Assumptions-for-Major-Asset-Classes
- CAPE juillet 2026 (~40,9) : https://www.gurufocus.com/economic_indicators/56/sp-500-shiller-cape-ratio
- Asness-Ilmanen-Maloney, Market Timing: Sin a Little (JOIM 2017) : https://www.aqr.com/Insights/Research/Journal-Article/Market-Timing-Sin-a-Little
- Boudoukh-Israel-Richardson, Long-Horizon Predictability: A Cautionary Tale (FAJ 2019) : https://www.tandfonline.com/doi/full/10.1080/0015198X.2018.1547056
- Erb-Harvey, The Golden Dilemma (FAJ 2013) : https://www.nber.org/papers/w18706 · Is There Still a Golden Dilemma? (2024) : https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4807895
- Garlappi-Uppal-Wang, multi-prior (RFS 2007) : https://ideas.repec.org/a/oup/rfinst/v20y2007i1p41-81.html · Dimmock et al. (JFE 2016) : https://www.sciencedirect.com/science/article/pii/S0304405X16000040
- Peters, Optimal leverage from non-ergodicity : https://arxiv.org/abs/0902.2965 · Nature Physics 2019 : https://www.nature.com/articles/s41567-019-0758-3
- Baron et al., extremizing (Decision Analysis 2014) / Satopää et al. (IJF 2014) : https://arxiv.org/abs/1501.06943 · Mellers et al. (Psych Science 2014) : https://learnmoore.org/papers/Mellers%20et%20al%202014.pdf
- Clemen-Winkler 1985 (experts corrélés) — synthèse Winkler et al. 2019 : https://www.hbs.edu/ris/Publication%20Files/19-039_8af5ea92-6191-4774-aeb6-5eee0a5fd4c2.pdf
- Mauboussin, Who Is on the Other Side? (2019) : https://macro-ops.com/wp-content/uploads/2019/02/Who-Is-On-the-Other-Side.pdf
- Barber-Odean-Lee-Liu (RFS 2009) : https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/justhowmuchdoindividualinvestorslose_rfs_2009.pdf
- Jin-Scherbina, Inheriting Losers (RFS 2011) : https://academic.oup.com/rfs/article-abstract/24/3/786/1590190
- Goyal-Wahal (JF 2008) : https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.2008.01375.x
- Kahneman-Lovallo, Timid Choices and Bold Forecasts (Mgmt Sci 1993) : https://bear.warrington.ufl.edu/brenner/mar7588/Papers/kahneman-lovallo-mansci1993.pdf
