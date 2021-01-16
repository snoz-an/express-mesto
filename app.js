const express = require('express');

const { PORT = 3000 } = process.env;
const router = require('./routes');

const app = express();

app.use('/', express.static('public'));
app.use('/', router);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
