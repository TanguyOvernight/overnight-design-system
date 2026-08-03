# Radar de catalyseurs — événements datés à venir

Mis à jour : **2026-07-27**. Chaque brief vérifie ce qui tombe sous 7 jours.
Ajouter tout nouvel événement daté découvert dans l'actualité ; purger le passé
en le journalisant si notable.

## 🛑 LES 4 RÈGLES D'ÉCRITURE D'UN SEUIL (encodées le 31/07/2026)

**Cause racine, pas incident.** En cinq jours, **cinq** données de prix
fausses ou périmées ont touché une décision — dont une **pendant**
l'arbitrage censé corriger les précédentes. Le canal ne se réparera pas :
les extraits de pages de cotation sont des caches **sans horodatage**. Il
faut donc un process qui reste juste **malgré un canal faux**.

**RÈGLE 1 — Deux ancrages INDÉPENDANTS et de NATURE DIFFÉRENTE.**
Aucun prix n'entre dans un verdict sans confirmation par deux sources de
nature différente, dont une non-cachable : (a) un article **horodaté**
citant prix **et** variation %, ou (b) une **capitalisation ÷ nombre de
titres**. **Un extrait de page de cotation vaut ZÉRO.**
*Efficace le 31/07* : 2,75 Md€ ÷ 44,9 M titres = 61,25 € a démasqué deux
snapshots Vicat comme pré-publication.

**RÈGLE 2 — Contrôle d'arithmétique interne, systématique, 5 secondes.**
Tout couple « prix + variation % » se vérifie : **prix ÷ (1 + %) =
clôture précédente implicite**, qui doit égaler la clôture connue. Sinon
le chiffre est faux **ou ne désigne pas ce qu'on croit**.
*Efficace le 31/07* : 67,80 ÷ 1,1282 = 60,10 ≠ 61,60 → a révélé que
« 67,80 € » était un **seuil technique franchi, pas un cours**. Ce test
aurait aussi attrapé l'erreur Investing.com du 30/07 et l'attribution MSFT
du 29/07 — **3 incidents sur 5 détectés par un calcul de 5 secondes.**

**RÈGLE 3 — Interdiction d'écrire un seuil sans cotation POST-événement.**
*C'est la règle qui a manqué le 30/07, et c'est la faute exacte.* Le
61,60 € n'était pas faux : il était **correct et périmé**. La faute fut
d'écrire un contrat de prix sur un titre ayant publié **la veille au
soir**, avec un prix **antérieur à la publication** — alors que le radar
portait « 29/07 — Résultats S1 Vicat ». L'information était dans le
fichier.
> **Si un catalyseur daté est passé et que le cours post-catalyseur n'est
> pas obtenu, le verdict est SUSPENDU, pas écrit.** « Verdict en attente
> de cotation » est une sortie légitime et sans honte. **Un jour de retard
> coûte moins cher qu'un contrat né mort.**

**RÈGLE 4 — Écrire les seuils en VALORISATION, pas en prix** *(le correctif
de fond)*. Un seuil « ≤ 56,00 € » devient **silencieusement faux** dès que
le prix, le nombre de titres, la dette nette ou l'EBITDA bougent. Un seuil
« ≤ 4,60x VE/EBITDA 2026e » est **auto-correcteur** : il ne se convertit en
prix qu'en allant chercher des données fraîches — **la conversion force la
vérification.**
> Si le contrat Vicat avait été écrit « VE/EBITDA 2026e ≤ 4,60x », il
> aurait été confronté le 31/07 à **5,33x** : un écart de *valorisation*,
> immédiatement lisible, au lieu d'un écart de prix invérifiable.
> **Un prix périmé n'aurait pas pu produire un contrat.**

**Format standard de TOUT seuil à partir du 31/07/2026** :
> **Multiple (primaire, contraignant) + le prix qu'il implique aux données
> vérifiées du jour (secondaire, indicatif, DATÉ).** Le multiple prime en
> cas de divergence.

