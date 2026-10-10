# Banc d'essai historique — BILAN : méthode abandonnée (27/07/2026)

**Décision : on arrête d'investir dans le backtest sur cas historiques.**
Trois tentatives, trois invalidations, pour trois causes DIFFÉRENTES mais
convergentes. Le plafond est structurel, pas conjoncturel.

## Les trois manches

| Manche | Conception | Cause de l'invalidation |
|---|---|---|
| 1 | 6 cas célèbres (Wirecard, ASML, Casino, Best Buy, Beyond Meat, Sprint) | Agent reconnaît les 6 : la **signature économique** suffit même sans nom |
| 2 | Idem + consigne « arrête ta lecture au marqueur SPOILER » | **Fuite structurelle** : `Read` est atomique, l'agent reçoit tout le fichier d'un bloc. Erreur de conception (la mienne), pas de l'agent |
| 2 bis | 6 small caps discrètes (< 1 Md€), fichiers physiquement scindés | Agent reconnaît **encore les 6** : ce sont les **MÉCANISMES** qui trahissent (« triptyque dentaire/démolition/systèmes », « prélèvement de peau réduit d'un tiers », « réservoirs modulaires pour fracturation ») |

## Le plafond structurel — pourquoi on ne peut pas s'en sortir

**Tension irréductible** : pour qu'un dossier soit JUGEABLE, il faut
préserver le mécanisme économique. Mais le mécanisme EST l'empreinte
digitale de la société. Décaler les chiffres ne sert à rien ; anonymiser
les mécanismes détruit la substance à juger. Un agent doté d'une culture
sectorielle large reconnaîtra tout cas suffisamment documenté pour être
reconstitué.

**Défaut de conception supplémentaire, relevé par l'agent** : annoncer la
répartition « 3 favorables / 3 défavorables » rend le dernier cas NON
INDÉPENDANT — cinq lectures assurées déterminent la sixième par
déduction. À ne jamais refaire.

## Ce qui est néanmoins PROUVÉ (et qui valait le coût)

1. **Le bug de résolution est corrigé, sur deux runs.** Historique avant :
   5 AFFAIBLI sur 5 (zéro discrimination). Manche 1 : 3 CONFIRMÉ /
   3 RÉFUTÉ. Manche 2 bis : 2 CONFIRMÉ / 3 RÉFUTÉ / 1 AFFAIBLI — et
   l'unique AFFAIBLI porte sa **justification écrite** de la zone 45-55 %
   (« ce n'est pas un hedge mais la description d'un binaire daté à trois
   mois »), exactement ce que la charte exige.
2. **L'intégrité est sans faille : 3 déclarations spontanées sur 3.**
   L'agent avait à chaque fois intérêt à se taire pour afficher un score
   parfait. Il a préféré invalider son propre test. Sans cette propriété,
   tout le registre de calibration serait décoratif.
3. **La qualité de raisonnement est observable indépendamment du
   résultat** — ces analyses relèvent du procédé, pas du souvenir :
   - « EBITDA plat sur +42 % de CA, deuxième année consécutive : le levier
     opérationnel n'existe pas — et le multiple de 2× le CA le suppose
     acquis. »
   - « CA reconnu sur capacité réservée NON LIVRÉE + créances à 230 jours
     + dividende financé par la dette et l'émission d'actions. »
   - « La part multi-écrans progresse à 88 % grâce à une **définition de
     périmètre modifiée** — le seul indicateur qui monte est celui dont on
     a changé la définition. »
   - Écarter le pseudo-diagnostique : « vivier de cibles inépuisable » est
     compatible avec les quatre hypothèses → ne peut soutenir aucun verdict.

## La bascule : la calibration viendra du RÉEL

Le backtest était un raccourci pour ne pas attendre. Il est fermé. La
mesure se fera donc sur le `registre-calibration.md`, sur des dossiers
VIVANTS dont l'issue n'est connue de PERSONNE — la seule condition
d'aveuglement qui ne peut pas fuiter. 16 appels ouverts, premières
résolutions imminentes : **MSFT et Vicat le 29/07, Magnum le 30/07,
LLY le 05/08, MBGL le 07/08**.

C'est plus lent. C'est incontestable.

## Si quelqu'un veut retenter un jour

Conditions cumulatives, sinon ne pas relancer : (a) fichiers dossiers et
corrigé PHYSIQUEMENT séparés ; (b) ne PAS annoncer la répartition des
issues ; (c) anonymiser les MÉCANISMES autant que les chiffres — en
acceptant que cela dégrade la jugeabilité ; (d) déclaration
d'identification obligatoire, cas reconnu = retiré sans invalider les
autres. Espérance de réussite jugée faible : voir le plafond structurel.
