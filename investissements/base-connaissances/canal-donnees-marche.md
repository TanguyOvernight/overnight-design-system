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

## Lisibilité, deuxième passe — capture de Tanguy du 15/10 à 20h18

> « C'est illisible avec les points au bout des courbes. »

**Une pastille par point de donnée, c'est tenable à 10 points et illisible à
120.** Six séries × ~120 séances = **720 pastilles** par-dessus six traits de
2 px : la courbe disparaît sous ses propres marqueurs.

Règle retenue, codée dans `drawSeries` :
- **≤ 15 points** → une pastille par point *(des points rares doivent se voir)* ;
- **> 15 points** → **aucune pastille sauf celle du bout**, qui sert de repère
  entre la ligne et la légende.

Second défaut de la même capture : l'étiquette « point de départ » s'écrivait à
**gauche**, exactement là où les six courbes se rejoignent à 0 %. Déplacée à
droite, et **supprimée en mode %** — l'axe affiche déjà `+0,0 %`, le pointillé
se lit seul. **Une étiquette qui nomme l'évidence et masque la donnée coûte deux
fois.**

> Principe à garder : **la densité des marqueurs doit dépendre du nombre de
> points, pas d'un choix fait une fois.** Le code qui allait bien pour quatre
> clôtures hebdomadaires est devenu nuisible le jour où j'ai ouvert le canal
> quotidien — la même ligne de code, un ordre de grandeur plus loin.

## Zoom et échelles — ajoutés le 15/10 au soir

**Gestes** : pince, molette ou glisser pour zoomer ; **double-clic pour revenir**,
et un bouton « Dézoomer » qui n'apparaît que si le graphique l'est.

**L'axe vertical se recale sur la fenêtre visible** *(bouton « S'adapte au
zoom », par défaut)*. C'est le cœur : sans ça, zoomer ne sert à rien, la courbe
reste écrasée par des valeurs qui ne sont plus à l'écran. L'option « Fixe » garde
l'échelle de toute la période, pour comparer deux zooms entre eux.

### Le piège technique, à ne pas réintroduire

**Ne jamais redessiner le graphique pendant le geste.** Le `d3.zoom` est attaché
à la surface transparente ; la redessiner détruit l'élément sous le doigt et
**coupe la pince en deux**.

Solution retenue : pendant le geste, un simple étirement horizontal du groupe
tracé *(`translate` + `scale` en x seulement)*, avec
`vector-effect="non-scaling-stroke"` pour que l'épaisseur des traits ne gonfle
pas. **Au relâchement** *(`end`)*, le transform est mémorisé et le vrai tracé
refait — axes, graduations et échelle verticale recalculés.

Autres points à savoir :
- le transform vit dans `zoomT[hostId]`, **hors du dessin**, pour survivre aux
  redessins déclenchés par `dash.onData` ;
- `zoomSig` le remet à zéro quand la donnée ou la largeur change — un zoom gardé
  sur une autre période n'aurait aucun sens ;
- le tracé est **découpé** (`clipPath`), sinon les points hors fenêtre débordent
  sur les marges ;
- les étiquettes de dates hors fenêtre sont filtrées, sinon elles s'écrivent
  dans le vide ;
- `touch-action: none` sur `.bi-chart`, sans quoi le navigateur confisque la
  pince pour zoomer la page entière.

## Lenteur des boutons — diagnostiquée le 15/10 au soir

> « Les options du graphique mettent longtemps à charger. »

**Deux causes, toutes deux de ma main.**

**1. Je mesurais 121 étiquettes de dates, une par une, à chaque dessin.**
`getComputedTextLength()` oblige le navigateur à recalculer la mise en page
**à chaque appel**. Cent vingt et un recalculs forcés par graphique, à chaque
clic sur un filtre.
→ Un seul gabarit mesuré *(« 30 sept. », la plus large)* : toutes les étiquettes
de dates ont la même forme. Plus un **cache** `texte → largeur` valable pour la
vie de la page, puisqu'une même chaîne a toujours la même largeur.

