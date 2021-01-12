const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    userId: String,
    date: { type: Date, default: Date.now },
    action: { type: String, required: true },
    price: Number,
    coins: Number,
    paypalAddress: String,
});

TransactionSchema.methods.toJSONFor = function () {
    return {
        id: this._id,
        userId: this.userId,
        date: this.date,
        action: this.action,
        price: this.price,
        coins: this.coins,
        email: this.email,
    };
};

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;