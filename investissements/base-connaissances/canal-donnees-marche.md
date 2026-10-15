# ⭐ CANAL DE DONNÉES DE MARCHÉ — Google Sheets + GOOGLEFINANCE

> **Trouvé le 15/10/2026. C'est LA solution au problème qui bloquait ce dossier
> depuis le 1er octobre.** À lire avant tout brief.

## Le principe

Le connecteur **Google Drive** permet de **créer une feuille de calcul** dont les
formules sont **évaluées par Google**, puis de **relire les valeurs calculées**.
`GOOGLEFINANCE()` donne cours, historiques et taux de change.

**Ça ne passe pas par la politique d'egress** : `curl` vers Yahoo renvoie 403,
mais le connecteur transite par le proxy MCP d'Anthropic. **Aucun réglage n'est
à changer, aucune clé d'API n'est nécessaire.**

## Recette

1. `mcp__Google_Drive__create_file` · `contentMimeType: "text/csv"` · `textContent`
   = un CSV dont les cellules contiennent les formules. **Les virgules internes
   obligent à guillemeter la cellule et à doubler les guillemets internes.**
2. Google convertit en Sheets et **évalue** les formules.
3. `mcp__Google_Drive__read_file_content` renvoie les **valeurs**.

**Astuce décisive — `TEXTJOIN` :** une série de 41 points tient dans **une seule
cellule**, ce qui évite la troncature de la lecture.

```
"=TEXTJOIN("";"",TRUE,ARRAYFORMULA(INDEX(GOOGLEFINANCE(""NASDAQ:NVDA"",""close"",DATE(2026,1,1),TODAY(),""WEEKLY""),0,2)))"
```

## Syntaxes validées le 15/10

| Usage | Formule |
|---|---|
| Cours du jour | `GOOGLEFINANCE("NASDAQ:NVDA","price")` |
| Clôture de la veille | `GOOGLEFINANCE("NVDA","closeyest")` |
| Historique | `GOOGLEFINANCE("NVDA","close",DATE(2026,1,1),TODAY(),"WEEKLY")` |
| Change | `GOOGLEFINANCE("CURRENCY:EURUSD")` · idem avec dates pour l'historique |
| Devise de cotation | `GOOGLEFINANCE("LON:SWDA","currency")` |

⚠️ **`"MONTHLY"` a échoué** (`#N/A`). `WEEKLY` et `DAILY` fonctionnent.
⚠️ **Toujours lire la date du jour** dans la feuille (`TEXT(TODAY(),"yyyy-mm-dd")`)
pour prouver que le calcul est vivant.

## Tickers du dossier

`NASDAQ:NVDA` · `NASDAQ:TSLA` · `NASDAQ:MSFT` · `NYSEARCA:VTI` · `LON:SWDA`
· `EPA:WPEA` · `CURRENCY:EURUSD` · `CURRENCY:EURGBP`

⚠️ **`LON:SWDA` cote en GBX (pence)** — diviser par 100 **puis** par EURGBP.
Vérifié par `GOOGLEFINANCE("LON:SWDA","currency")`.

## Contrôles passés le 15/10

Croisement avec les captures de Tanguy, **deux sources indépendantes** :

| | Google | Capture | |
|---|---|---|---|
| NVDA | 217,32 | 216,72 | ✅ |
| VTI | 377,37 | 377,30 | ✅ |
| SWDA | 11 054 | 11 052,10 | ✅ |
| WPEA | 7,16 | 7,167 | ✅ |

Et le contrôle qui vaut preuve : les **quantités déduites** donnent
**70,068 parts de WPEA** — Fortuneo en affiche **70**. La méthode se valide sur
la seule ligne dont je connais la quantité par ailleurs.

## Quantités déduites (15/10)

`WPEA 70` · `VTI 0,8581` · `SWDA 1,7906` · `NVDA 1,0563` · `TSLA 0,5140` ·
`MSFT 0,1618`. Cohérentes avec mes archives du 25/07 (~0,86 · ~1,06 · ~0,51).

