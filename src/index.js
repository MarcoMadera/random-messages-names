const verbs = require('./verbs');
const names = require('./names');
const objects = require('./objects');
const nouns = require('./nouns');
const adjectives = require('./adjectives');
const numbers = require('./numbers');
const conjuctions = require('./conjuctions');
const subjects = require('./subjects');

const randomName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  console.log(name);
}

const r = (values) =>(values[Math.floor(Math.random() * values.length)])

const randomMsg = () => {  
  const normalSentence = (`${r([r(subjects),r(names)])} ${r(verbs)} ${r(objects)} to ${r(verbs)} ${r(objects)}`)
  const weirdSetence =`${r([r(subjects),r(names)])} ${r(adjectives)} ${r(conjuctions)} ${r(nouns)}`
  const sentence = `${r([r(subjects),r(names)])} ${r(verbs)} ${r(nouns)} ${r(objects)}`
  const sentencenum = `${r([r(subjects),r(names)])} ${r(verbs)} ${r(numbers)} ${r(nouns)}`

  console.log( r([normalSentence, weirdSetence,sentence, sentencenum]) );
} 

module.exports = { randomName, randomMsg };