**RÈGLE 5 — Une CORRECTION s'audite comme une affirmation** (ajoutée le
01/08/2026, après vérification de la Revue).

Le 30/07, l'Avocat m'a « corrigé » sur le cours de MSFT : selon lui,
399,30 $ était la clôture du 29/07 et 390,54 $ celle du 28/07. **J'ai
accepté la correction sans la vérifier.** Elle était **fausse**, et la
règle 2 — écrite le lendemain — la démasque en cinq secondes :

| Base supposée | Cours du 30/07 | Variation implicite | Presse |
|---|---|---|---|
| 390,54 $ | 451,58 $ | **+15,6 %** | ✅ « +15,5 %, plus fort bond de l'histoire » |
| 399,30 $ | 451,58 $ | +13,1 % | ❌ ne correspond à rien de publié |

Et ma donnée d'origine était **internement cohérente** : 390,54 × 1,0224 =
399,29 — le 399,30 était bien l'**after-hours**, exactement le +2,24 %
annoncé. La clôture du 29/07 était donc **390,54 $**.

⚠️ **Le VERDICT de l'Avocat (RÉFUTÉ) reste juste, et même renforcé** : le
titre a ouvert le 30/07 en gap et n'a jamais été achetable à 390 $ ce
jour-là. L'asymétrie était consommée — la conclusion était bonne, la
preuve était fausse.

> **Règle** : une correction reçue d'un agent — surtout quand elle est
> humiliante et donc psychologiquement crédible — subit **exactement les
> mêmes contrôles** (règles 1 et 2) qu'une affirmation initiale. Accepter
> une correction sans la vérifier, c'est déplacer sa confiance, pas
> l'exercer. **Le contrôle d'arithmétique interne s'applique aux
> corrections en priorité.**

## Surveillances du Juge (contrats datés — charte Arbitre v2)

