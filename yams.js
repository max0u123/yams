const { isFunction } = require("@babel/types");

//variables
var score = 0;
/*
var grilleScore = {
    "Un": 0,
    "Deux": 0,
    "Trois": 0,
    "Quatre": 0,
    "Cinq": 0,
    "Six": 0,
    "Brelan": 0,
    "Carré": 0,
    "Full": 0,
    "Petite Suite": 0,
    "Grande Suite": 0,
    "Yahtzee": 0,
    "Chance": 0
};
*/

//FONCTION LANCER LES DES
function lancerDes() {
    score = 0;
    var tabDes = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
    // Trier le tableau en ordre croissant
    return valeursDes = tabDes.sort(function (a, b) {
        return a - b;
    })
}
;
module.exports = lancerDes;
console.log(lancerDes());

//tenir ou relâcher un dé


//FONCTION CALCUL DU SCORE
// Vérifier si le tableau contient une petite suite
function calculScore(valeursDes) {
    for (var i = 0; i < 5; i++) {
        //Si c'est une Grande suite (5)
        if (valeursDes[i] + 1 !== valeursDes[i + 1]) {
            grandeSuite = true;
            score = 40;

        }
        //Si c'est une Petite suite (4) 
        else if (valeursDes[i + 1] === valeursDes[i] + 1 && valeursDes[i + 2] === valeursDes[i] + 2 && valeursDes[i + 3] === valeursDes[i] + 3) {
            petiteSuite = true;
            score = 30;
        }
    }

    for (var i = 0; i < 5; i++) {
        var count = 0;
        for (var j = 0; j < 5; j++) {
            if (valeursDes[j] === i) {
                count++;
                var valeurRepetee = i;
            }
        }
        //s'il y a 3 dés identiques (Brelan)
        if (count = 3) {
            brelan = true;
            score = valeurRepetee * 3
        }
        //s'il y a 4 dés identiques (Carré)
        else if (count = 4) {
            carre = true;
            score = valeurRepetee * 4
        }
        //s'il y a 5 dés identiques (YAMS)
        else if (count = 5) {
            yams = true;
            score = 50;
        }
    }
    //Sinon, on additionne tous les chiffres  
    for (var i = 0; i < 5; i++) {
        score += valeursDes[i];
    }

    console.log(score);
}
module.exports = calculScore;


