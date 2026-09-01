# Lecture visuelle pour les prochains rendus

Cette note transforme les références disponibles en décisions de direction d'image.
Les liens ouvrent les planches d’aperçu ; les numéros cités désignent les originaux des ZIP.
Pour les consulter en pleine résolution, utiliser `extract_references.py`.
Les 10 premières images ont été examinées, puis les 196 images d’`originaux.zip` ont été
parcourues en planches-contact par projet. Pour les 239 images de `similaires.zip`, la première
et la dernière image de chaque projet ont été vues, ainsi que les planches complètes de six
projets ciblés. Cette lecture sert à sélectionner et comparer des intentions visuelles ; ce n’est
pas un examen individuel de chaque image à pleine résolution. Les index et le manifest
précisent ce qui a effectivement été parcouru.

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

## Lecture des projets originaux : décisions applicables

| Projet et images | Ce qui est visible | Décision pour Overnight |
| --- | --- | --- |
| [Xan — 01 à 08](APERCUS.pdf#page=2) | Silhouette multivue, détails de tête, main et pieds, variantes de couleurs ; les images suivantes placent le robot dans une scène sombre. | Valider les proportions en lumière lisible avant de produire une scène cinématique. Préserver panneaux, articulations et marquages entre les vues. |
| [Bird and Fish — 04 à 09](APERCUS.pdf#page=3) | Sculpt gris, détails de vêtement, face/dos texturés ; 09 sépare full shader, albedo, normal, roughness et metallic. | Utiliser un cadre et un angle comparables pour expliquer les matières. Garder la coupe du vêtement lisible avant d’ajouter fibres et salissures. |
| [Chevrolet Suburban](APERCUS.pdf#page=7) | Peinture rouge délavée, corrosion, poussière et feuilles ; vues extérieures, intérieur et présentations techniques. | Donner une cause et une localisation à chaque trace. Conserver des surfaces calmes pour éviter un vieillissement uniformément bruité. |
| [Nissan Taxi — 01 à 11](APERCUS.pdf#page=11) | Rue habitée, puis vues studio du véhicule, personnage d’échelle et détails du phare et de la roue. | Produire deux familles : présentation lisible et situation crédible. Garder les proportions du véhicule constantes. |
| [Thunderbolt](APERCUS.pdf#page=13) | Studio, dessus/dessous, piste et scènes de déplacement avec poussière. | Choisir explicitement entre lecture de construction et sensation de vitesse ; ne pas masquer les détails à valider par du flou. |
| [Solar Express](APERCUS.pdf#page=10) | Duo officier/mech, même famille bleu/blanc, portraits, vues arrière et développement de concept. | Pour une paire, régler l’échelle relative, les silhouettes et la palette commune ; chaque sujet doit rester identifiable seul. |
| [Nutcracker LMG](APERCUS.pdf#page=6) | Rouge, or et noir ; nombreux cadrages de détail et variantes colorées. | Réserver les accents aux zones qui guident le regard. Une variante de couleur ne doit pas réinventer la construction. |
| [Binocular concepts](APERCUS.pdf#page=9) | Plusieurs modèles de jumelles, présentations sur fond clair avec angles secondaires. | Distinguer une comparaison de concepts d’une rotation du même objet ; les légendes doivent lever cette ambiguïté. |
| [Salomon Quest](APERCUS.pdf#page=15) | Vues produit, lacets, coutures, semelle et empiècements sur fond gris clair. | Séparer tissu, caoutchouc et renforts par la forme et les reflets, sans exagérer chaque texture. |
| [Last Call — 01 à 22](APERCUS.pdf#page=16) | Bâtiments, téléphones, enseignes, fenêtres, tuiles et modules isolés dans une présentation homogène. | Pour un environnement, montrer le résultat puis la famille d’éléments qui le construit. Aligner échelle, fond et lumière dans les catalogues. |
| [Clesseia](APERCUS.pdf#page=17) | Ville stylisée, bâtiments et modules architecturaux, jardins et variations de lumière. | Organiser les masses, les parcours et les valeurs avant la décoration. Les couleurs guident les zones de lecture. |
| [Cottage teapot oven — 01 à 04](APERCUS.pdf#page=19) | Objet entier, deux détails, puis maillage et atlas ; chaleur intérieure sur fond brun. | Un petit accessoire peut raconter un usage par sa forme et une lumière locale, sans décor chargé. |

## Mise en scène : caméra, lumière et matières

Ces consignes sont une méthode proposée à partir des observations, pas des réglages techniques
extraits des fichiers des artistes. Les focales, puissances de lampes et paramètres de shader ne
peuvent pas être déduits précisément de ces images.

- **Hero studio.** Vue trois-quarts montrant les parties distinctives ; garder de l’air autour de
  la silhouette et une ombre de contact lisible si l’objet est posé. Choisir une perspective
  modérée pour une présentation de produit, plus accentuée seulement si l’intention le demande.
- **Personnage.** Lire d’abord ligne d’action, répartition du poids et espace entre les membres.
  Dégager mains et accessoires importants. Fixer identité du visage, costume, taille des mains,
  proportions et signes distinctifs avant toute déclinaison de pose.
- **Détails.** Chaque gros plan doit apporter une information : couture, assemblage, contraste
  de finition ou histoire d’usage. Conserver assez de voisinage pour comprendre où il se situe.
- **Éclairage.** Décrire la direction et la taille apparente de la source principale, la douceur
  des ombres et le remplissage nécessaire. Une lumière de contour sert à détacher une forme ;
  elle ne doit pas dessiner systématiquement un liseré artificiel autour de tout le sujet.
- **Surfaces.** Définir les groupes de matières : peinture, métal exposé, caoutchouc, tissu, peau,
  verre. Faire varier la netteté et l’étendue des reflets. Sur les matériaux sombres, préserver
  une différence de valeur avec le fond. Réserver l’émission aux éléments qui en ont une raison.
- **Usure.** Placer les pertes de peinture sur des zones de contact, la poussière dans des creux
  et les coulures suivant la gravité. Les inscriptions vieillissent avec leur support.
- **Environnement.** Choisir un point d’intérêt, des plans de profondeur et un chemin de regard.
  Contrôler d’abord les grandes ombres avec des volumes simples. Les accessoires enrichissent
  ensuite la scène sans rivaliser tous avec le sujet principal.

Le fond sombre du site Overnight et son violet sont des contraintes de présentation possibles,
pas une obligation de teinter chaque œuvre en violet. Le niveau de stylisation reste celui du
brief : réaliste PBR à légèrement stylisé par défaut, cartoon seulement si demandé.

## Construire une série de planches

Une série efficace apporte une information nouvelle à chaque image. La séquence suivante est
une proposition de travail, ajustable au sujet ; elle n’est pas l’ordre universel des portfolios.

| Étape | Contenu | Référence disponible |
| --- | --- | --- |
| 1 — BEAUTY | Image principale, sujet entier et intention claire | [Mailbox 01](APERCUS.pdf#page=20) |
| 2 — DÉTAILS | Deux à trois plans qui expliquent forme et matière | [Mailbox 02](APERCUS.pdf#page=20), [Taxi 10](APERCUS.pdf#page=11) |
| 3 — MULTIVIEW | Face/dos/trois-quarts, même échelle et fond | [Bird and Fish 08](APERCUS.pdf#page=3) |
| 4 — CLAY / SCULPT | Volumes et arêtes sans la distraction des textures | [Mailbox 06](APERCUS.pdf#page=20), [Exorcist 03](APERCUS.pdf#page=33) |
| 5 — WIREFRAME / UV | Maillage ou densité de texture si les données réelles existent | [Mailbox 11](APERCUS.pdf#page=20), [Mailbox 12](APERCUS.pdf#page=20), [Console 04](APERCUS.pdf#page=29) |
| 6 — TEXTURE BREAKDOWN | Canaux identifiés, angle identique pour comparer | [Bird and Fish 09](APERCUS.pdf#page=3) |
| 7 — IN CONTEXT / VARIANTE | Usage, ambiance ou lumière alternative | [Mailbox 14](APERCUS.pdf#page=20), [Thunderbolt](APERCUS.pdf#page=13) |

Un LOD désigne une simplification réelle d’un modèle : aucune preuve d’une série de LOD
validée n’a été établie dans cette lecture. Une comparaison high-poly / low-poly bake comme
[Thistle Warrior 04 à 06](APERCUS.pdf#page=34) n’est pas automatiquement une série de LOD.

Les rendus générés avec GPT Image peuvent illustrer une intention de clay ou de wireframe,
mais ne démontrent pas une topologie, des UV, un nombre de polygones ou des textures réellement
exploitables. Pour un portfolio technique, ces informations doivent provenir d’un vrai asset 3D.

## Apports des projets similaires

- [Old Bones](APERCUS.pdf#page=32) juxtapose image finale, références, blockout, détails de
  sculpture et catalogue d’éléments. Le blockout 04 conserve l’ouverture et les masses de lumière
  essentielles : c’est une référence concrète pour valider une composition avant les textures.
- [Sacred Tower](APERCUS.pdf#page=30) relie une plongée spectaculaire à des volumes simples,
  des modules de ruine et des ensembles végétaux. La vue principale et le catalogue n’ont pas
  la même fonction : émotion et profondeur d’un côté, construction de l’autre.
- [Console Pikachu](APERCUS.pdf#page=29) donne une progression compacte : produit complet,
  composants séparés, clay et damier, mosaïque de détails puis cartes. Les fonds bleus relient
  les planches et renforcent le jaune du sujet.
- [The Exorcist](APERCUS.pdf#page=33) conserve l’identité du personnage du portrait aux
  vues en pied et au sculpt ; sa dernière planche ajoute maillage et cartes.
- [Thistle Warrior](APERCUS.pdf#page=34) distingue beauty, portrait, high-poly, polygroups
  et low-poly bake dans les légendes visibles. Ces noms décrivent des étapes distinctes.
- [Sword breakdown](APERCUS.pdf#page=31) est conservé comme ressource longue illustrée.
  Sa structure a été parcourue ; le texte détaillé n’a pas été lu ni validé dans cette passe.

## Application à la prochaine image

1. Choisir un mode et un sujet original, puis deux ou trois références maximum avec un rôle
   distinct : par exemple caméra de Mailbox, séparation des matières de Xan, tissu de Bird and Fish.
2. Écrire ce qui reste constant : silhouette, proportions, costume ou assemblages, palette,
   marquages propres au nouveau sujet. Ne pas reprendre les logos des références.
3. Préparer une image principale et vérifier silhouette, poids, raccords, matières et lumière.
4. Corriger les écarts un à un en rappelant les éléments à préserver ; partir de l’image validée
   pour les variantes. Inspecter les différences entre vues, particulièrement mains, accessoires,
   nombre de pièces, marquages et coutures.
5. Sélectionner les formats de planches réellement utiles à l’objectif du portfolio.

Cette collection documentée remplace une « mémoire implicite » : relire le brief et les fichiers
sélectionnés à chaque production. Elle ne modifie pas les paramètres du modèle et ne garantit
pas une cohérence géométrique parfaite entre générations.

## Référence encore manquante : JwedwA

[Tanguy désigne ce projet](https://www.artstation.com/artwork/JwedwA) pour sa présentation complète
de formats et de textures. Il n’est présent dans aucun des deux nouveaux ZIP. Son contenu
reste à examiner. [JwemvA](GALERIE.md#similaires) est un projet de pelle distinct.
