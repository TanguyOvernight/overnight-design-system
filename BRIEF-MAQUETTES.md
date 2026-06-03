# Brief d'interface — App de jeux à boire « Overnight »

> **But de ce document** : tout ce qu'il faut pour produire des **maquettes mobiles complètes**
> de l'app. Tu peux le donner tel quel à un outil de design (ChatGPT, etc.). Chaque écran est
> décrit avec son rôle, son contenu, sa hiérarchie et ses états. Démo jouable de référence :
> **https://s.chat3d.ai/overnight-jab**

---

## 1. Le produit en bref
- App mobile **native** (portrait only), **jeux à boire** entre potes, **18+**.
- **2 modes** : « 1 seul téléphone qu'on se passe » (offline) et « plusieurs téléphones synchronisés » (room avec code, tout le monde voit la même chose).
- Principe UX directeur : **utilisable en soirée, un peu bourré** → gros boutons, peu de texte, **une seule action évidente par écran**, lecture instantanée.

---

## 2. Direction artistique (à respecter sur toutes les maquettes)
**Style : flat, doux, premium — la douceur vient des couleurs, pas des effets.**
- ❌ Pas de glow / halos / néons. ❌ Pas de dégradés criards. ❌ Pas d'emojis dans l'UI.
- ✅ Aplats de couleur, **cartes blanches arrondies**, ombres douces, espacements généreux.

### Palette
| Rôle | Hex |
|------|-----|
| Fond (dégradé violet) | `#7663E8` → `#5A44C6` |
| Carte blanche (contenu) | `#FFFFFF` |
| Carte violette (mise en avant) | `#7C63EC` → `#5E46CC` |
| Texte sur blanc (titre) | `#241B40` |
| Texte sur blanc (secondaire) | `#807A9C` |
| Indigo (texte/CTA foncé) | `#4F38C0` |
| **Jaune CTA accent** | `#FFC93C` (texte `#3A2A06`) |
| Accent menthe | `#46C9A0` · corail `#FF7E8B` · ambre `#F0A93C` · bleu `#4F86E0` · lavande `#B9ACF4` |
| Carte à jouer rouge / noir | `#E0392B` / `#16161F` |

### Typographie
- **Titres / chiffres** : `Plus Jakarta Sans` (700–800), letter-spacing négatif léger.
- **Corps / UI** : `Inter` (400–600).
- Hiérarchie : Titre écran ~24–30px · sous-titre ~16px · corps 14–15px · label/caption 11px majuscules.
- **Texte des questions de jeu : très gros** (28–34px, Plus Jakarta 700) sur carte blanche.

### Système d'espacement & formes
- Marge écran : **24px**. Gaps entre blocs : 16–22px. Padding cartes : 18–24px.
- Rayons : cartes **22–24px**, boutons **16px**, pills/chips **999px (pleine pilule)**, cartes à jouer 12–14px.
- Ombres douces type `0 12px 30px rgba(35,18,80,.18)` — **jamais** d'ombre colorée lumineuse.
- Cibles tactiles : boutons **≥ 58px de haut**, texte bouton ≥ 16px.

