const router = require('express').Router();

router.use('/', require('./me'));
router.use('/', require('./game'));
router.use('/', require('./payment'));

module.exports = router;