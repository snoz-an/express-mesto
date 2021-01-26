const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(() => {
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

const createCard = (req, res) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => {
      res.send({ data: card });
    })
    .catch(() => {
      res.status(400).send({ message: 'переданы некорректные данные' });
      res.status(500).send({ message: 'Произошла oшибка на сервере' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      res.send({ data: card });
    })
    .catch(() => {
      res.status(404).send({ message: 'карточка не найдена' });
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((like) => res.send({ data: like }))
    .catch(() => {
      res.status(404).send({ message: 'карточка не найдена' });
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((like) => res.send({ data: like }))
    .catch(() => {
      res.status(404).send({ message: 'карточка не найдена' });
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
