//  2024-04-29
// Opertaorlar va Conditionlar

// Darsimiz rejasi:
// 1) Operatorlarni o'rganamiz
// 2) Conditionlarga batafsil to'xtalamiz

// Operatorlar quyidagilardan iborat:
// ==, !==, ===, !==, <, <=, >, >=, &&, ||, !, !!
// Ternary operator
// Nullish operator

// Quyidagi misolda biz 'a'nig qiymati 'b'ga teng ekanligini aniqlaymiz. Lekin natija false qaytadi:
const a1 = 1;
const b1 = 4;

console.log("case one: ", a1 == b1);

// Agar biz tenglash operatoridan foydalangan holda, true natijani olmoqchi bo'lsak, 'a' va 'b'ning qiymatini tenglashimiz kerak bo'ladi:
// Misol:
const a2 = 4; // number
const b2 = "4"; // string

console.log("case two: ", a2 == b2);

// Yuqoridagi misol orqalik biz faqatgina qiymatlarni solishtirdik, turlarni (type) emas
// Agar turlari bilan solishtiradigan bo'lsak ikkita uchta tenglash belgisidan foydalanamiz
// Shunda yuqoridagi misol bizga 'false' qaytaradi.

const a3 = 4; // number
const b3 = "4"; // string

console.log("case three: ", a3 === b3);

// Quyidagi misolda teng emaslik operatorini qo'llaymiz
const a4 = 4;
const b4 = 1;
console.log("case four: ", a4 != b4); // teng emas: !==

// Katta kichik operatorlari
// Quyida ma'lum bir o'zgaruvchining qiymatini ma'lum boshqa o'zgaruvchining qiymatidan katta yoki aksincha ekanligini tekshiramiz:

const a5 = 5;
const b5 = 4;

console.log("case five: ", a5 > b5); // a5 kattatimi b5'dan: true

// Mana shu holatda katta & kichik & teng kichik & teng katta taqqoslash operatorlarini ishlatamiz

// Quyida 'va' yokida 'ikkisi ham' ma'nosini beruvchi operatorni ko'rib chiqamiz: &&

// Quyidagi misolda, 'a6' hamda 'b6' 0'dan kattami shartini ko'rib chiqamiz:
const a6 = 4;
const b6 = 5;

const result1 = a6 > 0 && b6 > 0; // ikkovi ham noldan katta: true
console.log(`result first is: ${result1}`);

// Yuqoridagi misolni 'yoki' yokida 'ikkisidan biri' operatori bilan ko'rib chiqamiz: ||
const a7 = 0;
const b7 = 6;
const result2 = a7 > 0 || b7 > 0; // ikkisidan biri true'mi?: true
console.log(`result second is: ${result2}`);

// Agar yuqoridagi 'yoki' (||) operatorini 'va' (&&) operatori bilan yozganimizda edi, natija true emas, aksincha false qaytgan bo'lar edi

// Quyida ikkita undov belgili '!!' double-bang operatorni ko'rib chiqamiz

// double-bang operatorini bilishdan oldin, biz dasturlashdagi 'truthy' va 'falsy' qiymatlarni bilib olishimiz kerak

// truthy: true, 5, "hello", etc. => true
// falsy: false, null, 0, '', undefined etc. => false

// double-bang operatori, biz qo'yayotgan shart agar truthy qiymatga ega bo'lsa, true, aksincha bo'lsa, false natija qaytarib beradi

// Quyidagi double-bang misolida '5' soni truthy qiymat bo'lganligi uchun, double-bang operatori bizga true qiymat qaytaradi:
const a8 = 5;
const result3 = !!a8;
console.log(`third result is: ${result3}`);

// Quyidagi holatda esa, double-bang operatori false qiymat qaytaradi:
const a9 = null;
const result4 = !!a9;
console.log(`fourth result is ${result4}`);

// Quyidagi logical NOT operatorini ko'rib chiqamiz. Ushbu operatorni, double-bang operatoridan farqi,
// double-bang operatorida qiymat falsy bo'lsa false yokida truthy bo'lsa true qiymat qaytarsa
// logical NOT operatorida, qiymat truthy bo'lsa false, falsy bo'lsa true qiymat qaytaradi

// Masalan ushbu misolda, 'a10'ning qiymati truthy, lekin natija false qaytadi:
// falsy => true
// truthy => false

const a10 = 5;
const result5 = !a10;
console.log(`fifth result is: ${result5}`);

// -----------------------------------------------------------
// Ternary operator: ? :

const ternaryA1 = 10;
const ternaryB1 =
	ternaryA1 > 0 ? `${ternaryA1} katta 0'dan` : `${ternaryA1} kichik 0'dan`;
console.log(`ternary first result is: ${ternaryB1}`);

// -----------------------------------------------------------
// Nullish operator: ?? (null or not)

const nullishA1 = "not null";
const nulishB1 = nullishA1 ?? 100;

console.log(`nullish first result is: ${nulishB1}`);

// -----------------------------------------------------------
console.log("----------------------------------------------------------------");
// Yuqorida o'tgan operatorlardan foydalangan holda, conditionlarni ko'rib chiqamiz:

// 'if' va 'switch' conditions

const apple1 = 100;
if (apple1 >= 0 && apple1 < 50) {
	console.log("Your apples equal to or more than 0 and less than 50");
}

if (apple1 >= 50 && apple1 < 100) {
	console.log("Your apples equal to or more than 50 and less than 100");
}

if (apple1 >= 100) {
	console.log("Your apples equal to or more than 100");
}

// Biz yuqoridagi holatlarni faqatgin 'if' operatoridan foydalangan holda emas, aksincha, 'else-if' operatoridan ham foydalangan holda yozishimiz mumkin:
console.log("--------------------------");
const apple2 = 100;
if (apple2 >= 0 && apple2 < 50) {
	console.log("Your appless equal to or more than 0 and less than 50");
} else if (apple2 >= 50 && apple2 < 100) {
	console.log("Your apples equal to or more than 50 and less than 100");
} else if (apple2 >= 100) {
	console.log("Your apples equal to or more than 100");
}

// Yoqoridagi kodimiz bexato ishlasada, samaradorligi past hisoblanadi.
// Yuqoridagi kodlarni quyidagi ko'rinishda yozishimiz mumkin:
// Yuqoridan pastga qarab shart berishni boshlaymiz:

const apple3 = 100;

if (apple3 >= 100) {
	console.log("Your apples equal to or more than 100");
} else if (apple3 >= 50) {
	console.log("Your apples equal to or more than 50");
} else {
	console.log("Your apples less than 50");
}

// ------------------------------------------------------------
console.log("--------------------------------");
// switch() case: condition operatori
// Switch() case: odatda string holatda bo'ladi

const grade1 = "A";

switch (grade1) {
	case "A":
		console.log("Your grade is best!");
		break;
	case "B":
		console.log("Your grade is good!");
		break;
	case "C":
		console.log("Your grade is bad!");
		break;
	default:
		console.log("The grade is not registered!");
		break;
}

// 9 - dars shu yerda yakunlandi
// 수고 하셨습니다!
