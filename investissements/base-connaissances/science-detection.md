# Science de la détection — où vivent les inefficiences, à quelle vitesse l'info se price, qui est en face

Compilé le 2026-07-27 pour le Chasseur (`.claude/agents/chasseur-pepites.md`).
Complète frontiere-academique.md (zoo des facteurs, ce qui réplique),
methodes-quantitatives.md (règles de portefeuille) et terrains-invisibles.md
(les terrains). Ici : POURQUOI l'inefficience existe (théorie de l'information),
à quelle VITESSE l'information se price (fenêtres d'edge), et QUI est la
contrepartie (sélection adverse). Étiquettes : [ROBUSTE] répliqué / [DÉBATTU] /
[FRAGILE]. Rappel transversal déjà en base : décoter ~32-50 % tout effet publié
(McLean-Pontiff 2016 ; confirmé sur échantillon élargi par Chen-Zimmermann,
Critical Finance Review 2022).

## 0. Les trois lois du jeu ([ROBUSTE] — fondements jamais démentis)

1. **L'inefficience est un ÉQUILIBRE, pas une anomalie** (Grossman-Stiglitz,
   AER 1980). Un marché parfaitement efficient est impossible : si les prix
   reflétaient tout, personne ne serait payé pour chercher l'information, donc
   personne ne chercherait. Il reste un « degré d'équilibre de déséquilibre » :
   l'erreur de prix résiduelle est la RÉMUNÉRATION du coût de recherche.
   Corollaire : l'edge vit exactement là où l'information coûte cher à
   acquérir (langue locale, documents indigestes, complexité, titres trop
   petits pour payer un analyste) — c'est le fondement théorique des 7
   terrains invisibles. Ton profit attendu = le coût que TU as payé et que
   les autres refusent de payer. Aucun coût payé → aucun edge → tu es le bruit.
2. **Les pros n'arbitrent pas tout** (Shleifer-Vishny, JF 1997, « The Limits
   of Arbitrage »). L'arbitrage réel exige du capital, est risqué, et est
   délégué à des gérants jugés sur 12-24 mois. Conséquences : (a) *noise
   trader risk* (De Long et al., JPE 1990) — une erreur de prix peut
   S'AGGRAVER avant de se corriger, donc les pros fuient les trades sans
   catalyseur et sans instrument de couverture ; (b) l'arbitrage
   « performance-based » se retire PRÉCISÉMENT quand l'écart est maximal
   (rachats de fonds dans les crises) — les dislocations sont le meilleur
   moment d'un capital SANS mandat ; (c) le capital revient lentement après
   un choc — semaines-mois (Duffie, JF 2010, « slow-moving capital »).
   L'avantage structurel de Tanguy n'est pas l'information : c'est l'ABSENCE
   DE MANDAT (horizon 5-7 ans, personne ne peut le forcer à vendre).
3. **La correction se fait aux CATALYSEURS.** Sur 97 anomalies, les
   rendements sont +50 % les jours de news d'entreprise et ×6 les jours de
   résultats (Engelberg-McLean-Pontiff, JF 2018) : le mispricing se corrige
   quand une information force le regard, pas par diffusion douce. Et l'alpha
   des signaux fondés sur données publiques se concentre dans le 1ᵉʳ MOIS
   après la publication de la donnée, puis décroît (Bowles-Reed-Ringgenberg-
   Thornock, JF 2024, « Anomaly Time »). Deux règles : un signal se travaille
   FRAIS (semaines, pas trimestres) ; une décote sans catalyseur daté n'a pas
   de date de paie (elle peut durer 20 ans — cf. holdings, terrain 3e).

## 1. Carte des inefficiences persistantes (situation → pourquoi → exploitation)

