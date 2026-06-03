/**
 * Contenu — Moteur de Questions
 * App de jeux à boire (voir CAHIER-DES-CHARGES.md §3.2 + DIRECTION-ARTISTIQUE.md)
 *
 * Ton : humour français, sarcasme assumé, 100 % original (aucune copie d'app existante).
 * 4 ambiances, du soft au piquant. ~40 questions / ambiance (extensible).
 *
 * --- Convention de placeholder « @ » ---
 * Chaque « @ » dans un texte est remplacé à l'exécution par le nom d'un AUTRE joueur,
 * tiré au hasard. Si une question contient deux « @ », ce sont DEUX joueurs DISTINCTS.
 * Helper côté app : voir `compterCibles()` plus bas + `remplirCibles()` à implémenter
 * dans le moteur (il connaît la liste des joueurs et celui dont c'est le tour).
 *
 * Règles de tirage (cf. cahier) : aléatoire SANS répétition au sein d'une session.
 */

export type Ambiance = "connaitre" | "deep" | "trash" | "confiance";

export interface Question {
  /** id stable `${ambiance}-${n}` — utile pour le suivi "sans répétition" et l'analytics. */
  id: string;
  /** Texte affiché. Peut contenir des « @ » (voir convention ci-dessus). */
  texte: string;
}

export interface AmbianceMeta {
  cle: Ambiance;
  titre: string;
  sousTitre: string;
  /** Gemme d'ambiance — cf. DIRECTION-ARTISTIQUE.md §3. */
  gemme: string;
}

/** Métadonnées d'affichage (titres, gemme de couleur). */
export const ambiances: Record<Ambiance, AmbianceMeta> = {
  connaitre: {
    cle: "connaitre",
    titre: "Connaître l'autre",
    sousTitre: "Apprendre à se connaître, sans se prendre au sérieux",
    gemme: "#2E9E6B", // Émeraude
  },
  deep: {
    cle: "deep",
    titre: "Deep",
    sousTitre: "Introspection, vulnérabilité, vérités qui piquent",
    gemme: "#7B4DD6", // Améthyste
  },
  trash: {
    cle: "trash",
    titre: "Trash",
    sousTitre: "Chaud, cru, gênant — 18+",
    gemme: "#D43A2F", // Rubis-braise
  },
  confiance: {
    cle: "confiance",
    titre: "Confiance",
    sousTitre: "Révélations, secrets, on teste le lien",
    gemme: "#E0922F", // Topaze
  },
};

const connaitre: Question[] = [
  "Quelle est la pire excuse que t'as déjà inventée pour annuler un plan à la dernière seconde ?",
  "C'est quoi l'achat le plus inutile que tu défends encore aujourd'hui comme un « investissement » ?",
  "Quelle chanson honteuse connais-tu par cœur alors que tu jures la détester ?",
  "Combien d'onglets t'as ouverts sur ton téléphone là, tout de suite, sois honnête ?",
  "Quel talent totalement inutile maîtrises-tu à la perfection ?",
  "Quelle est la dernière chose que t'as cherchée sur Google et que tu n'assumerais pas en public ?",
  "Si ta vie avait un slogan publicitaire mensonger, ce serait quoi ?",
  "Quel plat cuisines-tu « super bien » mais que personne n'a jamais validé à part toi ?",
  "C'est quoi la théorie du complot la plus débile à laquelle t'as cru, même une journée ?",
  "Quelle appli passes-tu un temps fou à utiliser tout en répétant « non, pas tant que ça » ?",
  "Quel surnom détestable on t'a donné et que tu fais semblant de trouver drôle ?",
  "Quelle compétence as-tu mise sur ton CV que tu ne possèdes absolument pas ?",
  "Quel film que tout le monde adore trouves-tu secrètement complètement nul ?",
  "Quelle habitude de quelqu'un dans cette pièce t'agace le plus ? Vas-y, on attend.",
  "C'est quoi le petit mensonge inoffensif que tu racontes en boucle ?",
  "Quel est ton red flag que tu présentes fièrement comme une qualité ?",
  "À quel âge as-tu arrêté de croire que tu allais « devenir riche jeune » ?",
  "Quelle dépense mensuelle caches-tu soigneusement à ton entourage ?",
  "Quel objet inutile gardes-tu « au cas où » depuis plus de cinq ans ?",
  "Quelle phrase dis-tu le plus souvent sans en penser un seul mot ?",
  "Si on ouvrait ta galerie photo au hasard, quelle est la probabilité que ce soit gênant ?",
  "Quel est le compliment que tu attends désespérément qu'on te fasse ?",
  "C'est quoi ton guilty pleasure télé que tu regardes en cachette ?",
  "Quelle est la chose la plus vieille dans ton frigo en ce moment ? Estimation honnête.",
  "Quel mot prononces-tu mal depuis toujours sans que personne n'ose te corriger ?",
  "Quand as-tu pleuré pour la dernière fois devant un truc complètement ridicule ?",
  "Si @ devait te décrire en un seul mot, lequel tu redoutes le plus ?",
  "Quelle bonne résolution de Nouvel An as-tu trahie le plus vite ?",
  "Quel est le truc le plus radin que t'as fait pour économiser trois euros ?",
  "Avec quelle célébrité es-tu convaincu(e) que tu pourrais être pote ? Soyons délirants.",
  "C'est quoi la rumeur la plus fausse qui ait circulé sur toi ?",
  "Quel est ton avis impopulaire sur la nourriture que tu défendrais en duel ?",
  "Quelle est la chose la plus « vieux/vieille avant l'âge » que tu fais déjà ?",
  "Quel est le dernier truc que t'as commandé à 3h du matin sans réfléchir ?",
  "Quelle est ta plus grande victoire dont absolument personne ne se rend compte ?",
  "Si ta semaine était une note sur 10 et que tu devais mentir, tu dirais combien ?",
  "Quel talent de @ jalouses-tu secrètement ?",
  "Quelle est la pire tenue que t'as portée en étant persuadé(e) d'être au top ?",
  "C'est quoi ton excuse habituelle quand t'as ignoré un message pendant trois jours ?",
  "Quel truc parfaitement banal te rend absurdement heureux/heureuse ?",
].map((texte, i) => ({ id: `connaitre-${i + 1}`, texte }));

