# Prompts prêts à utiliser — Overnight

Pour les visuels du site, utiliser en priorité les [28 prompts de Tanguy](../exports-gpt-image/PROMPTS-SITE-OVERNIGHT.md).
Les fichiers produits sont à ranger dans [exports-gpt-image](../exports-gpt-image/README.md).


Cinq propositions de départ, adaptables au sujet de Tanguy. Les objets, personnages et palettes
d’exemple ne sont pas des décisions déjà validées. Ces prompts n’ont pas encore été évalués sur
des générations.

Chaque modèle utilise deux images, dans l’ordre indiqué. **Ouvrir et joindre les vrais fichiers** :
leurs noms ou leurs liens dans le texte ne transmettent pas leur contenu au générateur.
Ces références sont accessibles individuellement, sans extraire les archives.
Les mêmes prompts et leurs sources se trouvent dans [PROMPTS.json](PROMPTS.json).

Si les images ne sont pas jointes, retirer le paragraphe « Input images » et conserver les
caractéristiques visuelles utiles. Si le brief est précis, remplacer le sujet d’exemple et
préserver les contraintes de Tanguy.

## PROP-STUDIO — Objet — caisse de ravitaillement

- Image 1 : [yAJx35-01.jpg](prompt-inputs/yAJx35-01.jpg) — Cadrage trois-quarts et ancrage ; ne pas reprendre le décor ni la stylisation.
- Image 2 : [tom-tran-2.webp](images/uploaded/tom-tran-2.webp) — Peinture, métal, jonctions et usure localisée ; ne pas copier les marquages.

```text
Use case: stylized-concept
Asset type: 3D portfolio beauty image for Overnight Studio.
Input images: Image 1 guides three-quarter staging and grounding only. Image 2 guides painted metal, dark joints and localized wear only. Create a new object with its own silhouette.
Scene: clean dark charcoal studio gradient and matte floor.
Subject: one original science-fiction supply crate, closed, with a clear lid seam, two recessed handles and practical corner protectors.
Style and materials: realistic PBR appearance with lightly stylized large forms. Painted grey shell, dark rubber seals, metal latches and a restrained orange accent. Small irregular chips on exposed corners and handle contact areas; broad surfaces stay calm.
Composition: complete three-quarter view, moderate perspective, landscape 3:2, subject around 70% of the frame, soft floor contact shadow.
Lighting: broad soft key, gentle fill and restrained edge separation. Preserve material detail in shadow.
Constraints: consistent thickness, aligned joins and functional-looking handles. No lettering, brands, watermark, uniform grunge, bloom or decorative cables.
```

## MECH-STUDIO — Mech — robot utilitaire

- Image 1 : [tom-tran-1.webp](images/uploaded/tom-tran-1.webp) — Silhouette lisible et séparation des assemblages ; ne pas copier le design.
- Image 2 : [tom-tran-2.webp](images/uploaded/tom-tran-2.webp) — Peinture, métal, jonctions et usure localisée ; ne pas copier les marquages.

```text
Use case: stylized-concept
Asset type: 3D character portfolio beauty image for Overnight Studio.
Input images: Image 1 guides silhouette readability and separation of assemblies. Image 2 guides material contrast and localized wear. Create a distinct robot design without copying the armor shapes, face or markings.
Scene: clean dark charcoal studio gradient and matte floor.
Subject: one original bipedal utility robot with a compact sensor head, practical torso, articulated hands and broad stable feet. Relaxed stance, arms separated from the torso.
Style and materials: realistic PBR appearance, lightly stylized proportions. Desaturated olive armor, dark mechanical joints and a small warm accent. Joint gaps and attachment points remain visible. Any cables connect to visible endpoints. Wear occurs at contact areas and exposed edges.
Composition: full-body three-quarter view, landscape 3:2, complete hands and feet, clear space around the silhouette.
Lighting: broad soft key, controlled fill, subtle contour light and soft contact shadow.
Constraints: coherent joints, stable weight distribution, consistent repeated components. No extra limbs, floating parts, lettering, brands or bloom.
```

## CHARACTER-STUDIO — Personnage — éclaireuse adulte

- Image 1 : [RqnvvD-01.jpg](prompt-inputs/RqnvvD-01.jpg) — Présentation en pied et couches de matières ; créer une nouvelle identité.
- Image 2 : [beast-game-in-14.jpg](images/uploaded/beast-game-in-14.jpg) — Coupe, épaisseur, coutures et plis ; ne pas imposer la palette.

