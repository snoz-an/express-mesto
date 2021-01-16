const router = require('express').Router();
const getCards = require('../controllers/getCards');

router.get('/', getCards);

module.exports = router;