| Situation | Pourquoi ça persiste | Exploitation Chasseur |
|---|---|---|
| Small/mid sous-couverte (0-2 analystes, peu d'institutionnels) | Coût d'info > gain espéré pour les pros (loi 1) ; sans analystes l'info circule lentement — et les MAUVAISES nouvelles encore plus lentement que les bonnes (Hong-Lim-Stein, JF 2000) ; l'info descend des big caps vers les smalls du même secteur avec retard (Hou, RFS 2007) | Payer le coût d'info : source primaire, langue locale, diff de filings. Drift post-news plusieurs fois plus long qu'en large cap. En portefeuille : une mauvaise nouvelle « sans réaction du cours » n'est PAS rassurante |
| Titre non couvrable (idiosyncratique, holding, situation unique, pas de substitut) | Impossible à hedger → le pro passe son tour (loi 2) | Terrain réservé au capital patient ; exiger le catalyseur daté (loi 3) sinon candidate structurelle |
| Complexité structurelle (conglomérat, spin-off, comptabilité inhabituelle) | Le traitement coûte : la même info met >1 mois à se pricer dans un conglomérat vs un pure play — 118 pb/mois avant coûts in-sample (Cohen-Lou, JFE 2012) ; les analystes subissent la MÊME contrainte (leurs révisions du simple précèdent leurs révisions du complexe) | Faire la somme des parties AVANT l'événement de simplification ; utiliser le mouvement du pure play coté pour anticiper le repricing du complexe |
| Vendeur FORCÉ non-économique (sortie d'indice, spin-off bradé par les fonds du parent, rachats de fonds, fiscal, appel de marge) | Le vendeur n'a PAS d'opinion sur la valeur (Coval-Stafford, JFE 2007, fire sales) : pression mécanique puis réversion | Le SEUL cas où l'acheteur ne subit pas de sélection adverse (§3). Exclusions d'indice : ~+5 %/an pendant 5 ans post-suppression [DÉBATTU — Research Affiliates « Nixed » 2024, praticien, cohérent avec la littérature fire-sales]. Miroir vivant de l'effet inclusion (mort, règle 8 méthodes-quant) |
| Info GRADUELLE (goutte-à-goutte de petits faits) | L'attention se déclenche sur le discret, pas le continu : momentum 5,9 % après info continue vs -2,1 % après info discrète à rendement de formation égal (Da-Gurun-Warachka, RFS 2014, « frog in the pan ») ; forte couverture média = info discrète = pricée | La SÉRIE de petits faits (commandes, embauches, révisions successives) est sous-pricée ; la une spectaculaire est déjà pricée. Chasser les séries, pas les unes — c'est la base théorique de la cible « SOUS-RÉACTION documentée » de la charte |
| Fenêtre d'inattention (publication noyée dans un jour chargé) | Réaction immédiate -15 % et drift +70 % pour les annonces du vendredi (DellaVigna-Pollet, JF 2009) ; drift renforcé quand beaucoup d'annonces tombent le même jour, surtout pour les BONNES surprises (Hirshleifer-Lim-Teoh, JF 2009) | Les jours les plus chargés de la saison des résultats sont des jours de chasse : chercher la bonne publication ENTERRÉE. [Mécanisme ROBUSTE ; les signaux calendaires nommés sont FRAGILES post-publication — modulateur, pas signal] |
| Texte vs chiffres (langage de filing, guidance qualitative) | Le marché price le chiffré vite, le texte lentement — « Lazy Prices » (charte règle 10) et chronologie des transcripts (règle 11) | Déjà câblé dans la charte ; la science confirme que c'est le bon terrain |

Cadre d'ensemble (Barberis-Shleifer-Vishny, JFE 1998) : SOUS-réaction aux
nouvelles isolées et graduelles ; SUR-réaction aux longues séries de nouvelles
allant dans le même sens (extrapolation). D'où le kill-test T1 : un titre à
+60 % YTD après 6 trimestres de bonnes nouvelles est en zone d'extrapolation.

## 2. Vitesses de diffusion — la géographie temporelle de l'edge

Fenêtre = temps pendant lequel agir a encore de la valeur. Elle S'ALLONGE avec
la petitesse, la non-couverture, la complexité, le caractère graduel de l'info ;
elle SE FERME avec la saillance et la couverture. [Gradients ROBUSTES ;
ampleurs actuelles DÉBATTUES — décoter.]

| Type d'info × titre | Vitesse de pricing | Fenêtre d'edge |
|---|---|---|
| Surprise de résultats, mega/large cap US | Le jour de l'annonce — PEAD ≈ 0 hors microcaps depuis ~2006 (Martineau, Critical Finance Review 2022, « Rest in Peace PEAD ») | AUCUNE — ne pas chasser de drift ici |
| Surprise de résultats, small/mid sous-couverte (US, Europe, EM) | Sous-réaction initiale puis drift 60-90 j ; historique 2,6-9,4 %/trimestre (Bernard-Thomas 1989), aujourd'hui ~2 %+ à 60 j sur les déciles extrêmes de surprise [DÉBATTU sur l'ampleur] | 1-4 semaines post-publication pour se placer (cohérent règle 6 méthodes-quant) |
| Révisions d'estimations en série | Drift 3-6 mois (règle 7 méthodes-quant) | Semaines |
| Changement de langage 10-K/URD (« Lazy Prices ») | Plusieurs mois — personne ne lit les diffs | Mois (charte règle 10) |
| Choc chez un client/fournisseur coté → titre économiquement lié | ~1 mois de retard (Cohen-Frazzini, JF 2008, economic links ; Cohen-Lou 2012 pour les conglomérats) | Semaines — remonter la chaîne DÈS le choc |
| Donnée publique type « signal d'anomalie » (comptable, positionnement) | Alpha concentré dans le 1ᵉʳ mois post-release de la donnée (Bowles et al., JF 2024) | <1 mois — la fraîcheur est tout |
| Achats d'insiders opportunistes / 13D | Drift 1-12 mois (82 pb/mois VW — Cohen-Malloy-Pomorski, JF 2012 ; règle 4 méthodes-quant) | Semaines-mois : le jeu est le drift, pas le pop du jour de l'annonce |
| Vente forcée (exclusion d'indice, spin-off dump, redemptions) | Pression immédiate puis RÉVERSION sur 1-5 ans (Coval-Stafford 2007 ; « Nixed » 2024) | La plus longue — des mois pour se placer, sans se presser |
| Une SAILLANTE médiatisée (headline, meme, vieille news recyclée) | Sur-réaction immédiate, souvent suivie de réversion : EntreMed +330 % sur une news de Nature vieille de 5 mois reprise en une du NYT (Huberman-Regev, JF 2001) ; le retail sur-réagit aux stale news (Tetlock, RFS 2011) | NÉGATIVE — anti-signal ; d'où le contrôle de date de 1ʳᵉ publication (T2) |
| Brevets, science, calendrier réglementaire | 18-36 mois entre le dépôt/texte et le pricing (charte règle 9 ; terrains 4 et 6) | La plus précoce, mais la plus lente à payer (drapeau T5 durée) |

## 3. Sélection adverse — le test « qui est le pigeon à cette table »

Fondement : quand tu trouves une « aubaine », quelqu'un te la VEND. Entre
agents informés rationnels, l'offre de vente est en elle-même une information
négative (Akerlof, QJE 1970, lemons ; théorème de no-trade de Milgrom-Stokey
1982). Le spread des small caps est littéralement le prix facturé contre la
sélection adverse (Glosten-Milgrom 1985 ; Kyle 1985). Trois questions avant
tout rapport d'« aubaine » :

1. **QUI vend pour que ce prix existe ?** Vendeur FORCÉ identifiable et NOMMÉ
   (fonds indiciels après exclusion, actionnaires du parent après spin-off,
   fonds en décollecte, fiscal, marge) = la seule contrepartie prouvablement
   non informée → aubaine plausible. Vendeur volontaire non identifié sur un
   titre correctement suivi → le prix bas a probablement une raison que tu ne
   vois pas encore.
2. **QUE font les informés pendant la baisse ?** Hiérarchie d'informativeness
   des flux [ROBUSTE] : insiders OPPORTUNISTES à l'achat (hors trades
   routiniers : 82 pb/mois d'alpha ; >50 % des trades d'insiders sont
   routiniers, à pouvoir prédictif NUL — Cohen-Malloy-Pomorski, JF 2012 ;
   leurs achats prédisent les news futures de la société) ≫ institutions
   actives (≈ 0 en agrégat net ; exceptions documentées : 13D activistes —
   drift post-13D, charte) ≫ retail en foule = CONTRE-indicateur (-4,7 % à
   20 j, déjà en base). Checks concrets : cluster de VENTES d'insiders
   pendant « l'aubaine » ? émission d'actions / secondary d'un sponsor
   pendant le narratif ? Les informés vendent ce que tu trouves bon marché
   → drapeau rouge qui requalifie le signal.
3. **POURQUOI moi ?** Nommer l'avantage structurel qui explique que
   l'opportunité te soit servie : horizon sans mandat (loi 2), taille trop
   petite pour les fonds, coût d'info effectivement payé (langue, source
   primaire, diff de filings — loi 1). Aucune réponse nommable = tu es la
   liquidité de quelqu'un (winner's curse : on est d'autant mieux servi que
   les informés se sont retirés — Rock, JFE 1986).

