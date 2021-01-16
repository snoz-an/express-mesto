const router = require('express').Router();
const { getUser, getUsers } = require('../controllers/getUsers');

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
