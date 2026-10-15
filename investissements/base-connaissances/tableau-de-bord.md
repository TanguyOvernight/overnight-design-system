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
| `valeurs` | `valeurs.csv` | valeur de **chaque ligne** par jour | **tous les jours** |
| `classement` | `classement.csv` | les 4 candidats, cours et seuils | à chaque re-classement |
| `stm_seuil` | `stm-seuil.csv` | clôtures STM + seuil 42 € | tant que STM est au classement |
| `plan` | `plan.csv` | action prioritaire, consigne du jour | **tous les jours** |

**`valeurs.csv` est la courbe de suivi que Tanguy demandait**, désormais une
série **par ligne** et non plus un total — c'est ce qui rend les filtres utiles.

**Ajouter une ligne chaque jour pour le WPEA** : `70 × cours du jour`. Les 70
parts sont détenues depuis l'ordre du 01/10, donc les points du 09, 12 et 14/10
sont légitimement reconstitués ; **ne jamais remonter avant le 01/10**, il n'y
avait pas de parts.

**Les lignes eToro ne bougent QUE sur nouvelle capture.** Ne pas reporter la
dernière valeur connue sur un jour sans capture : laisser le jour vide. Un trou
est lisible, un plateau inventé ne l'est pas.

### Filtres de la page

`dash/params` : `{poche, categorie, ligne}`, tous à `null` = tout afficher.
Ils sont **lus dans la page** (`setParams` sur un nom qu'aucune requête n'utilise
redessine sans rien appeler) et ne filtrent que le tableau des lignes, les barres
de performance et la courbe. **Les totaux et les garde-fous restent sur
l'ensemble du portefeuille** — un total filtré serait un nombre qu'aucun calcul
ne porte, donc non traçable.

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

## Ordre de la page — fixé par Tanguy le 15/10

> « l'interface doit focus justement sur le graphique en élément central avec la
> variation de mes placements dessous et les idées de Claude pour investir encore
> plus bas. L'idée c'est de pouvoir suivre mon capital en un coup d'œil. »

**Trois sections, dans cet ordre. Ne pas le réarranger sans qu'il le demande.**

1. **`#capital`** — le capital en gros chiffre, la variation du jour et la
   plus-value latente sur une ligne, les trois filtres, puis **le graphique, en
   élément central et pleine largeur**.
2. **`#variation`** — barres de performance par ligne, tableau des lignes,
   répartition et comptes.
3. **`#idees`** — l'action du mois, les garde-fous, la consigne, le classement,
   STM, le cours du WPEA.
4. `#limites` — ce que la page ne sait pas.

### Le garde-fou ne descend PAS avec les idées

Tanguy a demandé que les recommandations soient « plus bas ». Une alerte d'une
ligne reste donc **sous le graphique** quand un garde-fou est dépassé
*(`#rail`, affiché seulement si R > 25 %)*, avec un bouton vers `#idees`.
**Respecter la mise en page demandée n'autorise pas à enterrer un dépassement :**
c'est la seule chose que je remonte contre sa consigne, et elle disparaît d'elle-
même dès que R repasse sous 25 %.

### Variation du jour

Nouvelle colonne `variation_jour_eur` dans `comptes.csv`, calculable **seulement
quand les deux sources existent** :
- PEA : `70 × (cours du jour − cours de la veille)` ;
- eToro : le montant affiché sous le total dans l'application *(capture)*.

**Sans capture eToro du jour, cette colonne est fausse** — mettre `0` serait un
mensonge, reporter la veille aussi. Dans ce cas : vider la case eToro et ne pas
afficher de variation d'ensemble.
