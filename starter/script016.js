/*****************************
 * 16 - L'opérateur ternaire et l'instruction Switch
 */

// 16 - 1. L'opérateur ternaire
// [condition] ? [if] : [else]

// 1. Écrivez une expression ternaire pour afficher "John boit des bières" ou "John boit des jus" selon qu'il est majeur ou pas.
/*const  age = prompt(`Entrer un l'âge de John :`);*/

// 2. Testez en changeant l'âge de John (14 ans, 24 ans)

// MEILLEURE PRATIQUE : utiliser l'expression ternaire pour affecter une valeur ou une autre valeur à une variable selon qu'une condition est remplie ou pas
// 1. Affectez, selon qu'on est majeur ou pas, la valeur "bières" ou la valeur "jus" à la variable drink
/*const drink = age >= 18 ? "bières" : "jus";*/

// 2. Afficher "John boit des …" (l'affichage s'adapte à l'âge de John, tester différents cas)
/*console.log(`John boit des ${drink}`);*/

// Faites la même chose en utilisant un if / else
/*
if (age >= 18){
    console.log(`John boit des bières`);
}else {
    console.log(`John boit des jus`);
};
*/

// 16 - 2. L'instruction Switch

// a) Switch avec des break
// 1. Initialisez la variable job à la valeur "instituteur"
/*const job = "instituteur";*/

// 2. Utilisez un switch pour afficher :
//   - si la profession est professeur ou instituteur, "John enseigne la programmation aux enfants",
/*switch (job) {
    case "professeur":
    case "instituteur":
        console.log(`John enseigne la programmation aux enfants`);
        break;*/

//   - si c'est chauffeur, "John conduit un taxi à Lisbonne",
/*   case "chauffeur" :
       console.log(`John conduit un taxi à Lisbonne`);
       break;
*/
//   - si c'est designer, "John conçoit de beaux sites web" et,
/*    case "designer" :
        console.log(`John conçoit de beaux sites web`);
        break;*/

//   - dans tous les autres cas, "John fait autre chose"
/*    default :
        console.log(`John fait autre chose`);
};*/

// 3. Testez les différents cas de figure en changeant la profession de John

// 1. John a vielli : il a à présent 56 ans…
/*const age = prompt(`Entrer l'âge de John :`);*/

// 2. Utilisez un switch pour affciher :
//   - si l'âge est inférieur à 13, "John est un garçon",
/*
switch (true) {
    case (age < 13) :
        console.log(`John est un garçon`);
        break;
*/

//   - entre 13 et 20 ans, "John est un adolescent",
/*
    case (age >= 13 && age < 20) :
        console.log(`John est un adolescent`);
        break;
*/

//   - entre 20 et 30 ans, "John est un jeune homme"
/*
    case (age >= 20 && age < 30) :
        console.log(`John est un jeune homme`);
        break;
*/

//   - et sinon "John est un homme".
/*    default :
        console.log(`John est un homme`);
};*/

// 3. Testez les différents cas de figure en changeant l'âge de John
// 4. Testez avec un âge de 7 ans en enlevant la 2e instruction break pour voir ce que cela a comme impact

// Autre application de l'instruction switch
// 1. Demandez à l'utilisateur d'entrer l'information
//   "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
//   soleil, vent, pluie ou neige."
/*
const meteo = prompt(`Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
soleil, vent, pluie ou neige.`);
*/

// 2. Stockez cette information dans une variable meteo
// 3.  a) s'il fait soleil, affichez le message "Sortez en t-shirt."
/*
switch (meteo) {
    case "soleil":
        console.log(`Sortez en t-shirt. Il fait soleil.`);
        break;
*/

//    b) s'il y a du vent, affichez "Sortez en pull."
/*    case "vent":
        console.log(`Sortez en pull. Il y a du vent.`);
        break;*/

//    c) s'il pleut, affichez "Sortez en blouson."
/*
    case "pluie":
        console.log(`Sortez en blouson. Il pleut.`);
        break;
*/

//    d) s'il neige, affichez "Restez au chaud à la maison."
/*    case "neige":
        console.log(`Restez au chaud à la maison. Il neige.`);
        break;*/

//    e) dans tous les autres cas (si la personne n'a rien répondu de tout ça
//     — c.-à-d. qu'elle n'a entré aucun de ces qautre mots-là),
//     affichez "Je n'ai pas compris !"
/*
    default :
        console.log(`Je n'ai pas compris !`)
};
*/

// b) Switch sans break
// L'instruction `break` fait sortir du bloc du switch. On ne souhaite pas toujours sortir, dans ce cas, on peut ne pas mettre de `break`
// 1. Demandez à l'utilisateur d'entrer le numéro du jour de la semaine
/*const numberWeek = parseInt(prompt(`Entrer le numéro de la semaine :`));

console.log(`Les jours suivants se sont déjà écoulés depuis le début de la semaine : `);*/

// 2. Affichez ensuite dans la console le message suivant : "Les jours suivants se sont déjà écoulés depuis le début de la semaine : …, …, …"
/*
switch (numberWeek) {
    case 7 :
        console.log(`Lundi, `);
    case 6 :
        console.log(`dimanche, `);
    case 5 :
        console.log(`samedi, `);
    case 4 :
        console.log(`vendredi, `);
    case 3 :
        console.log(`jeudi, `);
    case 2 :
        console.log(`mercredi, `);
    case 1 :
        console.log(`mardi, `);
        break;
    default :
        console.log(`Je n'ai pas compris !`);
};
*/

// Ici, toutes les instructions "console.log" entre la ligne case:… et l'instruction break seront exécutées, et on obtient donc une liste de jours. Notez bien qu'il faut quand même un break avant le default, sans quoi ce message d'erreur apparaîtra toujours à la fin de notre liste de jours… Notez qu'on aurait pu aussi écrire le default en premier, suivi d'un break puis la liste de tous les case.

// Un cas d'utilisation concret très utile pour un switch
// Switch peut sembler curieux, mais dans certaines situations, il est particulièrement utile. Par exemple, imaginez un script qui accepte la saisie au clavier et l'utilise pour déplacer un sprite – beaucoup de jeux vous demanderont d'utiliser les touches fléchées ou les touches A et D pour vous déplacer de gauche à droite. En JavaScript, les pressions de touches sont représentées par un objet d'événement (que nous aborderons un peu plus loin dans le cours) avec une propriété contenant une valeur numérique qui correspond à la touche pressée. Par exemple, la lettre A est représentée par le code 65, la flèche gauche par le code 37, etc.
// Voici un canevas de code qui permettrait de gérer les déplacements grâce aux touches


