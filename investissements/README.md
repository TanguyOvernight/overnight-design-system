# Suivi d'investissements

Espace de travail pour le suivi du portefeuille de Tanguy et le conseil
d'investissement au quotidien. Horizon : **mi-long terme, 5-7 ans**. Univers
principal : **CAC 40 / valeurs françaises** et **marchés émergents**.

## Comment ça marche

- Demander « comment vont mes investissements ? » déclenche le brief quotidien
  (méthodo dans le skill `suivi-investissements`, recettes de recherche dans le
  skill `actu-marches`).
- Les décisions et analyses sont journalisées dans `journal/` pour garder la
  mémoire entre les sessions.

## Structure

```
investissements/
├── README.md                        ← ce fichier
├── portefeuille/
│   └── portefeuille.md              ← positions actuelles (à remplir)
├── journal/                         ← un fichier par brief/décision
└── base-connaissances/
    ├── principes-investissement.md  ← méthodologie et règles du mandat
    ├── marches-2026.md              ← état des lieux marchés (daté)
    └── watchlist.md                 ← valeurs suivies non détenues
```

## Règles du mandat

1. Horizon 5-7 ans : pas de cash out sauf gros risque de perte durable.
2. Claude conseille et argumente ; Tanguy décide.
3. Aucun chiffre non vérifié le jour même pour une décision.
4. Chaque recommandation expose le risque autant que le potentiel.
5. Ceci n'est pas du conseil en investissement agréé (CIF/AMF) — les décisions
   importantes méritent un second avis professionnel.

## Maintenance

Les données de `base-connaissances/marches-2026.md` sont **datées** : elles
donnent le contexte, mais tout chiffre servant une décision doit être
revérifié au moment de la décision. Rafraîchir le fichier quand l'écart avec
la réalité devient significatif (typiquement une fois par mois).
