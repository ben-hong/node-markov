const { MarkovMachine } = require('./markov');

describe("test MarkovMachine class", function () {

    beforeAll(function () {
        m = new MarkovMachine('the cat in the hat')
    })

    test("test instance properties", function () {
      expect(m.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
    });

    test("test get text w/ default", function () {
        let textArray = m.getText().split(' ');
        expect(textArray.length).toEqual(100);

        let wordSet = new Set(['the', 'cat', 'in', 'hat'])
        let isSubset = textArray.every(word => wordSet.has(word))
        expect(isSubset).toBeTruthy()
    })

    test("test get text w/o default", function () {
        let textArray = m.getText(25).split(' ');
        expect(textArray.length).toEqual(25);
    })
  
  });