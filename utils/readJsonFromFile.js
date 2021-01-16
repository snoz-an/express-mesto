const fs = require('fs').promises;

const readJson = (path) => (
  fs.readFile(path)
    .then((text) => JSON.parse(text))
);

module.exports = readJson;
