# Options & logique d'interface — par jeu

> Toutes les **options de configuration** et la **logique d'écran** dont chaque jeu a besoin.
> But : que l'interface ait dès le départ les réglages « évidents » (comme le nombre de tours
> des questions). Complète `BRIEF-MAQUETTES.md`. ✅ = déjà dans la démo · 🔜 = à intégrer.

## 0. Pattern commun à tous les jeux
Chaque jeu suit : **[écran d'options] → [écran d'au-tour-de X] → [boucle de jeu] → [fin → classement]**.
Éléments transverses à prévoir sur chaque écran de jeu :
- Bouton **quitter** (‹) → retour catalogue (la partie en cours est abandonnée, le classement de la soirée reste).
- Bandeau **« Au tour de [Nom] »** + avatar.
- **Compteur / progression** (ex. `12 / 100`, manche `2/4`, palmier `5`).
- **Feedback de gorgées** clair (qui boit, combien) — animé idéalement.
- Écran de **fin** → propose « Voir le classement » / « Rejouer » / « Changer de jeu ».

## 1. Options globales de session (au lancement)
- **Joueurs** : ajout/suppression, ordre (= ordre d'ajout), avatar = initiale + couleur. ✅
  - 🔜 mélanger l'ordre, choisir qui commence, genre du joueur (pour les règles « les gars/les filles »).
- **Intensité des gorgées** : Normal ×1 / Costaud ×2 (multiplie toutes les gorgées). ✅
- 🔜 **Mode** : 1 téléphone (offline) / Plusieurs téléphones (room + code). (multi = phase suivante)
- 🔜 **Sécurité** : avertissement 18+, rappel « bois de l'eau », bouton stop la partie.

## 2. Jeux de questions

### Vérité ou Bois ✅
- **Longueur de partie** : 50 / 100 / 200 / Sans limite. ✅ (+ compteur + écran de fin) ✅
- **Rounds inclus** : 10 rounds d'intensité croissante ; sélecteur de round. ✅
  - 🔜 cocher/décocher les rounds à inclure (ex. retirer « non-retour » en soirée familiale).
- Tirage **sans répétition** ✅. 🔜 « passer » une question sans pénalité.

### Je n'ai jamais ✅
- **Longueur de partie** : 20 / 50 / 100 / Sans limite. ✅
- 🔜 niveau (soft / chaud), 🔜 compteur « qui a bu » sur la carte.

### Tu préfères ✅
- **Longueur de partie** : 20 / 50 / 100 / Sans limite. ✅
- 🔜 affichage des **votes** (en multi-device : % qui a choisi A/B, les minoritaires boivent).

## 3. Jeux de cartes

### Le Bus ✅ (logique) — options 🔜
- 🔜 **Nombre de passages** (combien de fois chaque joueur tente le bus) ou « jusqu'à X réussites ».
- 🔜 afficher l'**historique des cartes tirées** (utile pour +/- et intérieur/extérieur).
- Règle de bord : égalité / borne = perdu ✅. Reshuffle auto ✅.

### Palmier (King's Cup + adresse) ✅ — options 🔜
- 🔜 **Difficulté du mini-jeu** (tolérance d'équilibre : Facile / Normal / Costaud, et vitesse d'oscillation).
- 🔜 **Objectif de hauteur** optionnel (ex. atteindre 10 = tout le monde boit).
- 🔜 gorgées en cas d'effondrement (par défaut 3).
- Règles des cartes = mapping « Palmier » (voir `JEUX.md`) ✅.

### Fuck the Dealer ✅ — options 🔜
- 🔜 **Nombre d'essais** : 1 / 2 / 3 (défaut 2).
- 🔜 **Pénalité** : écart entre la réponse et la carte, ou forfait fixe.
- 🔜 **Rotation du donneur** (qui distribue).

### PMU ✅ — options 🔜
- 🔜 **Longueur de course** : Courte (4) / Normale (6) / Longue (9) cases.
- 🔜 **Mise** : nombre de gorgées en jeu (perdant boit / gagnant distribue).
- Pari sur une enseigne ✅.

### Purple ✅ — options 🔜
- 🔜 **Objectif de chaîne** (s'arrêter / continuer pour multiplier).
- 🔜 gorgées du « Purple » réussi (défaut 3).

### L'Échelle (1-10 inversé) ✅ — options 🔜
- 🔜 **Plage** : 1-10 (défaut) / 1-20 (plus dur).
- 🔜 **Multiplicateur d'écart** (l'écart = gorgées ×1 ou ×2) — déjà couvert par l'intensité globale.
- 🔜 en multi-device : la carte s'affiche **uniquement** sur les téléphones des autres (pas celui qui devine).

### Tape la carte ✅ — options 🔜
- 🔜 **Vitesse** : Facile / Normal / Rapide (intervalle de défilement).
- 🔜 **Cible** : figures (V/D/R) / une couleur / une valeur précise.
- 🔜 **Pénalité** : faux départ vs trop lent.

### La Pyramide (bluff) 🔜
- 🔜 **Hauteur de la pyramide** (3 à 6 rangées), **taille de la main**, **gorgées par rangée**.
- 🔜 logique de **bluff** (annoncer / accuser) — surtout pertinente en multi-device.

## 4. Priorités d'implémentation (proposition)
1. ✅ Intensité globale + longueur (Vérité, Jamais, Préfères).
2. 🔜 Options de cartes rapides : essais (Fuck the Dealer), longueur de course (PMU), difficulté (Palmier, Tape la carte).
3. 🔜 Sélection des rounds (Vérité), affichage de l'historique (Le Bus).
4. 🔜 Tout ce qui est lié au **multi-device** (votes, carte cachée, bluff) → avec le backend temps réel.

> Codex : utilise ce doc pour prévoir les **écrans d'options** dans tes maquettes (un par jeu),
> en réutilisant le composant « choix de longueur » (segmenté/boutons) déjà validé.
