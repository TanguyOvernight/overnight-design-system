# Cahier des charges — App de jeux à boire

> Document de cadrage. À garder à jour. Sert de base pour chercher les bons skills Claude
> et pour briefer n’importe quel outil/agent qui bossera sur le projet.

-----

## 1. Vision en une phrase

Une app mobile **native** de jeux à boire, au design **classe mais avec de gros éléments cliquables** (utilisable bourré, sans rater ses taps), pensée pour **deux modes de jeu** : un seul téléphone qu’on se passe, ou plusieurs téléphones synchronisés où **tout le monde voit la même chose en même temps**.

-----

## 2. Public & contexte d’usage

- **Qui** : groupes d’amis, couples, soirées. 18+.
- **Où** : en soirée, donc faible attention, faible précision motrice, faible patience.
- **Conséquence design directe** : zéro friction, gros boutons, peu de texte, lecture instantanée, aucune action fine (pas de petits sliders, pas de menus imbriqués).

-----

## 3. Les jeux (contenu)

### 3.1 La Montée (jeu de cartes) — PRIORITAIRE, déjà prototypé

Suite de 4 manches, gorgées croissantes :

1. **Rouge ou Noir** — deviner la couleur → 1 gorgée si raté
1. **Plus ou Moins** — la carte est-elle au-dessus/en-dessous de la précédente → 2 gorgées
1. **Intérieur ou Extérieur** — entre les deux cartes déjà tirées, ou en dehors → 3 gorgées
1. **Le Signe** — deviner l’enseigne (♠♥♦♣) → 4 gorgées

Règles de bord : égalité de valeur = perdu ; carte pile sur une borne (int/ext) = perdu. Paquet de 52, reshuffle auto quand il reste peu de cartes. Compteur de gorgées affiché, reset au joueur suivant.

### 3.2 Les Questions — PRIORITAIRE, déjà prototypé

Moteur de questions classées par **ambiance**, du soft au piquant :

- **Connaître l’autre** — apprendre à se connaître
- **Deep** — introspection, vulnérabilité
- **Trash** — chaud, cru, gênant
- **Confiance** — révélations, secrets, tester le lien

Exigences de contenu :

- Questions **100% originales** (pas de copie d’apps existantes type Tozz — risque juridique).
- Orienté **deep / trash / confiance** : c’est l’identité de l’app, pas des questions génériques.
- Volume cible : **40 à 50 questions par ambiance** minimum pour la v1 (extensible).
- Tirage **aléatoire sans répétition** dans une session.

### 3.3 Jeux à ajouter ensuite (backlog, tous domaine public)

- **Je n’ai jamais**
- **Tu préfères**
- **Le plus susceptible de…**
- (autres mécaniques classiques, à habiller avec du contenu maison)

> Important : les *mécaniques* de jeux à boire ne sont pas protégeables. Ce qui est protégé,
> c’est la formulation et l’habillage d’une app concurrente. Donc : on réimplémente les
> mécaniques connues, mais **tout le texte et le design sont à nous**.

-----

## 4. Modes de jeu (le cœur du projet)

### 4.1 Mode « 1 seul téléphone » (pass-the-phone)

- Tout tourne en local, **sans réseau**.
- On se passe le téléphone entre joueurs.
- Doit fonctionner **hors-ligne** intégralement.
- C’est le mode par défaut / fallback si pas de connexion.

### 4.2 Mode « plusieurs téléphones » (room synchronisée)

- Un joueur **crée une partie** → obtient un **code de room** (ex. 4 lettres).
- Les autres **rejoignent avec le code**.
- **Tous les écrans affichent la même question / la même carte en même temps.**
- Quand quelqu’un avance (question suivante, carte suivante), **tout le monde avance en synchro**.
- À définir : qui peut avancer ? (option A : seul l’hôte ; option B : n’importe qui ; option C : le joueur dont c’est le tour). → *recommandation : commencer par « l’hôte avance », le plus simple et le plus robuste.*
- Gestion de la présence : voir qui est dans la room, gérer les départs/reconnexions.

> C’est ce mode qui détermine le choix technique (backend temps réel). Voir RECHERCHE-TECHNIQUE.md.

-----

## 5. Exigences UX / Design

**Principe directeur : « classe mais BIG ».** Élégant, sombre, premium — mais chaque cible tactile est énorme.

- **Boutons** : pleine largeur ou demi-largeur, hauteur ≥ 64px, texte ≥ 18px, bien espacés (pas de taps accidentels).
- **Hiérarchie** : une seule action principale évidente par écran.
- **Lisibilité bourré** : fort contraste, peu de texte par écran, pas de lecture longue.
- **Feedback immédiat** : chaque tap réagit (animation, changement d’état visible).
- **Esthétique** : ambiance nuit / intime / premium. Typo display à caractère (serif élégante) + typo corps lisible. Accents dorés / rouge profond. Éviter le look « app IA générique » (pas de dégradé violet sur blanc).
- **Navigation** : plate, 1-2 niveaux max. Toujours un retour évident.
- **Orientation** : portrait uniquement (téléphone en main, en soirée).

-----

## 6. Hors périmètre v1 (à noter pour ne pas se disperser)

- Comptes utilisateurs / login (le mode room marche avec un simple code, pas de compte).
- Achats in-app / monétisation.
- Statistiques persistantes entre soirées.
- Mode tablette / desktop.

-----

## 7. Critères de « v1 réussie »

- [ ] Les 2 jeux (Montée + Questions) jouables sur device réel.
- [ ] Mode 1 téléphone 100% offline.
- [ ] Mode multi-téléphones : créer/rejoindre une room avec un code, synchro fiable de la question/carte affichée.
- [ ] UI « big & cliquable » validée en condition réelle (test soirée).
- [ ] 40+ questions par ambiance, 100% originales.
- [ ] Build installable sur iPhone (au minimum via Expo / TestFlight).
