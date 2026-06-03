# Direction artistique — App de jeux à boire

> Identité visuelle de l’app. Complète CAHIER-DES-CHARGES.md (§5 UX/Design).
> Parti pris : **taverne médiévale-fantaisie moderne, façon Hearthstone — chaleureux,
> tactile, premium mais léger et grand public (2026).**

-----

## 1. Le concept directeur : « la table de taverne »

Hearthstone est construit autour d’une seule métaphore physique : une **boîte à bijoux /
boîte à malice en bois** posée sur **une table de taverne**, qu’on ouvre pour jouer. Tout
le reste de l’UI en découle (panneaux de bois, enseignes qui se balancent, or réservé aux
moments spéciaux). Cette cohérence par l’objet est ce qui rend l’interface immersive et
mémorable. *(Source : GDC « Hearthstone: How to Create an Immersive UI ».)*

Pour une app de jeux **à boire**, la métaphore tombe parfaitement : **on est attablés à la
taverne, on ouvre un coffret de jeu**. C’est notre « seed » visuel :

- L’app = **un coffret en bois** posé sur **une table de taverne** (bois sombre, lueur de
  bougie/feu, chopes).
- **La Montée** = un jeu de **cartes de taverne** ornées (cadre doré, dos gravé).
- **Les Questions** = des **parchemins / lettres scellées à la cire** qu’on déplie.
- Les 4 ambiances = 4 **gemmes / sceaux** de couleur (voir §3).
- Le compteur de gorgées = une **chope qui se remplit** (jauge de mousse).
- Le code de room = une **enseigne gravée** qui se balance.

> **La leçon clé de Hearthstone** : leurs premières cartes étaient « trop ornées » et
> nuisaient à la lecture. Ils ont simplifié pour ne garder que l’essentiel (valeur, titre,
> art). **Notre règle = ornement riche AUTOUR, cœur ultra-lisible AU CENTRE.** Ça rejoint
> directement l’exigence « lisible même bourré » du cahier des charges.

-----

## 2. Ton & garde-fous (« léger / grand public 2026 »)

On veut **fantaisie chaleureuse, pas dark fantasy**. Hearthstone, pas Dark Souls.

| ✅ On veut | ❌ On évite |
|-----------|-----------|
| Taverne **cosy**, accueillante, lumière chaude | Donjon glauque, gore, gothique sombre |
| Or, bois, parchemin, gemmes, mousse de bière | Acier froid, pierre grise, ambiance « grimoire interdit » |
| Formes **rondes**, boutons charnus, rebonds | Pointes, runes agressives, typo « metal band » |
| Clins d’œil **humoristiques**, mascotte sympa | Premier degré « lore épique » pesant |
| Ornement **maîtrisé** (cadre riche, centre clean) | Surcharge décorative qui tue la lisibilité |
| Inclusif, fort contraste, gros targets | Petites fioritures, texte fin doré sur bois |

**Tendances 2026 qu’on suit** : HUD épuré + **micro-interactions** physiques très soignées,
éléments **3D/relief tactiles**, **accessibilité d’emblée** (contraste élevé, gros targets,
mode lisibilité). *(Sources : Pixune, Tubik, Muzli — UI jeux mobile 2026.)*

-----

## 3. Palette

Ambiance « **nuit de taverne** » : fonds bois sombre + bois chaud, accents **or** (le
matériau « précieux », réservé aux moments forts), **braise/rouge** pour l’action et les
gorgées, **gemmes** colorées pour catégoriser. Hearthstone code d’ailleurs ses surfaces en
« dirt → wood → bronze → gold », l’or étant réservé au spécial : on reprend cette logique.

### Surfaces (le « bois »)
- **Nuit Taverne** (fond) `#160E0A` — brun quasi-noir, chaud.
- **Bois Sombre** `#2A1A10` — panneaux, barres.
- **Bois Noyer** `#3A2518` — cartes/coffret au repos.
- **Bois Chêne** `#5A3A22` — surfaces éclairées, hover.
- **Parchemin** `#F2E2C4` — fond des questions/cartes (zone de lecture claire).
- **Parchemin Vieilli** `#E3CCA0` — variantes, bordures de parchemin.

### Métaux & accents (réservés)
- **Or** `#E8B44A` (highlight `#F6D67E`, profond `#B8862E`) — cadres précieux, CTA majeur,
  victoire. **L’or = spécial, jamais partout.**
- **Bronze** `#A9742F` — trims secondaires, bordures de cartes courantes.
- **Braise** `#E0552F` (profond `#CB360F`) — action « boire », danger, perdu. *(Reprend le
  Red Overnight `#CB360F` — voir §7.)*

