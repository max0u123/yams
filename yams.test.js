const lancerDes = require('./yams');
const calculScore = require('./yams');


//TESTS
afterEach(() => {
    jest.clearAllMocks();
  });
  
describe('Yams', () => {
    describe('lancerDes', () => {

        //doit générer 5 valeurs de dé
        test('doit générer 5 valeurs de dés', () => {
            var resultat = lancerDes();
            expect(resultat.length).toEqual(5);
        });

        //doit générer des chiffres de 1 à 6
        test('chaque valeur doit être entre 1 et 6', () => {
            var resultat = lancerDes();
            for (var i = 0; i < 5; i++) {
                expect(resultat[i]).toBeGreaterThanOrEqual(1);
                expect(resultat[i]).toBeLessThanOrEqual(6);
            }
        });

        //ne doit pas générer de nv lancers après 3 tours
        test('ne doit pas générer de nouveaux lancers après 3 tours', () => {
            for (var i = 0; i < 3; i++) {
                lancerDes();
            }
            expect(compteurLancers).toEqual(3);
        });
    });

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [1, 2, 3, 4, 4];
    expect(calculerScore(des, 'PETITESUITE')).toBe(30);
  });
});
  describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [1,1,1,1,1];
    expect(calculerScore(des, 'YATHZEE')).toBe(50);
  });
});
describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [1, 2, 3, 4, 5];
    expect(calculerScore(des, 'GRANDESUITE')).toBe(40);
  });
});
    describe('calculerScore', () => {
      test('renvoie le score pour une combinaison', () => {
        const des = [5, 3, 6, 1, 2];
        expect(calculerScore(des, 'CHANCE')).toBe(17);
      });
    });
});
