const router = require('express').Router();
const Game = require('../../../models/Game');

router.get('/', (req, res, next) => {
    Game.find({})
        .then((games) => {
            res.json({ games: games });
        })
        .catch((err) => {
            res.json({ error: err });
        });
});
router.post('/create', (req, res, next) => {
    const { name, difficulty, fee, prize } = req.body;
    newGame = new Game({ name, difficulty, fee, prize });
    newGame.save().then(() => {
        return res.json({ status: "success" });
    });

});

module.exports = router;