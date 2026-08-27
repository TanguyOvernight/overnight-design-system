# Veille emploi Lausanne

Chantier personnel de Tanguy Rousselin : veille quotidienne automatisée des offres
d'emploi marketing / direction artistique / communication / digital sur Lausanne,
avec brief Slack à 10h00 (#brief-emploi, C0BTXBQ7048) et suivi accessible mobile.

Branche dédiée `claude/veille-emploi-lausanne` — alimentée par la routine cloud
quotidienne « Veille Emploi Lausanne — brief 10h ».

| Fichier | Contenu |
|---|---|
| PERSONA.md | Le persona candidat qui filtre les offres (critères validés par Tanguy) |
| SOURCES.md | Les 6 canaux retenus + réserves (cartographie de 20 plateformes testées) |
| TECHNIQUE.md | Mécanismes de collecte validés par tests réels + pièges |
| ENTREPRISES.md | Référentiel de ~135 employeurs de la région |
| FORMAT-SLACK.md | Le format exact du brief quotidien |
| ARCHITECTURE.md | Le système complet |
| companies.json | Registre machine-readable des ATS surveillés |
| state/seen.json | Déduplication persistante (offres vues / postées) |
| state/journal/ | Journal quotidien des runs |
