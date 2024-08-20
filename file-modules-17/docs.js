// warning!
// Do not run this codes on code pen!
// Because a several errors can be occurr because of the the single .js files
// So have a nice day!

// 2024-05-11
// File Modules
// -------------------------------------------------------------------------------
// Example One
// imported from a anohter js file:
// calculation-home.js:
const calculation = require("./calculation");

const num1 = 5;
const num2 = 5;

const result1 = calculation.multiple(num1, num2);
const result2 = calculation.divide(num1, num2);
const result3 = calculation.minus(num1, num2);
const result4 = calculation.plus(num1, num2);

console.log(`multiple: ${num1} * ${num2} = ${result1}`);
console.log(`divide: ${num1} / ${num2} = ${result2}`);
console.log(`minus: ${num1} - ${num2} = ${result3}`);
console.log(`plus: ${num1} + ${num2} = ${result4}`);

// --------------------------------------------------------------
// calculation.js:
let calculation = {};

calculation.multiple = (a, b) => {
	return a * b;
};

calculation.divide = (a, b) => {
	return a / b;
};

calculation.plus = (a, b) => {
	return a + b;
};

calculation.minus = (a, b) => {
	return a - b;
};

module.exports = calculation;

// --------------------------------------------------------------
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

// ----------------------------------------------------------------------
// account.js:
const moment = require("moment");

class Account {
	#amount;
	#account_id;

	constructor(name, amount, account_id) {
		this.name = name;
		this.#amount = amount;
		this.#account_id = account_id;
	}

	tellBalance() {
		console.log(`My balance is ${this.#amount}`);
		// return this.#amount;
	}

	withdrawMoney(amount) {
		if (this.#amount > amount) {
			this.#amount -= amount;
			console.log(
				`${amount} is withdrew and current balance is ${this.#amount}$`
			);
		} else {
			console.log(`Your balance is not enough to withdraw ${amount}$`);
		}
	}

	makeDeposit(amount) {
		this.#amount += amount;
		console.log(
			`Your balance is deposited and current balance is ${this.#amount}$`
		);
	}

	giveDetails() {
		console.log(`Hi, ${this.name}! Your current balance is ${this.#amount}$`);
		console.log(`Your account is ${this.#account_id}`);
	}

	static aboutClass() {
		console.log("This class defined to create accounts!");
	}

	static tellTime() {
		console.log(`Current time is ${moment().format("YYYY MM DD HH:mm:ss")}`);
	}
}

module.exports = Account;

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// index.js:
// ------------------------------------------------------------------------------------------------
// Modullar - Core Module

// Modullar 3 turga bo'linadi:
// 1) Module package CORE
// 2) Module package EXTERNAL
// 3) Module package FILE

// --------------------------------------------------------------------------
// File Module:
const fileMd1 = require("./file-md/sample-1/calculation-home.js");
const fileMd1 = require("./file-md/sample-1/calculation-home");

const fileMd2 = require("./file-md/sample-2/account-home");

// 17 - dars shu yerda yakunlandi
// 수고 하셨습니다!
