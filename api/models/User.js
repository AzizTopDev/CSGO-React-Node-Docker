const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Transaction = require('./Transaction');
const { calculateTransaction } = require('../utils');
require('dotenv').config();

const UserSchema = new Schema({
    username: String,
    steamId: { type: String, default: null },
    email: { type: String, default: null },
    role: { type: String, default: "user"},
    image: { type: String, default: "https://static.productionready.io/images/smiley-cyrus.jpg" },
    token: String,
    salt: String
}, {
    timestamps: true
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
}
UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        id: this._id,
        username: this.username,
        steamId: this.steamId,
        email: this.email,
        role: this.role,
        exp: parseInt(exp.getTime() / 1000)
    }, process.env.SECRET_KEY);
};
UserSchema.methods.toJSONFor = async function () {
    const { id, username, steamId, email, image, token } = {
        id: this._id,
        username: this.username,
        steamId: this.steamId,
        email: this.email,
        role: this.role,
        image: this.image,
        token: this.generateJWT()
   }
   let { coins, spent, earn } = await calculateTransaction(this._id);
   return {id, username, steamId, email, image, coins, spent, earn, token};
};


const User = mongoose.model('User', UserSchema);
module.exports = User;