const lancerDes = require('./yams');

//TESTS

describe('Yams', () => {
    describe('lancerDes', () => {

        //doit générer 5 valeurs de dé
        test('doit générer 5 valeurs de dés', () => {
            var resultat = lancerDes();
            expect(resultat.length).toEqual(5);
        });

        //doit générer des chiffres de 1 à 6
        test('chaque valeur doit être entre 1 et 6', () => {
            lancerDes();
            for (var i = 0; i < 5; i++) {
                expect(valeursDes[i]).toBeGreaterThanOrEqual(1);
                expect(valeursDes[i]).toBeLessThanOrEqual(6);
            }
        });

        //ne doit pas générer de nv lancers après 3 tours
        test('ne doit pas générer de nouveaux lancers après 3 tours', () => {
            for (var i = 0; i < 4; i++) {
                lancerDes();
            }
            expect(compteurLancers).toEqual(3);
        });
    });

    //test de scores (ex: 50 points)
    describe('score', () => {
        test('doit retourner 50 pts pour un full', () => {
            expect(score([1, 1, 1, 1, 1])).toBe(50);
            expect(score([2, 2, 2, 2, 2])).toBe(50);
            expect(score([3, 3, 3, 3, 3])).toBe(50);
            expect(score([4, 4, 4, 4, 4])).toBe(50);
            expect(score([5, 5, 5, 5, 5])).toBe(50);
            expect(score([6, 6, 6, 6, 6])).toBe(50);
        });
    });
});