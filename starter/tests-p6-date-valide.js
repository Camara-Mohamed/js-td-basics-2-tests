/*
TESTS - PRÉPA 6 : Date valide

Écrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas.

AIDE (en français) :
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
- le 31 janvier 2019 est une date valide
- le 28 février 2019 est une date valide
- le 29 février 2019 n'est PAS une date valide
- le 29 février 2020 est une date valide
- le 30 février 2020 n'est PAS une date valide
- le 30 avril 2020 est une date valide
- le 31 avril 2020 n'est PAS une date valide

Étapes :
1. Demandez à l'utilisateur d'entrer une date sous forme de jour, mois et année, puis stockez ces valeurs dans des variables (par exemple, day, month, year).
2. Initialisez une variable maxDays pour stocker le nombre maximum de jours autorisés pour le mois.
3. Utilisez une série de conditions pour déterminer maxDays en fonction du mois (y compris le cas de février avec gestion bissextile).
4. Utilisez une autre condition pour vérifier si la date est valide en comparant le jour entré par l'utilisateur avec maxDays.
5. Affichez dans la console si la date est valide ou non : "La date … est valide" ou "La date … n'est PAS valide".

N'oubliez pas de tester votre programme avec diverses dates pour vous assurer qu'il fonctionne correctement.

Vous pouvez utiliser les exemples que vous avez fournis comme point de départ.
*/

const day = prompt(`Entrer un jour (1-31) :`);
const month = prompt(`Entrer un mois (ex : janvier) :`);
const year = prompt(`Entrer une année (ex : 1990) :`);

let maxDays = undefined;

if (day && month && year) {

    if (month === "janvier" || month === "mars" || month === "mai" || month === "juillet" || month === "août" || month === "octobre" || month === "décembre") {
        maxDays = 31;
    } else {
        if (month === month === "avril" || month === "juin" || month === "septembre" || month === "novembre") {
            maxDays = 30;
        } else if (month === "février") {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                maxDays = 29;
            } else {
                maxDays = 28;
            }
        }
    }

    const isDateValide = day > 0 && day <= maxDays;

    if (isDateValide) {
        console.log(`La date du ${day} ${month} ${year} est valide.`);
    } else {
        console.log(`La date du ${day} ${month} ${year} n'est PAS valide.`);
    }
}


let i = 20;

while (i > 0) {
    console.log(i);
    i--;
}

for (let i = 20; i > 0; i -= 2) {
    console.log(i);
}

for (let i = 20; i > 0; i -= 2) {
    console.log(i);
}

