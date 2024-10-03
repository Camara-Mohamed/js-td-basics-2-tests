/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
/*
const scoreJohnTeam = (89 + 120 + 103) / 3;
const scoreMikeTeam = (97 + 134 + 105) / 3;
*/

// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
/*
const isBetterTeam = scoreJohnTeam > scoreMikeTeam;

if (isBetterTeam === true) {
    console.log(`L'équipe gagnante est celle de John. Avec un score moyen de ${scoreJohnTeam}.`);
} else if (isBetterTeam === false) {
    console.log(`L'équipe gagnante est celle de Mike. Avec un score moyen de ${scoreMikeTeam}.`);
}
*/

// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
/*else {
    console.log(`Il n'y a pas d'équipe gagnante, il ya une égalité.`);
};*/

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
/*
const scoreMaryTeam = (97 + 134 + 105) / 3;
*/

//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
/*
const isBetterMaryTeam = scoreMaryTeam > scoreJohnTeam && scoreMaryTeam > scoreMikeTeam;
const isBetterJohnTeam = scoreJohnTeam > scoreMikeTeam && scoreJohnTeam > scoreMaryTeam;
const isBetterMikeTeam = scoreMikeTeam > scoreJohnTeam && scoreMikeTeam > scoreMaryTeam;

if (isBetterMaryTeam === true) {
    console.log(`L'équipe gagnante est celle de Mary. Avec un score moyen de ${scoreMaryTeam}.`);
} else if (isBetterJohnTeam === true) {
    console.log(`L'équipe gagnante est celle de John. Avec un score moyen de ${scoreJohnTeam}.`);
} else if (isBetterMikeTeam === true) {
    console.log(`L'équipe gagnante est celle de Mike. Avec un score moyen de ${scoreMikeTeam}.`);
*/

// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.
/*
} else if (scoreMaryTeam === scoreJohnTeam && scoreMaryTeam === scoreMikeTeam) {
    console.log(`Il n'y a pas d'équipe gagnante, il y a une égalité parfaite entre les trois équipes avec un score moyen de ${scoreMaryTeam}.`);
} else if (scoreMaryTeam === scoreJohnTeam) {
    console.log(`Les équipes gagnantes sont celles de Mary et John, avec un score moyen de ${scoreMaryTeam} pour les deux.`);
} else if (scoreMaryTeam === scoreMikeTeam) {
    console.log(`Les équipes gagnantes sont celles de Mary et Mike, avec un score moyen de ${scoreMaryTeam} pour les deux.`);
} else if (scoreJohnTeam === scoreMikeTeam) {
    console.log(`Les équipes gagnantes sont celles de John et Mike, avec un score moyen de ${scoreJohnTeam} pour les deux.`);
};*/
