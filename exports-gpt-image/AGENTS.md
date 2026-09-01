# Exporter les visuels Overnight

Ces instructions complètent le guide du dépôt pour les exports GPT Image.

- Lire `PROMPTS-SITE-OVERNIGHT.md` et `manifest.json`. La demande actuelle de Tanguy prime.
- La création du dossier et l’inventaire ne sont pas une demande de générer automatiquement les 28 images.
- Quand une génération est demandée, conserver son résultat dans la rubrique correspondante avec
  l’extension native et une version nouvelle ; ne pas écraser une version précédente.
- Accompagner chaque image d’un fichier `.prompt.md` : prompt réellement envoyé, références utilisées,
  image cible d’une retouche, modifications et contrôles effectués. Ne pas inventer les réglages de l’outil.
- Mettre à jour `manifest.json`, `EXPORTS.md` et les compteurs/README concernés seulement après export réel.
  Le statut `approved` nécessite une validation explicite de Tanguy.
- Les séries R, S et C se font dans l’ordre avec références visuelles réutilisées et comparaison des résultats.
- Joindre les vrais fichiers au générateur ; une URL dans le texte du prompt ne les remplace pas.
- Publier les exports autorisés sur la branche de travail et mettre à jour la PR ; respecter les règles
  de branche du dépôt. Les images présentées à l’écran ne sont pas automatiquement copiées dans GitHub.
