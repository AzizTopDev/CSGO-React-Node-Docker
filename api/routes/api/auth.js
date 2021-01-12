require('dotenv').config();
var jwt = require('express-jwt');
var secret = process.env.SECRET_KEY || 'secret';

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

function isAdmin(req, res, next) {
    if(req.payload && req.payload.role === "admin") {
        next();
    } else {
        res.sendStatus(401);
    }
}

var auth = {
    isAdmin: isAdmin,
    required: jwt({secret: secret, userProperty: 'payload', getToken: getTokenFromHeader}),
    optional: jwt({secret: secret, userProperty: 'payload', credentialsRequired: false, getToken: getTokenFromHeader})
};

module.exports = auth;