const deep: Question[] = [
  "C'est quoi le rêve que t'as discrètement enterré, et que tu fais semblant de ne pas regretter ?",
  "À quel moment as-tu compris que tes parents étaient juste des humains qui improvisaient ?",
  "Quelle est la peur que tu caches le mieux derrière une blague ?",
  "Qu'est-ce que tu aimerais qu'on comprenne de toi sans avoir à l'expliquer ?",
  "Quand t'es-tu senti(e) vraiment fier/fière de toi, et pourquoi tu ne l'as dit à personne ?",
  "Si tu pouvais rejouer une seule conversation que t'as ratée, ce serait laquelle ?",
  "Qu'est-ce que tu te répètes le soir quand personne ne t'entend ?",
  "Quelle version de toi à 15 ans serait déçue par toi aujourd'hui, et sur quoi ?",
  "C'est quoi le compliment que tu n'as jamais réussi à croire ?",
  "Quelle est la chose que tu n'as jamais pardonnée — à toi-même ?",
  "Qu'est-ce qui te manque d'une époque que tu prétendais détester ?",
  "Quelle décision as-tu prise par peur, mais que tu déguises en « choix raisonnable » ?",
  "À qui dois-tu des excuses que tu ne feras probablement jamais ?",
  "Quelle partie de toi caches-tu parce que tu crois qu'on ne l'aimerait pas ?",
  "C'est quoi le deuil dont tu n'as jamais vraiment parlé ?",
  "Quand t'es-tu senti(e) le plus seul(e) alors que t'étais entouré(e) de monde ?",
  "Quelle croyance sur toi-même sais-tu fausse, mais que tu gardes quand même ?",
  "Qu'est-ce que tu cherches encore à prouver, et à qui ?",
  "Quand as-tu menti pour la dernière fois juste pour ne pas inquiéter quelqu'un ?",
  "Si ton corps pouvait parler, qu'est-ce qu'il te reprocherait en premier ?",
  "Quelle relation as-tu laissée mourir par simple flemme de la sauver ?",
  "C'est quoi le moment précis où t'as cessé d'être un enfant ?",
  "Qu'est-ce que tu fais quand t'es triste et que tu n'avoues à personne ?",
  "Quelle réussite des autres réveille en toi une jalousie que tu détestes ressentir ?",
  "Quelle phrase d'un proche te hante encore aujourd'hui ?",
  "Qu'est-ce que tu remets à « plus tard » depuis si longtemps que c'est devenu un mensonge ?",
  "De quoi as-tu le plus honte dans ta façon d'aimer les gens ?",
  "Quelle est la vérité sur ta vie que tu maquilles le mieux sur les réseaux ?",
  "Qu'est-ce qui te ferait dire, ce soir, que ta vie a un sens ?",
  "Quel pardon attends-tu encore de quelqu'un ?",
  "Quelle est la chose que tu n'as jamais osé demander, de peur de la réponse ?",
  "Quand as-tu eu le plus peur de devenir comme l'un de tes parents ?",
  "Qu'est-ce que tu aimerais entendre, là, maintenant, de la part de quelqu'un dans cette pièce ?",
  "Quelle blessure utilises-tu encore comme excuse ?",
  "Si tu savais qu'il te restait un an, qu'est-ce que tu arrêterais immédiatement ?",
  "Quelle est la dernière chose qui t'a fait douter de qui tu es ?",
  "Qu'est-ce que tu n'as jamais dit à @ et que tu devrais peut-être ?",
  "Quel amour non réciproque a le plus façonné qui tu es ?",
  "Qu'est-ce que tu protèges tellement que tu finis par t'en priver ?",
  "Si tu devais t'excuser auprès de ton « toi » d'il y a cinq ans, tu dirais quoi ?",
].map((texte, i) => ({ id: `deep-${i + 1}`, texte }));

