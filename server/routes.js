const router = require('express').Router();
const rateLimit = require("express-rate-limit");

const defaultLimit = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 30 // limit each IP to 30 requests per windowMs
});

router.use('/users', defaultLimit, require('./controllers/usersController'));
router.use('/crypto', defaultLimit, require('./controllers/cryptoController'));

module.exports = router;
