/**
 * Contenu — Jeu « Vérité ou Bois »
 * App de jeux à boire (voir CAHIER-DES-CHARGES.md + DIRECTION-ARTISTIQUE.md)
 *
 * Principe : on affiche UNE question. Le joueur dont c'est le tour répond
 * franchement… ou boit une gorgée. C'est tout (cf. écran « Vérité ou Bois »).
 *
 * Le jeu monte en intensité sur 4 rounds (du soft au gros dossier). Tirage
 * aléatoire sans répétition à l'intérieur d'une session.
 *
 * NOTE CONTENU : les intitulés de questions ont été fournis par le client.
 * Les textes d'intro des rounds ci-dessous sont rédigés "maison" (on évite de
 * recopier mot pour mot la prose éditoriale d'une app concurrente — cf. cahier
 * §3.2, risque juridique). À terme on pourra aussi reformuler les questions
 * pour qu'elles soient 100% à nous.
 */

export interface RoundVerite {
  /** identifiant stable */
  cle: string;
  /** titre du round affiché */
  titre: string;
  /** intro courte (rédigée maison) */
  intro: string;
  /** intitulés des questions */
  questions: string[];
}

export const veriteOuBois: RoundVerite[] = [
  {
    cle: "glace",
    titre: "Pour briser la glace",
    intro:
      "On démarre tranquille : des petites hontes du quotidien pour chauffer la table sans faire fuir personne.",
    questions: [
      `Quel est le pseudo le plus gênant que tu aies jamais eu sur internet ?`,
      `As-tu déjà fait semblant de reconnaître quelqu'un qui te connaissait visiblement ?`,
      `Quelle est la chanson dont tu connais les paroles par cœur et dont tu as super honte ?`,
      `As-tu déjà répété une dispute sous la douche qui n'a finalement jamais eu lieu ?`,
      `Quelle est la chose la plus humiliante qu'un serveur ait dû voir à ta table ?`,
      `As-tu déjà essayé de faire rentrer de la bouffe en douce au ciné en te faisant cramer ?`,
      `Quel est le truc le plus bizarre que tu fasses quand tu es seul chez toi ?`,
      `As-tu déjà poussé une porte au lieu de la tirer devant plein de gens ?`,
      `Quelle est l'excuse la plus débile que tu aies sortie pour annuler un plan ?`,
      `As-tu déjà fait coucou à quelqu'un qui ne te disait pas bonjour ?`,
      `Quel est ton fond d'écran le plus malaisant du passé ?`,
      `As-tu déjà fait semblant d'être occupé pour éviter de parler à un collègue ?`,
      `Quel est le truc le plus chelou que tu aies dit en dormant (et qu'on t'a rapporté) ?`,
      `As-tu déjà acheté un truc dans un magasin juste pour utiliser leurs toilettes sans culpabiliser ?`,
      `Quel est le mensonge le plus inutile que tu aies jamais dit ?`,
      `As-tu déjà fait du yaourt au karaoké pour faire genre tu connaissais la chanson ?`,
      `Quel est le truc le plus absurde que tu aies cherché sur Google ce mois-ci ?`,
      `As-tu déjà pris un selfie en tournant l'appareil photo dans le mauvais sens par erreur ?`,
      `Quel est le compliment le plus bizarre qu'on t'ait jamais fait ?`,
      `As-tu déjà trébuché dans la rue en essayant de faire passer ça pour un pas de danse ?`,
      `Quel est le truc le plus gênant actuellement sauvegardé dans l'application Notes de ton tel ?`,
    ],
  },
  {
    cle: "serieux",
    titre: "Attends, sérieux ?",
    intro:
      "Ça commence à déraper. Des questions l'air de rien qui font sortir des réponses que personne n'avait vues venir.",
    questions: [
      `Quel est le truc le plus bizarre qui t'ait servi d'oreiller en cas de galère ?`,
      `As-tu déjà fini un paquet de gâteaux pour faire genre tu ne l'avais jamais ouvert ?`,
      `Quel est l'endroit le plus insolite où tu t'es endormi ?`,
      `As-tu déjà forcé un rire si fort qu'il est devenu vrai ?`,
      `Quelle est l'excuse la plus farfelue que tu aies inventée pour te défiler ?`,
      `As-tu déjà fait semblant qu'une livraison Uber Eats était pour quelqu'un d'autre pour ne pas laisser de pourboire ?`,
      `Quel est le truc le plus chelou que tu aies jamais caché à un coloc ?`,
      `As-tu déjà rigolé au pire moment pendant que quelqu'un racontait un truc super sérieux ?`,
      `Quel est le mélange de bouffe bizarre que tu trouves secrètement incroyable ?`,
      `As-tu déjà fait croire que tu n'avais plus de batterie pour éviter de répondre à un message ?`,
      `Quel est le truc le plus débile pour lequel tu aies dépensé de la thune cette année ?`,
      `T'es-tu déjà trompé de toilettes publiques en faisant comme si de rien n'était ?`,
      `Quelle est la théorie du complot à laquelle tu as cru un peu trop longtemps ?`,
      `As-tu déjà acheté un cadeau pour l'utiliser avant de l'offrir ?`,
      `Quel est le surnom le plus bizarre que tu aies donné à un objet inanimé ?`,
      `As-tu déjà menti sur tes goûts musicaux pour plaire à quelqu'un ?`,
      `Quel est le vêtement le plus de la honte que tu aies porté en public par accident ?`,
      `As-tu déjà appelé un prof, un boss ou un inconnu "maman" ou "papa" sans faire exprès ?`,
      `Quel est le truc le plus fou que tu aies fait pour éviter de faire une lessive ?`,
      `T'es-tu déjà convaincu qu'un aliment périmé était "probablement encore bon" ?`,
      `Quelle est l'embrouille la plus ridicule que tu aies eue avec un frère, une sœur ou un pote ?`,
      `As-tu déjà oublié un mot en pleine phrase et inventé un nouveau mot pour compenser ?`,
      `À quoi d'improbable as-tu déjà parlé à voix haute quand tu étais seul ?`,
      `Es-tu déjà resté aux toilettes beaucoup trop longtemps juste pour fuir une situation gênante ?`,
      `Quelle est la pire cachette que tu aies choisie lors d'une partie de cache-cache ?`,
    ],
  },
  {
    cle: "dossiers",
    titre: "Les gros dossiers",
    intro:
      "Plus de filtre. C'est l'heure où tout le monde se met à lâcher des infos que personne n'avait demandées.",
    questions: [
      `Quel est le bruit le plus gênant que tu aies jamais fait en public ?`,
      `As-tu déjà eu un problème de fringue (genre braguette ouverte) en faisant comme si de rien n'était ?`,
      `Quel est le truc le plus bizarre que tu aies fait dans des toilettes publiques ?`,
      `T'a-t-on déjà cramé en train de te parler tout seul, t'obligeant à trouver une excuse ?`,
      `Quel est le truc le plus malaisant qui te soit arrivé chez le médecin ?`,
      `As-tu déjà testé un cours de sport en faisant genre tu savais ce que tu faisais ?`,
      `Quel est le truc le plus bête que tu aies fait en pensant que personne ne regardait ?`,
      `As-tu déjà envoyé un vocal que tu as voulu supprimer dans la seconde ?`,
      `Quel est ton record de temps sans changer tes draps ?`,
      `As-tu déjà fait semblant que ce n'était pas toi qui avais sali un truc pour éviter de nettoyer ?`,
      `Quel est l'endroit le plus bizarre où tu aies pleuré ?`,
      `As-tu déjà dit avoir fini un boulot pour finalement le faire en panique juste après ?`,
      `Quel est l'aliment que tu fais semblant d'aimer en société mais que tu détestes en privé ?`,
      `As-tu déjà lâché une caisse au yoga ou dans une pièce silencieuse en accusant quelqu'un d'autre du regard ?`,
      `Quelle est la situation la plus gênante dans laquelle un de tes parents t'a surpris ?`,
      `As-tu déjà ignoré un texto pendant des semaines pour y répondre ensuite l'air de rien ?`,
      `Quel est le plus gros mytho que tu aies mis sur ton CV ?`,
      `T'es-tu déjà fait griller en train de faire un mauvais playback sur une chanson ?`,
      `Quel est le truc le plus bizarre que tu aies fait au supermarché ?`,
      `As-tu déjà ramené un article utilisé en magasin en espérant qu'ils ne vérifient pas ?`,
      `Quelle est la pire tenue que tu aies portée en te trouvant super stylé ?`,
      `As-tu déjà fait tomber un truc dans un magasin et filé en douce sans rien dire ?`,
      `Quelle est ton habitude d'enfance bizarre que tu as gardée ?`,
      `As-tu déjà mis sur le dos de ton animal de compagnie une bêtise que tu as faite ?`,
      `Quelle est la pire dinguerie que tu aies faite pour impressionner quelqu'un qui s'en foutait ?`,
      `As-tu déjà envoyé un message bourré à quelqu'un que tu avais juré de ne plus jamais contacter ?`,
    ],
  },
  {
    cle: "avoue",
    titre: "J'y crois pas que tu viens d'avouer ça",
    intro:
      "Dernière ligne droite, quelques verres dans le nez, plus aucun filtre. Les dossiers qui ressortiront à chaque soirée pendant des années.",
    questions: [
      `Si ton téléphone se faisait pirater tout de suite, quelle serait la chose la plus gênante à fuiter ?`,
      `Quel est le pire texto que tu aies envoyé, suivi d'une tentative de rattrapage désespérée ?`,
      `As-tu déjà lâché un "je t'aime" par erreur à quelqu'un ?`,
      `Quel est le plus gros mensonge que tu aies sorti juste pour couper court à une conversation ?`,
      `T'es-tu déjà fait griller en train de faire un truc bizarre pendant un appel en visio ?`,
      `Quelle est la dispute la plus ridicule que tu aies gagnée (ou perdue) en étant bourré ?`,
      `As-tu déjà gobé une théorie du complot avant d'essayer de l'expliquer à quelqu'un de sobre ?`,
      `Quel est le compliment le plus foireux que tu aies jamais fait à quelqu'un ?`,
      `As-tu déjà essayé de draguer quelqu'un pour finir par l'insulter sans faire exprès ?`,
      `Quelle est la raison la plus absurde pour laquelle on t'a viré d'un endroit ?`,
      `As-tu déjà balancé un message dans le mauvais groupe WhatsApp, changeant radicalement l'ambiance ?`,
      `Quelle est la pire chanson sur laquelle on t'a surpris en train de chanter à tue-tête ?`,
      `As-tu déjà fait semblant de te souvenir de quelqu'un alors que tu l'avais complètement zappé ?`,
      `Quelle est la pire coupe de cheveux que tu aies supplié ton coiffeur de te faire, avant de le regretter direct ?`,
      `As-tu déjà essayé d'impressionner un date avec un talent que tu n'as absolument pas ?`,
      `Quelle est la raison la plus débile pour laquelle tu t'es embrouillé sérieusement avec un pote ?`,
      `As-tu déjà été tellement sûr de toi sur un sujet pour finalement avoir totalement tort devant tout le monde ?`,
      `Quelle est la chose la plus gênante que tu aies sortie en rencontrant les parents de ton/ta partenaire ?`,
      `As-tu déjà eu un bout de salade coincé entre les dents pendant toute une conversation sans t'en rendre compte ?`,
      `Quel est le secret que tu gardes précieusement mais dont tout le monde se fout en réalité ?`,
      `As-tu déjà oublié où tu voulais en venir en plein milieu de ton anecdote ?`,
      `Quel est le pire canular que tu aies fait et qui s'est retourné contre toi ?`,
      `As-tu déjà confondu le nom de deux personnes de manière tellement gênante que c'était irrécupérable ?`,
      `Quelle est la photo la plus embarrassante de toi que quelqu'un possède et que tu as supplié d'effacer ?`,
      `As-tu déjà liké par erreur une très vieille publication en scrollant sur le profil de quelqu'un ?`,
      `Quel est le pire truc que tu aies dit lors d'une dispute et que tu as regretté dans la seconde ?`,
      `As-tu déjà totalement pipoté un entretien d'embauche et obtenu le poste quand même ?`,
      `Quel est le mensonge le plus débile que tu aies raconté et qui a pris des proportions incontrôlables ?`,
      `As-tu déjà insulté quelqu'un sans le vouloir en essayant de lui faire un compliment ?`,
      `Si le groupe devait te décrire en une phrase gênante, tu penses que ce serait quoi ?`,
      `Quelle est ta dernière recherche internet que tu ne voudrais surtout pas qu'un inconnu voie ?`,
      `As-tu déjà revu une vidéo de toi en grinçant des dents tellement c'était malaisant ?`,
      `Quelle est la pire photo de toi sur laquelle tu es identifié sur les réseaux ?`,
      `As-tu déjà essayé de masquer une erreur et empiré le truc dix fois plus ?`,
      `As-tu une phrase fétiche un peu honteuse que tu ne sors que quand t'es tout seul ?`,
      `As-tu déjà été hyper fier d'une action alors que personne d'autre n'a trouvé ça impressionnant ?`,
    ],
  },
];

/** Nombre total de questions, tous rounds confondus. */
export const totalQuestions = veriteOuBois.reduce((n, r) => n + r.questions.length, 0);
