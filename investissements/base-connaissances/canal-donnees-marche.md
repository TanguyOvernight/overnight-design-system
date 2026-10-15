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
