# Overnight — mise en ligne & mode Online

## 1. Héberger le jeu (lien stable)

Le repo contient déjà `vercel.json` et `netlify.toml` : la racine du site sert
`demo/index.html`, et `/join` pointe sur la même page (lien d'invitation).

### Vercel
1. https://vercel.com/new → *Import Git Repository* → ce repo
2. Framework preset : **Other** · Build command : *(vide)* · Output directory : *(vide)*
3. Deploy → tu obtiens `https://<projet>.vercel.app`
4. (Optionnel) *Settings → Domains* pour brancher `overnight.chat3d.ai`

### Netlify
1. https://app.netlify.com/start → ce repo
2. Build command : *(vide)* · Publish directory : `.`
3. Deploy

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