## 4. Mort ou fragile — à ne plus chasser (état 2020s)

- **PEAD sur large caps US : MORT** depuis ~2006 (Martineau 2022) — la
  découverte de prix se fait le jour J (traitement algorithmique des news).
  Un « drift » sur mega cap n'existe que dans les backtests pré-2001.
  L'inclusion S&P 500 est morte aussi (déjà règle 8 méthodes-quant) ; sa
  jumelle VIVANTE est l'exclusion (§1, vendeur forcé).
- **Signaux calendaires/d'attention nommés** (effet vendredi, etc.) :
  mécanisme d'inattention robuste, signaux nommés arbitrés depuis publication
  [FRAGILE] — utiliser l'attention comme modulateur d'un signal fondamental,
  jamais comme signal autonome.
- **Signal public de plus d'un mois** : l'alpha se concentre dans le 1ᵉʳ mois
  post-release (Bowles et al. 2024) — un « signal » de 3 mois est une
  statistique, plus un signal. Durcit T2 : dater l'info ET sa fenêtre.
- **Les anomalies dont l'alpha vit dans la jambe SHORT** : la surévaluation
  est plus fréquente et plus sévère que la sous-évaluation, parce que shorter
  est contraint et risqué (Stambaugh-Yu-Yuan, JFE 2012 « The Short of It »,
  JF 2015, RFS 2017) — en long-only cet alpha est INACCESSIBLE. Usage
  inversé : les profils de la jambe courte forment la liste de ce qu'on
  n'ACHÈTE PAS — émetteurs d'actions en série, lottery stocks à forte
  volatilité idiosyncratique, accruals gonflés — surtout en période
  d'euphorie (le sentiment prédit surtout la jambe courte). L'évitement est
  la moitié long-only du jeu.
