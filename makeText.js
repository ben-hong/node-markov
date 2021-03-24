/** Command-line tool to generate Markov text. */
const fsP = require("fs").promises;
const { MarkovMachine } = require('./markov');

const path = process.argv[3];

const contents = await fsP.readFile(path, 'utf8');

const markov = new MarkovMachine(contents)

console.log(markov.getText(40))