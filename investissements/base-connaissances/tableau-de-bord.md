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
| `coeur_wpea` | `coeur-wpea.csv` | cours du WPEA relevés | à chaque cours obtenu |
| `comptes` | `comptes.csv` | titres / espèces / total des 2 comptes | **sur nouvelle capture** |
| `positions` | `positions.csv` | chaque ligne, sa valeur, sa catégorie | **sur nouvelle capture** |
| `patrimoine` | `patrimoine.csv` | valeur totale par jour — **1 point par jour** | **tous les jours** |
| `classement` | `classement.csv` | les 4 candidats, cours et seuils | à chaque re-classement |
| `stm_seuil` | `stm-seuil.csv` | clôtures STM + seuil 42 € | tant que STM est au classement |
| `plan` | `plan.csv` | action prioritaire, consigne du jour | **tous les jours** |

**`patrimoine.csv` est la courbe de suivi que Tanguy demandait.** Elle a démarré
le 15/10 avec un seul point ; la page ne trace rien tant qu'il n'y en a pas deux.
**Ajouter une ligne chaque jour** : le WPEA se recalcule depuis son cours, mais
eToro ne bouge que sur nouvelle capture — tant qu'il n'y en a pas, reporter la
dernière valeur connue **en le disant**, ou laisser le jour vide. Ne jamais
interpoler.

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

- **TRANCHÉ le 15/10** : le cœur PEA fait **70 parts / 501,69 €**, pas 182 parts.
  Tanguy avait raison, mon registre était faux. Les jeux `lectures` et
  `versements` ont été supprimés de l'artefact, l'ambiguïté n'existe plus.
- **C064 RÉSOLU VRAI le 15/10** : la 6e ligne eToro est bien **Renault**,
  confirmé par Tanguy. ⚠️ Sa **valeur** (5,44 €) reste déduite par différence et
  n'a jamais été lue — à recaler sur la prochaine capture eToro complète.
- **Les frais d'un ordre hors ticket gratuit** chez Fortuneo viennent d'une
  source secondaire *(≈1,75 €, grille du 09/02/2026)*. Toute la recommandation
  d'investir le cash tout de suite bascule si l'ordre coûte plus de ~7 €.
- **Aucun relevé automatique des deux comptes.** Tout dépend de captures que
  Tanguy envoie. C'est la limite dure du dispositif, écrite dans la page.
