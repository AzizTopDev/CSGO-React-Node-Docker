const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const GameSchema = new Schema({
    name: String,
    difficulty: String,
    fee: Number,
    image: { type: String, default: 'https://i.ibb.co/3mF81rX/1522345568-cs.jpg' },
    prize: Number
});

GameSchema.methods.toJSONFor = function (user) {
    return {
        id: this._id,
        name: this.name,
        difficulty: this.difficulty,
        fee: this.fee,
        prize: this.prize,
        image: this.image
        // https://i.ibb.co/6wFZYjH/images.jpg
        // https://i.ibb.co/3h77WgS/a1b3e0b5ec470ed95e758cfa282207e7.jpg        
    };
};

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;