```text
Use case: stylized-concept
Asset type: 3D character portfolio beauty image for Overnight Studio.
Input images: Image 1 guides full-body presentation and material layering only. Image 2 guides garment thickness, seams and folds only. Create a new face, hairstyle and costume.
Scene: clean dark charcoal studio gradient and matte floor.
Subject: one original adult female scout, calm and attentive, with short practical hair, a weathered canvas jacket, fitted trousers and worn leather boots. One muted red fabric detail provides the color accent. Hands rest naturally and remain visible.
Style and materials: realistic PBR appearance with lightly stylized proportions. Distinct skin, canvas, leather and metal fasteners. Folds follow the pose and attachment points; fraying is limited to stressed hems. Natural skin variation and coherent facial anatomy.
Composition: full-body three-quarter presentation, slight weight shift, feet grounded, portrait 2:3, breathing room around head and hands.
Lighting: broad soft key, gentle fill, restrained edge separation; readable eyes and folds.
Constraints: consistent identity, clear finger anatomy and clothing layers. No extra props or characters, lettering, brands, plastic skin, uniform grunge or beauty-filter smoothing.
```

## VEHICLE-STUDIO — Véhicule — fourgon utilitaire usé

- Image 1 : [eRNzeb-01.webp](prompt-inputs/eRNzeb-01.webp) — Cadrage studio et ombre au sol ; créer un véhicule original sans marque.
- Image 2 : [eRNzeb-03.webp](prompt-inputs/eRNzeb-03.webp) — Poussière et débris près du pare-brise ; adapter à l’exposition du nouveau véhicule.

```text
Use case: stylized-concept
Asset type: 3D vehicle portfolio presentation for Overnight Studio.
Input images: Image 1 guides studio framing and ground contact. Image 2 guides localized dust and debris. Design an original unbranded utility van, distinct from the reference vehicle.
Scene: perfectly clean neutral grey studio gradient and matte floor.
Subject: one boxy utility van with faded dark red paint, dark rubber tires, steel trim and dusty glass. Consistent wheelbase, aligned door seams, coherent window thickness and practical mirrors.
Style and materials: realistic PBR appearance. Corrosion streaks run downward from susceptible seams; dust settles in sheltered recesses; a few dry leaves collect near the windshield base. Broad panels remain quieter. Glass, rubber, paint and metal have distinct responses.
Composition: complete front three-quarter view, moderate perspective, landscape 3:2. Visible wheels contact the same floor, with a wide soft grounding shadow.
Lighting: soft even studio light revealing surface variation and form.
Constraints: plausible panels and circular wheels, restrained damage. No unrelated set dressing, brands, lettering, mist, bloom, excessive depth blur or dirty background.
```

## ENVIRONMENT-HERO — Environnement — observatoire abandonné

- Image 1 : [2Bvzov-01.jpg](prompt-inputs/2Bvzov-01.jpg) — Profondeur et masses de lumière ; ne pas reprendre les éléments iconiques.
- Image 2 : [2Bvzov-04.jpg](prompt-inputs/2Bvzov-04.jpg) — Composition par volumes simples ; créer une architecture distincte.

```text
Use case: stylized-concept
Asset type: 3D environment portfolio hero for Overnight Studio.
Input images: Image 1 guides depth, focal hierarchy and light masses only. Image 2 guides simple spatial organization before detail. Create a new layout without copying the reference sculpture or ornament.
Scene and subject: an abandoned stone observatory interior, a tall central opening admitting daylight, worn steps leading toward an empty observation platform, sparse vegetation at exposed edges. No people.
Style and materials: realistic PBR appearance with slightly simplified large forms. Desaturated stone, oxidized dark metal and restrained natural green. Weathering follows leaks and exposure; walkable areas stay readable.
Composition: landscape 16:9 with clear foreground, middle ground and background. The opening and platform form one focal area. Structural lines guide the eye; secondary corners stay quieter.
Lighting: one coherent daylight direction, broad shadow masses and subtle reflected fill. Readable material detail near the focal area.
Constraints: believable architectural joins and scale, continuous stairs and controlled repetition. No decorative clutter, lettering, logos, dramatic fog, bloom or competing bright focal points.
```

## Décliner l’image retenue

Joindre **l’image générée retenue comme cible d’édition**. Les références artistiques restent
des appuis de présentation ; elles ne définissent pas l’identité de notre sujet.

| Demande | Consigne d’édition |
| --- | --- |
| Même sujet, détail | Cadrer la zone nommée ; préserver design, matières, couleurs et logique de lumière. |
| Même sujet, clay | Passer en gris mat ; préserver pose, caméra, silhouette et assemblages. |
| Même sujet, autre lumière | Modifier l’éclairage et les ombres/reflets associés ; préserver sujet, pose et cadrage. |
| Même sujet, multivue | Face, profil et dos à échelle comparable ; préserver proportions, pièces, costume et marquages. Contrôler les écarts. |
| Même sujet, en contexte | Adapter ombres et reflets au lieu demandé ; préserver identité et design du sujet. |

Correction ciblée prête à utiliser :

```text
Edit the attached generated image. Change only the wear distribution:
remove uniform scratches from broad painted panels and retain small chips
at exposed corners and contact points. Preserve the subject identity,
silhouette, camera, pose, palette, background and lighting. Add no new details.
```

Wireframes, UV, LOD et comptes de triangles présentés comme données techniques nécessitent
un asset 3D source. Une image générée peut illustrer leur présentation sans prouver leur validité.
Pour une paire de slider, vérifier l’alignement plutôt que le supposer.
