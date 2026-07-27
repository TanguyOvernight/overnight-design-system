# Overnight — mise en ligne & mode Online

## 1. Héberger le jeu (lien stable)

Le repo contient déjà `vercel.json` et `netlify.toml`. **Le dossier `demo/` est la
racine du site** (`outputDirectory` / `publish`), pour que les chemins relatifs
(polices, avatars, scripts) résolvent correctement. `/join` sert la même page.

### Vercel — lien direct
1. Ouvre : **https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2FTanguyOvernight%2Fovernight-design-system**
   (ou https://vercel.com/new → *Import Git Repository* → ce repo)
2. **Ne change rien** : `vercel.json` fixe déjà le preset et le dossier de sortie.
   Build command vide, Output directory laissé tel quel.
3. Si tu déploies la branche de dev, choisis `claude/drinking-games-app-spec-4Egty`
   dans *Settings → Git → Production Branch* (sinon merge la PR d'abord).
4. **Deploy** → tu obtiens `https://<projet>.vercel.app`
5. (Optionnel) *Settings → Domains* pour brancher `overnight.chat3d.ai`

### Netlify
1. https://app.netlify.com/start → ce repo
2. Build command : *(vide)* · Publish directory : **`demo`**
3. Deploy

> Vérifié en local en servant `demo/` comme racine : 53 ressources chargées
> (polices, avatars, scripts, manifeste), aucune 404 bloquante.

À chaque `git push`, le site se met à jour tout seul — plus besoin de repinner
un lien githack sur un SHA.

## 2. Activer le mode Online (salons)

Le mode « sur ce téléphone » marche sans rien configurer. Pour les salons
multi-téléphones il faut un projet Supabase (gratuit, ~5 min) :

1. https://supabase.com/dashboard → **New project**
2. Une fois créé : **Project Settings → API**
3. Copie **Project URL** et la clé **anon public**
4. Colle-les dans `demo/config.js` :

```js
window.OVERNIGHT_CONFIG = Object.assign({
  supabaseUrl: 'https://xxxxxxxxxxxx.supabase.co',
  supabaseAnonKey: 'eyJhbGciOi....',
  publicBase: 'https://overnight.chat3d.ai'   // pour que le QR pointe sur le bon domaine
}, window.OVERNIGHT_CONFIG || {});
```

5. `git commit` + `git push` → redéploiement automatique.

> La clé **anon** est publique par conception (elle tourne dans le navigateur).
> Ne jamais mettre ici la clé `service_role`.

Aucune table SQL à créer : on n'utilise que **Realtime** (broadcast + presence),
donc rien à administrer ni à nettoyer.

## 3. Comment ça marche

- **Hôte autoritaire** : celui qui crée le salon fait tourner la logique et
  diffuse l'état. Les autres envoient des *intentions*, l'hôte les valide.
- **Tour de jeu** : seule la personne dont c'est le tour peut agir. Les autres
  voient l'écran en direct avec un bandeau « à X de jouer », inputs désactivés.
- **Reconnexion** : chaque joueur a un identifiant stable en `localStorage`.
  Quelqu'un qui rafraîchit revient à sa place, avec son avatar et son tour.
  Une déconnexion est signalée (pastille grise) mais **ne bloque jamais** la partie.
- **QR code** : généré côté client (`demo/qr.js`), aucune dépendance externe.
