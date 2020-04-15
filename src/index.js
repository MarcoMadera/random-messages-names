const messages = [
  "Marco",
  "Ana",
  "Carolina",
  "Paulina",
  "Santiago",
  "Nicolay",
  "Yessica",
  "Laura",
  "Diego",
  "Maria",
  "Covid",
  "Arlet",
  "Axel",
  "Minerva",
  "Noe",
  "Melina"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };