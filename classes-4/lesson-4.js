// 2024-04-23
// Classlar
// Dars rejasi:
// 1) Nomlash standartlari
// 2) Class o'zi nima
// 3) Classlarning tashkiliy structurasi
// 4) Static metodlar va static propertylar (state)

// ----------------------------------------
// Naming Standarts (nomlash standartlari):
// 1) Camel Case
// 2) Snake Case
// 3) Kebab Case
// 4) Pascal Case

// ---------------------------------
// Camel case:
const yourName = "Ibrohimbek";
function isPerson1() {
	return true;
}

// -------------------------
// Snake case:
const your_name = "김경찬";
function is_person() {
	return true;
}

// ---------------------------
// Kebab case: your-name.ts

// ----------------------------
// Pascal case: class => PersonGroup

// ----------------------------------------------
const person1 = {
	name: "Abraham",
	age: 25,
};

const person2 = {
	name: "David",
	age: 27,
};

const person3 = {
	name: "Robert",
	age: 20,
};

// Biz object'larni yuqoridagi singarin davom ettirishim mumkin, lekin agar 3'ta emas, 100'dan ortiq object ochishga to'g'ri kelib qolsa, u holda bu qiyinchilik olib kelishi mumkin. Juda bir - biriga yaqin bo'lgan object'larni sonini qisqartirish uchun bizga class yordam beradi.

// Classes bu template (shablon) hisoblanadi. Classes bizning ishimizni juda ham soddalashtirib beradi.

// ------------------------------
// Classes:
// Class'lar doim yasalaytgan vaqtida PasCa naming standartidan foydalaniladi

class PersonClass {
	// State
	// Quyidagilarni yozishimiz shart emas
	// name = "";
	// age = 0;

	// static property
	static serialNumber = 65;

	// Constructor
	constructor(personName, personAge) {
		this.name = personName;
		this.age = personAge;
	}

	// Method
	introduce() {
		console.log(`My name is ${this.name} and I am ${this.age}`);
	}

	greet() {
		console.log("Hi! I am from Mars :)");
	}

	static help() {
		console.log("Hi! I am Person class, how can I help you?");
	}
}

const personFour = new PersonClass("Ibrohimbek", 25);
const personFive = new PersonClass("David", 23);
const personSix = new PersonClass("Martin", 20);

// person four
personFour.greet();
personFour.introduce();

// person five
personFive.greet();
personFive.introduce();

// person six
personSix.greet();
personSix.introduce();

// ---------------------------------------
// static method

// Quyida xatolik yuzaga keladi:
// personFour.help()

// Static method'larni ishlatish uchun, object'ni emas, classni o'zini olib yoziladi. Chunki static method'lar class bilan birga yashaydigan method hisoblanadi:
PersonClass.help();

// property'ni chaqirish usuli:
console.log("name: ", personFour.name);

// static propery'ni chaqirish usuli:
const number1 = PersonClass.serialNumber;
console.log("Serial Number: ", number1);

// Yakuniy xulosa, static method'lar yokida static property'lar bizning objectimizga mutlaqo bog'lanmagan bo'ladi

// To'rtinchi dars shu yerda yakunladi!
// 수고 하셨습니다!
