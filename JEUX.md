# Jeux — Règles & mécaniques

> Catalogue des jeux de l'app (mécaniques **libres de droit**, habillage et textes **maison**).
> Sert de base d'implémentation. Voir les maquettes dans `mockups/` (demo-games, demo-cartes, demo-v5).

Légende gorgées : 🍺 = 1 gorgée. « Cul sec » = finir son verre.

-----

## A. Jeux de cartes (paquet de 52)

### 1. Le Bus  *(ex « La Montée »)*
4 manches, gorgées croissantes, le joueur devine :
1. **Rouge ou Noir** — la couleur de la carte → raté = 1 🍺
2. **Plus ou Moins** — au-dessus / en-dessous de la précédente → 2 🍺
3. **Intérieur ou Extérieur** — entre les deux cartes déjà tirées, ou dehors → 3 🍺
4. **L'enseigne** — ♠ ♥ ♦ ♣ → 4 🍺

Bords : égalité de valeur = perdu ; carte pile sur une borne = perdu. Reshuffle auto quand le paquet est bas.

### 2. La Pyramide  *(bluff)*
- On dispose une pyramide de cartes face cachée (rangées de 5→1). Chaque joueur reçoit une main (3–4 cartes) qu'il regarde sans la montrer.
- On retourne les cartes de la pyramide une par une. Valeur de la rangée = nombre de gorgées (rangée du bas = 1, jusqu'au sommet = 5).
- Qui possède une carte de **même valeur** que celle retournée peut **distribuer** les gorgées correspondantes — **en bluffant** (on peut prétendre l'avoir).
- Si quelqu'un te traite de bluffeur et que tu mens → **tu bois double**. Si tu disais vrai → l'accusateur boit double.

### 3. King's Cup  *(= « Roi des cons », alias Ring of Fire)*
Cartes en cercle autour d'un verre central. Chaque valeur = une action :
- **As** : Cascade (tu bois, le suivant suit…)
- **2** : Toi — tu désignes qui boit
- **3** : Moi — tu bois
- **4** : Les filles boivent · **5** : Cul (toi) · **6** : Les gars boivent
- **7** : Ciel (dernier à lever la main boit) · **8** : Binôme · **9** : Rime · **10** : Catégorie
- **Valet** : invente une règle · **Dame** : Question Master · **Roi** : verse dans le verre central — le **4ᵉ Roi** le boit (cul sec).

### 4. Fuck the Dealer  *(Niquez le donneur)*
- Un **donneur**. Le joueur doit **deviner la valeur** de la prochaine carte.
- **1er essai** : si faux, le donneur dit « plus haut » ou « plus bas ». **2e essai** avec l'indice.
- 2 essais ratés → le joueur boit (écart entre sa 2e réponse et la vraie carte, ou 2 🍺 forfaitaires).
- S'il trouve, c'est le **donneur** qui boit. On tourne de donneur quand le paquet est épuisé.

### 5. PMU  *(course hippique)*
- Les 4 **As** = les chevaux, alignés au départ. 6 cartes face cachée forment la piste (les « obstacles »).
- On retourne le paquet : chaque carte fait **avancer** le cheval de son enseigne d'une case.
- Quand tous les chevaux ont dépassé un obstacle, on le retourne → le cheval de cette enseigne **recule**.
- Chacun **parie** sur une enseigne avant le départ. Cheval perdant → tu bois ; gagnant → tu distribues.

### 6. Purple
- Une carte est posée. Tu prédis la suivante : **Plus haut**, **Plus bas**, ou **Purple** (= même valeur).
- Faux → tu bois (1 🍺). **Purple** réussi = jackpot, tu distribues 3 🍺. Enchaîne pour multiplier (x2, x3…) ou s'arrête.

### 7. Tape la carte  *(réflexe / Snap)*
- On retourne les cartes au centre à tour de rôle. Quand deux valeurs identiques se suivent (ou une figure), **le plus rapide à taper** gagne ; le plus lent boit.

-----

## B. Jeux de questions

### 8. Vérité ou Bois
- Une question s'affiche pour le joueur dont c'est le tour : il **répond franchement** ou **boit**.
- 4 rounds progressifs (du soft au gros dossier). Contenu : `content/verite-ou-bois.ts` (108 questions).

### 9. Je n'ai jamais
- Un « Je n'ai jamais… » s'affiche. **Qui l'a déjà fait boit.** Tirage sans répétition.

### 10. Tu préfères
- Deux options A / B. Chacun vote ; les **minoritaires boivent** (variante : qui hésite trop boit).

-----

## C. Règles transverses

- **Mode 1 téléphone** : on se passe l'appareil, tout en local/offline.
- **Mode multi (room)** : tout le monde voit la même carte/question en même temps (seed partagé + synchro temps réel — voir RECHERCHE-TECHNIQUE.md).
- **XP** : chaque partie rapporte des points → niveau du joueur (seule gamification, voir profil).
- **18+** : avertissement à l'entrée, jouer responsable.