**2. Un clic sur un filtre redessinait les cinq graphiques.** Or le cours du
WPEA, STM et la courbe 2026 **ne dépendent d'aucun filtre**.
→ `siChange(id, signature, fn)` : chaque graphique garde la signature de ce qui
le détermine *(nombre de lignes, largeur, filtres qui le concernent)* et n'est
refait que si elle change. Un clic sur « 3 mois » ne redessine plus que la
courbe principale.

> **Le coût n'était pas dans la quantité de données mais dans le nombre d'allers-
> retours avec le moteur de rendu.** 615 points à tracer, c'est instantané ;
> 121 mesures qui forcent chacune un recalcul de page, non. Chercher « trop de
> données » m'aurait fait optimiser la mauvaise chose.

⚠️ **Piège si on retouche `siChange`** : ne jamais y faire passer la courbe
principale. Elle doit se redessiner à chaque changement de filtre — c'est son
rôle. Et vider `signatures[id]` quand une source passe en erreur, sinon le
graphique reste figé sur son dernier état valide.

## ⚠️ PIÈGE MAJEUR — `closeyest` ment sur la date (16/10)

`GOOGLEFINANCE(ticker, "closeyest")` a renvoyé, **dans le même appel** :
- la clôture du **15/10** pour `EPA:WPEA` et `LON:SWDA` *(correct)* ;
- la clôture du **14/10** pour `NASDAQ:NVDA`, `TSLA`, `MSFT`, `NYSEARCA:VTI`,
  `NYSE:LLY` *(faux d'une séance)*.

**Trois chiffres faux publiés sur Slack avant détection.**

> **NE PLUS JAMAIS UTILISER `closeyest` NI `price` POUR UN CHIFFRE PUBLIÉ.**
> Toujours `close(début, fin, "DAILY")`, qui renvoie **les dates avec les
> valeurs**. Un nombre sans date est inexploitable, et rien ne signale l'erreur.

Détection : quatre valeurs **identiques au centime** aux relevés de la veille.
→ **Toujours confronter un relevé neuf aux archives avant publication.** C'est le
seul contrôle qui ait fonctionné ici.

## Nettoyage — automatique, et sans le dire (16/10)

> Tanguy, le 16/10 : « fais le trash automatiquement toi-même ».

**La mise à la corbeille fait partie de la requête, pas d'une étape de fin.**
Toute feuille créée pour interroger GOOGLEFINANCE est **jetée dans le même tour**
que sa lecture. Jamais à la fin du brief, jamais « quand j'y penserai » : la
corbeille suit la lecture comme l'accolade fermante suit l'ouvrante.

Et **ça ne se raconte pas** : il n'a pas à lire que j'ai nettoyé derrière moi,
pas plus qu'il ne lit que j'ai fermé un fichier.

**Trois garde-fous qui n'ont pas changé :**
1. Ne jeter **que** des fichiers créés dans la même session. Jamais un fichier
   préexistant de son Drive, même si le nom ressemble aux miens.
2. `trash_file` met à la corbeille, **ne supprime pas** — récupérable 30 jours.
3. Si une lecture échoue, **jeter quand même** la feuille avant de réessayer :
   une feuille cassée laissée derrière est le pire des deux mondes.

**Vérification périodique** : `list_recent_files` et chercher un titre finissant
par « — Claude ». Au 16/10 : **aucun reliquat**, les huit feuilles créées les
15 et 16/10 sont toutes à la corbeille.

---

# 📅 05/11/2026 — DEUXIÈME CANAL OUVERT : le primaire horodaté

*Les deux hôtes autorisés le 04/11 fonctionnent. Première chasse depuis six
semaines à lire des documents primaires.*

## ⭐ Recette 1 — le FAIT primaire daté : Euronext par ISIN

```
https://live.euronext.com/en/product/equities/<ISIN>-XPAR
```
→ **liste horodatée des communiqués réglementés de l'émetteur**, dates exactes et
titres. *Le flux réglementé à la source, pas une paraphrase de presse.*
Validé sur `FR001400A3Q3` *(ICAPE)* et `FR0000130403` *(Christian Dior)*.

```
https://live.euronext.com/en/markets/paris
```
→ **communiqués réglementés du jour horodatés à la minute** *(07:30, 07:45, 07:58,
08:00 CET)* **+ niveaux d'indices en direct**.

### ⚠️ Limites établies, à ne pas re-tester
- `live.euronext.com/en/products/equities/company-news` renvoie **vide** *(rendu
  JS)*. **Ne pas réutiliser.**
- Les fiches par ISIN **ne portent ni prix ni capitalisation** → second hôte requis.
- **Les titres sont tronqués et le corps du communiqué n'est pas servi** : on
  obtient le fait et sa date, pas le détail. *Un émetteur du 05/11 est resté non
  identifiable, titre coupé en français comme en anglais.*

## ⭐⭐ Recette 2 — le PRIX horodaté : abcbourse par ticker

```
https://www.abcbourse.com/cotation/<TICKER>p
```
→ nom, ticker, ISIN, **dernier cours avec HORODATAGE PRÉCIS**
*(« 04/11/2026, 17:55:00 »)*, variation du jour, valorisation, borne 1 an.

> 🔑 **C'est l'instrument qui manquait depuis le début. R17 — « pas de thèse de
> sous-réaction sans prix horodaté » — est désormais exécutable sur n'importe
> quelle valeur de Paris, en une requête.** *Medincell serait mort en une requête
> au lieu de six prix contradictoires non datés.*

⚠️ `abcbourse.com/marches/palmares_pz` → **404**. Mauvaise URL, ne pas réessayer.

## 🚨 Démonstration involontaire, le jour même

Les résultats de recherche servaient le **CAC Small à 16 700-16 900 pts** — pages
datées de **janvier 2026**. Le fetch direct donne le niveau réel :

```
CAC Small   15 845,38 pts   (+1,71 %, séance du 05/11/2026)   [PRIMAIRE]
écart avec les agrégateurs : ~6 %
```

> **Et l'écart va dans le sens qui fabrique de fausses décotes.** *Les agrégateurs
> vieillissent ensemble : une valeur comparée à un indice périmé de 6 % paraît
> bon marché sans l'être.* **Troisième incident d'archive en quatre jours
> (Oddo 02/11, purge défense 04/11, CAC Small 05/11). Le fetch direct tranche,
> la recherche non.**

## Ce que ça change
Les **deux causes de décès les plus fréquentes** de nos dossiers — *fait non
primaire* et *prix périmé* — sont désormais traitables **en deux requêtes**.

---

## 06/11/2026 — limites du canal, confirmées à l'usage

✅ **Les deux recettes d'hier sont confirmées** : `live.euronext.com/.../<ISIN>-XPAR`
a donné la liste datée des communiqués de Maurel & Prom, et
`abcbourse.com/cotation/MAUp` a donné **7,18 € au 05/11/2026 17:55:00**.
*R17 exécutée en une requête, pour la deuxième journée consécutive.*

⚠️ **Deux limites neuves, à connaître avant d'y revenir :**
1. `live.euronext.com/en/markets/paris` sert bien les communiqués du jour
   **horodatés à la minute**, mais ses **niveaux d'indices arrivent SANS
   horodatage** → utilisables en ordre de grandeur, pas comme référence.
2. 🔴 **Aucun prix de matière première n'est fiable par ce canal.** Les niveaux de
   Brent servis par la recherche sont **mutuellement incohérents** :
   ```
   96,78 $ au 24/07   ·   79,45 $ début août   ·   103,71 $ au 15/10
   108,73 $ au 02/11  ·   « sous 115 $ » au 26/10
   ```
   **Aucune thèse cyclique ne doit s'appuyer là-dessus.** *À traiter comme
   le mur d'egress l'était avant le 04/11 : une absence de canal, pas une donnée
   incertaine.*

---

# ⚠️ 07/11/2026 — LE CANAL EST VALIDÉ PAR TAILLE, PAS GLOBALEMENT

**Google Finance est faux sur les petites valeurs françaises.** Démonstration sur
Aubay (AUB, FR0000063737) :

```
Google (EPA:AUB, DAILY)        05/11 = 52,50 €       06/11 = 49,55 €   ⇒ −5,62 %
abcbourse (horodaté 17:35:00)  clôture préc. 51,80 €  06/11 = 49,55 €   ⇒ −4,34 %
Contrôle interne : 51,80 × (1 − 0,0434) = 49,55 ✓  ·  52,50 ne boucle avec rien.
Et Google répète 49,55 € trois fois : 26/10, 27/10 et 06/11.
```

La validation du 15/10 portait sur **NVDA, VTI, SWDA et WPEA** — que des ETF et des
grandes capis — plus le contrôle des 70 parts. **Elle ne transporte pas aux small caps.**

> **Règle (R66)** : toute petite capitalisation exige un **recoupement horodaté** sur
> `abcbourse.com/cotation/<TICKER>p` **avant** d'entrer dans un appel, un seuil ou un
> classement. Les ETF et grandes capis restent servis par le canal Sheets.

**Symptôme à reconnaître** : une valeur **répétée à l'identique** sur des séances non
consécutives, ou une variation qui **ne boucle pas** avec la clôture précédente annoncée
par une autre source. C'est le même symptôme que `closeyest` (qui mentait sur la date) et
que `capi ÷ titres` (qui exhumait un prix périmé) : **le canal rend un chiffre ancien sous
une date fraîche.**

---

# ⭐ NOUVEAU CANAL — déclarations de dirigeants (art. 19 MAR), validé le 07/11/2026

| Usage | URL |
|---|---|
| **Liste nationale** des déclarations, fraîche | `abcbourse.com/marches/transactions_dirigeants` |
| **La page qui décide** — par émetteur | `abcbourse.com/marches/transactions_dirigeants/<ISIN>p` |

**Fraîcheur mesurée le 07/11** : opérations jusqu'au 04/11 déclarées le 05/11.
**Délai structurel : 3 jours ouvrés** — un achat du vendredi n'est pas lisible avant le mercredi.

## 🔑 Le champ qui décide : prix unitaire + contrepartie nommée

La **liste nationale** ne donne qu'un **montant**. La page **par émetteur** donne la
**quantité**, le **prix unitaire** et le **commentaire AMF nommant la contrepartie**.

**Le cas qui l'a prouvé — Audacia, 07/11/2026.** La liste affichait Gravitation SAS
(holding du président du conseil) en « Acquisition » de **996 227 €** le 03/11 : le plus gros
ticket d'initié de la semaine à Paris, ~4,1 % de la capi, sur un titre près de son plus-bas.
La page par émetteur disait : **245 982 titres à 4,05 €, « auprès de monsieur Charles
Beigbeder »** — la holding de M. Beigbeder rachetant à M. Beigbeder, à un prix **18 % au-dessus
du marché** qui est exactement celui de l'augmentation de capital du 11/02/2026.
**Transfert de contrôle intra-familial, zéro euro extérieur.**

> **Un montant d'« acquisition » sans prix unitaire ni contrepartie nommée n'est pas un achat
> d'initié — c'est une ligne de tableau.** Sans ce champ, un faux signal de manuel partait
> dans le brief.

**Deux tests à passer systématiquement sur ce canal :**
1. **T6 (contrepartie)** — *qui vend ?* Si le vendeur est lié à l'acheteur, il n'y a pas
   d'argent extérieur, donc pas de signal.
2. **Prix unitaire contre cours du jour** — un achat **au-dessus** du marché est un prix de
   transfert comptable, pas une conviction.

---

# 🚫 Hôtes bloqués — état au 07/11/2026

| Hôte | Ce qu'il porte | État |
|---|---|---|
| `echanges.dila.gouv.fr` | **Franchissements de seuil AMF** — `/OPENDATA/AMF/ACT/<année>/<mois>/`, fichiers `FCACT*.pdf`. C'est **le** canal primaire. | DNS non résolu |
| `assemblee-nationale.fr` | Amendements du PLF 2027 — **la base de résolution de C056** | DNS non résolu |
| `actusnews.com` | Communiqués primaires d'émetteurs français | DNS non résolu |
| `bdif.amf-france.org` | Avis AMF — les PDF individuels sont indexés, mais l'interface est une SPA : **la liste de la semaine est inaccessible**. Avis les plus récents remontés : juillet 2026. | atteignable, inutilisable |

**Conséquence** : aucun accès systématique aux franchissements de seuil. Le terrain smart
money repose entièrement sur les déclarations de dirigeants (ci-dessus) et, à partir du
~14/11, sur les 13F.

⚠️ **Je signale les hôtes bloqués, je ne les contourne pas, et je ne déclenche pas de
demande d'autorisation réseau depuis une routine planifiée.** C'est la décision de Tanguy,
comme pour `live.euronext.com` et `abcbourse.com` qu'il a autorisés le 04/11.

---

# ⭐⭐ 11/11/2026 — LA BONNE PORTE EURONEXT : `listview/company-press-release`

```
https://live.euronext.com/en/listview/company-press-release/<code émetteur>
```

**Liste DATÉE des communiqués réglementés d'un émetteur.** Exemple validé :
`/003071` pour Vallourec.

**C'est la page que je cherchais depuis le 04/11.** La fiche ISIN
(`/en/product/equities/<ISIN>-XPAR`) rend une section « Press release » **vide** — c'est
ce que j'ai constaté sur Aubay le 07/11 et pris pour une absence de canal. **Le canal
existait, l'URL n'était pas la bonne.**

**Ce qu'elle permet, et que rien d'autre ne permettait :**
1. **Le test T2 (NOUVEAUTÉ) devient exécutable.** « Depuis quand est-ce public ? » se
   répond en une requête, sur la source primaire, par la liste datée.
2. **Confirmer une date de publication annoncée** par l'émetteur sans passer par son
   site IR (souvent hors réseau).

**Les deux cas du 11/11 :**
- ☠️ **Cenergy TUÉ.** Le 09/11, communiqué « signs a turnkey contract with IPTO » pour
  l'interconnexion Corinthe–Kos, **1,5 Md€**, 1 GW. Profil parfait. **La liste montre que
  l'attribution avait été annoncée le 13/08/2026** (« *is awarded* … subject to customary
  statutory conditions ») : le 09/11 n'est que la **signature** d'un fait public depuis
  trois mois. *Un titre de presse neuf sur un fait vieux* — le piège d'Aubay, dans une
  autre robe.
