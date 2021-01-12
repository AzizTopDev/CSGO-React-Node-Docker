const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require("jsonwebtoken");
const chalk = require('chalk');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const FRONTEND_URL = process.env.FRONTEND_URL;
// Get /auth/steam


console.log("SECRET_KEY : ", SECRET_KEY);

router.get('/steam', passport.authenticate('steam', { session: false }));

router.get('/steam/return', (req, res, next) => {
        req.url = req.originalUrl;
        // console.log(chalk.red(req.originalUrl));
        next();
    },
    passport.authenticate('steam', { session: false }),
    (req, res) => {
        const user = req.user;
        const token = user.generateJWT();
        // console.log(" __________ token _______", token);
        // console.log(" __________ req.user _______", req.user);
        res.render("authenticated", {
            jwtToken: token,
            clientUrl: FRONTEND_URL,
        });
    }
);

module.exports = router;