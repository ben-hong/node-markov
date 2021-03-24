/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.chains = this.makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    let chains = {};

    for (let i = 0; i < words.length; i++) {
      if (words[i] in chains) {
        chains[words[i]].push(words[i+1] || null);
      } else {
        chains[words[i]] = [words[i+1] || null];
      }
    }

    return chains;
  }


  /** return random text from chains */

  getText(numWords = 100) {
    let textArray = [];
    let keys = Object.keys(this.chains)
    let currWord = this.chooseRandom(keys);
    while (textArray.length < numWords) {
      if(currWord === null) {
        currWord = this.chooseRandom(keys);
      } else {
        textArray.push(currWord);
        currWord = this.chooseRandom(this.chains[currWord]);
      }
    }
    return textArray.join(' ');
  }

  chooseRandom(arr) {
    let randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx];
  }
}

let markovtest = new MarkovMachine('the cat in the hat');
// console.log(markovtest.getText(20))

module.exports = { MarkovMachine };
