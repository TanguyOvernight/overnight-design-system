# Exports GPT Image — Overnight Studio

Dossier de récupération des visuels du site, de leurs prompts et de leurs versions.
**28 images prévues ; 0 export généré pour le moment.**

[Prompts source](PROMPTS-SITE-OVERNIGHT.md) · [Suivi des 28 images](EXPORTS.md) · [Manifest](manifest.json)

## Récupérer les images

Ouvrir la rubrique puis le fichier image ; utiliser **Download raw file** sur GitHub pour
récupérer l’original. Chaque nouvelle version aura un nom distinct. Les fichiers `.prompt.md`
voisins contiendront le prompt réellement utilisé, les références et les ajustements.
Les fichiers apparaîtront ici au fur et à mesure des générations demandées.

| Rubrique | Visuels prévus | Dossier |
| --- | --- | --- |
| Props | 9 | [props](props/) |
| Weapons | 5 | [weapons](weapons/) |
| Vehicles | 5 | [vehicles](vehicles/) |
| Environments | 3 | [environments](environments/) |
| Characters | 6 | [characters](characters/) |

## Organisation

- Exemple : `props/01-crates-v01.png` et `props/01-crates-v01.prompt.md`.
- Conserver l’extension du fichier réellement produit (`.png`, `.webp` ou `.jpg`) ; ne pas
  changer une extension sans conversion demandée. Les noms du manifest sont des bases sans extension.
- Une retouche devient `v02`, puis `v03` ; une version précédente reste disponible.
- Ajouter chaque export dans `files` avec son chemin, sa version, ses dimensions et son empreinte.
  Passer en `generated` quand le fichier est publié ; `approved` attend la validation de Tanguy.

## Ordre et direction artistique

Le fichier source est conservé intégralement. Pour cette série, il prime sur les modèles génériques
[de démarrage](../refs-3d/PROMPTS-PRETS.md). Les images illustrent : aucun texte, aucune annotation,
cote, flèche ou légende ajoutée. Cette règle générale s’applique aussi aux mentions de petits
marquages dans certains prompts. Les légendes restent dans le site.

Les prompts 01–20 sont des commandes indépendantes ; si plusieurs sont demandés, générer une
image par prompt. Les séries **R1 → R2 → R3**, **S1 → S2** et **C1 → C2 → C3** se traitent dans
l’ordre. Réutiliser la première image retenue comme référence d’identité et de design, et l’image
précédente lorsque la transformation en dépend. La mémoire textuelle seule ne suffit pas.

Les rendus de wireframe et de pipeline sont des illustrations. La cohérence des vues et
l’alignement d’un slider restent à contrôler sur les résultats ; ne pas les annoncer comme acquis.
