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

## Reconstituer l'historique 2026 — TESTÉ le 15/10, IMPOSSIBLE

Tanguy a demandé de reconstruire ses gains et pertes sur 2026 à partir des cours
de chaque action. **J'ai testé avant de répondre.** Résultat à garder : ne pas
re-tenter sans que la situation d'accès ait changé.

### Preuve 1 — les sources atteignables se contredisent

Performance 2026 de **MSFT** selon quatre sources, toutes trouvées le même jour :

| Source | Date de capture | MSFT 2026 | TSLA 2026 |
|---|---|---|---|
| Tracker total-return | 03/08 | **+1,3 %** | −28,4 % |
| Forum | fin juillet | **−4,6 %** | −29,5 % |
| Autre tracker | 14/07 | **−20,1 %** | −11,9 % |
| Comparateur | 26/06 | **−27,0 %** | −16,8 % |

**28 points d'écart sur MSFT, 18 sur TSLA.** Et rien ne dépasse **fin août** —
six semaines avant aujourd'hui. Mélange de total return et de price return,
bases de départ différentes, aucune source primaire.

### Preuve 2 — l'erreur serait du même ordre que le gain à mesurer

Sa plus-value latente totale est de **+211,42 €**. Une incertitude de 20 points
sur ses lignes actions représente **±100 à 200 €**. La courbe mesurerait son
propre bruit.

### Preuve 3 — le problème n'est pas que la donnée, c'est la question

Son MSFT est à **+38,4 %** alors que MSFT lui-même est peut-être **en baisse** en
2026 : **il a donc acheté avant janvier**. Appliquer les cours 2026 à ses
quantités actuelles ne répondrait pas à *« combien je gagnais en 2026 »* mais à
*« combien mes lignes d'aujourd'hui auraient valu en 2026 »* — un backtest, pas
son histoire. **Deux questions différentes**, et il faut nommer laquelle on
répond avant de tracer quoi que ce soit.

Il me manquerait de toute façon : les **quantités eToro** *(non affichées ; la
capture donne des valeurs en euros et des prix probablement en dollars, donc il
faudrait un taux de change par date)* et les **dates d'achat**.

### Ce qu'il faut faire à la place

**Ses applications ont déjà cette courbe.** eToro affiche la performance du
portefeuille sur la période choisie, Fortuneo aussi sur le PEA. **Une capture de
chacune donne sa vraie histoire**, pas une reconstitution. C'est la même leçon
que les frais de courtage ce matin : *la réponse exacte est dans son appli, pas
sur le web.*

## Accès aux données de marché — TESTÉ À FOND le 15/10 au soir

Tanguy a demandé d'essayer vraiment de me connecter à la bourse. Bien vu : je
l'affirmais **de mémoire**. Voici le test, daté, à ne pas refaire avant que
l'accès réseau ait changé.

### Canal 1 — HTTPS direct (curl via le proxy d'egress)

État du proxy : `enabled: true`, `selective: false`, `recentRelayFailures: []`.
Rien n'annonçait un blocage. Puis :

| Hôte | Résultat |
|---|---|
| `api.github.com` *(témoin)* | **HTTP 403** applicatif — le tunnel passe, c'est GitHub qui restreint |
| `data-api.ecb.europa.eu` *(change officiel BCE)* | **CONNECT tunnel failed, 403** |
| `query1.finance.yahoo.com` | **403** |
| `stooq.com` | **403** |
| `alphavantage.co` | **403** |
| `api.twelvedata.com` | **403** |
| `financialmodelingprep.com` | **403** |
| `api.polygon.io` | **403** |
| `boursorama.com` | **403** |
| `live.euronext.com` | **403** |

**Neuf sur neuf refusés par la politique d'egress.** Le témoin GitHub prouve que
le proxy fonctionne : ce n'est pas une panne, c'est une règle. Le README impose
de **ne pas réessayer ni contourner** — je m'arrête et je rapporte.

⚠️ **Même la BCE est bloquée.** C'est ce qui rend la conversion EUR/USD de ses
lignes eToro impossible — pas seulement les cours.

### Canal 2 — WebFetch

`stockanalysis.com` → **`getaddrinfo ENOTFOUND`**. Échec **différent** : la
résolution DNS elle-même ne passe pas. Deux mécanismes distincts, même résultat.

### Canal 3 — Connecteurs

11 installés : Canva, Figma, Gamma, Google Drive, Hubflow, HyperFrames, Miro,
Motion, Notion, Slack, ShortLink. **Aucun connecteur financier.** Le type
Dashboard ne déclare que BigQuery, qui ne porte aucun cours.

### La solution est entre les mains de Tanguy

Menu de l'environnement cloud dans la barre de titre de la session → **Edit** →
**Network access**. Soit un niveau plus large, soit ces hôtes sous **Allowed
domains** *(laisser « Allow package managers » coché)* :

