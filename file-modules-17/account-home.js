// --------------------------------------------------------------
// Example Two:
// account-home.js:
const Account = require("./account");

// Let me know about class:
Account.aboutClass();

// Let me know what time it is:
Account.tellTime();

// ----------------------------------------------------------------
console.log("----------------------------------------------------------------");
// run the class:

const myAccount = new Account("Ibrohimbek", 800000, 3535340953489);
myAccount.giveDetails();

// deposit money into your account:
myAccount.makeDeposit(1000000);

// bugatti chiyron 2,4mln usd:
myAccount.withdrawMoney(2400000);

// ferrari chiyron 400,000 usd:
myAccount.withdrawMoney(400000);

// deposit money into your account:
myAccount.makeDeposit(600000);