Toute SURVEILLANCE émise par l'Arbitre vit ICI avec ses 4 champs. À
l'échéance sans déclencheur ni thèse renforcée → PASSE automatique (ou
renouvellement explicitement motivé). Stock max ~6 lignes.
**État au 31/07 : 5/6 — le sixième créneau est laissé VIDE délibérément**
(un créneau vide est un actif ; le remplir parce qu'il s'ouvre serait
fabriquer un déclencheur au lieu d'en trouver un).

| Affaire | Déclencheur d'achat précis | Échéance de re-test | Expiration si rien | Appel registre |
|---|---|---|---|---|
| **Séché SCHP (PEA)** | S1 : EBE ≥ 125 M€ ET France organique ≥ 0 % ET guidance 275-285 M€ confirmée ET cours ≤ 90 € → tranche 1 ~150 € ; arrêté strict + quantification PFAS → tranche 2 conditionnelle (plafond 5 %) | Publication S1 (butée 30/09/2026) ; point intermédiaire : arrêté boues (été 2026) | 3e warning OU EBE S1 < 110 M€ OU arrêté ≥10x plus laxiste/reporté au-delà du 01/01/2027 → PASSE auto | C012 |
| **LLY (CTO)** | Cours **≤ 1 020 $** en clôture (−15 % : rétablit la prime de risque nette de PFU) → tranche 1 = plafond L du mois, ≥ 3 tranches | Résultats Q2 le 05/08/2026, puis Q3 (~fin oct.) | Après le Q3 sans passage sous 1 020 $ ET sans relèvement de guidance FY → PASSE auto (renouvellement unique motivé) | C014 |
| **Aubay (PEA)** | Cours ≤ 50 € OU scare optique sur le T3 | Publication T3 (fin oct. 2026) | Après T3 sans déclencheur → PASSE auto | C001 |
| **STM (STMPA, PEA)** | **≤ 42 €** ET P/E fwd < 30x ET ≥ 1 trim. de MB remontant vers 40 %+ | Résultats Q3 STM (fin oct. 2026) | Après Q3 sans les 3 conditions → PASSE auto | C007 |
| **WMT (CTO)** | Cours **≤ 100 $** en clôture | Résultats du **20/08/2026** | **31/12/2026** sans repli → PASSE auto | **C024** *(créé le 30/07 — lacune de couverture réparée)* |

**Budget : 5/6 créneaux.** Le sixième est **laissé libre délibérément**.

### Purges journalisées du 31/07 — deux PASSE DÉFINITIFS

- **VICAT → ☠️ PASSE DÉFINITIF**, contrat supprimé, renouvellement unique
  consommé. Kill criterion n°3 (« dossier couru ») déclenché **sur le fond
  avant la forme** : le titre a fait **+13,15 % le 30/07 à 69,70 €** sur la
  guidance relevée, sans jamais franchir les 72,00 € formels. Espérance
  recalculée au vrai prix : **+4,79 %/an, sous le World nu (5 %)**.
  Les deux portes étaient devenues **logiquement inatteignables** :
  Porte A exigeait −19,7 % **ET** une guidance non abaissée, or tous les
  chemins vers 56 € (retournement cyclique, révision en baisse, choc
  construction) violent cette seconde condition. **C020 résolu ❌ · C021
  maintenu ouvert · C027 créé.**
- **MOBILITY GLOBAL → ☠️ PASSE**, aucun créneau ouvert. L'edge invoqué
  (vendeurs forcés post-spin) est **de flux, donc daté** : à J+21 séances
  le titre **monte** (+2,4 % en 3 semaines) et **6 analystes le couvrent
  déjà en « Buy » à 27,83 $**. Espérance **+2,28 %/an net de PFU**, et
  **+4,21 % même en supposant un bon print le 07/08** — *un contrat dont
  l'exécution réussie laisse encore l'euro sous le hurdle est un piège.*
  Ses 4 conditions se résolvaient **le même jour en sens opposés**
  (P jointe ≈ 4,5 %). **Publié 7 jours AVANT le catalyseur** — la lacune
  de couverture est fermée avant l'événement, par la porte du PASSE.
  **C028/C029/C030 créés**, dont deux se résolvent le **07/08**.
- **SANOFI → contrat de re-test EXPIRÉ**, sans renouvellement. 2 échecs
  sur 3 : cours **72,73 €** > 68 €, et **deux arrêts de programmes**
  annoncés (violation frontale de la 3ᵉ condition). Guidance pourtant
  **relevée** à ~+10 % à changes constants.
  📌 **Lecture de régime** : le 30/07, deux sociétés relèvent leur
  guidance — Vicat (cyclique, levier opérationnel) fait **+13,15 %**,
  Sanofi (pharma, risque pipeline) fait **−8,95 %**, plus forte baisse du
  CAC. Le marché paie le levier opérationnel cyclique et sanctionne le
  risque de pipeline. **Cela n'autorise aucune rotation** (ce serait du
  factor-timing, interdit) mais explique pourquoi les dossiers du jour se
  referment : on chassait dans une zone que le marché vient de re-noter.

### Purges journalisées du 30/07

- **MSFT renfort** → **RÉSOLU**. Print publié, thèse de renfort **RÉFUTÉE**
  par l'Avocat (25 %). Ligne supprimée. ⚠️ **La détention de 6 % n'est pas
  remise en cause** — le verdict portait sur le renfort. Appels C018/C019.
