/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    let chains = makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    let chains = {};

    for (let i = 0; i < words.length; i++) {
      console.log(words[i])
      if (words[i] in chains) {
        console.log('in if', words[i])
        chains[words[i]].push(words[i+1] || null);
      } else {
        console.log('in else', words[i])
        chains[words[i]] = [words[i+1] || null];
        console.log('chains obj', chains)
      }
    }

    return chains;
  }


  /** return random text from chains */

  getText(numWords = 100) {
    let textLength = 0;
    let currWord = 'the';
    while (textLength <= numWords) {
      'cat in the hat '
      
      textLength++;
    }
  }

  chooseNext(currWord) {
    if (chains[currWord]) {
      // randomize later
      currWord = chains[currWord][0];
    } 
  }
}

let markovtest = new MarkovMachine('hi');
console.log(markovtest.makeChains(['the', 'cat', 'in', 'the', 'hat']))

module.exports = { MarkovMachine };
