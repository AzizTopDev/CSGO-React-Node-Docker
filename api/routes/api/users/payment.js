const router = require('express').Router();
const auth = require('../auth');
const Transaction = require('../../../models/Transaction');
const { calculateDepositFundFromAmountOfCoins, calculateWithdrawFundFromAmountOfCoins } = require('../../../utils');
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_TkrwF3p495UWgMWyAR7TuaUq00w7qh5Fi1");

router.get('/transactions', auth.required, (req, res, next) => {
    Transaction.find({ userId: req.payload.id }).then((transactions) => {
            res.json({ transactions: transactions });
        }).catch(next);
});
router.post("/create-payment-intent", async (req, res, next) => {
    const { coins } = req.body;
    const amount = calculateDepositFundFromAmountOfCoins(coins);
    console.log(" AMOUNT : ", amount);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "usd",
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
    });
    return res.json({ clientSecret: paymentIntent.client_secret });
});
router.post('/deposit-coins', auth.required, (req, res, next) => {
    const { coins } = req.body;
    const user = req.payload;
    console.log(" THIS coins ----", coins);
    console.log(" THIS USER ----", user);
    const amount = calculateDepositFundFromAmountOfCoins(coins);
    const newTransaction = new Transaction({
        userId: user.id,
        action: "deposit",
        price: amount,
        coins: coins
    });
    newTransaction.save().then(() => {
        Transaction.find({ userId: req.payload.id }).then((transactions) => {
            return res.json({ transactions: transactions });
        }).catch(next);
    }).catch(next);
});
router.post('/withdraw-coins', auth.required, (req, res, next) => {
    const { coins, paypalAddress } = req.body;
    const user = req.payload;
    console.log(" THIS coins ----", coins);
    console.log(" THIS USER ----", user);
    // const amount = calculateDepositFundFromAmountOfCoins(coins);
    const amount = calculateWithdrawFundFromAmountOfCoins(coins);
    const newTransaction = new Transaction({
        userId: user.id,
        action: "pending",
        price: amount,
        coins: coins,
        paypalAddress: paypalAddress
    });
    newTransaction.save().then(() => {
        // Transaction.find({ userId: req.payload.id }).then((transactions) => {
        //     return res.json({ transactions: transactions });
        // }).catch(next);
        return res.json({ status: "success" });
    }).catch(next);
});
module.exports = router;