- **Nike (NKE, CTO)** → **contrat RETIRÉ** (budget de 6 créneaux).
  Justification écrite : déclencheur **qualitatif sans condition de prix**,
  aucun test de mécanisme ni de cash, ρ ≈ 0,55 en USD (n'apporte pas de
  diversification), rang dernier, sous le hurdle. **Sous les standards
  d'écriture d'aujourd'hui, ce contrat ne serait pas accepté.** L'appel
  **C008 reste ouvert** et se résout sur faits publiés — aucune perte de
  calibration. Nike **reste au classement** (aucune des 4 portes de sortie
  ne s'applique), en veille sans contrat.
- **Magnum** → **PASSE non renouvelé, aucun créneau consommé.** Réouverture
  sur FAIT et non sur date (capi ≤ 7,6 Md€ **ET** volume organique ≥ +2,0 %)
  → volontairement **pas de ligne radar**, pour ne pas déguiser une attente
  indéfinie en discipline. Appels C022/C023.

## Sous 7 jours 🔥

| Date | Événement | Impact portefeuille/watchlist |
|---|---|---|
| 29/07 | **Résultats Microsoft Q4 FY26** (après clôture US) | MSFT détenu ; condition du renforcement watchlist (Azure ~40 %, capex) |
| 29/07 | **FOMC** — décision Fed (~25 % proba de hausse) | Tout le portefeuille ; ton de Warsh = volatilité |
| **29/07** | **Résultats S1 Vicat (VCT, Paris, PEA)** — comparable S1 2025 : EBITDA 331 M€ (-6,3 %) | Chasse PEA 27/07. Entrée conditionnelle : EBITDA S1 ≥ 340 M€ **ET** dette/EBITDA ≤ 1,5x **ET** cours ≤ 60 €. PASSE si > 70 € (couru) ou EBITDA < 320 M€ |
| **30/07** | **Résultats S1 The Magnum Ice Cream (MICC)** — 1ᵉʳ semestre post-démerger Unilever, webcast 11h CEST | Chasse CTO 27/07. ⚠️ **N.V. néerlandaise = éligible PEA** → si le PEA est ouvert, l'idée y va (pas au CTO : 12,8 pts de fiscalité). Entrée conditionnelle : organique ≥ +3 % **ET** marge EBITDA aj. en amélioration séquentielle **ET** coûts de séparation en décrue chiffrée **ET** dette/EBITDA ≤ 2,5x, capi ≤ ~8,8 Md€. PASSE si guidance abaissée ou levier > 2,7x |
| **30/07** | **Résultats S1 Sanofi (SAN, Paris, PEA)** — 1ᵉʳˢ résultats complets sous Belén Garijo (DG depuis le 29/04) | Chasse santé 28/07. Re-test conditionnel : cours ≤ **68 €** APRÈS publication **ET** guidance CA non abaissée **ET** aucun nouvel arrêt de programme. Contexte : arrêt de l'amlitélimab en dermatite atopique le 24/07 (-2,1 %, à 74,75 €) |
| 30/07 | Résultats Schneider Electric S1 | Thème électrification (watchlist potentielle) |
| 30-31/07 | Résultats SocGen, Crédit Agricole | Lecture santé bancaire FR / spread OAT |

## Août 2026

| Date | Événement | Impact |
|---|---|---|
| 31/07 | Résultats Cameco (BPA attendu 0,26 $, -49 %) | Thème uranium/énergie IA (veille, spot ~85,8 $/lb) |
| Début août | Ouverture « Corriger ma déclaration » impots.gouv.fr | Régularisation 3916-bis si compte ouvert ≤ 2025 |
| 26/08 | **Résultats Nvidia T2** | NVDA = 22 % du portefeuille — le rendez-vous du mois |
| **07/08** | **Premiers résultats autonomes de Mobility Global (MBGL, NYSE)** — avant bourse, call 8h ET | Chasse CTO 27/07 : spin-off CARFAX de S&P Global, vendeurs FORCÉS (fonds S&P 500 non éligibles), ~11,6x EBITDA vs 18-22x les comparables. Entrée conditionnelle : cours ≤ 21 $ **ET** EBITDA aj. ≥ 175 M$ **ET** organique CARFAX ≥ +3 % **ET** guidance FY26 donnée. Test décisif : cash-flow opérationnel / EBITDA ajusté (levier 2,6x post-spin) |
| 27/08 | **Résultats S1 IBA (IBAB, Bruxelles, PEA)** — cash-flow, marge, langage PanTera (lire en diff vs S1 2025) | Chasse profonde 27/07 : goulet actinium-225 — ⚠️ thèse RÉFUTÉE par l'Avocat (C010), suivi documentaire seulement |
| ~~02/08/2026~~ → **02/12/2027** | 🔴 **AI ACT — LE CATALYSEUR « HAUT RISQUE » A ÉTÉ REPORTÉ DE 16 MOIS** | **Correction majeure (chasse tech 03/08).** Le **Digital Omnibus on AI** — règlement **(UE) 2026/1744**, adopté par le Parlement le 16/06 et le Conseil le 29/06, **publié au JOUE le 24/07/2026, en vigueur le 27/07** — repousse les obligations « haut risque » **Annexe III** (recrutement, éducation, scoring de crédit) du **02/08/2026 au 02/12/2027**. Annexe I (IA embarquée) → **02/08/2028**. Haut risque du secteur public → 02/08/2030. **Toute thèse bâtie sur une « vague de dépense de conformité IA à partir d'août 2026 » (certification, audit, gouvernance de modèles) vient de perdre 16 mois — par un texte publié il y a dix jours. C'est un vent de FACE, pas un vent arrière.** Journalisé pour que ce catalyseur ne réapparaisse jamais sous sa forme périmée. *(Ce qui s'applique bien depuis le 02/08/2026 : application générale + obligations de transparence de l'art. 50 — divulgation chatbot, marquage des contenus générés.)* Sources : communiqué du Conseil de l'UE du 29/06/2026 + convergence de 6 cabinets |
| **02/12/2026** | AI Act — interdiction imagerie intime non consentie / CSAM + fin de la transition sur le marquage des contenus IA | **Seule échéance AI Act rapprochée qui subsiste** après le report |
| **22/09** | **Résultats S1 complets SEMCO Technologies (ALSEM, Euronext Growth Paris, PEA)** | Chasse tech 03/08 : **écartée par T2 + T1 + T6**. Fabricant d'*electrostatic chucks* (mandrins qui maintiennent le wafer), fournisseur de rang 2 des équipementiers. CA S1 **19,9 M€ (+19,9 %)**, carnet **+30 %** [MONO-SOURCE], objectifs 2028 **confirmés et non relevés**. ⚠️ **Le tueur de fond est T6** : l'actionnaire de contrôle **ECM Technologies a cédé 10,8 % du capital à 45,00 € le 21/05/2026** (50 M€, placement accéléré) — *ce n'est pas un vendeur forcé, c'est l'initié le mieux informé qui révèle son prix de réserve*. Le 28/07 n'était qu'un **CA seul** : ni marge, ni cash-flow. Le 22/09 est la 1ʳᵉ vérification du **cash-flow face au capex** (automatisation + nouvelle usine) et de la marge EBIT > 40 % visée. **Ancrage naturel de réexamen : 45 €** |
| **05/08** | **Résultats S1 Heineken (HEIA, Amsterdam, PEA)** | Univers émergents-PEA (`univers-emergents-pea.md`, groupe C) : ~45-50 % d'exposition émergente estimée ; Afrique/Moyen-Orient à **+15,7 % de CA et +62 % de résultat opérationnel** en 2025. Lecture documentaire, aucun dossier ouvert |
| **12/08** | **Résultats S1 Sipef (SIP, Bruxelles, PEA)** | Univers émergents-PEA, **groupe B — le gisement** : 100 % des actifs en Indonésie/PNG/Côte d'Ivoire mais ventes facturées Suisse 34,3 % / Singapour 10,1 %, donc **structurellement mal classée par les screeners**. ⚠️ Titre déjà à son plus haut historique (101,40 €, ⅔ d'un mois de poche offensive pour UNE action) et flottant réduit. **À instruire, pas à acheter** |
| **Fin août** | **Résultats S1 Mota-Engil (EGL, Lisbonne, PEA)** — réf. 27/08/2025 | Univers émergents-PEA, **groupe A** : **78 % du CA consolidé émergent** (Afrique 2 129 M€ +22 %, LatAm 2 006 M€ −33 %), backlog 16,2 Md€, ticket **4,67 €** — le meilleur profil de l'univers. Priorité n°1 à instruire : liquidité réelle et structure de dette d'un contract miner |
| **Fin août** | **Résultats S1 Ageas (AGS, Bruxelles, PEA)** — réf. 27/08/2025 | Univers émergents-PEA, **groupe C** : **52 % du RÉSULTAT opérationnel net vient d'Asie** (860 M€ sur 1 650 M€), 26 M de clients asiatiques. Difficulté d'instruction : **JV non consolidées** → tester le cash qui remonte réellement à Bruxelles |
| **08/09** | **Résultats S1 Rubis (RUI, Paris, PEA)** | Univers émergents-PEA : 87 % du CA hors Europe développée. ⚠️ Dossier écarté le 31/07 (récit de gouvernance issu d'un site SEO, démenti par l'AG du 10/06) — suivi documentaire |
| **06/08** | **Résultats S1 SBM Offshore (SBMO, Euronext Amsterdam, PEA)** — carnet Directional post-SEAP, marge Turnkey, cash-flow | Chasse émergents 31/07 : **candidate structurelle**, pas un signal. C'est le seul grand pure-player capex émergent identifié en zone PEA (N.V. néerlandaise, ~32,7 € au 31/07, capi 5,41 Md€ — prix réconcilié par capi ÷ 165,3 M titres). **Écartée aujourd'hui par T1** (+57 à +97 % sur un an, haut de fourchette 52 sem. 20,80-37,34 €) **et T2** (contrats FPSO SEAP-I/II Petrobras signés le 29/05, ~7,8 Md$, largement diffusés ; guidance 2026 déjà relevée au T1). **À lire pour constituer la fiche, pas pour acheter.** Le chiffre décisif est **le COÛT du carnet** : un carnet record avec un cash-flow Turnkey qui ne suit pas = drapeau T4. Réexamen sur repli marqué avec fondamental intact |
| **22/09** (après clôture) | **Résultats S1 COMPLETS Sidetrade (ALBFR, Euronext Growth Paris, PEA)** — marge, résultat, cash-flow (calendrier officiel émetteur) | Chasse FR 30/07 : piste ÉCARTÉE par T2 (le CA S1 du 21/07 a fait +11,3 % dès le 22/07, ~+22 % en 8 jours — dossier couru, découvert 8 jours trop tard). Le 21/07 était un **CA seul** : ni marge ni cash-flow → T4 non vérifiable, or le point décisif d'un SaaS en accélération commerciale est le COÛT des bookings record (S&M vs CF opérationnel). **Réouverture SEULEMENT si** : cours ≤ ~180 € (sous le niveau pré-annonce) **ET** marge opérationnelle S1 en progression **ET** cash-flow qui suit les bookings. Freins : action ~217 € sans fractionnement en PEA (≈ 1,5 mois de poche offensive pour 1 titre), liquidité Growth non mesurée, drapeau structurel agents IA (~234 Md$ de dépense logicielle exposée d'ici 2030, Gartner) |
| **20/10** (après clôture) | CA T3 2026 Sidetrade | Confirme ou infirme la durabilité du record de prises de commandes (ARR T2 +168 %) |

