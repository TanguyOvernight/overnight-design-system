# Lecture technique des marchés — règles validées et mythes écartés

Compilé le 2026-07-26 (revue de la littérature académique). Verdict global :
la lecture de TENDANCE (MM200, momentum 12 mois) est validée — son bénéfice
est MOINS DE CASSE, pas plus de rendement. Le chartisme graphique
(chandeliers, figures) est un mythe mesuré. Aucun outil ne « prédit » :
les règles décrivent des régimes de probabilités.

## ✅ Les 8 règles retenues (chacune avec sa preuve)

1. **DCA mensuel inconditionnel = l'alpha principal.** Jamais suspendre un
   versement pour « attendre un meilleur prix » : même le timing parfait ne
   rapporte que ~+0,4 %/an (Maggiulli « Even God Couldn't Beat DCA »).
2. **MM200 (≈ MM 10 mois) = baromètre de régime, lu 1×/mois.** Au-dessus :
   régime normal. En-dessous : volatilité ~double, rendement moyen
   inférieur → tempérer les prises de risque SUPPLÉMENTAIRES (jamais les
   versements) et se préparer psychologiquement. Preuve : drawdown max
   divisé par ~2 sur un siècle (Faber 2007) ; hors-échantillon la réduction
   de risque persiste, le surcroît de rendement non (Zakamulin).
3. **Momentum 12 mois pour choisir QUOI renforcer.** Entre deux actifs de
   qualité, renforcer celui dont la perf 12 mois est supérieure —
   l'anomalie la plus robuste de la finance empirique (Moskowitz-Ooi-
   Pedersen 2012, JFE ; un siècle de données AQR).
4. **Ne pas fuir les plus hauts.** La proximité du plus haut 52 semaines
   PRÉDIT la surperformance, sans renversement (George & Hwang 2004, JF).
   « Ça a trop monté » = biais d'ancrage documenté, pas de la prudence.
5. **VIX > 30 = feu vert renforcé, jamais un frein.** Rendements S&P 500 à
   6-12 mois positifs 70-83 % du temps (~+12 % à 6 mois en moyenne). La
   poche opportuniste se déploie LÀ. Nuance : en Sharpe c'est neutre — le
   surplus de rendement paie le surplus de risque (Elm Wealth).
6. **RSI extrême : indices larges seulement, en contexte.** Mean reversion
   validée sur indices, PAS sur actions individuelles (Lo & MacKinlay
   1988) — une action peut rester « survendue » jusqu'à zéro.
7. **Fréquence mensuelle, pas quotidienne.** Les règles en daily
   sur-transigent et sur-ajustent (Alpha Architect). Une lecture par mois.
8. **L'inactivité est une compétence.** Chaque transaction de plus coûte
   statistiquement (-6,5 pts/an pour les plus actifs, Barber-Odean ; 97 %
   des day traders persistants perdent, Chague et al.).

## ❌ Mythes écartés (ne JAMAIS baser une reco dessus)

- **Chandeliers** (doji, marteau, avalement…) : zéro pouvoir prédictif
  (Marshall-Young-Rose 2006, testé US ET Japon).
- **Figures chartistes** (épaule-tête-épaule, triangles, drapeaux) :
  contenu informationnel marginal, profit nul après coûts (Lo-Mamaysky-Wang
  2000 ; Sullivan-Timmermann-White 1999 : échec post-échantillon).
- **Supports/résistances tracés sur actions** : le mécanisme existe (ordres
  agglutinés sur chiffres ronds — Osler 2003, forex intraday) mais n'est
  pas un outil à notre horizon. Seul usage : ne pas placer un ordre limite
  pile sur un chiffre rond.
- **Volume comme signal autonome** : effet réel mais minuscule (Gervais et
  al. 2001). Usage sain : mouvement + gros volume = plus « sérieux ».
- **« Attendre le dip »** : perd contre le versement mécanique dans ~80 %
  des fenêtres, même avec information parfaite.
- **Prédire la direction** : personne ne le fait — les pros du trend (SG
  Trend ~4,9 %/an, mais +27 % en 2022) GÈRENT L'EXPOSITION, ils ne
  prédisent pas. Aucun fonds quantitatif ne trade des chandeliers.

## Intégration à la newsletter (la « lecture technique » d'une position)

Pour chaque position/candidate analysée, la lecture technique tient en une
ligne factuelle :

`📉 Technique : [au-dessus/sous] MM200 · momentum 12 m [+X %/-X %] ·
[à X % du plus haut 52 sem.] · (VIX : XX si régime de stress)`

Et elle MODULE le verdict, elle ne le crée jamais :
- Fondamentaux OK + au-dessus MM200 + momentum positif → renforcement
  normal.
- Fondamentaux OK + sous MM200 → renforcement maintenu mais taille normale
  (pas de rattrapage agressif), volatilité annoncée à Tanguy.
- Sous MM200 + momentum 12 m négatif + fondamentaux dégradés → c'est un
  couteau : on n'attrape pas.
- VIX > 30 → la réserve opportuniste du budget se déploie (jamais l'inverse).

## Données nécessaires (état des accès)

- Précis : **connecteur Alpha Vantage** (SMA, RSI, MACD, histo complet) —
  en attente de connexion par Tanguy.
- En attendant : niveaux MM200/plus haut 52 sem./RSI obtenus par recherche
  web (Barchart, TradingView, stockinvest…) — approximatif mais suffisant
  pour le régime. Toujours dater le niveau cité.
