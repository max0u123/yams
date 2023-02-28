//variables

//Lancer les 5 dés
function lancerDes() {
    return [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
}

//tenir ou relâcher un dé


//calcul score


module.exports = lancerDes;