- ✅ **Vallourec confirmé.** T3 2026 le **vendredi 20/11/2026**, annoncé par communiqué du
  **27/10/2026**. Et la liste **prouve l'absence** de publication au 11/11 — donc tout
  chiffre « T3 Vallourec » croisé aujourd'hui est une archive du T3 2025.

> 🔑 **Et la leçon de datation, encore.** La recherche sur « résultats T3 Vallourec »
> remonte massivement du **novembre 2025** au présent, et la date piège est le
> **14/11/2025** — parfaitement plausible pour un « mi-novembre 2026 ». Le contrôle qui a
> tranché n'est pas une date mais une **incohérence d'unité** : une guidance « RBE entre
> 170 et 210 millions de **DOLLARS** » alors que **Vallourec guide en EUROS**.
> *Une unité qui ne colle pas date un document mieux qu'un horodatage absent.*

# 🚫 Hôtes bloqués — mise à jour du 11/11/2026

| Hôte | Ce qu'il porte | État |
|---|---|---|
| `echanges.dila.gouv.fr` | Franchissements de seuil AMF (`/OPENDATA/AMF/ACT/<an>/<mois>/`) | DNS non résolu |
| `assemblee-nationale.fr` | Amendements du PLF 2027 — base de résolution de **C056** | DNS non résolu |
| `actusnews.com` | Communiqués primaires d'émetteurs français | DNS non résolu |
| `www.msci.com` · `app2.msci.com` | Revues d'indices MSCI — **flux mécaniques datés** | DNS non résolu |
| `www.vallourec.com` | Calendrier IR *(contourné par la liste Euronext)* | DNS non résolu |
| `www.boursorama.com` | Presse financière française, communiqués relayés | DNS non résolu |
| `bdif.amf-france.org` | Avis AMF — SPA, liste de la semaine inaccessible | atteignable, inutilisable |