const trash: Question[] = [
  "Île déserte avec @ et @ : tu en sauves un, tu manges l'autre. Justifie ton menu.",
  "Tu dois embrasser une personne de cette pièce les yeux fermés : tu pries pour tomber sur qui, et surtout PAS sur qui ?",
  "Classe les présents du plus au moins susceptible de finir en prison. Argumente.",
  "Quelle est la chose la plus sale que t'as faite tout en te disant « bon, c'est pas si grave » ?",
  "Tu dois céder ton ex à quelqu'un dans cette pièce : c'est un cadeau pour qui ?",
  "C'est quoi le pire endroit où t'as fait un truc que ta grand-mère ne pardonnerait jamais ?",
  "Entre @ et @ : qui ferait le pire coup d'un soir, et qui s'en vanterait le plus ?",
  "Quelle est la dernière recherche en navigation privée que tu nierais sous serment ?",
  "Si on projetait ton historique 10 secondes, qui dans cette pièce serait le plus choqué ?",
  "Quel est le mensonge le plus pourri que t'as sorti pour finir une soirée accompagné(e) ?",
  "Classe les présents : qui drague le mieux, et qui drague comme un panneau stop ?",
  "C'est quoi le truc le plus gênant qui t'est arrivé pendant un moment intime ?",
  "Tu dois écrire « je pense à toi » à un contact au hasard de ton tél : tu trembles pour quel nom ?",
  "Quelle qualité physique de @ trouves-tu objectivement réussie ? Sois pro, sois gênant.",
  "C'est quoi le truc le plus désespéré que t'as fait pour attirer l'attention de quelqu'un ?",
  "Parmi tous les ex présents ou évoqués ce soir, lequel mériterait un remboursement ?",
  "Quel fantasme parfaitement banal assumes-tu si mal que tu rougis là, maintenant ?",
  "Tu as 24h dans le corps de @ : c'est quoi la première chose franchement douteuse que tu fais ?",
  "Quel est le pire endroit où t'es allé(e) aux toilettes ? On veut les détails.",
  "Si ta vie sexuelle avait un titre de film, ce serait une comédie, un drame ou un documentaire animalier ?",
  "Qui dans cette pièce as-tu déjà imaginé(e) nu(e) — même trois secondes, même par accident ?",
  "C'est quoi la plus grosse honte que t'as ramenée d'une soirée trop arrosée ?",
  "Tu factures combien pour une nuit, et qui ici ne pourrait clairement pas se le payer ?",
  "Quel est le message le plus cringe que t'as envoyé bourré(e) et regretté à jeun ?",
  "Classe les présents du meilleur au pire embrasseur, à l'instinct, sans aucune preuve.",
  "Quelle est la chose la plus malpropre que tu fais quand tu vis seul(e) ?",
  "T'as déjà fait semblant de... quelque chose. On parle de quoi, et avec quel talent d'acteur/actrice ?",
  "Si @ et @ se battaient pour toi, lequel laisserais-tu gagner par pure flemme ?",
  "C'est quoi le surnom de couple le plus écœurant que t'as utilisé en étant sérieux/sérieuse ?",
  "Quel est l'endroit le plus risqué où t'as failli te faire prendre ?",
  "Quelle est ta pire performance dont tu te vantes quand même ?",
  "Tu dois supprimer un(e) ex de ta mémoire OU un membre de ta famille de tes contacts : qui dégage ?",
  "Quel est le pire « compliment » qu'on t'ait fait au lit en pensant bien faire ?",
  "Classe la pièce : qui a le plus de cadavres planqués dans son historique de messages ?",
  "Quelle est la chose la plus chère que t'as cassée chez quelqu'un sans jamais l'avouer ?",
  "Tu choisis : un date catastrophique filmé en public, ou ton historique lu par ta mère ?",
  "Quelle rumeur sur tes performances est, disons... généreusement exagérée ?",
  "Entre @ et @ : qui embrasserais-tu gratuitement, et combien faut-il pour l'autre ?",
  "Quel est le plus gros red flag que t'as ignoré juste parce que la personne était canon ?",
  "Si tu devais refaire ta pire bêtise de soirée mais sobre, t'aurais le courage ? Raconte la bêtise.",
].map((texte, i) => ({ id: `trash-${i + 1}`, texte }));

