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
