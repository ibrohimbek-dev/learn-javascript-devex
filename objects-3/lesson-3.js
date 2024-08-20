// 2024-04-23
// Objects

// Darsimiz rejasi:
// 1) Dasturlashda paradigma tushunchasi
// 2) Objectlarni literal usulida qurish
// 3) Objectlarning muhimlilik darajasini tahlil qilish
// 4) Primitiv va Object variablelar tahlili
// 5) Objectlarda referance tushunchasi
// 6) Objectlarni constructor usuli orqali hosil qilamiz

// -------------------------------------------

// Progamming Paradigms:
// 1) Imperative Programming
// 2) Declarative Programming
// 3) Functional Programming
// 4) Object-Oriented Programming (OOP)
// 5) Procedural Programming
// 6) Event-Driven Programming
// 7) Logic Programming
// 8) Structured Programming
// 9) Aspect-Oriented Programming (AOP)
// 10) Concurrent Programming

// Yuqoridagi paradigmalardan eng mashxurlari quyidagilar:
// 1) Functional Programming
// 2) Object Oriented Programming (OOP)

// ------------------------------------------
// Functional Programming juda ham oddiy konsepsiyalarga tayanadi.
// OOP bizga juda ham muhim va murakkab bo'lgan jarayonlarni hal qilib berish uchun ishlatiladigan paradigma hisoblanadi

// OOP 4'ta yirik conceptions mavjud. Bular:
// 1) Abstractions
// 2) Encapsulation
// 3) Inheritance
// 4) Polymorphism

// -------------------------------------------
// Bugungi darsda 'Abstraction' tushunchasini ko'rib chiqamiz!

// Objectlarni literal usulda hosil qilamiz:
const personObj = {
	// properties
	name: "Abraham",
	age: 25,
	nationality: "Uzbek",

	// method:
	greet() {
		console.log("안녕! 잘 지내세요?");
	},
	introduce() {
		console.log(`My name is ${this.name} and I am ${this.age} years old`);
	},
};

// Yuqoridagi object o'z key va value'siga ega.
// Masalan:
// keys are: name, age, nationality
// values are: "Abraham", 25, "Uzbek"

const isName = personObj.name;
const isAge = personObj.age;
const isNationality = personObj.nationality;

console.log(`My name is ${isName} and I am ${isAge}, ${isNationality}`);

// Call the function within the object:
personObj.greet();

// Call the function within the object:
personObj.introduce();

// OOP'da 'object' tushunchasi eng markaziy tushunchalardan hisoblanadi. (Obyektlarga yo'naltirilgan dasturlash paradigmasi)

const pressBtn = document.getElementById("btn");

// Check if the button selected:
console.log(`id of btn is checking: `, pressBtn);

// adEventListener("event", "func");
pressBtn.addEventListener("click", function () {
	alert("You pressed the button :)");
});

// --------------------------------------------------
// Primitive Variable & Object Variable:
// Shu darsimizgacha Primtive Variable'larni ko'rib chiqdik!

// Primitive Variables:
// Primitive Variables'da reference (manzil) bo'lmaydi lekin value bo'ladi

const isNamee = "Abraham"; // String
const isNumber = 30; // Number
const isBoolean = true; // Boolean
const isNull = null; // null
const isUndefined = undefined; // undefined
const isBigInt = 123456789n; // BigInt
const isSymbol = Symbol("unique_key"); // Symbol

// Eng ko'p ishlatiladigan primitive variables:
// String, Numberm Boolean, null

// -------------------------------
// Object Variable:
const personObjVar1 = {
	name: "Abraham",
	age: 25,
	nationality: "Uzbek",
};

// Object Variables'da ham reference ham value bo'ladi
console.log("Name of the first person: ", personObjVar1.name);

const personObjVar2 = personObjVar1;

// Change the name of the person one:
personObjVar2.name = "Fred";

console.log("Name of the second person: ", personObjVar2.name);

// After changing the name of the first person:
console.log("Name of the first person: ", personObjVar1.name);

// Ma'lum bir objectni boshqa bir objectga tenglash bilan biz yangi object yozayotgan hisoblanmaymiz. Aksincha birinchi objectni reference'ni tenglanayotgan keyingi objectga berayotgan bo'lamiz

personObjVar1.name = "Henry";
console.log("Name of the first person:", personObjVar1.name);
console.log("Name of the second person:", personObjVar2.name);

// Yuqoridagi misollarni primitive variable'da ko'ramiz:
const issName = "Abraham";
let primVar = issName;

primVar = "Ibrohimbek";

console.log("unchangable primitive variable: ", issName);

// primitive variable'lar faqatgina qiymatlardan iborat bo'ladi. Shuning uchun ularni o'zgartirib bo'lmaydi

// ------------------------------------------
// Eski objectning keys'dan foydalanib mutlaqo yangi object hosil qilish uchun spread operatoridan foydalanamiz!

// eski mavjud object:
const personObjVar3 = {
	name: "Abraham",
	age: 25,
	nationality: "uzbek",
};

// spreap operator (...) New Reference
const personObjVar4 = { ...personObjVar3 };
personObjVar4.name = "David";

// Does not change anything belons to person 3:
console.log(
	"and Old person's name changed by spread operator:",
	personObjVar3.name
);

// Does change the name of the third object variable:
console.log(
	"A new person's name changed by spread operator:",
	personObjVar4.name
);

// -----------------------------------------------
// Object build via constructor
// Endi biz objectlarni literal usulda emas, constructor usulda hosil qilamiz:

const objConstructor = new Object();
objConstructor.name = "Abraham";
objConstructor.age = 25;
objConstructor.hobby = "Ice Skating";

console.log(
	`My name is ${objConstructor.name}, I am ${objConstructor.age} and I love ${objConstructor.hobby}`
);

const keys = Object.keys(objConstructor);
const values = Object.values(objConstructor);

console.log("Keys of objConstructor:", keys);
console.log("Values of objConstructor:", values);

// Uchinchi dars shu yerda yakunladi!
// 수고 하셨습니다!