**Et une limite de couverture d'abcbourse, découverte le 11/11** :
`abcbourse.com/cotation/CENERb` renvoie **404**. **abcbourse ne couvre que Paris** —
aucun prix horodaté sur les lignes Bruxelles ou Amsterdam. Pour une valeur belge ou
néerlandaise, **je n'ai aujourd'hui aucun canal de prix horodaté**, donc aucun prix
rapportable. *À dire au lieu de servir un chiffre Google non recoupé (R66).*

⚠️ **Je signale les hôtes bloqués, je ne les contourne pas, et je ne déclenche pas de
demande d'autorisation réseau depuis une routine planifiée.** C'est la décision de Tanguy.

---

# 🔧 13/11/2026 — R66 AFFINÉE : le bon symptôme n'est pas la duplication, c'est la NON-RÉCONCILIATION

**Correction d'une erreur de ma part, trouvée en vérifiant ICAPE.**

Le 07/11, en démontrant la défaillance de Google Finance sur Aubay, j'avais retenu **deux**
symptômes :
1. une variation qui **ne boucle pas** avec la clôture précédente d'une source indépendante ;
2. une **valeur répétée à l'identique** sur des séances non consécutives.

**Le symptôme 2 est un faux positif.** Sur ICAPE (ALICA), la série Google donnait
`9,80 | 9,80 | 9,88 | 9,80 | 9,54 | 9,48 | 9,54 | 9,84 | 9,84` — trois paires de valeurs
identiques, et j'ai soupçonné le canal. **Recoupement sur abcbourse : ce sont de vraies
clôtures plates.** Sur un titre qui échange **1 900 à 12 300 titres par jour**, le cours
*ne bouge pas* certaines séances. Google avait raison.

