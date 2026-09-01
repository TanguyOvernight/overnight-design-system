# 01 — Crates — version 01

[PNG original](01-crates-v01.png) · [Prompts source](../PROMPTS-SITE-OVERNIGHT.md)

- Mode : générateur d’images intégré (`image_gen`), première génération guidée par deux références.
- Fichier natif : PNG, 1536 × 1024 px, ratio 3:2 ; aucune conversion ni retouche après génération.
- État : généré, en attente de validation de Tanguy.
- Modèle exact, réglage de qualité et seed : non exposés par l’outil.

## Références réellement jointes, dans l’ordre

1. [Tom Tran — matériaux du mech](../../refs-3d/images/uploaded/tom-tran-2.webp), [source ArtStation](https://www.artstation.com/artwork/OvLQlJ) : peinture, métal, joints sombres et éclats localisés uniquement. Le robot et ses marquages ne sont pas repris.
2. [The Mailbox — présentation](../../refs-3d/prompt-inputs/yAJx35-01.jpg), [source ArtStation](https://www.artstation.com/artwork/yAJx35) : vue trois-quarts complète et ancrage uniquement. Le décor, le sujet, la stylisation et le cadre ne sont pas repris.

## Prompt source de Tanguy

```text
Studio beauty render of a stack of three military sci-fi supply crates, game-ready 3D asset,
single shot. Olive-drab painted steel, orange latches and corner guards, paint chips on
protruding edges only, dust in panel recesses, one crate open showing foam inserts. 3/4 view,
dark charcoal studio backdrop, soft key light, subtle violet rim, wide soft contact shadow.
No text or labels anywhere. Landscape 3:2.
```

## Prompt réellement envoyé

```text
Create one finished image for Overnight Studio, following this exact asset brief:

Studio beauty render of a stack of three military sci-fi supply crates, game-ready 3D asset,
single shot. Olive-drab painted steel, orange latches and corner guards, paint chips on
protruding edges only, dust in panel recesses, one crate open showing foam inserts. 3/4 view,
dark charcoal studio backdrop, soft key light, subtle violet rim, wide soft contact shadow.
No text or labels anywhere. Landscape 3:2.

Reference roles: Image 1 (green mechanical character) is a material reference only: layered painted metal, dark rubber joints, convincing roughness separation and restrained chips at exposed edges. Use a muted olive-drab palette as specified, not its brighter yellow-green; create entirely original crates, with none of the robot, decals, markings or logos. Image 2 (mailbox diorama) guides only the complete three-quarter presentation, clear silhouette and grounded composition. Do not reproduce its subject, stone base, backdrop objects, low-poly aesthetic, border or typography.

Art direction: premium realistic PBR 3D portfolio beauty render with confident, slightly simplified industrial forms and precise bevels. Exactly THREE complete supply crates, all in one coherent design family: two closed crates stacked securely toward the rear-left, the smaller resting fully on the larger; the third crate on the floor slightly forward-right with its hinged lid open, visibly revealing dark protective foam inserts and empty cutouts. The open lid is visibly attached and supported at a plausible angle; enough camera elevation to read the inserts clearly. Keep all three crates and the open lid fully inside the image with breathing room. Restrained orange latches and orange protective corner guards, dark rubber seals, mechanically consistent lid seams and hardware. Small irregular edge chips and light dust in recesses; broad painted panels remain calm. Soft broad key from upper left, gentle fill preserving dark material detail, very subtle violet edge separation, matte charcoal floor merging into the studio background, wide soft grounding shadows. Sharp material detail across the asset group, controlled moderate perspective. Full-bleed single landscape 3:2 image, no panel layout or mockup. No text, numbers, labels, symbols, logos, watermarks, diagrams, annotations, decorative borders, other props, contents, weapons, smoke, flare or bloom.
```

## Contrôle du résultat

Inspection de l’image générée : trois caisses distinctes visibles ; deux fermées superposées et une ouverte au premier plan ; mousses et découpes intérieures visibles ; palette olive/orange, fond charbon et léger bord violet ; objets complets et ombres de contact. Aucun texte, logo, annotation ou objet supplémentaire visible. Pas d’anomalie majeure apparente à cette inspection. La validation artistique reste à faire par Tanguy.

Les précisions de mise en scène explicitent l’empilement, l’ouverture et les rôles des références. Aucune édition corrective n’a été réalisée. Il s’agit d’un rendu raster, sans livraison de modèle 3D.

## Intégrité

- SHA-256 : `9d4036874b95c789b920d1441ea58d1e50c86cf2d3c071ec53677b50ac7c34be`.
- Taille : 2145052 octets.
