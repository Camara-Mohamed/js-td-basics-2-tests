/*****************************
 * 15 - Logique booléenne
 */

// Préliminaires
/*
(source : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions)
*/

// 15-1. - LES OPÉRATEURS LOGIQUES

// 1°) L'opérateur logique ET

// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true ET false
/*console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);*/

// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire
/*V && F = F
V && V = V
F && V = F
F && F = F*/

// Une condition qui utilise l'opérateur logique ET
/*const bool1 = prompt(`Entrer "true" ou "false" :`);
const bool2 = prompt(`Entrer encore "true" ou "false" :`);*/
/*
const bool1 = true;
const bool2 = false;

if (bool1 === true && bool2 === false) {
    console.log(`La condition est fausse parce que ${bool1} et ${bool2}.`);
} else {
    if (bool1 === true && bool2 === true) {
        console.log(`La condition est vraie parce que ${bool1} et ${bool2}.`);
    } else {
        if (bool1 === false && bool2 === true) {
            console.log(`La condition est fausse parce que ${bool1} et ${bool2}.`);
        } else {
            if (bool1 === false && bool2 === false) {
                console.log(`La condition est fausse parce que ${bool1} et ${bool2}.`);
            } else {
                console.log(`La condition n'est pas respectée parce que vous avez entré des valeurs incorrectes.`);
            }
        }
    }
}
*/

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
/*
const number = prompt(`Entrer un nombre :`);
*/

// 2. Testez si le nombre est dans l'intervalle [0, 100]. Autrement dit, testez si 0 <= nombre <= 100. Si c'est le cas, affichez "… est compris entre 0 et 100".
/*if (number >= 0 && number <= 100) {
    console.log(`le nombre ${number} est compris entre 0 et 100`);
}else {
    console.log(`le nombre ${number} n'est pas compris entre 0 et 100`);
};*/

// 2°) L'opérateur logique OU

// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true OU false
/*console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);*/

// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire
/*V && F = V
V && V = V
F && V = V
F && F = F*/

// Une condition qui utilise l'opérateur logique OU
/*const bool1 = prompt(`Entrer "true" ou "false" :`);
const bool2 = prompt(`Entrer encore "true" ou "false" :`);*/

/*const bool1 = true;
const bool2 = false;

if (bool1 === true || bool2 === false) {
    console.log(`La condition est vraie parce que ${bool1} et ${bool2}.`);
} else {
    if (bool1 === true || bool2 === true) {
        console.log(`La condition est vraie parce que ${bool1} et ${bool2}.`);
    } else {
        if (bool1 === false || bool2 === true) {
            console.log(`La condition est vraie parce que ${bool1} et ${bool2}.`);
        } else {
            if (bool1 === false || bool2 === false) {
                console.log(`La condition est fausse parce que ${bool1} et ${bool2}.`);
            } else {
                console.log(`La condition n'est pas respectée parce que vous avez entré des valeurs incorrectes.`);
            }
        }
    }
};*/

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
/*
const number = prompt(`Entrer un nombre :`);
*/

// 2. Testez si le nombre est en dehors de l'intervalle [0, 100]. Si c'est le cas, affichez "… est en dehors de l'intervalle [0, 100]".
/*if (number < 0 || number > 100){
    console.log(`Le nombre ${number} est en dehors de l'intervalle [0, 100]`);
}else {
    console.log(`Le nombre ${number} fait parti de l'intervalle [0, 100]`);
};*/

// 3°) L'opérateur logique NOT

// Affichez dans la console le résultat NOT true puis le résultat de NOT false
/*console.log(!true);
console.log(!false);*/

// Une condition qui utilise l'opérateur logique NOT
/*const bool = false;

if (!bool) {
    console.log(`La condition est vraie parce que ${bool}.`);
} else {
    console.log(`La condition est fausse parce que ${bool}.`);
};*/

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
/*
const number = prompt(`Entrer un nombre :`)
*/

