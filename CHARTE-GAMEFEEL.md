# Charte Game Feel — Drinkin

Référentiel pour évaluer et améliorer la sensation de jeu de l'app.
Synthèse des bonnes pratiques d'interfaces mobiles et de « juice » de jeu
(micro-interactions, feedback multi-sensoriel, célébrations graduées).

## 1. Principes

1. **Réactivité d'abord.** Toute pression doit produire un retour en < 100 ms.
   Une animation ne doit jamais retarder l'effet d'une action, elle l'habille.
2. **Multi-sensoriel.** Chaque action importante combine au moins deux canaux :
   visuel + haptique (+ audio quand il existera). Les canaux racontent la même chose.
3. **Cycle complet.** Une interaction réussie suit 4 temps :
   *anticipation* (press-down, léger recul) → *action* (l'effet) →
   *résolution* (le résultat s'affiche) → *célébration* (proportionnée à l'enjeu).
4. **Hiérarchie des célébrations.** Petit gain = floaty/pulse ; jalon = confetti ;
   victoire finale = fireworks. Jamais l'inverse : la grosse artillerie doit rester rare.
5. **Discrétion.** Un feedback se sent plus qu'il ne se regarde. Pas d'anneaux
   lumineux ni de flashs : préférer un léger growth (scale ≤ 1.06), un éclat bref.
6. **Le spectateur est un joueur.** En ligne, celui qui ne joue pas doit VOIR
   l'interaction de l'acteur (écho de clic), pas seulement son résultat.
7. **Respect.** `prefers-reduced-motion` désactive le non-essentiel. Le contenu
   (questions, cartes) n'est jamais sacrifié à un effet.

## 2. Barèmes de timing

| Usage | Durée |
|---|---|
| Press state, écho de clic | 150–350 ms |
| Transition d'écran | 200–300 ms |
| Apparition de résultat (drop/flip) | 300–500 ms |
| Célébration jalon | 600–900 ms |
| Attente réseau visible | loader dès 300 ms |
| Retenue d'état pour lisibilité (online) | ≤ 350 ms |

## 3. Composants du système

- **Press states** : `.btn/.iconbtn/.chip/.gamerow:active` (clay, translateY) +
  filet générique `#app button:active{scale:.97}` pour les boutons custom.
- **Haptique** : `haptic(tap|ok|win|fail)` — tap délégué sur tout bouton
  (throttle 90 ms), patterns dédiés pour résultat/échec/victoire.
- **Écho réseau** : growth discret du bouton de l'acteur chez les autres
  (`ghostPress`, composite add) ; pastille libellée si le bouton est masqué ;
  état suivant retenu ~350 ms pour voir le clic avant la conséquence.
- **Annonces** : turn-toast (changement de tour), floaty (gorgées), citedBanner.
- **Célébrations** : burstConfetti (jalons), fireworks (victoires de partie).
- **Attente** : showLoader/hideLoader réseau, GHOST/bandeaux de déconnexion.

## 4. Audit (état au 2026-07-29)

| Élément de la charte | État |
|---|---|
| Press state sur tous les boutons | ✅ (générique ajouté) |
| Haptique systématique sur pression | ✅ (déléguée ajoutée) |
| Écho de clic pour spectateurs | ✅ growth + pastille |
| Turn toast / bannière de tour | ✅ |
| Célébrations graduées | ✅ confetti/fireworks |
| Loaders réseau | ✅ |
| Reduced motion | ✅ |
| Audio | 🚫 exclu par choix produit (voir §5) |
| **Tension avant résultat** (roulement pour FTD, verdict Pyramide) | ❌ — P2 |
| **Mise en scène des séries** (« 3 d'affilée ! ») | ❌ — P2 |
| Transitions directionnelles (hiérarchie de navigation) | ➖ fade seul — P3 |
| Skeletons de chargement d'images | ➖ tiles ont un fond, pas de shimmer — P3 |

## 5. Prochaines priorités

> **Décision produit — pas d'audio.** Drinkin est une app de soirée : jouer un
> son couperait la musique de l'enceinte (ducking iOS/Android). Le
> multi-sensoriel repose donc sur visuel + haptique uniquement.

1. **P2 — Tension** : 600 ms de « suspense » (pulse + haptique croissante)
   avant les verdicts à fort enjeu (FTD dernière tentative, MENTEUR de la
   Pyramide, photo-finish PMU).
2. **P2 — Séries** : compteur de streak visible et célébré (bus sans faute,
   purple enchaîné).