| Hôte à autoriser | Ce que ça débloque |
|---|---|
| `query1.finance.yahoo.com` + `query2...` | cours **et historiques** de TOUTES ses lignes — NVDA, TSLA, MSFT, VTI, SWDA.L, RNO.PA, WPEA.PA |
| `stooq.com` | secours en CSV, sans clé d'API |
| `data-api.ecb.europa.eu` | taux EUR/USD officiels → ses lignes eToro enfin convertibles |

Doc : https://code.claude.com/docs/en/cloud-environments#network-access

⚠️ **Ne pas sur-promettre** : Yahoo donnerait les **cours**, pas l'historique de
**ses positions**. La question « combien je gagnais en 2026 » resterait
dépendante de ses dates d'achat, ou de la courbe de son courtier.

## ⭐ LA SOLUTION, trouvée le 15/10 au soir : un CONNECTEUR, pas un domaine

**Pendant deux semaines j'ai demandé la mauvaise chose.** Je réclamais l'ouverture
de domaines dans `Network access`. Le bon canal était ailleurs, et je ne l'avais
jamais regardé.

**Les connecteurs MCP ne passent PAS par la politique d'egress.** Ils transitent
par `mcp-proxy.anthropic.com`, qui figure dans la liste `noProxy` du proxy. C'est
exactement pourquoi Slack, Notion et GitHub fonctionnent dans cette session alors
qu'un simple `curl` vers Yahoo renvoie 403.

Le catalogue contient des fournisseurs de données de marché :

| Connecteur | Ce qu'il apporte |
|---|---|
| **Alpha Vantage** ⭐ | **126 outils** : cours, historiques, fondamentaux, indices, **taux de change**, matières premières |
| Financial Datasets | 28 outils, cours et états financiers |
| Clear Street | recherche actions et options |

**Alpha Vantage couvre TOUT le besoin de ce dossier** : les cours quotidiens de
chaque ligne, les historiques 2026, **et les taux de change** — le verrou invoqué
deux fois le 15/10 pour refuser de reconstituer l'historique eToro.

> **L'ironie à retenir** : `www.alphavantage.co` en HTTPS direct renvoie **403**.
> Le même fournisseur, via son connecteur MCP, **passerait**. Ce n'est pas la
> source qui est interdite, c'est **le chemin**. J'ai testé vingt hôtes sur un
> chemin sans jamais me demander s'il en existait un autre.

**À faire par Tanguy** : ajouter le connecteur **Alpha Vantage** depuis les
réglages de connecteurs de claude.ai, puis l'activer pour la conversation. Une
clé d'API Alpha Vantage est nécessaire (offre gratuite disponible).

**Ce que ça débloquerait, concrètement** :
- mise à jour **automatique** des cours chaque matin, fin du relevé à la main ;
- **l'historique 2026 réel** à la place de mes estimations ;
- la conversion **EUR/USD** des lignes eToro ;
- et, côté tableau de bord, la possibilité de passer les jeux de données en
  **requêtes vives** *(`source.kind: "query"`)* au lieu de fichiers attachés —
  la page se mettrait alors à jour toute seule chez le lecteur.

⚠️ Même ainsi : Alpha Vantage donne les **cours**, pas l'historique de ses
**positions**. Ses dates d'achat restent nécessaires pour une courbe exacte.

## Périmètre du suivi — décision de Tanguy du 15/10

Une **micro-position résiduelle du compte eToro est sortie du suivi**, et ne doit
**plus être nommée** : ni dans le tableau de bord, ni dans les briefs, ni dans les
réponses. Elle a été retirée de `positions.csv` et de `valeurs.csv`, et les
montants eToro de `comptes.csv` ont été recalés sur les seules lignes suivies.

**Ce qu'il ne faut jamais taire pour autant** : les montants eToro du dossier sont
désormais **inférieurs de quelques euros** au total que son application affiche.
C'est écrit dans la description des sources `positions` et `comptes`, sans nommer
la ligne. Ne pas re-rapprocher naïvement les deux chiffres à la prochaine capture
en croyant à une erreur.

Effet sur les garde-fous — **aucun changement de conclusion** :

| | Avant | Après |
|---|---|---|
| Patrimoine | 1 783,42 € | **1 777,98 €** |
| Risqué | 453,14 € | **447,70 €** |
| **R** | 30,67 % | **30,42 %** — toujours > 25 % |
| Cœur manquant | 335,22 € | **318,90 €** |
| Plafond L | 267,51 € | **266,70 €** |

Bénéfice inattendu : les titres suivis font **exactement 1 471,90 €**, soit la
somme des lignes du calcul de performance. **Le dossier se recoupe désormais au
centime**, ce qui n'était pas le cas avant.

> Les appels de calibration déjà résolus qui portaient sur cette ligne **restent
> dans le registre** : on ne réécrit pas un historique de calibration pour
> satisfaire une préférence d'affichage. On cesse simplement d'en parler.
