// 2024-04-23
// Darsimiz rejasi:

// 1) JavaScriptning uch xil muhiti
// 2) Variablelar tushunchasi
// 3) Functionlar, ularning call va define jarayonlari
// 4) Functionning ma'lum bir kriteriyalari bo'yicha turlari
// 5) Functionning parametr va argument kategoriyalari

// ---------------------------------------------------------------

// 1) ReactJS front-end framework hisoblanadi
// 2) NodeJS asosan back-end uchun ishlatiladi

// ---------------------------------------------------------------

// JavaScriptda o'zgaruvchilar 3 xil bo'ladi:
// 1) let (o'zgaruvchi)
// 2) const (o'zgarmas)
// 3) var (function-level-scope)

// Agar biz keyinchalik, biror o'zgaruvching qiymatini o'zgartirishni maqsad qilgan bo'lsak, u holda 'let' variable'dan foydalanamiz

// ------------------------------------------------------------------
// 1) let example:
// The first value is 15
let thisLet = 15;
console.log(`This is a first value of thisLet:`, thisLet);

// The second value is 20
thisLet = 20;
console.log(`This is a second value of thisLet:`, thisLet);

// -----------------------------------------------------------------
// 2) const example:
// The first value is 15
const thisConst = 15;
console.log(`This is a first value of thisConst:`, thisConst);

// The second value is 20
// If I uncomment the section below an error will occur
// Because const is a unchangable variable (constant)
// So just skip this section bro!
// thisConst = 20;
// console.log(`This is second value of thisConst: `, thisConst)

// ----------------------------------------------------------------
// 3) var example:
function varExample() {
	if (true) {
		var thisVar = 10;
	}
	console.log(`This is a value of thisVar: `, thisVar);
}

varExample();
// var o'zgaruvchisini funktsiya ichida o'zaro scope'dan tashqarida ishlata olamiz. Lekin ko'p xollarda chalkashmovchilik yuzaga kelmasligi uchun, let yokida const o'zgaruvchilaridan foydalanish tavsiya etiladi ^-^

// -----------------------------------------------------------------
// Functions bu o'zi nima?
// Bu funktsiya bu ma'lum bir operatsiyani amalga oshiradigan kod blok hisoblanadi! Funktsiyani first-class-object deb ham ataladi. Buni keyingi qismlarda o'rganamiz!

// 1) example of function
// Funktsiyani define qilish:
function greeting() {
	console.log("Hello Korea!");
}

// Funktsiyani ishga tushirish:
greeting();

// greeting bu funktsiya nomi va biz uni chaqirish orqalik funktsiyani ishga tushiramiz. Oddiy funktsiyaning ustunlik tarafi, uni istalgan yerda chaqirib funktsiyani ishga tushirishimiz mumkin

// Function'lar 3 xil Criteria'ga bo'linadi:
// 1) Constructor
// 2) Returning
// 3) Execution

// Constructor 4 turga bo'linadi:
// 1) Regular functions
// 2) Expression functions
// 3) Arrow functions
// 4) Auto Invoke functions

// The first example of regular function:
function regularFunction() {
	console.log("Hello! this is a Regular Function from South Korea!");
}

regularFunction();

// Expression Functions:
// Expression Functions ikki turga bo'linadi:
// 1) Anonim (main expression functions)
// 2) Named (kam ishlatiladi)

// The first example of Anonymous functions:
const anonymousFunction = function () {
	console.log("Hello! This is a Anonymous Function from South Korea!");
};

anonymousFunction();

// The first example of Arrow Functions (kamon):
const arrowFunction = () => {
	console.log("Hello! This is a Arrow Function from South Korea!");
};

arrowFunction();
// The first example of Auto Invoke Function:
(function () {
	console.log("Hello! This is Auto Invoke Function from North Korea!");
})();

// -------------------------------------------------
// Returning Functions
// Returning functions ikki turga bo'linadi:
// 1) return
// 2) void

// The first example of return function:
function returnFunction() {
	const a = 10;
	const b = 2;

	// // The first returning method:
	// const c = a + b;
	// return c;

	// The second returning method:
	return a + b;
}

const resultOfReturnFunction = returnFunction();

// In order to see the result (12), you have to console the variable of result:
console.log(
	`This is a result of returning function: ${resultOfReturnFunction}`
);

// The first example of void function:
// Void functions hech qanday qiymat qaytarmaydi. Ya'ni funktsiya ichida 'return' ishlatilmaydi!
function voidFunction() {
	const a = 10;
	const b = 2;
	console.log(`This is a result of a and b: ${a + b}`);
}

// We are calling and seeing the result without writing any varibale :)
voidFunction();

// If you console the name of the voidFunction you can see the undefined:
const resultVoidFunction = voidFunction();
console.log("Surely, voidFunction is an undefined: ", resultVoidFunction);

// -----------------------------------------------
// Execution
// Execution funktsiyalari ikki turga bo'linadi:
// 1) Asynchronous
// 2) Synchronous

// Hozirga qadar ko'rib chiqilgan barcha funktsiyalar Synchronous funktsiyalariga misol bo'la oladi.

// ---------------------------------------------------
// Function bilan bog'liq argument va parametr tushunchalari

// Define a function:
function parArgFunction(a, b) {
	return a + b;
}

const resultOfParArgFunction = parArgFunction(10, 2);
console.log("This is a result of par-arg function: ", resultOfParArgFunction);

// Funktsiya tarkibidagi a va b parametr deb atalsa, funktsiyadan tashqarida berilgan aniq qiymatlar, argument deb ataladi.

// ---------------------------------------------
// Function Priority (scope)
// The first example of scope:
function funcPriorityOne(a, b) {
	a = 50;
	return a + b;
}

console.log("Result is equal to 70: ", funcPriorityOne(10, 20));

// Because of the defaul value of the a, the value of argument a is neglected

const fifty = 50;
function funcPriorityTwo(a, b) {
	return a + b;
}

const resultOfFuncPriorityTwo = funcPriorityTwo(10, 20);
console.log("Result is equal to 30: ", resultOfFuncPriorityTwo);

// Now, variable fifty is neglected.

const sixty = 60;
function funcPriorityThree(parametr) {
	return sixty + parametr;
}

const resultOfFuncPriorityThree = funcPriorityThree(20);
console.log("Result is equal to 80: ", resultOfFuncPriorityThree);

// Yuqoridagi funktsiya bo'yicha, return avval o'z doirasidan (scope) qiymat izlaydi, agar topa olmasa tashqaridan oladi.

// Ikkinchi dars shu yerda yakunladi!
// 수고 하셨습니다!