### Gemmes d’ambiance (catégories des Questions)
- **Connaître l’autre** → Émeraude `#2E9E6B` — doux, accessible, « on apprend à se connaître ».
- **Deep** → Améthyste `#7B4DD6` — introspectif, profond. *(Proche du Purple Overnight `#7B24F5`.)*
- **Trash** → Rubis-braise `#D43A2F` — chaud, cru, provoc.
- **Confiance** → Topaze `#E0922F` — ambré, intime, secrets.

### Texte
- Sur bois sombre : **Crème** `#F4E8D0` (primaire), **Crème estompée** `#C9B591` (secondaire).
- Sur parchemin : **Encre** `#2A1B12` (primaire), **Encre douce** `#5C4634` (secondaire).
- **Contraste ≥ 4.5:1 partout** (lisibilité bourré + WCAG).

-----

## 4. Typographie

Deux fonts, rôles stricts (comme le design system Overnight) — mais **display à caractère
médiéval, corps moderne et chaleureux** pour la légèreté.

- **Display / titres : `Cinzel`** (700–800). Capitales gravées, romaines, **régal mais
  propre et moderne** — l’équilibre exact « fantaisie sans ringardise ». `Cinzel Decorative`
  pour le seul logo / écran d’accueil.
  - *Alternative plus douce* : `Cormorant Garamond` (élégante) si Cinzel paraît trop solennel.
- **Corps / UI : `Nunito Sans`** (400–700). Sans-serif **humaniste légèrement arrondie**,
  très lisible, chaleureuse, grand public — parfaite pour des taps rapides en soirée.
  - *Alternative neutre* : `Inter` si on veut plus « tech/moderne ».

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Cinzel+Decorative:wght@700;900&family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
```

| Rôle | Font | Taille | Poids | Note |
|------|------|--------|-------|------|
| Logo / Hero | Cinzel Decorative | 40–64px | 900 | Écran d’accueil, moment de marque |
| Titre écran | Cinzel | 30–40px | 800 | Une par écran (action unique) |
| Carte / Question | Cinzel ou Nunito 800 | 24–30px | 700–800 | Cœur lisible, centré, fort contraste |
| Bouton | Nunito Sans | **≥ 18px** | 800 | Charnu, gros (cf. cahier §5) |
| Corps | Nunito Sans | 16–17px | 400–600 | Court, peu de texte par écran |
| Label / Caption | Nunito Sans | 13px | 700 | Majuscules, tracking +1px |

> On garde la règle Overnight : **display jamais pour le corps, corps jamais pour le display.**

-----

## 5. Composants (« big & cliquable », version taverne)

Toujours : **boutons ≥ 64px de haut, texte ≥ 18px, une action principale par écran,
feedback immédiat** (cahier §5). On les habille en objets physiques.

### Bouton primaire — « gemme / bois doré »
- Pleine ou demi-largeur, hauteur **64–72px**, radius **18–22px** (charnu, arrondi).
- Fond bois chêne `#5A3A22` **ou** la gemme de l’ambiance, **liseré or** `#E8B44A` 2px,
  léger biseau (highlight haut clair, ombre basse).
- Texte Nunito 800, crème, ≥ 18px, léger relief (text-shadow bas sombre).
- **Press** : enfonce (translateY +2px), assombrit, **petit rebond/over-rotation au relâché**
  (la « physicalité » Hearthstone via Reanimated).

### Bouton secondaire — « bois gravé »
- Bois sombre, liseré bronze, pas d’or (l’or reste pour le primaire/spécial).

### Carte de jeu (La Montée)
- **Cadre orné** doré/bronze (coins ouvragés), **centre clair et net** : grande valeur +
  enseigne lisibles. Dos de carte gravé (motif lune/taverne).
- Tirage = **flip 3D** + petit rebond ; pose sur un « tapis » de feutre sombre.

### Panneau Question
- **Parchemin** clair sur la table, coins légèrement cornés, éventuel **sceau de cire** de la
  couleur de l’ambiance qui « se brise » à l’ouverture.
- Texte encre, centré, gros, aéré.

### Sélecteur d’ambiance
- 4 **gemmes/sceaux** (émeraude, améthyste, rubis, topaze), gros, en grille 2×2, chacun avec
  son icône (cœurs, œil, flamme, clé/cadenas), label dessous.

### Compteur de gorgées
- **Chope** qui se remplit (jauge de mousse) ou pièces d’or qui tombent ; chiffre énorme.
- Reset au joueur suivant = la chope se vide avec une petite anim.

### Code de room
- **Enseigne de bois gravée** (les 4 lettres en Cinzel, or), qui **se balance** doucement.
- Présence des joueurs = petits **jetons/avatars** alignés sous l’enseigne.

-----

## 6. Mouvement & feedback

La signature Hearthstone = **physicalité** : rebond, sur-rotation, balancement, objets qui
réagissent. C’est notre couche de « game feel », à faire avec **`react-native-reanimated` +
Gesture Handler**.

