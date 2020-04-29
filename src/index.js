const names = [
  "Marco",
  "Ana",
  "Carolina",
  "Paulina",
  "Santiago",
  "Nicolay",
  "Yessica",
  "Laura",
  "Diego",
  "María",
  "Covid",
  "Arlet",
  "Axel",
  "Minerva",
  "Noe",
  "Melina",
  "Leticia",
  "Salma",
  "Brenda",
  "Liberth",
  "Fernanda",
  "Adrian",
  "Daniela",
  "Joel",
  "Ramiro",
  "Antonio",
  "Mónica",
  "Isabel",
  "Juan",
  "Silvia",
  "Obed",
  "Lorena",
  "Celia",
  "Ivanna",
  "Nicole",
  "Raul",
  "Armando",
  "Edgar",
  "Paola",
  "Sofia",
  "Gerardo",
  "Eduardo",
  "Mayra",
  "Patricia",
  "Rubén",
  "Julio",
  "Sheryl",
  "Grecia",
  "Carlos",
  "Guadalupe",
  "Filiberto"
];

const subjects = [
  "they",
  "people",
  "I",
  "he",
  "she",
  "we",
  "whoever"
]

const verbs = [
  "say",
  "go",
  "eat",
  "get",
  "make",
  "know",
  "think",
  "take",
  "see",
  "come",
  "want",
  "look"
]

const objects = [
  "diary",
  "bottle",
  "water",
  "packet",
  "chewing gum",
  "tissue",
  "glasses",
  "watch",
  "candy",
  "photo",
  "camera",
  "stamp",
  "some drinks"
]

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five","six",
  "seven",
  "eight",
  "nine",
  "ten"
]

const conjuctions = [
  "for",
  "and",
  "nor",
  "but",
  "or",
  "yet",
  "so",
  "after",
  "as",
  "as long as",
  "as soon as",
  "as though",
  "before",
  "even if",
  "if",
  "if when",
  "in as much",
  "just as",
  "now",
  "now that",
  "once",
  "provided that",
  "since",
  "supposing",
  "that",
  "though",
  "until",
  "whenever",
  "whereas",
  "wherever",
  "which",
  "who"
]

const randomName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  console.log(name);
}

const rand = (values) =>(values[Math.floor(Math.random() * values.length)])

const randomMsg = () => {  
  const normalSentence = `${rand([rand(subjects),rand(names)])} ${rand(verbs)} ${rand(objects)} to ${rand(verbs)} ${rand(objects)}`
  const weirdSetence =`${rand([rand(subjects),rand(names)])} ${rand(verbs)} ${rand(conjuctions)} ${rand(objects)}`
  const sentence = `${rand([rand(subjects),rand(names)])} ${rand(verbs)} ${rand(subjects)} ${rand(objects)}`
  const sentencenum = `${rand([rand(subjects),rand(names)])} ${rand(verbs)} ${rand(numbers)} ${rand(objects)}`

  console.log(rand([normalSentence, weirdSetence,sentence, sentencenum]));
} 

randomMsg();
randomMsg();
randomMsg();
randomMsg();

//randomName();


module.exports = { randomName, randomMsg };