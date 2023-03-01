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

//test de scores (ex: 30 points)
describe('score', () => {
  test('doit retourner 30 pts pour un small straight', () => {
    // 1 , 2 , 3, 4
    expect(score([1, 1, 2 , 3, 4] | [1 ,2, 2, 3, 4] | [1, 2 , 3, 3, 4] | [1, 2, 3, 4, 4] | [ 1, 2,3, 4, 5] | [1 , 2, 3, 4, 6])).toBe(30);
    // 2, 3, 4, 5
    expect(score([1, 2, 3, 4, 5,] | [2, 2, 3, 4, 5,] | [2, 3, 3, 4, 5,] | [2, 3, 4, 4, 5] | [ 2, 3, 4, 5,5] | [2, 3, 4, 5, 6])).toBe(30);
    // 3, 4, 5, 6
      expect(score([1, 3, 4, 5, 6] | [2, 3, 4, 5, 6] | [3, 3, 4, 5, 6] | [3, 4, 4, 5, 6] | [ 3, 4, 5,5, 6] | [ 3, 4, 5, 6, 6])).toBe(30);
  });
});
//test de scores (ex: 40 points)
describe('score', () => {
  test('doit retourner 40 pts pour un small straight', () => {
     //1, 2, 3, 4, 5
      expect(score([1, 2, 3, 4, 5])).toBe(40);
    // 2, 3, 4, 5,6
      expect(score([2, 3, 4, 5, 6])).toBe(40);
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
    //test de scores (ex: XX points)
describe('score', () => {
  test('doit retourner la somme du carré des dés en points', () => {
  //1
      expect(score([1,1,1,1 , (2 | 3 | 4 | 5 | 6)])).toBe(4);
  // 2
      expect(score([1 | 2,2,2,2 | ( 3 | 4 | 5 | 6)])).toBe(8);
  // 3
  expect(score([(1 |2 ) |  3,3,3,3 | ( 4 | 5 | 6)])).toBe(12);
  // 4
  expect(score([(1 |2|3) | 4,4,4,4 | ( 5 | 6)])).toBe(16);
  // 5
  expect(score([(1 |2|3 | 4) | 5,5,5,5 | ( 6)])).toBe(20);
  // 6
  expect(score([(1 |2|3 | 4 | 5 ) ,6,6,6,6 ])).toBe(24);
  });
}); 
});
