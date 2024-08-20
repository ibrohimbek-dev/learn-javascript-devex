// 2024-04-24
// Classlarni Chuqur O'rganamiz

// Dars rejasi:
// 1) Classlardagi Encapsultion tushunchasi
// 2) Classlardagi Inheritance tushunchasi hamda Parent va Child classlari
// 3) Classlardagi Polymorphism tushunchasi

// ------------------------------------------------------
class Account {
	//   state:
	// owner;
	// amount;
	// currency;

	//   constructor:
	constructor(owner, amount, currency = "usd") {
		this.owner = owner;
		this.amount = amount;
		this.currency = currency;
	}

	//   method:
	checkBalance() {
		console.log(
			`Hi ${this.owner}, your balance is ${this.amount} ${this.currency}`
		);
	}

	deposit(money) {
		this.amount += money;
	}
}

// const myAccount = new Account("Ibrohimbek", 9000, "euro");
// myAccount.checkBalance();

// // Balance is updated
// myAccount.deposit(7000);
// myAccount.checkBalance();

// // Balance is updated
// myAccount.deposit(15000);
// myAccount.checkBalance();

// // Owner is updated
// myAccount.owner = "Martin";
// myAccount.checkBalance();

// // Amount is updated
// myAccount.amount = 200000;
// myAccount.checkBalance();

// ------------------------------------------
// Encupsulation tushunchasi
// Encupsultaion tushunchasiga quyidagilar misol bo'la oladi:
// 1) public || default
// 2) privite
// 3) protected

// Quydigi language'lar C tilidan olinganligi uchun, public, privite, protected tushunchalari (syntax) deyarlik bir xil yoziladi. Masalan:
// JAVA: public, privite, protected
// PHP: public, privite, protected
// Python: , __, _
// JavaScript: , #, _

// Quyidagi public'dan privite'ga ko'chiramiz:
class PrivateBankAccount {
	#owner; // public => privite
	#amount; // public => privite
	#currency; // public => privite

	constructor(owner, amount, currency = "usd") {
		this.#owner = owner;
		this.#amount = amount;
		this.#currency = currency;
	}

	checkBalance() {
		console.log(
			`Hi ${this.#owner}, your balance ${this.#amount} ${this.#currency}`
		);
		this.#test();
	}

	deposit(money) {
		this.#amount += money;
	}
	changeCurrency(curr) {
		this.#currency = curr;
	}

	#test() {
		console.log(`This is only obtainable inside a class!`);
	}
}

const privateBankAccount = new PrivateBankAccount("David", 1000);
privateBankAccount.checkBalance();

// update deposit
privateBankAccount.deposit(2000);
privateBankAccount.checkBalance();

// you can not change the name of the private account
privateBankAccount.owner = "Bekzod";
privateBankAccount.checkBalance();

// you can not change the amount of the private account
privateBankAccount.amount = 15000;
privateBankAccount.checkBalance();

// you can not change the currency of the private account
privateBankAccount.currency = "euro";
privateBankAccount.checkBalance();

// you can only update the currency of the private account
privateBankAccount.changeCurrency("euro");
privateBankAccount.checkBalance();

// you can not get the value of the currency because of the privacy
// console.log(privateBankAccount.curreny)

// you can not call the private method in a class
// privateBankAccount.test()

// ----------------------------------------------------------------------
// Classlardagi Inheritance tushunchasi
// Inheritance tushunchasi aynan Parent va Child classlar orasidagi munosabat hisoblanadi

// Parent Class:
class Car {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}

	getDetails() {
		console.log(`${this.brand} ${this.model}.`);
	}
	start() {
		console.log(`Start engine`);
	}
	stop() {
		console.log(`Stop engine`);
	}
	maximizeSpeed() {
		console.log("Maximal speed is not provided");
	}
}

// Child classes:
// Toyota:
class Toyota extends Car {
	#fuel = 0;

	constructor(model, category, speed) {
		super("Toyota", model);
		this.category = category;
		this.speed = speed;
	}

	fillUpGasoline(a) {
		this.#fuel += a;
	}
}

const myCar = new Toyota("Camry", "sedan", 220);

myCar.start();
myCar.stop();
myCar.fillUpGasoline(20);
myCar.getDetails();

// Tesla:
class Tesla extends Car {
	#battery = 0; // kv
	constructor(model, category, speed) {
		super("Tesla", "Model S", 330);
		this._category = category;
		this._speed = speed;
	}

	chargePower(kv) {
		this.#battery += kv;
	}
}

console.log("--------------------------------------------");
const yourCar = new Tesla("Model S", "sedan", 330);
yourCar.start();
yourCar.stop();
yourCar.chargePower(10);
yourCar.getDetails();

// ---------------------------------------------
// Protected Encupsulation
// Protected Encupsulation'ning himoya darajasi public va private'ning o'rtasida bo'ladi

// Public'larni to'g'ridan to'g'ri chaqira olamiz ya'ni himoyasi yo'q. Private'larni faqatgina class ichida chaqira olamiz, ya'ni himoya darajasi juda ham yuqori

// Protected Encupsulation'ni odatda unchalik ham ko'p ishlatilmaydi

// --------------------------------
// Protected Encupsulation:
class Kia extends Car {
	#fuel = 0;

	constructor(model, category, speed) {
		super("Kia", model);
		this.category = category;
		this.speed = speed;
	}

	fillUpGasoline(litr) {
		this.#fuel += litr;
	}
}

console.log("---------------------------------");
const kiaCar = new Kia("Sportage", "suv", 250);
kiaCar.start();
kiaCar.stop();
kiaCar.fillUpGasoline(30);
kiaCar.getDetails();

kiaCar.category = "sedan";
kiaCar.getDetails();

// ---------------------------------------------------------
// Polmorphism

class Hyundai extends Car {
	#fuel = 0;
	constructor(model, category, speed) {
		super("Hyundai", model);
		this.category = category;
		this.speed = speed;
	}

	fillUpGasoline(litr) {
		this.#fuel += litr;
	}

	maximizeSpeed() {
		console.log(`${this.model} reaches ${this.speed} km/h`);
	}
}

console.log("-------------------------------------");
const hyundaiCar = new Hyundai("Palisade", "suv", 250);
hyundaiCar.start();
hyundaiCar.getDetails();
hyundaiCar.maximizeSpeed();

// Agar child tarkibida ma'lum bir method mavjud bo'lasa (except parent) u holda, parent tarkibidagi method ishga tushadi. Aynan mana shu holat polymorphism deb ataladi

// Beshinchi dars shu yerda yakunladi!
// 수고 하셨습니다!
