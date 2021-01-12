const router = require('express').Router();
const fetch = require('node-fetch');
const auth = require('../auth');

const username = process.env.DATHOST_USERNAME;
const password = process.env.DATHOST_PASSWORD;
const BufferString = Buffer.from(`${username}:${password}`).toString('base64');

router.get('/', async (req, res, next) => {
    const response = await fetch('https://dathost.net/api/0.1/account', {
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });
    const account = await response.json();
    console.log("Account : ", account);
    return res.json({ account: account });
});

module.exports = router;