- **Tap** : enfoncement immédiat + rebond élastique (`withSpring`) au relâché.
- **Transition d’écran** : la carte/le parchemin **glisse et bascule** légèrement, pas de cut sec.
- **Tirage de carte** : flip 3D + atterrissage qui rebondit.
- **Enseignes / chope** : oscillation lente en idle (vie de l’objet).
- **Son (option v1.1)** : bois qui claque, pièce, verre — discret, désactivable.
- **Garde-fou perf** : animations natives (worklets), 60fps ; rester sobre pour ne pas
  fatiguer en soirée (pas de clignotement, respect « reduce motion »).

-----

## 7. Lien avec le design system Overnight

Cette app a une **identité propre, volontairement distincte** du système Overnight (qui est
minimal/corporate, blanc + dégradé rose-violet — pensé B2B studio). Ici c’est un **produit
grand public ludique**, donc taverne chaude et tactile.

**Ponts conservés** pour garder un air de famille :
- **Rouge Overnight `#CB360F`** → devient notre **Braise** (action « boire »).
- **Purple Overnight `#7B24F5`** → proche de l’**Améthyste** (ambiance Deep).
- **Logo lune malicieuse** : la lune colle parfaitement à « Overnight » et à la nuit de
  taverne — peut devenir la **mascotte** (lune farceuse gravée sur le coffret / dos de carte).
- Discipline héritée : **deux fonts à rôles stricts**, ornement maîtrisé, contraste élevé.

-----

## 8. Skills Claude UX/UI — résultats de recherche (juin 2026)

> Recherche demandée pour le volet UX/UI. Voir aussi RECHERCHE-TECHNIQUE.md §4 (mise à jour).
> Détails d’installation et priorisation : **RECHERCHE-TECHNIQUE.md §4**.

En résumé, les plus pertinents pour ce projet (du plus prioritaire au complément) :

1. **`frontend-design`** (Anthropic, officiel) — sort l’UI du « look IA générique », pile
   notre crainte du cahier. `/plugin install` depuis `anthropics/claude-code`.
2. **Expo Skills** (officiel Expo, dont `building-native-ui`) — UI native, Router, styling,
   anims. `/plugin marketplace add expo/skills`.
3. **`react-native-design`** (wshobson/agents) — StyleSheet/flexbox/theming + Reanimated +
   Gesture (= exactement notre couche « physicalité »).
4. **react-native-skills** (gigs-slc, 130+ règles Callstack/Vercel/Expo) — best practices RN.
5. **UI/UX Pro Max** — base de styles/palettes/pairings de polices/règles UX.
6. **Web Interface Guidelines** (Vercel) — audit accessibilité/correction.

-----

## 9. Mini brief réutilisable (pour un agent/outil)

> « UI d’app de jeux à boire, **fantaisie-taverne façon Hearthstone, chaleureuse et légère,
> grand public 2026**. Fond nuit de taverne (`#160E0A`), panneaux **bois** (`#3A2518` /
> `#5A3A22`), zones de lecture en **parchemin** clair (`#F2E2C4`, encre `#2A1B12`). Accent
> **or** (`#E8B44A`) réservé aux moments forts + cadres ; **braise** (`#E0552F`) pour l’action
> ‘boire’. Catégories en gemmes : émeraude/améthyste/rubis/topaze. Titres en **Cinzel**
> (800), corps en **Nunito Sans** (chaleureux, lisible). Boutons **charnus ≥ 64px**, radius
> ~20px, liseré or, biseau, **feedback tactile à ressort** (Reanimated : enfonce + rebond).
> **Ornement riche autour, cœur ultra-lisible au centre.** Une seule action évidente par
> écran. Portrait only. Contraste ≥ 4.5:1. »

-----

## Sources

- [GDC — Hearthstone: How to Create an Immersive UI](https://gdcvault.com/play/1022036/Hearthstone-How-to-Create-an)
- [Hearthstone Wiki — Design & development](https://hearthstone.fandom.com/wiki/Design_and_development_of_Hearthstone)
- [Pixune — Best Mobile Game UI Designs (2026)](https://pixune.com/blog/best-examples-mobile-game-ui-design/)
- [Tubik — UI Design Trends 2026](https://blog.tubikstudio.com/ui-design-trends-2026/)
- [Muzli — Mobile App UI Patterns 2026](https://muz.li/blog/whats-changing-in-mobile-app-design-ui-patterns-that-matter-in-2026/)
- [Anthropic — Frontend Design plugin](https://claude.com/plugins/frontend-design)
- [Expo — Skills for AI agents](https://docs.expo.dev/skills/)
- [wshobson/agents — react-native-design](https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/react-native-design)
