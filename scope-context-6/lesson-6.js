// 2024-04-24
// Scope & Contextlar

// Dars rejasi:
// 1) Scope tushunchasi
// 2) Context tushunchasi

// ---------------------------------
// Scope tushunchasi => variable'larga bog'liq tushuncha hisoblanadi
// Context tushunchasi => Object'larga bog'liq tushuncha hisoblanadii

// -------------------------------------------------
// scope tushunchasi:
// void function

function calculate1(a, b) {
	const let1 = a + b;
	console.log("Value of the let1: ", let1);
}

calculate1(14, 11);

// Agar calculate funktsiyasi tarkibidagi console.log'ni yoki o'zgaruvchilarni funktsiya tarkibida tashqarida ishlatadigan bo'lsak, xatolik yuzaga keladi. Sababi bu yerda scope tushunchasi ishlamoqda. Scope tushunchasi bu, ma'lum bir o'zgaruvchi yoki kodni o'ziga tegishli bo'lgan maydon ichidagina ishlatish mumkinlgini anglatadi. Undan tashqarida ishlatib bo'lmaydi!

// Quyidagi holatda, 'c' o'zgaruvchisi funktsiyadan tashqarida ishlatilganligi define qilinganligi uchun hech qanday xatoliksiz ishlaydi:

let let2 = 0;

function calculate2(a, b) {
	let2 = a + b;
}

console.log("Value of the let2 (before):", let2);
// After calling the function
calculate2(10, 2);
console.log("Value of the let2 (after):", let2);

// Priority. Scope ichida return qilinishi kerak bo'lgan kodlar quyidagi tartibda izlab ishlaydi:
// 1) Inside Function
// 2) Parameter Function
// 3) Outside Function

// Quyidagi holata, return qilinayotgan variable, avval funktsiya tarkibidan izlanganligi uchun, qolgan nomi bir xil variable'larni ignore qiladi:

let let3 = 0;
const const3 = 20;
function calculate3(const3, b) {
	let3 = const3 + b;
}

console.log("Value of the let3 (before): ", let3);
calculate3(10, 2);
console.log("Value of the let3 (after):", let3);

// -------------------------------------------------------------
// Context Tushunchasi
// Context tushunchasi object'ga bog'langan hisoblanadi

const person1 = {
	name: "Jumong",
	age: 30,
	nation: "Korean",
	greet() {
		console.log("Hi! How are you?!");
	},
	introduce() {
		console.log(`I am ${this.name} and I am ${this.age}.`);
		//  before this:
		const sayYourAge = () => {
			//  after this = person
			// sayYourAge is worked after converting function to arrow function
			console.log(`I am ${this.age} years old.`);
		};
		sayYourAge();
	},
};

person1.greet();
person1.introduce();

// OOP Context => Object
// Function Structure Criteria => Regular, Anonymous, Arrow

// To'g'ridan - to'g'ri this'dan foydalanish:
function greetFunc() {
	console.log(`I am ${this.name}`);
}

greetFunc();

// Oltinchi dars shu yerda yakunladi!
// 수고 하셨습니다!
