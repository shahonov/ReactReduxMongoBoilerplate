const router = require('express').Router();

router.use('/users', require('./controllers/usersController'));

module.exports = router;