## Chasse profonde 27/07 — jalons découverts (hors surveillances actées)

| Échéance | Événement | Signal |
|---|---|---|
| Sept. 2026 (date à confirmer) | Résultats S1 Séché (SCHP, Paris, PEA) — 1ʳᵉ quantification PFAS/boues ? EBITDA +5-10 % tenu ? | Marché de destruction PFAS créé par la circulaire du 27/04/2026 (en instruction) |
| ~Nov. 2026 | T3 Stalprodukt (Varsovie) — 1er trimestre plein sous sauvegardes acier UE (01/07/2026) | GOES/transformateurs — achetabilité PEA non résolue : radar d'apprentissage seulement |
| ~2029 | Montée en capacité commerciale PanTera (Ra-226 photonucléaire) + usine TerraPower Philadelphie | Jalon long du goulet Ac-225 |
| Post-2026 | Montée de la dépense PFAS eau potable UE (lag 3-5 ans, ~3,6 Md€ d'ici 2036 — Bluefield) | Thème structurel |

## Jalons santé récoltés (chasse du 28/07)

| Échéance | Événement | Intérêt |
|---|---|---|
| ~fin sept./oct. 2026 | Décision de la Commission européenne sur l'obicetrapib (avis CHMP positif du 24/07) | Milestones Menarini pour NewAmsterdam Pharma (Nasdaq → CTO, PFU 31,4 %) — veille seulement |
| S2 2026 | Lecture phase 2 amlitélimab en maladie cœliaque (Sanofi) | Seule valeur résiduelle d'un actif que le marché vient d'écrire à zéro |
| Fin T3 2026 | Sortie de la cell therapy chez Lakefront (ex-Galapagos, Amsterdam/Bruxelles, PEA) — one-off 125-175 M€ | Purge le bruit comptable ; capi ~1,68 Md€ vs trésorerie guidée 1,975-2,050 Md€ (VE négative) mais ⚠️ cash-burn et gouvernance = drapeaux |
| Fin T4 2026 | Dépôt de NDA FDA d'Abivax (obefazimod, colite ulcéreuse) | Jalon ; thèse NON rouverte au prix actuel (+1 700 % en 2025) |

## Septembre 2026

| Date | Événement | Impact |
|---|---|---|
| 10/09 | **BCE** (~93 % proba hausse à 2,50 %) | Taux euro, valeurs domestiques FR |
| 15-16/09 (à confirmer) | FOMC | Macro globale |
| 21/09 | **Reclassement FTSE du Vietnam en « émergent »** | Watchlist XFVT — catalyseur daté |
| ~24/09 | Sommet Trump-Xi attendu | Tech US-Chine, semi, émergents |

## Fin 2026 - 2027

| Échéance | Événement | Impact |
|---|---|---|
| Novembre 2026 | **Expiration de la trêve commerciale Chine-USA** (Busan) | Risque macro majeur identifié |
| **Sept-oct 2026 (rumeur : 23/10, ticker ANTH)** | **IPO Anthropic** — S-1 déposé 01/06, réunions investisseurs en cours (MS/GS/JPM, 24/07) ; valo Série H ~965 Md$ | Watchlist — analyser le S-1 public dès parution sur EDGAR ; règle : JAMAIS le jour 1 (cf. SPCX -47 % vs pic) |
| Mai 2027 | **Grèce : EM → Marchés Développés MSCI, en UNE SEULE ÉTAPE** (et non graduellement) — annoncé le 23/06/2026, effet à la revue d'indice de mai 2027 | ⚠️ **Effet de flux net probablement NÉGATIF, à rebours de l'intuition** : le pays sort d'indices EM où son poids est significatif pour entrer dans des indices DM où il sera minuscule. Un « upgrade » n'est pas une bonne nouvelle de flux. Vérifié sur communiqué MSCI IR (23/06/2026) — chasse émergents 31/07 |
| 2027 | IPO OpenAI probable (> 1 T$ visé) | Watchlist |
| 2027 | IPO Databricks évoquée | Veille |
| Continu | Levée Mistral ~20 Md€ (en négociation 06/2026) | Veille tech FR |
| Trimestriel | Revue de composition CAC 40 (Euronext) | Base de connaissances |
| Saisonnier | Saisons de résultats : oct-nov (T3), fév-mars (annuels), avr-mai (T1), juil-août (S1) | Fenêtres de briefs renforcés |

## Conditions de marché à surveiller (non datées, seuils du mandat)

- Brent **> 100 $ durable** → scénario réduction de voilure (cf. mandat)
- Spread OAT-Bund **> 90 pb durable** → alerte valeurs domestiques FR
- FOMC : passage effectif à une **hausse** de taux → re-pricing global
- DXY : cassure sous ~98 → vent favorable émergents (renforcer l'idée Inde)
