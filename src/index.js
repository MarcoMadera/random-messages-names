const verbs = require('./verbs');
const names = require('./names');
const lastnames = require('./lastnames');
const nouns = require('./nouns');
const adjectives = require('./adjectives');
const numbers = require('./numbers');
const conjuctions = require('./conjuctions');
const subjects = require('./subjects');

const r = (values) =>(values[Math.floor(Math.random() * values.length)])

const FirstName = () => {
  return r(names);
}

const LastName = () => {
  return r(lastnames);
}

const Name = () => {
  return `${r(names)} ${r(lastnames)}`;
}


const Msg = () => { 
  const type1 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r(verbs)} ${r(nouns)} to ${r(verbs)} ${r(nouns)}`);
  const type2 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r(adjectives)} ${r(conjuctions)} ${r(nouns)}`);
  const type3 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r(verbs)} ${r(nouns)} ${r(nouns)}`);
  const type4 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r([r(verbs),r(adjectives)])} ${r(numbers)} ${r(nouns)}`);
  const type5 = `${type1()} ${type2()} ${type3()} ${type4()}`
  const type6 = `${type5} ${type1()} ${type2()} ${type3()} ${type4()}`
  const Msg = r([type1(), type2(),type3(), type4(), type5, type6]);
  return Msg;
} 

module.exports = { Name, LastName, Msg, FirstName };