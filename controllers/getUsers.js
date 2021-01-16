const path = require('path');
const readJson = require('../utils/readJsonFromFile');

const getUsers = (req, res) => {
  const usersData = path.join(__dirname, '..', 'data', 'users.json');
  readJson(usersData)
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  const userData = path.join(__dirname, '..', 'data', 'users.json');
  readJson(userData)
    .then((users) => {
      const findUser = users.find((user) => user._id === id);
      if (!findUser) {
        return res.status(404).send('Нет пользователя с таким id');
      }
      return res.send(findUser);
    })
    .catch(() => {
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports = {
  getUser,
  getUsers,
};