## À faire désormais chaque matin

Une feuille, une lecture, et les cours de toutes les lignes sont à jour — **fin
du relevé à la main**. Supprimer les feuilles de test après usage.

## Pièges d'alignement — rencontrés le 15/10, à ne pas redécouvrir

**1. Les places n'ont pas les mêmes jours fériés.** Sur juin-octobre : NASDAQ
**95** séances, Londres **97**, Paris **98**. Un `TEXTJOIN` par série donne des
listes de longueurs différentes — **les coller côte à côte décale tout**.
→ **Toujours récupérer la colonne de dates de CHAQUE ticker**, puis reporter le
dernier cours connu (*forward-fill*) sur un calendrier commun.

**2. Le change cote tous les jours, les actions non.** `CURRENCY:EURUSD` en
`DAILY` renvoie **137** points sur la même période, week-ends compris.
→ Récupérer aussi les dates du change et l'aligner par date.

**3. `WEEKLY` échappe aux deux pièges** : toutes les séries tombent sur 41 points
alignés. **Pour une vue longue, préférer `WEEKLY`** ; ne passer en `DAILY` que
sur la période récente, avec l'alignement ci-dessus.

## Pièges d'affichage — la plainte de Tanguy du 15/10 au soir

> « La courbe est beaucoup trop proche, elle n'est pas visible. C'est un trait. »

**Trois causes cumulées, toutes de mon fait :**

1. **L'axe partait de zéro** (`fromZero: true`). Sur des valeurs de 500 €, une
   variation de 20 € devient invisible. **Supprimé.** Un axe ne part de zéro que
   pour des barres, jamais pour une courbe de suivi.
2. **La marge verticale était de 15 %**, ce qui écrase encore. **Passée à 6 %.**
3. **Des lignes de 77 € et de 500 € sur la même échelle linéaire** : les petites
   sont des traits plats, quoi qu'on fasse.
   → **Mode « % » par défaut** : chaque ligne repart de 0 au début de la période
   choisie. C'est le seul affichage où des lignes d'ordres de grandeur
   différents sont comparables.

**Et un piège de fond** : un **versement** n'est pas une performance. Le dépôt
PEA du 02/10 fait sauter le total de 500 €. La courbe de performance trace donc
le **livre eToro seul**, continu sur l'année. `portefeuille-2026.csv` porte les
deux colonnes : `valeur_eur` (total réel) et `etoro_eur` (hors versements).

Commandes de la page : périodes **1 mois / 3 mois / 6 mois / 2026** et bascule
**% / €**, stockées dans `dash/params` (`periode`, `mode`).

## Permission de nettoyage — accordée par Tanguy le 15/10

`mcp__Google_Drive__trash_file` est dans `permissions.allow` de
`.claude/settings.json` *(à la racine du dépôt)* : la mise à la corbeille des
feuilles de calcul de travail ne demande plus de validation.

**Portée exacte, à ne pas élargir sans qu'il le redemande** :
- la règle couvre **cet outil entier**, pas seulement les feuilles que je crée —
  les permissions MCP ne se filtrent pas par argument ;
- `trash_file` **met à la corbeille**, il ne supprime pas : tout reste
  récupérable 30 jours depuis Drive ;
- le fichier est **versionné**, donc la règle vaut pour **toute session agent sur
  ce dépôt**, pas seulement pour moi.

**Discipline que je m'impose en échange** : ne mettre à la corbeille que des
fichiers **que j'ai créés dans la même session**, et le dire dans ma réponse. Ne
jamais toucher à un fichier préexistant de son Drive, même si le nom ressemble à
l'un des miens. Une permission accordée pour un usage ne l'autorise pas pour un
autre — elle retire une question, pas une responsabilité.

Pour révoquer : supprimer la ligne de `.claude/settings.json`.
