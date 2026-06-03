# Recherche technique — App de jeux à boire

> Synthèse des choix techniques recommandés (état de l’écosystème mi-2026).
> Sert à savoir quels **skills Claude** chercher et quoi installer.

-----

## 1. Stack recommandé

### Framework : Expo (React Native)

- **Pourquoi** : un seul codebase iOS + Android, build sans ouvrir Xcode/Android Studio, le standard pour du natif rapide.
- **Version cible** : **Expo SDK 56** (sorti printemps 2026), qui embarque **React Native 0.85**, **Hermes v1** par défaut, Expo UI stable et un CLI ~5× plus rapide. New Architecture activée par défaut.
- **Langage** : TypeScript.
- **Pourquoi pas du Swift/Kotlin pur** : pas besoin, le jeu n’a aucune contrainte native lourde. Expo couvre tout et va beaucoup plus vite.

### Navigation

- **Expo Router** (file-based routing, intégré à Expo). Suffisant vu la navigation plate.

### Styling / UI

- Au choix :
  - **NativeWind** (Tailwind pour React Native) — pratique si on aime la logique utilitaire, et cohérent avec le prototype web déjà fait.
  - ou **StyleSheet** natif RN — zéro dépendance.
- **Composants gros & accessibles** : utiliser `Pressable` avec de grandes `hitSlop` / paddings, `react-native-reanimated` pour les feedbacks tactiles fluides.
- Polices custom via `expo-font` (charger une serif display + une corps lisible).

### Build / distribution

- **EAS Build** (service de build Expo) → génère les binaires iOS/Android dans le cloud.
- **iOS** : TestFlight pour tester, puis App Store. Compte Apple Developer requis (99 €/an).
- **Android** : Play Console (25 € one-shot).

-----

## 2. Le point critique : la synchro multi-téléphones

Le mode « plusieurs téléphones, tout le monde voit la même question » impose un **backend temps réel**. C’est LA décision structurante.

### Nature du besoin

- État de session **éphémère** : une room, un jeu en cours, un index (quelle question / quelle carte), la liste des présents.
- Pas besoin de stocker durablement grand-chose. C’est du **pub/sub temps réel**, pas de la grosse base de données.

### Option A — Supabase Realtime ⭐ (recommandé)

- Open-source, sur PostgreSQL, **excellente intégration Expo** (souvent citée comme la plus simple à brancher en RN).
- Deux primitives parfaites pour le projet :
  - **Broadcast** : pub/sub éphémère sur un « channel ». Une room = un channel. On diffuse des events (`next_question`, `select_game`, `card_drawn`…) à tous les clients connectés. **Pas besoin d’écrire en base** → idéal pour un état de partie jetable.
  - **Presence** : sait qui est dans la room, gère arrivées/départs/reconnexions automatiquement.
- Bonus : **serveur MCP officiel Supabase** → un agent IA (Claude, Cursor) peut générer le schéma, les policies RLS, etc.
- Free tier généreux.

### Option B — Firebase (Realtime Database / Firestore)

- Toujours **la référence côté mobile** pour le temps réel : sync bas-latence « out of the box », **offline-first plus mature** que Supabase.
- Très simple : on écoute une collection/un nœud, on reçoit les updates.
- Contrepartie : proprio (Google), un peu plus de lock-in.

### Verdict

- **Supabase Broadcast** pour ce projet : l’état est éphémère, le modèle « channel = room » colle parfaitement, et c’est le plus propre à intégrer dans Expo.
- **Firebase** = très bon plan B, surtout si on veut un offline-first ultra-robuste ou si on est déjà dans l’écosystème Google.
- Dans les **deux cas**, le mode « 1 seul téléphone » ne touche pas au réseau : c’est du state local pur (React state / Zustand). Le backend ne sert QUE pour le multi-device.

-----

## 3. Architecture logique proposée

```
app/
  (local)        → mode 1 téléphone : tout en state local, offline
  (room)         → mode multi : create / join via code, sync temps réel
  games/
    montee/      → logique du jeu de cartes (paquet 52, 4 manches)
    questions/   → moteur de questions
shared/
  content/       → données séparées de la logique :
    questions.ts → { connaitre[], deep[], trash[], confiance[] }
    deck.ts      → génération + shuffle du paquet
  ui/            → composants "big & cliquable" réutilisables (BigButton, Card…)
  realtime/      → abstraction backend (Supabase OU Firebase derrière une même interface)
```

**Règle d’or** : garder le **contenu** (questions, règles) et la **logique de jeu** totalement séparés du **transport** (local vs réseau). Comme ça :

- on enrichit les questions sans toucher au reste,
- on peut basculer Supabase ↔ Firebase sans réécrire les jeux,
- la même logique de jeu alimente les deux modes (local et room).

