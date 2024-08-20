// 2024-04-26
// Arraylar

// Darsimiz rejasi:
// 1) Array va uning xususiyatlari
// 2) Arraylardagi index va value tushunchalari
// 3) Arraylarning state propertylari
// 4) Arraylardagi odatiy metodlar

// Arraylarni ikki hil usulda xosil qilamiz:
// 1) Literal
// 2) Constructor

// Literal usuliga misol:
const listArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("list Array 1:", listArr1);

// Constructor usuliga misol:
const listArr2 = new Array("apple", "cherry", "banana");
console.log("list Array 2:", listArr2);

// Arraylardagi index va value tushunchalari:
const fruitsArr1 = ["apple", "cherry", "banana", "melon", "watermelon"];
console.log("Fruits Array 1: ", fruitsArr1);

// Yuqoridagi Array'ning value va indexlari quyidagilar:
// apple, cherry, banana, melon, watermelon
//   0,     1,      2,      3,      4

// Array tarkibidan birinchi value'ni olish uning 0'chi indexiga murojaat qilamiz:
const indexOfZero = fruitsArr1[0];
console.log("Index of Zero is:", indexOfZero);

// JavaScript'da array tarkibini sonlar yoki string, boolean, null'dan shakllantira olamiz
const listArr3 = [
	"a",
	"b",
	"c",
	"d",
	"e",
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	true,
	null,
	undefined,
	false,
];
console.log("listArr3:", listArr3);

// Array tarkibidagi qiymatni o'zgartirish:
const changeArr1 = ["apple", "banana", "cherry"];

console.log("Before changing the changeArr1:", changeArr1);

changeArr1[0] = "melon";

console.log("After changing the changeArr1:", changeArr1);

changeArr1[3] = "lemon";
console.log("After adding a value to changeArr1:", changeArr1);

// -----------------------------
// Properties: length
// Commonly we use these regula methods of array:
// push(), pop(), unshift(), shift(), sort(), reverse(), includes(), indexOf(), toString(), join(), slice(), splice(), concat()

const lengthArr1 = ["a", "b", "c", "d", "e", "f", "g"];
const checkLengthArr1 = lengthArr1.length;
console.log("The length of the lengthArr1 array is:", checkLengthArr1);

// ----------------------------------------------------
// Arrayning biz uchun taxlab bergan built-in methodlari:
// push() metodi (oxiridan qo'shadi):

const pushArr1 = ["Avaz", "John", "Olim"];

console.log("Before push():", pushArr1);

pushArr1.push("Hotam");

console.log("After push():", pushArr1);

// unshift() metodi (boshidan qo'shadi):
const unshiftArr1 = ["Cow", "Sheep", "Fish", "Bird"];
console.log("Before unshift():", unshiftArr1);

unshiftArr1.unshift("Lion");
console.log("After unshift():", unshiftArr1);

// pop() metodi (oxiridan qirqib oladi):
const popArr1 = ["one", "two", "three", "four", "five", "six"];
console.log("Before pop():", popArr1);

const popped = popArr1.pop();

console.log("After pop():", popArr1);
console.log("The popped the value of popArr1:", popped);

// shift() metodi (boshidan qiriqib oladi):
const shiftArr1 = ["lapotki", "bolta", "tesha", "arra"];
console.log("Before shift():", shiftArr1);

const shifted = shiftArr1.shift();

console.log("After shift():", shiftArr1);
console.log("After shifted the value of shiftArr1:", shifted);

// sort() metodi (numeric & alphabetical bo'yicha tartiblab beradi):
// sort() metodi qiymatlarni qiymatida qarab sortlamaydi!

// Raqamlar bo'yicha tartib:
// const sortArr1 = [1, 4, 1, 2, 33, 105, 9, 0, 3, 2, 3, 40. 99]
const sortArrNum1 = [1, 4, 1, 2, 9, 0, 3, 2, 3, 4];
console.log("Before sort():", sortArrNum1);

sortArrNum1.sort();
console.log("After sort():", sortArrNum1);

// Alfabet bo'yicha tartib:
const sortArrAlp1 = ["cherry", "apple", "banana"];
console.log("Before sort():", sortArrAlp1);

sortArrAlp1.sort();

console.log("After sort():", sortArrAlp1);