const confiance: Question[] = [
  "Montre la dernière photo de ta galerie. Sans la choisir. On attend.",
  "Lis à voix haute le dernier message que t'a envoyé @ — ton ton compris.",
  "Confie un secret que tu n'as jamais dit à personne ici. Oui, maintenant.",
  "C'est quoi le truc le plus moche que tu penses de quelqu'un dans cette pièce ? Pas de nom si t'es lâche, un nom si t'es brave.",
  "Déverrouille ton téléphone et laisse @ lire tes 5 derniers messages envoyés.",
  "Quel est le secret que tu garderais même sous la torture — et pourquoi tu transpires déjà ?",
  "Quel mensonge as-tu raconté à quelqu'un dans cette pièce, qu'il/elle croit encore ?",
  "Montre le dernier message de ta conversation la plus active. Juste le dernier.",
  "Quelle est la chose que tu sais sur @ et qu'il/elle ne sait pas que tu sais ?",
  "Avoue une fois où t'as trahi la confiance de quelqu'un présent ce soir.",
  "Quel contact paniquerais-tu de voir s'afficher sur ton écran là, tout de suite ?",
  "Dis à @ une chose que tu admires vraiment chez lui/elle. Sans ironie. C'est ça, le piège.",
  "Quel est le plus gros secret qu'on t'ait confié et que tu meurs d'envie de balancer ?",
  "Combien de personnes dans cette pièce as-tu déjà critiquées dans leur dos ? Un chiffre, pas un nom.",
  "Montre ta dernière « recherche » sur le profil de quelqu'un. Oui, ton petit stalking.",
  "À qui ici ferais-tu confiance pour cacher un cadavre dans ton coffre, et à qui jamais ?",
  "Quel est le truc que tu ferais si t'étais sûr(e) que personne ne le saurait jamais ?",
  "La vérité : as-tu déjà eu des sentiments pour quelqu'un dans cette pièce ?",
  "Quelle promesse as-tu faite ce soir sans aucune intention de la tenir ?",
  "Quel jugement portes-tu sur la vie de @ et que tu n'oserais jamais dire en face ?",
  "Confie un truc dont t'as honte et qui n'est connu que de toi et de ton historique internet.",
  "Qui dans cette pièce as-tu déjà sérieusement envisagé de ne plus jamais revoir ?",
  "Quand as-tu menti pour la dernière fois à quelqu'un qui te faisait confiance ?",
  "Dis à voix haute le dernier truc méchant que t'as pensé ce soir — sur qui que ce soit.",
  "Quel est ton plus gros secret financier que ta famille ignore complètement ?",
  "Montre tes trois dernières captures d'écran. On choisit l'ordre.",
  "À qui ici dois-tu de l'argent, des excuses, ou la vérité ?",
  "Quelle confidence qu'on t'a faite ce soir ne resteras-tu probablement pas capable de garder ?",
  "Dis à @ ce que tu changerais chez lui/elle si tu avais une télécommande.",
  "Quel est le truc que tu fais dans le dos de ton/ta meilleur(e) ami(e) ?",
  "Avoue une jalousie précise que tu ressens envers quelqu'un présent ce soir.",
  "Quel message n'as-tu jamais osé envoyer, et à qui ? Lis-le-nous (pas besoin de l'envoyer).",
  "Quelle vérité retiens-tu ce soir uniquement parce qu'elle gâcherait l'ambiance ?",
  "Confie ton téléphone 30 secondes à la personne en qui tu as le MOINS confiance ici.",
  "Quel secret entre toi et @ ne doit jamais sortir de votre duo ?",
  "Qui ici connais-tu le moins bien — et qu'est-ce que tu présumes (un peu méchamment) sur cette personne ?",
  "Quelle est la plus grosse engueulade que t'as cachée à tout le monde ?",
  "À qui dans cette pièce devrais-tu t'excuser, là, maintenant — et pour quoi ?",
  "Quel est le compliment que tu fais souvent à @ sans jamais le penser vraiment ?",
  "Si tu devais sacrifier UN seul de tes secrets au groupe pour ne plus jamais boire ce soir, lequel tu lâches ?",
].map((texte, i) => ({ id: `confiance-${i + 1}`, texte }));

/** Banque complète, indexée par ambiance. */
export const questions: Record<Ambiance, Question[]> = {
  connaitre,
  deep,
  trash,
  confiance,
};

/** Nombre de cibles « @ » à remplir dans un texte (joueurs distincts attendus). */
export function compterCibles(texte: string): number {
  return (texte.match(/@/g) ?? []).length;
}
