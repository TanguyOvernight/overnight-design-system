# Lecture visuelle pour les prochains rendus

Cette note transforme les références disponibles en décisions de direction d'image.
Elle s'appuie sur les dix images du ZIP, dont les détails du robot, du vêtement et du personnage
bleu ont aussi été examinés individuellement. Les vingt pages ArtStation restent des sources
à compléter visuellement ; leur statut exact figure dans [ARTSTATION.md](ARTSTATION.md).

## Ce que montrent les images disponibles

| Références | Observation visuelle | Application aux prochains visuels |
| --- | --- | --- |
| `tom-tran-1.webp`, `tom-tran-2.webp` | Les grands panneaux verts, les éléments orange, les jonctions sombres et les pièces métalliques rendent la construction lisible. Le gros plan montre de petites pertes de peinture localisées et des marquages intégrés aux panneaux. | Définir d'abord les grandes masses et le rôle des matériaux. Décrire les jonctions mécaniques, puis ajouter l'usure aux endroits précis qui la justifient. |
| `beast-game-in-14.jpg`, `beast-game-in-f.jpg` | Le gris fait lire la coupe, les coutures, la trame, les plis et le sac. Les grandes déformations du tissu restent plus importantes que sa texture fine. | Pour un personnage vêtu, préciser l'épaisseur et la superposition des pièces, les zones de compression et les points d'attache avant les microfibres. |
| `brx-shortt-romsfacialrigsthumbnail.jpg` | Le cadrage rapproché met en parallèle des identités faciales très différentes ; le décor est presque absent. | Garder une référence d'identité explicite. Pour une planche comparative, fixer cadrage et échelle et contrôler traits, expression et direction du regard. |
| `dragonfly-studio-yordle-male-a-04-publish.jpg` | Plusieurs angles montrent la même silhouette stylisée, avec un fond sombre qui laisse le personnage dominer. | Utiliser les vues complémentaires pour contrôler la construction et les proportions, pas pour ajouter de nouveaux détails incompatibles. |
| Les trois fichiers `rodrigo-estero-miniongiant-*` | Les planches distinguent recherche de concept et présentation du personnage sous plusieurs angles. Le ventre bleu clair, les mains violettes, les ailes et le collier identifient rapidement les grandes parties. | En style cartoon, privilégier masses simples, contours clairs et grands groupes de couleur. Ne pas appliquer automatiquement la micro-usure d'un prop réaliste. |
| `mark-kistanov-8.jpg` | Le premier plan architectural cadre un paysage plus lointain autour d'une étendue d'eau. Le format panoramique porte une lecture d'environnement. | Construire des plans successifs et choisir un point d'intérêt. Adapter le cadrage à l'environnement plutôt que d'utiliser par défaut une présentation de produit isolé. |

## Méthode de préparation

1. **Intention.** Dire ce que l'image doit montrer : identité, silhouette, qualité de matière,
   construction, ambiance ou comparaison de vues.
2. **Références affectées.** Associer chaque image choisie à une fonction précise. Une référence
   de tissu ne détermine pas automatiquement la palette ; une référence de caméra ne détermine
   pas l'identité du personnage.
3. **Caméra et pose.** Fixer cadrage, hauteur du regard, orientation, échelle du sujet et posture.
   Contrôler les recouvrements qui cachent mains, accessoires ou jonctions importantes.
4. **Formes et matériaux.** Décrire les grandes masses, les assemblages et les finitions avant
   les rayures, fibres et inscriptions.
5. **Lumière.** Donner une direction, une douceur et un niveau de contraste cohérents avec le
   sujet. Préserver les détails utiles dans les ombres et les hautes lumières.
6. **Contrôle.** Examiner d'abord la silhouette en petit, puis les détails à taille normale.
   Corriger un axe à la fois en rappelant les éléments à préserver.

## Structure d'un brief d'image

```text
Usage et mode :
Sujet original :
Référence A — rôle et caractéristiques à reprendre :
Référence B — rôle et caractéristiques à reprendre :
Éléments à préserver entre variantes :
Pose, regard et interaction :
Caméra, cadrage et format :
Grandes formes et assemblages :
Matériaux et palette :
Usure localisée, si pertinente :
Éclairage et arrière-plan :
Éléments à éviter :
```

## Points de vigilance pour les planches

- Une référence stylisée n'impose pas ce style à toute la collection : le brief principal garde
  son défaut réaliste PBR à légèrement stylisé, sauf demande explicite.
- Une créature volontairement en vol n'a pas les mêmes critères d'ancrage qu'un véhicule posé
  au sol. L'intention physique doit être explicite.
- Une planche générée en plusieurs vues doit être vérifiée visuellement ; son existence ne
  prouve pas la cohérence d'un modèle 3D.
- Les images générées de wireframe, de textures ou de LOD sont des illustrations si aucun
  maillage ou matériau source n'a été fourni. Elles ne constituent pas des mesures de production.
- Préserver les crédits visibles des références. Les prochaines créations doivent garder leur
  propre identité et ne pas reprendre les logos des œuvres de référence.

## Complément ArtStation

Les neuf nouveaux liens élargissent la collection à des personnages, accessoires fonctionnels,
mechas, véhicules, formes stylisées, chaussures et bâtiments, selon les titres et descriptions
indexés. Ne pas déduire leurs lumières, leurs palettes, leurs matériaux ou leurs angles de caméra
tant que les images correspondantes n'ont pas été vues. `Thunderbolt` et `1L4z68` restent à
identifier visuellement.

## Référence prioritaire pour les formats : JwedwA

[Tanguy désigne ce projet](https://www.artstation.com/artwork/JwedwA) comme une référence très
complète de présentation, montrant plusieurs formats de rendu et des textures. Ce statut vient
de son indication ; le contenu visuel du projet n'a pas encore pu être vérifié ici.

Lors de sa récupération, analyser en priorité :

- l'ordre des images et la progression entre vue principale, détails et vues techniques ;
- les cadrages, marges, fonds et échelles utilisés d'une planche à l'autre ;
- les types de cartes réellement présentés et leur relation avec le rendu final ;
- les légendes et informations qui aident à lire le travail sans encombrer les images ;
- les éléments constants qui font reconnaître le même objet dans chaque format.

En attendant cette lecture, les modes du brief utilisateur restent la base de travail. Ne pas
attribuer au projet des formats, textures ou étapes qui n'ont pas été observés.
