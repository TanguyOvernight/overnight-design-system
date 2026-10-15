# Tableau de bord « Brief investissements » — câblage et rafraîchissement

> Créé le **15/10/2026**, à la demande de Tanguy : *« un artefact pour avoir mes
> recommandations et le graphique qui montre comment se portent mes actions tous
> les jours »*. **À relire au début de chaque brief** : le tableau de bord ne se
> met pas à jour tout seul.

## Adresse

**https://claude.ai/artifact/LfnCzCQ52S8gqMDq9Tvh6m**

Créé à partir du type « Dashboard » (`https://claude.ai/artifact/GZLZthZ2sQjn7T16skfdeF`).
Le type impose une règle qui tombe bien : **chaque chiffre affiché doit pointer
vers sa source**, et un chiffre écrit en dur dans la page est refusé.

## Ce qui est branché — et ce qui ne l'est pas

❌ **Aucun flux de marché.** Le type sait interroger en direct les connecteurs
du LECTEUR (ici : BigQuery). Aucun ne porte de cours de bourse, et l'egress de
ma session reste filtré au niveau DNS. **Il n'existe donc aucun moyen de rendre
cette page automatiquement vivante.** Ne pas le promettre à Tanguy.

✅ **Des fichiers que je réécris.** Chaque jeu de données est un CSV téléversé
dans l'artefact. La page est « à jour » exactement au sens où je l'ai rafraîchie
le matin même. Les sources de la page le disent.

⚠️ **Les fichiers attachés sont lisibles par tous ceux qui peuvent ouvrir
l'artefact.** Ne rien y mettre que Tanguy ne publierait pas.

## Les sept jeux de données

| id | fichier | contenu | fraîcheur |
|---|---|---|---|
| `coeur_wpea` | `coeur-wpea.csv` | clôtures WPEA certifiées | à chaque clôture obtenue |
| `stm_seuil` | `stm-seuil.csv` | clôtures STM + seuil 42 € | tant que STM est au classement |
| `classement` | `classement.csv` | les 4 candidats, cours et seuils | **à chaque re-classement** |
| `versements` | `versements.csv` | ordres WPEA spécifiés | à chaque ordre |
| `lectures` | `lectures.csv` | les 2 lectures du dépôt Fortuneo | **à supprimer dès que Tanguy tranche** |
| `positions_etoro` | `positions-etoro.csv` | photo eToro du 25/07 | seulement sur nouvelle capture |
| `plan` | `plan.csv` | prochain ordre, consigne du jour | **tous les jours** |

Copies de référence des CSV et de la page : `investissements/tableau-de-bord/`.

## Les cinq calculs faits dans la page

`coeur` (parts × dernière clôture) · `garde_fous` (plafond L et poche risquée
max) · `cours_seuil` (cours + devise) · `ecarts` (seuil ÷ cours − 1) ·
`stm_ecart`. **Ils sont visibles du lecteur** : il peut lire la formule.
Conséquence : ne jamais y glisser une hypothèse non dite.

## Procédure de rafraîchissement (chaque matin, après le re-classement)

1. Réécrire le ou les CSV concernés dans le scratchpad.
2. `Artifact` `publish` avec `asset: true`, `url` de l'artefact, `file_path` du
   CSV — **un appel par fichier texte**. Noter le `/_blob/<id>` renvoyé.
3. `ArtifactData` `update` du document `datasets/<id>` avec les seuls champs
   `source.url`, `source.name` et `updated` — **et `if_version`** lu juste avant.
4. Ne PAS réécrire `files/index.html` si la structure ne change pas.

Au minimum, **`plan.csv` change tous les jours** (la consigne du jour). Un jour
sans clôture certifiée laisse un trou dans la courbe : **c'est voulu**, un trou
vaut mieux qu'un chiffre inventé.

## Dette ouverte

- **Le nombre de parts (182) n'est pas confirmé.** Les ordres des 21/09 et 01/10
  n'ont jamais été vus exécutés. Tout le haut de la page en dépend.
- **Tanguy a parlé de 800 € dont 500 € sur le World ; mes registres portent
  1 292 € en trois ordres.** Les deux lectures sont affichées côte à côte dans la
  page, et la page calcule sur la seconde. À trancher.
- Pas de courbe pour Lilly ni pour le CAC/S&P : je n'ai qu'un point daté pour
  chacun (09/10). Une courbe à un point serait un mensonge graphique.