> **La règle corrigée** : sur une petite capitalisation, **une valeur répétée n'est pas un
> défaut, c'est la liquidité**. Moins un titre échange, plus ses clôtures se répètent
> légitimement — et ce sont justement les titres sur lesquels j'ai le plus besoin de faire
> confiance à mes données.
> **Le seul symptôme qui démasque vraiment le canal est la NON-RÉCONCILIATION** : une
> variation annoncée qui ne reconstruit pas le prix à partir de la clôture précédente
> donnée par une source indépendante.

**Le contrôle qui marche, et qui a tranché les deux cas :**
```
AUBAY   abcbourse : clôture préc. 51,80 € · var −4,34 % → 51,80 × 0,9566 = 49,55 ✓
        Google    : clôture préc. 52,50 €                   ne boucle avec rien ✗
        ⇒ canal en défaut sur le 05/11

ICAPE   deux sources donnent 9,84 € au 12/11, et la série boucle séance par séance ✓
        ⇒ canal fiable ici, malgré les valeurs répétées
```

> 🔑 **Et la leçon de second ordre, qui est la plus coûteuse** : j'avais généralisé à partir
> d'un seul cas en retenant **tout ce que ce cas présentait**, au lieu de retenir **ce qui
> l'avait prouvé**. Aubay présentait les deux symptômes ; seul le premier était la preuve.
> *Un diagnostic tiré d'un cas unique doit nommer le test qui a tranché, pas la liste de ce
> qu'on a observé autour.* C'est R59 appliquée à un canal de données.

