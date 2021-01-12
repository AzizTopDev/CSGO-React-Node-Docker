const Transaction = require('../../../models/Transaction');
const router = require('express').Router();
const { calculateTransaction } = require('../../../utils');
const User = require('../../../models/User');
const { restart } = require('nodemon');

router.get('/withdraws', (req, res, next) => {
    Transaction.find({ $or: [{ action: "pending" }, { action: "cancelled" }] }).then(async (dts) => {
        let transactions = [];
        console.log("dts : ", dts);

        for (const dt of dts) {
            const { coins, spent, earn } = await calculateTransaction(dt.userId);
            const user = await User.findById(dt.userId);

            transactions.push({
                id: dt._id,
                username: user.username,
                coins: coins,
                spent: spent,
                earn: earn,
                paypalAddress: dt.paypalAddress,
                dealCoins: dt.coins,
                price: dt.price,
                action: dt.action,
                date: dt.date
            });
        };

        return res.json({ transactions });
    }).catch(next);
});

router.get('/approve/:transactionId', (req, res, next) => {
    const { transactionId } = req.params;
    Transaction.findById(transactionId).then(doc => {
        if (doc.action === "pending" || doc.action === "cancelled") {
            // do somthing for payout to users paypal
            doc.action = "withdrawn";
            doc.save().then(() => {
                return res.json({ status: "success" });
            });
        } else {
            // res.sendStatus(403);
            res.status(403);
            return res.json({ message: "no pending or cancelled transaction" })
        }
    })
});
router.get('/cancel/:transactionId', (req, res, next) => {
    const { transactionId } = req.params;
    Transaction.findById(transactionId).then(doc => {
        if (doc.action === "pending") {
            doc.action = "cancelled";
            doc.save().then(() => {
                return res.json({ status: "success" });
            });
        } else {
            // res.sendStatus(403);
            res.status(403);
            return res.json({ message: "no pending transaction" });
        }
    })
});

module.exports = router;