// reverse() metodi (tartib bo'yicha teskariga o'girib beradi):
// Tartib raqami bo'yicha:
const reverseArrNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("Before reverse():", reverseArrNum1);

reverseArrNum1.reverse();

console.log("After reverse():", reverseArrNum1);

// Alfabet bo'yicha:
const reverseArrAlp1 = ["cherry", "apple", "banana"];
console.log("Before reverse():", reverseArrAlp1);

reverseArrAlp1.reverse();

console.log("After reverse():", reverseArrAlp1);

// includes() metodi (array tarkibidan qidiruvni amalga oshiradi):
const includesArr1 = ["gilos", "shaftoli", "o'rik", "olcha", "behi", "qovun"];
const included = includesArr1.includes("gilos"); // gilos bormi?
console.log("Izlanayotgan meva bormi?", included);

// indexOf() metodi (true bo'lsa index raqami yokida -1 qiymat qaytadi):
const indexOfArr1 = ["bmw", "mercedes benz", "volskwagen", "toyota"];
const indexedOf = indexOfArr1.indexOf("bmw");
console.log("Izlanayotgan brand bormi?", indexedOf);

// includes() va index0f() muted hisoblanmaydi

// toString() metodi (arrayni stringga aylantirib beradi):
const toStringArr1 = ["a", "ss", "al", "om", "u", " ", "al", "ey", "ku", "m!"];
console.log("Before toString(): ", toStringArr1);

const stringed = toStringArr1.toString();
console.log("After toString(): ", stringed);

// check the type of the stringed:
console.log("Type of the stringed is: ", typeof stringed);

// join() metodi (birlashtirib beradi):
const joinArr1 = ["this", "is", "join", "(", ")", "method", "!"];
console.log("Before join():", joinArr1);

const joined = joinArr1.join();
console.log("Joined:", joined);

// remove the comma between joined sentences:
const greetingArr1 = ["a", "ss", "al", "om", "u", " ", "al", "ey", "ku", "m!"];
const greeted = greetingArr1.join("");
console.log("Comma is removed: ", greeted);

// slice() (nth index'dan nth'gacha kesib beradi):
const sliceStr1 = ["Ibrohimbek", "Martin"];
const slicedStr = sliceStr1.slice(1, 2).toString();

console.log(`CEO of the devex is ${slicedStr}`);

// splice() (nth'dan nth'gacha delete qilib beradi):
// splice() muted hisoblanadi ya'ni array'ni o'zgaritirib yuboradi

const spliceArr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("Before splice():", spliceArr1);

spliceArr1.splice(0, spliceArr1.length - 1);
console.log(`I've learned Array from the ${spliceArr1}th lesson`);

// splice() third arguments. O'chirilayotgan joyga yangi qiymatlarni ham kiritish mumkin:
const spliceArr2 = [1, 2, 3, 4, 5, 6, 7];
spliceArr2.splice(0, spliceArr2.length, 8);
console.log(`Next ${spliceArr2}th lesson is Iteration of Array Methods`);

// splice() third argument yana bir misol:
const spliceArr3 = ["Jonibek", "Martin"];
spliceArr3.splice(0, spliceArr3.length - 2);
console.log(
	`CEO of devex and asisstant mentor are ${spliceArr3.join(" and ")}`
);

// splice() add more arguments:
const spliceArr4 = ["Oshqovoqbek", "Teshavoy", "Sotvoldi", "Brian"];
spliceArr4.splice(
	0,
	3,
	"Daniel",
	"John",
	"DIN",
	"Max",
	"David",
	"Jackson",
	"Albert",
	"James",
	"Robert",
	"Joseph",
	"Ethan"
);
console.log(`Students of MIT 14 are ${spliceArr4.sort().join(", ")}`);

// concat() metodi (arraylarni birlashtiradi):
const concatArr1 = [1, 2, 3];
const concatArr2 = [4, 5, 6];

const concatted = concatArr1.concat(concatArr2);
console.log("Two arrays are concatted:", concatted);

// ----------------------------------------------

// Mutable methods are: (arrayni o'zgartirib yuboradi)
// push(), pop(), unshift(), shift(), sort(), reverse(), splice()

// Immutable methods are: (arrayni o'zgartirib yubormaydi)
// includes(), indexOf(), toString(), join(), slice(), concat()

// Yettinchi dars shu yerda yakunladi!
// 수고 하셨습니다!