### Composants
- **Bouton primaire** : fond blanc, texte indigo (sur fond violet). **Bouton accent** : jaune `#FFC93C`. **Bouton ghost** : translucide blanc 15%.
- **Avatars = initiales** (1 lettre) dans une pastille de couleur unie (pas de photo par défaut, pas d'emoji).
- **Pills / chips** : pleine pilule, fond blanc 14%.
- **Segmented control** : onglets dans un rail arrondi, l'actif en blanc.
- **Navbar basse** : 3 onglets (Accueil, Classement, Profil), **icônes ligne** (stroke 2px), actif en jaune.
- **Carte à jouer** : fond blanc, valeur en haut-gauche + bas-droite (pivotée), grande enseigne au centre, rouge/noir.

---

## 3. Navigation
```
Accueil (joueurs) ─► [Créer / Rejoindre]
   ├─ Salon (code + QR + joueurs)  ─► Lancer
   ├─ Catalogue des jeux ─► écran de jeu (selon le jeu)
   ├─ Classement
   └─ Profil
```
Navigation plate, 1–2 niveaux. Bouton retour « ‹ » en haut à gauche partout. Portrait uniquement.

---

## 4. Écrans à maquetter (hors jeux)

### 4.1 Accueil / Joueurs
- Titre app « Overnight » + sous-titre « Le jeu à boire entre potes. »
- Champ **prénom** + bouton **+** pour ajouter ; liste des joueurs ajoutés (avatar initiale + nom + supprimer).
- CTA jaune **Créer une partie**, bouton ghost **Rejoindre**.
- Navbar basse.

### 4.2 Salon (mode multi)
- En-tête « Salon ».
- **Carte violette** : « CODE DE LA PARTIE » + code 4 lettres énorme (ex. FOXY) + bouton « Afficher le QR code ».
- Section « Autour de la table · N » : liste des joueurs (avatar + nom + tag « Hôte » / « Prêt »).
- CTA jaune **Lancer la partie**.

### 4.3 Catalogue des jeux
- En-tête « Nos jeux ».
- 2 groupes : **Jeux de cartes** / **Jeux de questions**, chacun une carte blanche contenant des lignes (tuile de couleur + nom + 1 ligne de desc + chevron).
- Jeux : Le Bus, Palmier, Fuck the Dealer, PMU, Purple, L'Échelle / Vérité ou Bois, Je n'ai jamais, Tu préfères.

### 4.4 Classement
- En-tête « Classement » + segmented (Ce soir / Semaine / Toujours).
- Bandeau corail « #4 — Tu fais mieux que 60% des joueurs ce soir. »
- **Podium 2-1-3** (blocs colorés, avatar au-dessus, couronne sur le 1er, score dessous).
- Liste des suivants (rang + avatar + nom + score) en cartes blanches.

### 4.5 Profil
- Avatar initiale (grand) + nom + « Membre depuis 2026 ».
- **Carte violette 3 colonnes** : Niveau / Points / Rang.
- **Barre d'XP** : « Niveau 7 » + « 260 XP avant le niv. 8 » + barre.
- 2 mini-cartes stats : Soirées jouées / Victoires.
- **Gamification = uniquement XP + niveau + classement.** Pas de badges, pas de boutique, pas de coffre.

---

## 5. Les jeux (principe + flow + écrans à maquetter)

> Pour chaque jeu : maquetter **chaque état** listé. Barre du haut commune : « ‹ » + nom du jeu + pill contextuelle. Bandeau « Au tour de [Nom] ».

### 5.1 Le Bus (cartes)
4 manches, gorgées croissantes. États :
1. **Manche en cours** : indicateur 4 tiers, carte(s) déjà tirée(s), question (« Rouge ou Noir ? » / « Plus ou moins ? » / « Intérieur ou extérieur ? » / « Quelle enseigne ? »), boutons de réponse (Rouge/Noir ; Plus/Moins ; Intérieur/Extérieur ; 4 enseignes).
2. **Révélation** : la carte tirée + bandeau Gagné/Raté + « Continuer » ou « Au suivant ».
Gorgées : manche 1→1, 2→2, 3→3, 4→4. Réussir les 4 = distribuer.

### 5.2 Palmier (= King's Cup, avec mini-jeu d'adresse) ⭐ NOUVEAU
Chaque carte = une règle (voir §6). **Spécificité : épreuve de dextérité** — on empile la carte sur la « bouteille » sans faire tomber le palmier. États :
1. **Pioche** : bouteille + pile de cartes déjà posées (le « palmier ») + « Tirer une carte ».
2. **Règle** : la carte tirée + sa règle + « Poser sur le palmier ».
3. **Équilibre (mini-jeu)** : une carte **oscille horizontalement** au-dessus de la pile ; bouton **POSER** ; il faut taper quand elle est centrée.
4. **Résultat** : « En équilibre ! » (la pile monte) ou « Le palmier s'effondre ! » (bois 3 gorgées, pile remise à zéro).
> En multi-device : le mini-jeu se joue sur le téléphone du joueur dont c'est le tour.

### 5.3 L'Échelle (1–10 inversé) ⭐ NOUVEAU
Une carte de 1 à 10 est tirée ; **les autres** donnent des exemples/contextes pour ce chiffre (ex. « une femme chauve » = un 2) ; le joueur **devine son chiffre** ; il **boit l'écart** entre sa réponse et la carte. États :
1. **Intro** : « [Nom] ne doit PAS regarder. Les autres regardent. » + « Tirer la carte ».
2. **Carte visible (pour les autres)** : la carte 1–10 + consigne de faire deviner.
3. **Saisie de la réponse** : sélecteur 1 à 10.
4. **Résultat** : carte révélée + « Écart de N → bois N gorgées » (ou « Dans le mille ! → distribue 3 »).

### 5.4 PMU (cartes — course)
Pari sur une enseigne (♠♥♦♦) ; on tire des cartes, le cheval de l'enseigne avance ; premier à la ligne d'arrivée. États :
1. **Pari** : 4 grosses cases enseignes.
2. **Course** : 4 couloirs avec les 4 chevaux (jetons) qui avancent + « Tirer une carte ».
3. **Arrivée** : « ♥ gagne ! » → gagné (distribue) / perdu (bois).

### 5.5 Purple (cartes)
Carte posée → prédire **Plus haut / Plus bas / Purple (même valeur)**. Faux = bois ; Purple réussi = distribue 3 ; chaîne possible. États : carte actuelle + 3 boutons ; révélation carte suivante + résultat.

### 5.6 Fuck the Dealer (cartes)
Deviner la valeur de la carte du donneur, 2 essais + indice (plus haut / plus bas). États : carte face cachée + sélecteur de valeur (A→R) + indice + essais restants ; révélation + résultat (joueur boit l'écart, ou le donneur boit si trouvé).

### 5.7 Vérité ou Bois (questions) ⭐ avec choix de durée
Une question s'affiche ; le joueur **répond** ou **boit**. **Avant de jouer, on choisit la longueur de la partie : 50 / 100 / 200 / sans limite.** 10 rounds thématiques (du soft au gros dossier). États :
1. **Choix de durée** : « Combien de questions ? » → 50 / 100 / 200 / Sans limite.
2. **Jeu** : compteur « 12 / 100 » en pill, sélecteur de round (tiers d'intensité), titre du round, **grosse question** sur carte blanche, boutons « Je bois (1) » / « Je réponds ».
3. **Fin** : « Partie terminée — N questions jouées » → Classement / Retour.

### 5.8 Je n'ai jamais (questions)
« Je n'ai jamais… » → « Je l'ai fait (bois) » / « Jamais ». États : énoncé + 2 boutons.

### 5.9 Tu préfères (questions)
Deux options A / B en gros boutons ; on choisit ; au suivant. États : option A, « ou », option B.

---

## 6. Règles « Palmier » (mapping des cartes) — version maison
- **As** : Cul sec / Cupidon (binôme).
- **2–5** : Rouge → tu distribues (valeur) · Noir → tu prends (valeur).
- **6** : Histoire vraie ou fausse (les autres devinent).
- **7** : « Dans ma valise » (mémoire).
- **8** : Thème (catégorie).
- **9** : Invente une règle.
- **10** : Action ou vérité.
- **Valet** : 2 gorgées pour le voisin de droite.
- **Dame** : 1 gorgée pour tout le monde.
- **Roi** : Bouffon (quelqu'un prend tes gorgées jusqu'au prochain roi).

---

## 7. Contraintes UX rappel
- Portrait only. Gros tap targets (≥58px). Une action principale / écran. Contraste élevé.
- Flat, doux, sans glow, sans emoji UI, avatars en initiales.
- Feedback immédiat à chaque tap (changement d'état visible, légère animation).

---

## 8. Ce qu'on attend des maquettes
1. **Un écran par état** listé ci-dessus (haute fidélité, format iPhone portrait ~402×874).
2. Respect strict de la **palette**, de la **typo** et du **système d'espacement** du §2.
3. Cohérence entre tous les écrans (mêmes composants : boutons, cartes, pills, navbar).
4. Livrer en images (ou Figma) **nommées par écran** (ex. `palmier-equilibre`, `verite-duree`).

> Renvoie les maquettes : je les analyse et je les **implémente dans la démo jouable**.
