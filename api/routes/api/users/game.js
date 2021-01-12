const router = require('express').Router();
const Game = require('../../../models/Game');
const auth = require('../auth');

router.get('/games', auth.required, (req, res, next) => {
    Game.find({})
        .then((games) => {
            res.json({ games: games });
        })
        .catch((err) => {
            res.json({ error: err });
        });
});

module.exports = router;