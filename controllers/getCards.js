const path = require('path');
const readJson = require('../utils/readJsonFromFile');

const getCards = (req, res) => {
  const cardsData = path.join(__dirname, '..', 'data', 'cards.json');
  readJson(cardsData)
    .then((cards) => {
      res.send(cards);
    })
    .catch(() => {
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports = getCards;
