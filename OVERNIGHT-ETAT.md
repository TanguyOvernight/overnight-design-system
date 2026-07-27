# Overnight — État de l'app (pour audit / retours)

> **But de ce document** : donner à un assistant (ChatGPT / Codex) tout le contexte pour
> auditer l'interface et proposer des améliorations concrètes.
> **Démo jouable (toujours à jour)** : https://s.chat3d.ai/overnight-jab
> **Code** : un seul fichier `demo/index.html` (HTML/CSS/JS vanilla, ~1500 lignes), rendu par
> une mini state-machine `SCREENS[S.screen]()`. Aucune dépendance externe (polices auto-hébergées).
> Repo : `TanguyOvernight/overnight-design-system`, branche `claude/drinking-games-app-spec-4Egty`.

---

## 1. Concept
**Overnight** est une app mobile (jeu à boire entre potes), façon « pass-the-phone » : un seul
téléphone qui tourne. Format **mobile portrait**, plein écran (PWA installable « sur l'écran d'accueil »).

## 2. Direction artistique
- **Fond** : violet nuit sombre en dégradé (`#2A1375 → #34108D → #18084F`) + halo radial + étoiles + palmiers.
- **Surfaces de jeu** : panneaux **violet clair translucides** à contour fade (`.gpanel`), **texte blanc**.
  (Les menus Catalogue / Classement sont eux en panneaux **blancs**.)
- **Boutons** : violet clair par défaut ; **jaune** = action principale/validation ; rouge/noir pour Rouge/Noir.
- **Typographies (auto-hébergées)** :
  - Titres en capitales : **Baloo 2** (gras, rond, « goofy ») — variable `--d`.
  - Titres normaux : **Comfortaa** (rond) — `--f`.
  - Corps / UI : **Nunito** — `--b`.
- **Avatars** : 30 perso « homme » + 29 « femme » (images 3D dans `demo/assets/avatars/`).
  Le **sexe** choisi via l'avatar est une **variable de jeu** (cf. Action ou Vérité).
- Règles DA : pas d'emoji UI, pas de néon/glow, pas de gris/noir sur violet, cartes à jouer propres,
  scènes de jeu codées (pas de gros PNG en fond).

## 3. Parcours / écrans hors-jeu
- **Home** : logo OVERNIGHT (placeholder texte + lune), illustration centrale (placeholder bouteille/
  gobelets/cartes), 2 gros boutons **PARTY MODE** (→ ajout joueurs) et **ONLINE** (à venir).
- **Ajout des joueurs** (Party Mode) : bottom-sheet violette, capsules joueurs (avatar + nom + ✕),
  **icône crayon** sur l'avatar → écran **« Ton avatar »** (grille 3/ligne, toggle Homme/Femme),
  capsule dashed « Ajouter un joueur », CTA jaune **C'EST PARTI**.
  → Les noms/avatars sont **mémorisés** (localStorage). « C'EST PARTI » remet les scores à 0, garde les joueurs.
- **Catalogue** (« Nos jeux ») : header **« Salon de {hôte} »** + avatars empilés + nb joueurs ;
  panneau blanc scrollable, groupes *Jeux de cartes* / *Jeux de questions* ; bottom-nav **Accueil / Classement**.