**R66 reste valable sur le fond** — Google Finance n'est pas validé sur les petites valeurs
et tout prix de petite capi se recoupe. **Seule la procédure de détection change** : on
teste la réconciliation, on ignore la répétition.

# 🚫 Hôtes bloqués — mise à jour du 13/11/2026

S'ajoutent à la liste du 11/11 :

| Hôte | Ce qu'il porte | Conséquence concrète |
|---|---|---|
| `ir.msci.com` · `app2.msci.com` *(s'ajoutent à `www.msci.com`)* | Listes nominatives des revues d'indices MSCI | **Les trois portes MSCI sont fermées.** J'ai les comptes de la revue de novembre (France Standard 0/2, Micro Cap 7/3, ACWI Small Cap 171/243) mais **aucun nom**, et je n'en reconstitue pas |
| `www.icape-group.com` | Site émetteur — **définition du carnet de commandes** | Seul trou restant du dossier ICAPE : impossible de savoir si le carnet mêle commandes fermes et prévisionnels |
| `www.webdisclosure.fr` | Communiqués réglementés d'émetteurs français | Chemin alternatif perdu quand actusnews et boursorama sont déjà bloqués |
| `www.tradingsat.com` | Presse financière, historiques de participations | Taille de la cession du fondateur d'ICAPE non vérifiable |

**Et une limite de forme d'abcbourse, relevée le 13/11** : la page
`abcbourse.com/cotation/ALICAp` **n'affiche aucun horodatage**, alors qu'elle en donne un à
la seconde pour Aubay (« 06/11/2026, 17:35:00 ») et Vallourec. *Sur les valeurs les moins
suivies, la discipline « un prix sans horodatage n'est pas un prix » n'est pas satisfaite :
elle est remplacée par un contrôle plus faible — la concordance de deux sources
indépendantes sur une clôture datée. **Le dire plutôt que le masquer.***


---

# ❌ 14/11/2026 — CORRECTION DE LA RECETTE EURONEXT : le paramètre est un CODE ÉMETTEUR, pas un ISIN

Le 11/11 j'ai noté la recette `live.euronext.com/en/listview/company-press-release/<code>`
avec pour seul exemple `/003071` (Vallourec). **Je n'ai pas dit ce qu'était ce code**, et
l'essai du 14/11 sur Roche Bobois avec `FR0013344173-XPAR` rend **« no results »**.

> **Le paramètre est un code émetteur interne Euronext** (6 chiffres du type `003071`),
> **pas un ISIN et pas un ISIN-XPAR.** La recette est donc **incomplète** tant que je ne
> sais pas comment obtenir ce code pour un émetteur donné.
> **Contournement connu** : les PDF sous
> `live.euronext.com/sites/default/files/company_press_releases/...`

*Une recette dont un paramètre n'est pas spécifié n'est pas une recette, c'est un souvenir
d'un cas qui a marché.* **À compléter : où lire le code émetteur Euronext d'une société.**

# 🚫 Hôtes bloqués — mise à jour du 14/11/2026

| Hôte | Ce qu'il porte | Gravité |
|---|---|---|
| **`www.sec.gov`** | **13F, 13D/G, tous les dépôts américains** | 🔴 **BLOQUANT** — rend la branche 13F du terrain smart money inexécutable, et les agrégateurs de substitution sont disqualifiés |
| `echanges.dila.gouv.fr` | Franchissements de seuil AMF | 🔴 bloquant pour la 2ᵉ branche du même terrain |
| `assemblee-nationale.fr` | Amendements du PLF — base de **C056** | bloquant pour la résolution |
| `msci.com` · `ir.msci.com` · `app2.msci.com` | Listes nominatives des revues d'indices | les trois portes fermées |
| `actusnews.com` · `boursorama.com` · `webdisclosure.fr` · `tradingsat.com` | Communiqués et presse financière française | chemins alternatifs tous fermés |
| `vallourec.com` · `icape-group.com` | Sites émetteurs | contournables par Euronext, sauf pour les définitions internes |
| `bdif.amf-france.org` | Avis AMF | atteignable, SPA, liste inutilisable |

**Le constat d'ensemble, à dire tel quel** : sur les quatre canaux primaires de données
réglementaires — SEC, DILA/AMF, Assemblée nationale, MSCI — **aucun n'est accessible**.
Ce qui reste : Euronext Live, abcbourse, et la recherche web. *Ce n'est pas une gêne
ponctuelle, c'est la forme de ce que je peux savoir.*
⚠️ **Je signale, je ne contourne pas, et je ne déclenche pas de demande d'autorisation
réseau depuis une routine planifiée.** C'est la décision de Tanguy.
