# Démarrage rapide — une demande suffit

Pour les visuels du site, utiliser en priorité les [28 prompts de Tanguy](../exports-gpt-image/PROMPTS-SITE-OVERNIGHT.md).
Les fichiers produits sont à ranger dans [exports-gpt-image](../exports-gpt-image/README.md).


Les cinq modèles sont disponibles sur `codex/refs-3d-overnight`. Les références actuelles
permettent de commencer sans attendre d’autres fichiers.

## Pour Tanguy

Donner **le sujet + le mode + une contrainte importante**, par exemple :

- « Une caisse de ravitaillement sci-fi, beauty studio, accents orange. »
- « Une éclaireuse adulte, personnage réaliste, manteau en tissu usé. »
- « Un fourgon utilitaire abandonné, studio gris, usure discrète. »
- « Un observatoire en ruine, environnement, lumière naturelle. »

Si seul le sujet est donné : BEAUTY, rendu PBR réaliste à légèrement stylisé, fond studio charbon,
palette sobre et un accent. Pour un environnement, conserver une vraie scène avec une composition
lisible. Une question supplémentaire sert uniquement à résoudre une information essentielle
manquante ou des contraintes contradictoires.

[Les cinq prompts](PROMPTS-PRETS.md) · [Catalogue visuel](APERCUS.pdf)

## Préparation par l’assistant

1. Lire le [brief](CONTEXTE-IMAGES-OVERNIGHT.md) et choisir un modèle dans [PROMPTS.json](PROMPTS.json).
   La demande actuelle de Tanguy prime sur les détails des exemples.
2. Conserver le sujet demandé. Affecter à chaque référence un rôle précis : présentation, forme,
   vêtement, matière ou lumière. Ne pas mélanger automatiquement tous les styles.
3. Charger et regarder les vrais fichiers avant leur utilisation. Les chemins du JSON sont
   relatifs à `refs-3d/`. Les six images de `prompt-inputs/` et les trois fichiers réutilisés dans
   `images/uploaded/` suffisent : aucun ZIP à extraire pour ces modèles. Si le dossier local
   n’existe plus dans une nouvelle session, récupérer ces fichiers individuels depuis GitHub.
4. Adapter le prompt : scène, sujet, détails utiles, cadrage, lumière, matières et invariants.
   Image 1 / Image 2 doivent correspondre à l’ordre des fichiers effectivement transmis.
5. Quand Tanguy demande de générer, utiliser l’outil d’image disponible et produire une première
   image. Transmettre les références visuelles au générateur ; une URL dans le prompt ne les
   remplace pas. Ne pas annoncer comme appliqués des réglages de qualité ou résolution non exposés.
6. Examiner silhouette, anatomie ou assemblages, séparation des matières, usure et lumière.
   Corriger d’abord l’écart principal en rappelant les invariants. Comparer les vues entre elles.
7. Garder le prompt final et l’image retenue comme base des déclinaisons : détail, clay, multivue
   ou en contexte, selon le besoin.

## Modèles

| Identifiant | Usage |
| --- | --- |
| PROP-STUDIO | Caisse ou accessoire en studio |
| MECH-STUDIO | Personnage mécanique et assemblages |
| CHARACTER-STUDIO | Personnage vêtu et pose |
| VEHICLE-STUDIO | Véhicule et usure localisée |
| ENVIRONMENT-HERO | Architecture, profondeur et lumière |

Ces modèles sont prêts à être utilisés ; leur qualité sera évaluée sur les premières générations.
JwedwA manque encore à la collection, ce qui n’empêche pas ce démarrage.