- **Stratégies à rotation rapide** (réversion court terme…) : les coûts de
  transaction détruisent l'alpha des anomalies à fort turnover (Novy-Marx-
  Velikov, RFS 2016). Ce qui SURVIT aux coûts et à la publication : les
  signaux lents sur des titres chers à arbitrer — 98 % des prédicteurs
  clairement significatifs répliquent in-sample, déclin post-publication
  ~50 %, concentré dans les ~3 ans suivant la publication, sans tomber à
  zéro (Chen-Zimmermann, CFR 2022). Exactement le terrain du Chasseur.

## 5. Câblage pratique (résumé en 5 règles pour la chasse)

1. Chaque signal porte sa FENÊTRE (table §2) et son catalyseur daté — la
   correction se fait aux news (loi 3). Pas de date de paie plausible sous
   12-18 mois → candidate structurelle (doctrine terrains-invisibles), pas
   signal.
2. Toute « aubaine » passe le test de sélection adverse (§3) — verdict en une
   ligne au rapport : vendeur forcé nommé / informés à l'achat / pourquoi moi.
3. Chasser les SÉRIES d'info graduelle, fuir les unes saillantes (§1) ; les
   jours chargés de résultats sont des jours de chasse, pas de repos.
4. Le drift ne se chasse qu'en small/mid sous-couvertes — jamais en mega cap
   (§4) ; en small, l'absence de réaction à une MAUVAISE nouvelle est un
   risque, pas un soulagement (Hong-Lim-Stein).
5. L'avantage de Tanguy est structurel, pas informationnel : (a) absence de
   mandat, (b) droit d'acheter le petit/illiquide, (c) volonté de payer le
   coût d'info (langue, sources primaires, diffs). Toute thèse doit invoquer
   au moins un des trois — sinon elle appartient à quelqu'un d'autre.

Références clés : Grossman-Stiglitz (AER 1980) ; Shleifer-Vishny (JF 1997) ;
De Long et al. (JPE 1990) ; Duffie (JF 2010) ; Engelberg-McLean-Pontiff
(JF 2018) ; Bowles et al. (JF 2024) ; Martineau (CFR 2022) ; Bernard-Thomas
(1989) ; DellaVigna-Pollet (JF 2009) ; Hirshleifer-Lim-Teoh (JF 2009) ;
Da-Gurun-Warachka (RFS 2014) ; Cohen-Lou (JFE 2012) ; Cohen-Frazzini (JF
2008) ; Hong-Lim-Stein (JF 2000) ; Hou (RFS 2007) ; Coval-Stafford (JFE
2007) ; Research Affiliates « Nixed » (2024) ; Cohen-Malloy-Pomorski (JF
2012) ; Stambaugh-Yu-Yuan (2012/2015/2017) ; Huberman-Regev (JF 2001) ;
Tetlock (RFS 2011) ; Barberis-Shleifer-Vishny (JFE 1998) ; Akerlof (1970) ;
Milgrom-Stokey (1982) ; Rock (1986) ; Novy-Marx-Velikov (RFS 2016) ;
Chen-Zimmermann (CFR 2022). URLs : rapport de mission du 27/07/2026.
