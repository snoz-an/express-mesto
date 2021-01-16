const readJson = require("../utils/readJsonFromFile");
const path = require('path');

const getCards = (req, res) => {
  const cardsData = path.join(__dirname, '..', 'data', 'cards.json');
  readJson(cardsData)
    .then((cards) => {
      res.send(cards);
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

module.exports = getCards;