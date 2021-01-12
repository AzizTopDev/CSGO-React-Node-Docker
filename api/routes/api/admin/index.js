const router = require('express').Router();
const auth = require('../auth');

router.use('/server', require('./server'));
router.use('/account', require('./account') );
router.use('/payment', require('./payment') );
router.use('/game', require('./game') );

module.exports = router;