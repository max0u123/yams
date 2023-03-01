const { isFunction } = require("@babel/types");

//variables
var score = 0;
var lances = 0;


//FONCTION LANCER LES DES
function lancerDes() {
    score = 0;
    var tabDes = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
    lances ++;
    // Trier le tableau en ordre croissant
    return valeursDes = tabDes.sort(function (a, b) {
        return a - b;
    })
    
};
module.exports = lancerDes;
console.log(lancerDes());


// Fonction pour compter le nombre de dés ayant une certaine valeur
function compterDes(valeursDes, valeur) {
    return valeursDes.filter(d => d === valeur).length;
  }
  
  // Fonction pour vérifier si une combinaison est valide
  function estValide(valeursDes, combinaison) {
    switch (combinaison) {
      case 'brelan':
        return valeursDes.some(d => compterDes(valeursDes, d) >= 3);
      case 'carre':
        return valeursDes.some(d => compterDes(valeursDes, d) >= 4);
      case 'full':
        return valeursDes.some(d => compterDes(valeursDes, d) === 3) &&
               valeursDes.some(d => compterDes(valeursDes, d) === 2);
      case 'petiteSuite':
        return trierDes(valeursDes).join('') === '12345' ||
               trierDes(valeursDes).join('') === '23456';
      case 'grandeSuite':
        return trierDes(valeursDes).join('') === '12345' ||
               trierDes(valeursDes).join('') === '23456';
      case 'yahtzee':
        return valeursDes.every(d => d === valeursDes[0]);
      default:
        return true;
    }
  }
  
  // Fonction pour calculer le score pour une combinaison
  function calculerScore(valeursDes, combinaison) {
    switch (combinaison) {
      case 'brelan':
        return valeursDes.reduce((acc, d) => acc + d, 0);
      case 'carre':
        return valeursDes.reduce((acc, d) => acc + d, 0);
      case 'full':
        return 25;
      case 'petiteSuite':
        return 30;
      case 'grandeSuite':
        return 40;
      case 'yahtzee':
        return 50;
      default:
        return valeursDes.reduce((acc, d) => acc + d, 0);
    }
  }
  
  module.exports = {
    lancerDes,
    trierDes,
    compterDes,
    estValide,
    calculerScore,
  };
  