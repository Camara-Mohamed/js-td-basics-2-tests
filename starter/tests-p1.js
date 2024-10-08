/*
TESTS - PRÉPA 1

Écrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x,
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

// 1. Demandez à l'utilisateur d'entrer le nombre d'articles (N) achetés par le client et le prix unitaire (x) d'un article.
const n = parseInt(prompt(`Entrer le nombre d'articles :`), 10);
const x = parseFloat(prompt(`Entrer le prix unitaire d'un article :`));

// 2. Calculez le montant total de la facture en multipliant le nombre d'articles par le prix unitaire (N * x).
let totalMontant = n * x;

// 3. Vérifiez si le nombre d'articles est supérieur ou égal à 20.
//    a) Si la condition est vraie, calculez la ristourne de 10% sur le montant total (0.1 * montant total) et soustrayez-la du montant total.
if (n >= 20) {
    totalMontant -= (0.1 * totalMontant); // Applique la réduction de 10%
}

// 4. Affichez le montant total de la facture dans la console.
console.log(`Le montant total est de ${totalMontant.toFixed(2)}€ pour ${n} article(s) au prix de ${x.toFixed(2)}€ l'unité.`);
