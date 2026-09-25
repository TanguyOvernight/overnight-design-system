# UNIVERS — ETF émergents éligibles PEA (Euronext Paris/Amsterdam)
**Cartographie du 25/09/2026.** Canal : `WebSearch` uniquement. **Aucun DIC, aucune page
émetteur, aucune fiche Euronext lue directement** — `WebFetch`/`curl` bloqués à l'egress.
Les ISIN sont corroborés par **≥ 3 sources indépendantes chacun** (justETF, Fortuneo,
Amundi, Euronext, Cbonds, BourseDirect) — le maximum que ce canal permet.

> ⚠️ **Rien ici n'est un ordre d'achat.** Trois points restent à verrouiller sur le DIC,
> et ils sont nommés au bas de ce fichier.

## 🎯 LE CANDIDAT — **PAEEM**
| Champ | Valeur | Confiance |
|---|---|---|
| **ISIN** | **FR0013412020** | ✅ 6 sources concordantes |
| Ticker / place | **PAEEM** · **Euronext Paris** *(meilleur palier Fortuneo)* | ✅ |
| Réplication | **synthétique (swap)** — obligatoire pour être PEA-éligible | ✅ sourcé |
| **TER** | **0,30 %/an** | ✅ concordant |
| **Prix d'une part** | **~37,03 €** *(23/09/2026, 17h35)* | ✅ daté |
| Ticket praticable | **150 € → 4 parts = 148,12 €** · 200 € → 5 parts = 185,15 € | ✅ |
| Encours | 🔴 **271 / ~670 / 894 M€** — trois valeurs **incompatibles** | ❌ non tranché |
| **Indice réel** | 🔴 **« MSCI EM ex-Egypt ESG Broad CTB Select »** *(justETF, extraETF)* **contre** « MSCI Emerging Markets » *(blogs)* | ❌ **écart de fond** |
| **Capi. ou distrib.** | 🔴 justETF dit **Acc** · la page **Fortuneo** l'intitule **« EUR DIS »** | ❌ non tranché |
| Éligibilité PEA | **DÉDUITE** *(nom « PEA », gamme Amundi PEA, swap, page de cotation chez Fortuneo)* — **jamais lue sur un document réglementaire** | ⚠️ |

## Autres lignes de la gamme — aucune n'est un substitut
| Produit | ISIN | Ticker | TER | Pourquoi ce n'est pas le bon |
|---|---|---|---|---|
| Amundi PEA Asie Émergente | **FR0013412012** | PAASI | 🔴 0,30 % **ou** 0,20 % *(conflit)* | Asie seule — **ni Amérique latine ni EMEA** |
| Amundi PEA Amérique latine | **FR0013412004** | PALAT | 🔴 conflit 0,30/0,20 % | Brésil/Mexique, très concentré |
| Amundi PEA Émergent EMEA | **FR0011440478** | PLEM | 0,55 % | **encours 59 M€** — le plus petit, risque de fusion/fermeture |
| Amundi PEA Asie Pacifique ex-Japon | **FR0011869312** | **PAEJ** | 0,60 % | mixte développés+émergents |
| Amundi PEA Chine | **FR0011871078** | PASI | 0,65 % | mono-pays |

## 🌍 GPEA — pertinent à connaître, **inutile pour lui aujourd'hui**
**Amundi PEA Global (MSCI ACWI)**, **FR0014017NX3**, ticker **GPEA**, Paris, swap
unfunded, **TER 0,30 %**, **~5,10-5,13 €** la part *(23-24/09)*, coté depuis le
**15/07/2026**. **Part émergents ~12 %.**

> **Si Tanguy commençait aujourd'hui, GPEA (ACWI = monde + émergents) serait une
> alternative défendable à WPEA en UNE seule ligne, au même TER.** *Mais il détient déjà
> le WPEA* : ajouter GPEA ferait **~88 % de doublon**, et arbitrer coûterait un
> aller-retour pour gagner ~12 % d'émergents. **➡️ Écarté, et la question est close.**

## ☠️ LA SOURCE PROBABLE DE MES DEUX ERREURS PASSÉES EST IDENTIFIÉE
Un blog comparatif **attribue des ISIN et des tickers CROISÉS** : il appelle « PAEEM »
l'ETF Asie, et « PAASI » l'ETF Asie-Pacifique.
> **C'est très probablement la source du type d'erreur que j'ai commise deux fois en
> nommant un instrument de mémoire.** *Les appariements de ce fichier sont ceux
> confirmés par Fortuneo, Amundi et Euronext — pas par les comparatifs.*

## 🏛️ RISQUE RÉGLEMENTAIRE — il vaut aussi pour le CŒUR, et je ne l'avais jamais nommé
**Fin juillet 2026**, le Trésor a diffusé une note proposant d'**exclure du PEA les fonds
à réplication SYNTHÉTIQUE** *(~13 Md€ d'encours concernés)*. **Le ministre David Amiel a
confirmé le maintien le 26/08/2026**, et l'exclusion **ne figure pas dans le PLF 2027**.

> 🔴 **Ce risque ne concerne pas que la ligne émergents : il concerne le WPEA de Tanguy.**
> *Tout ETF World éligible PEA est synthétique par construction* — c'est la seule façon de
> respecter la règle des 75 % d'émetteurs UE. **Les ~796 € du cœur reposent donc sur un
> statut qui a été remis en cause il y a deux mois et confirmé il y a un mois.**
>
> **Ce n'est PAS un motif de changer de cap** : il n'existe aucun ETF World physique
> éligible PEA, et l'alternative *(exposition mondiale au CTO)* coûterait **31,4 %
> d'imposition au lieu de 18,6 %**. **C'est un motif de le SAVOIR et de suivre le
> calendrier budgétaire.** *Je ne l'avais jamais écrit — c'est un angle mort de plusieurs
> semaines sur la position principale.*

## ❓ LES TROIS CHOSES À VERROUILLER SUR LE DIC — et Tanguy peut les lire
**Règle ㉗ (canal humain).** Dans son espace Fortuneo, sur la fiche PAEEM :
1. **L'indice exact** — « MSCI Emerging Markets » ou « MSCI EM ex-Egypt ESG Broad CTB Select » ? *Un univers filtré ESG ne se comporte pas comme le MSCI EM.*
2. **Capitalisant ou distribuant** — les deux appellations circulent sur le même produit.
3. **La mention d'éligibilité PEA**, écrite noir sur blanc.

## 🔴 CE QUE PERSONNE NE M'A DONNÉ, ET QUI EST LE VRAI COÛT
**Contrepartie(s) de swap, frais de swap implicites, tracking difference réelle : rien.**
> **Sur un ETF synthétique, c'est là que se cache le coût — souvent au-dessus du TER
> affiché.** *Un TER de 0,30 % annoncé ne dit pas ce que le swap prélève.* **Un ETF
> synthétique dont on ignore le coût de swap est un produit dont on ignore le prix.**

## Statut
🔒 **AUCUNE proposition d'achat.** Règle des 3 séances : **séance 1/3**.
Prochaine étape : réponse de Tanguy sur les trois points du DIC.
