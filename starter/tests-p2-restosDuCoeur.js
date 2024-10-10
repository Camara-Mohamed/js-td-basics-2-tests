// TESTS - PRÉPA 2 : Les restos du cœur

// Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
// Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
// avec un maximum de 2€.

// Ecrire le programme JS qui, à partir du montant des achats,
// calcule et affiche la somme versée aux restos du cœur.

// Tester avec des montants d'achat de
// - 20€ (pas de remise, pas de montant versé)
// - 30€ (remise de 3€, pas de montant versé)
// - 60€ (remise de 6€, 0.6€ versés)
// - 100€ (remise de 10€, 1€ versés)
// - 200€ (remise de 20€, 2€ versés)
// - 1000€ (remise de 100€, 2€ versés)

// 1. Demandez à l'utilisateur d'entrer le montant total des achats.
let montant = prompt(`Entrer un montant :`);

// 2. Vérifiez si le montant des achats est supérieur à 25€.
//    a) Si la condition est vraie, calculez la remise de 10% sur le montant total (0.1 * montant total).
let remise = 0;
if (montant > 25) {
    remise = 0.1 * montant; // Calcul de la remise
}

//    b) Si la condition est fausse, la remise est de 0€.
else {
    remise = 0;
}

// 3. Vérifiez si la remise est supérieure à 5€.
//    a) Si la condition est vraie, calculez la somme versée aux restos du cœur en prenant 10% de la remise (0.1 * remise).
//       Assurez-vous que le montant versé aux restos du cœur ne dépasse pas 2€ (utilisez Math.min(2, montant versé)).
let restoDuCoeur = 0; // Initialisation de la somme versée aux restos du cœur
if (remise > 5) {
    restoDuCoeur = Math.min(2, 0.1 * remise);
}

//    b) Si la condition est fausse, la somme versée aux restos du cœur est de 0€.
// (Cette partie est déjà gérée par l'initialisation de restoDuCoeur à 0)

// 4. Affichez la somme versée aux restos du cœur dans la console.
console.log(`La somme versée aux restos du cœur est de ${restoDuCoeur}€.`);
