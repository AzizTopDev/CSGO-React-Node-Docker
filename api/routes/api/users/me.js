const router = require('express').Router();
const User = require('../../../models/User');
const auth = require('../auth');

router.get('/me', auth.required, (req, res, next) => {
    console.log("^^^ User is request by JWT ^^^", req.payload);
    User.findById(req.payload.id)
    .then(async (user) => {
        if(!user) return res.sendStatus(401);
        const jsonUser = await user.toJSONFor();
        return res.json({ user: jsonUser });
    })
    .catch(next);
});

router.get('/logout', auth.required, (req, res, next) => {
    return res.json({ message: "Token invalidation sucess"});
});

module.exports = router;