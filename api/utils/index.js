const Transaction = require("../models/Transaction");

function calculateTransaction(userId) {
    let coins = 0, spent = 0, earn = 0;
    return new Promise((resolve, reject) => {
        Transaction.find({ userId: userId }).then((transactions) => {
            for (let i = 0; i < transactions.length; i++) {
                if (transactions[i].action === "deposit") {
                    coins += transactions[i].coins;
                    spent += transactions[i].price;
                } else if (transactions[i].action === "withdrawn") {
                    coins -= transactions[i].coins;
                    earn += transactions[i].price;
                }
            }
            resolve({ coins, spent, earn });
        }).catch(err => {
            console.log(" Error during calculating transaction !!", err);
            reject({ message: "Failed to query Transaction!!" })
        });
    });
}

function calculateDepositFundFromAmountOfCoins(coins) {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client

    return parseInt(coins / 10);
};
function calculateWithdrawFundFromAmountOfCoins(coins) {
    return parseInt(coins * 9 / 100);
}

module.exports = {
    calculateTransaction,
    calculateDepositFundFromAmountOfCoins,
    calculateWithdrawFundFromAmountOfCoins
};