### Modèle de synchro (room)

- État partagé minimal diffusé à tous : `{ jeuEnCours, indexCourant, seed }`.
- Le **seed** sert à ce que tous les téléphones génèrent **le même tirage** (même paquet mélangé, même ordre de questions) à partir d’un nombre aléatoire partagé → tout le monde voit pile la même chose.
- L’hôte émet `next` → l’index s’incrémente chez tous → même écran partout.

-----

## 4. Skills Claude à chercher sur internet

Pour briefer la recherche de skills (agent skills / SKILL.md), voilà les briques à couvrir :

1. **Expo / React Native — scaffolding & structure**
- Créer un projet Expo SDK 56, Expo Router, TypeScript, structure de dossiers.
1. **UI mobile React Native**
- Composants accessibles « gros boutons », Reanimated, gestion des polices custom, thème sombre.
- (chercher aussi : NativeWind si on part Tailwind.)
1. **Backend temps réel**
- Skill Supabase (Realtime Broadcast + Presence + Auth anonyme/room) **ou** skill Firebase (Realtime DB / Firestore).
1. **EAS Build / déploiement**
- Builder pour iOS/Android, TestFlight, soumission stores.
1. **(optionnel) State management**
- Zustand ou équivalent pour l’état local du mode 1-téléphone.

Mots-clés de recherche utiles : `expo skill`, `react native skill claude`, `supabase realtime skill`, `expo router agent skill`, `nativewind skill`, `eas build skill`, `SKILL.md expo react native`.

### Skills trouvés (recherche juin 2026)

Recherche faite. Set recommandé, du plus prioritaire au complément :

| Skill | Éditeur | Couvre | Installation |
|-------|---------|--------|--------------|
| **`frontend-design`** ⭐ | Anthropic (officiel) | Sort l’UI du « look IA générique » — exactement la crainte du cahier (« éviter app IA générique »). | `/plugin marketplace add anthropics/claude-code` puis `/plugin install frontend-design@claude-plugins-official` |
| **Expo Skills** (`building-native-ui`…) ⭐ | Expo (officiel) | UI native, Expo Router, styling, composants, animations, natif. Pile notre stack. | `/plugin marketplace add expo/skills` |
| **`react-native-design`** ⭐ | wshobson/agents | StyleSheet/flexbox/theming/SafeArea + react-navigation + **Reanimated & Gesture Handler** (= notre couche « physicalité » Hearthstone). | `npx skills add https://github.com/wshobson/agents --skill react-native-design` |
| **react-native-skills** | gigs-slc (130+ règles Callstack/Vercel/Expo) | Best practices RN/Expo, FlashList, anims, perf. | `github.com/gigs-slc/react-native-skills` |
| **UI/UX Pro Max** | nextlevelbuilder | Base searchable : 50+ styles, ~97 palettes, font pairings, 99 règles UX (utile pour la DA taverne). | marketplace (`mcpmarket` / GitHub) |
| **Web Interface Guidelines** | Vercel | Audit accessibilité/correction (100+ règles). | marketplace Vercel |

> Note : le skill **NativeWind** mentionné plus haut est couvert par Expo Skills + react-native-design ;
> à ajouter séparément seulement si on tranche pour Tailwind.

**Sources** :
[Anthropic frontend-design](https://claude.com/plugins/frontend-design) ·
[Expo Skills](https://docs.expo.dev/skills/) ·
[wshobson/agents — react-native-design](https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/react-native-design) ·
[gigs-slc/react-native-skills](https://github.com/gigs-slc/react-native-skills) ·
[Snyk — Top Claude skills UI/UX](https://snyk.io/articles/top-claude-skills-ui-ux-engineers/)

-----

## 5. Ce qui existe déjà

- **Prototype web React** (`jeu.jsx`) : logique complète de La Montée + moteur Questions + ~12 questions/ambiance + un parti pris visuel (sombre/premium, serif display).
- **Statut** : sert de **référence de logique et de design**. La logique de jeu se transpose quasi telle quelle en React Native (remplacer `div`/`button` par `View`/`Pressable`, styles inline → StyleSheet/NativeWind).
- **À faire pour le natif** : porter le prototype en Expo, ajouter la couche `realtime/`, étoffer le contenu à 40-50 questions/ambiance.

-----

## 6. Prochaines étapes suggérées

1. Valider le choix backend (Supabase recommandé).
1. Chercher / réunir les skills listés en §4.
1. Scaffolder le projet Expo SDK 56 + structure §3.
1. Porter La Montée + Questions en local (mode 1 téléphone).
1. Ajouter la couche room (Broadcast + seed partagé) pour le multi-téléphone.
1. Étoffer le contenu, tester en condition réelle, builder via EAS.