- **Classement** : onglets (Ce soir / Semaine / Toujours — déco), **podium** (avatars sur 3 blocs), liste triée par gorgées, état vide géré.
- **Badges joueur** : partout où c'est « Au tour de X », on affiche **avatar + pseudo** ; quand une personne
  est citée/devine (ex. L'Échelle), son **avatar s'affiche en gros** (sans doublon de badge).

## 4. Les jeux (mécaniques + état UI)
1. **Le Bus** — pyramide 4 étapes (Rouge/Noir → Plus/Moins → Intérieur/Extérieur → Enseigne), cartes affichées,
   dos rouge SVG. 3 modes au lancement :
   - *Chacun son tour* (multi) : 1 carte/tour, **on garde sa progression même en ratant** (on boit), fin quand chacun a fait ses 4 cartes.
   - *Recommencer* (solo) : le moindre rate renvoie à l'étape 1, jusqu'à réussir les 4 d'affilée.
   - *Solo* : il faut passer l'étape 1 pour continuer ; rater après = boire + passer.
2. **Palmier** (King's Cup) — option **Avec/Sans mini-jeu d'équilibre**. Avec : carte oscillante à poser
   dans une **zone verte** (elle devient verte quand c'est bon), bouteille en CSS, règles par carte (As = Cupidon, etc.).
3. **Fuck the Dealer** — devine la valeur de la carte cachée en 2 essais, indice plus haut/plus bas, sélecteur de valeurs.
4. **PMU** — pari sur une enseigne (4 cartes Pique/Cœur/Carreau/Trèfle), **plateau vertical** : chevaux (As) qui
   montent, **avatars en bas**, plateau **vert pastel**, **ligne d'arrivée pleine largeur**, **cartes médianes**
   face cachée sur le côté qui se retournent et font reculer leur enseigne quand tous les chevaux passent.
   Animation de glissement des chevaux. 1 pari par joueur (chacun son tour).
5. **Purple** — Rouge / Noir / **Purple** (2 cartes : 1 rouge + 1 noir). 3 cartes par tour affichées **en dos coloré**
   (rouge/noir selon la carte). **Cagnotte** de gorgées qui s'accumule ; qui se trompe boit la cagnotte (reset).
6. **L'Échelle** — une carte 1-10 (avec couleur, ex. 3♥) que le joueur ne voit pas ; les autres lui font deviner
   via des exemples « c'est un 10, mais… ». Avatar du joueur **en gros**, puis chips 1-10 pour valider.
7. **Action ou Vérité** *(ex « Vérité ou Bois »)* — **choix d'un thème** avant de lancer :
   *Tout / Soft / Vieux frères / Chaud du cul / Les problèmes / Actions*. Tirage **100% aléatoire** dans le thème.
   Beaucoup de questions **ciblent un joueur précis** (prénom injecté + mini-avatar collé, en violet clair) et
   certaines sont **réservées hommes/femmes** (selon le sexe du joueur courant ou des joueurs présents).
   Boutons « Je bois (1) » / « Je le fais ! ». ~250 questions, multi-thèmes.
8. **Je n'ai jamais** — énoncé en gros sur panneau (accent ambre), « Jamais » / « Je l'ai fait (1) ».
9. **Tu préfères** — 2 grandes cartes A/B ; on **touche une carte = ça passe** au joueur suivant.

## 5. Technique
- Pas de build : `demo/index.html` ouvert tel quel. Polices `.woff2` + images dans `demo/assets/`.
- PWA : `manifest.webmanifest` + meta Apple + icône (croissant). Plein écran en mode installé.
- Persistance : `localStorage` (joueurs/avatars). Scores en mémoire (remis à 0 par partie).
- Pas de mode **Online** réel (nécessiterait un back-end temps réel : salons, vote, « minorité boit »).

## 6. Pistes / questions ouvertes (pour l'audit)
- Cohérence visuelle entre tous les écrans de jeu (densité, hiérarchie, tailles).
- Lisibilité du violet-sur-violet et des cartes sur les panneaux translucides.
- Équilibrage des mécaniques (gorgées, durées, fin de partie) jeu par jeu.
- Onboarding / clarté des règles in-game (faut-il un court rappel par jeu ?).
- Identité visuelle propre à chaque jeu (scènes) vs uniformité.
- Mode **Online** : architecture (salon par code, synchro, votes).
- Écrans manquants : **Profil**, **Salon/Online**, options de partie globales.

> Merci de proposer des améliorations **concrètes et priorisées** (P1 bugs/cohérence, P2 polish, P3 secondaire),
> en respectant la DA ci-dessus.