// 2. Si ce nombre n'est pas supérieur à 100, affichez "… est inférieur ou égal à 100".
/*if (!(number > 100)){
    console.log(`Le nombre ${number} est inférieur ou égal à 100`);
}else {
    console.log(`Le nombre ${number} est supérieur à 100`);
};*/

// 15-2. - LES ALTERNATIVES MULTIPLES

// 1°) Imbriquer des conditions

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
/*
const number = prompt(`Entrer un nombre :`);
*/

// 2. Si ce nombre est positif, affichez "… est positif", sinon (c'est donc qu'il est négatif ou nul), vous allez faire un sous-test :
/*
if (number > 0) {
    console.log(`Le nombre ${number} est positif`);
} else {
*/

// 1°) s'il est négatif, affichez "… est négatif",
/*
    if (number < 0) {
        console.log(`Le nombre ${number} est négatif`);
*/

// 2°) sinon, affichez "… est nul"
/*    } else {
        console.log(`Le nombre ${number} est nul`);
    }
};*/

// 2°) Autre écriture pour le même test : le if / elseif / else

// BUT : réaliser le même test que l'exercice précédent mais avec l'écriture if / elseif / else
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
/*
const number = prompt(`Entrer un nombre :`);
*/

// 2. Affichez "… est positif", "… est négatif" ou "… est nul" selon le cas
/*if (number > 0){
    console.log(`Le nombre ${number} est positif`);
}else if (number < 0){
    console.log(`Le nombre ${number} est négatif`);
}else {
    console.log(`Le nombre ${number} est nul`);
};*/

// Une application

// 1. Stockez le prénom de la personne dans une variable firstName
/*const firstName = prompt(`Entrer le nom de la personne :`);*/

// 2. Stockez son âge dans une variable age
/*const age = prompt(`Donner l'âge de la personne :`);*/

// 3. a) Si la personne a moins de 13 ans, affichez le message "… est un petit garçon."
/*if (age < 13){
    console.log(`La personne (${firstName}) est un petit garçon.`);
}*/
// b) Si elle a entre 13 et 20 ans, affichez "… est un adolescent."
/*else if (age >= 13 && age < 20){
    console.log(`La personne (${firstName}) est un adolescent.`);
}*/
// c) Si elle a entre 20 et 30 ans, affichez "… est un jeune homme."
/*else if (age >= 20 && age < 30){
    console.log(`La personne (${firstName}) est un jeune homme.`);
}*/
// d) sinon, affichez "… est un homme."
/*else {
    console.log(`La personne (${firstName}) est homme.`);
};*/

// Autre application

// 1. Demandez à l'utilisateur d'entrer l'information
//  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
//  soleil, vent, pluie ou neige."
/*const meteo = prompt(`Quel temps fait-il dehors ? (soleil, vent, pluie ou neige)`);*/

// 2. Stockez cette information dans une variable meteo
// 3. a) s'il fait soleil, affichez le message "Sortez en t-shirt."
/*if (meteo === "soleil"){
    console.log(`Sortez en t-shirt. Il fait soleil.`);
}*/

// b) s'il y a du vent, affichez "Sortez en pull."
/*else if (meteo === "vent"){
    console.log(`Sortez en pull. Il y a du vent.`);
}*/

// c) s'il pleut, affichez "Sortez en blouson."
/*else if (meteo === "pluie"){
    console.log(`Sortez en blouson. Il pleut.`);
}*/

// d) s'il neige, affichez "Restez au chaud à la maison."
/*
else if (meteo === "neige"){
    console.log(`Restez au chaud à la maison. Il neige.`);
}
*/

// e) dans tous les autres cas (si la personne n'a pas saisie une des réponses attendus, affichez "Vous n’avez pas mis un des mots : soleil, vent, pluie ou neige."
/*else {
    console.log(`Vous n’avez pas mis un des mots : soleil, vent, pluie ou neige.`)
};*/
