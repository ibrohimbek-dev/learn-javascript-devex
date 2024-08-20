// 2024-04-29
// Arraylarning iteration metodlari

// Darsimiz rejasi:
// 1) Arraylarning asosiy Iteration methodlari: forEach, map va filter
// 2) Arrayling yordamchi Iteration methodlari: reduce, some va every

// forEach, map, filter => immutable

// map() uchun misol (short-hand):
const list1 = [1, 4, 5, 3, 7, 8];
const newList1 = list1.map((number) => number * number);
console.log("Multiplied numbers of first list: ", newList1);

// map() uchun misol (normal):
const list2 = [1, 4, 5, 3, 7, 8];
const newList2 = list2.map((number, index) => {
	console.log(`${index} => ${number}`);
	return number * 10;
});

console.log("Multiplied numbers of second list: ", newList2);

// map() with condition:
const list3 = [1, 2, 3, 4, 5, 6, 7];
const newList3 = list3.map((number, index) => {
	return number === 4 ? number : null;
});

console.log(`Only number of four and null with map():`, newList3);

// Yuqoridagi kodda map() bizga true qiymatlar bilan birga false qiymatlarni ham qaytarib beradi.
// Agar bizga faqat true qiymat (4) kerak bo'lsa u holda filter() methodidan foydalanamiz

// filter()
const list4 = [1, 2, 3, 4, 5, 6];
const newList4 = list4.filter((number, index) => {
	return number === 4 ? number : null;
});
console.log(`Only number of four with filter():`, newList4);

// Yordamchi iteration metodlari:
// reduce, some, every

// reduce'ga misol:
const numbers1 = [1, 2, 3, 4, 5, 6];

const result1 = numbers1.reduce((total, curValue, curIndex) => {
	console.log(`${curIndex} - ${curValue}`);
	console.log("Total: ", total);

	return total + curValue;
}, 0); // initial index: 0

console.log(`Result of ${result1}`);
console.log("---------------------------------------------");

// some'ga misol:
// Agar biz izlagan qiymat sum tarkibida bo'lsa natija true yokida false qaytadi:
// Ya'nida hech bo'lmaganda bittasi
const sumNumbers = [1, 2, 3, 4, 5, 6, 7];

const resultSum = sumNumbers.some((number, index) => {
	return number === 55;
});

console.log(`Result of sum: ${resultSum}`);

// every'ga misol:
// every har bir qiymat true'ga teng bo'lishi kerak, shundagina true qiymat qaytaradi
// every sum'ni aksi hisoblanadi

const everyNumbers = [1, 2, 3, 4, 5, 6, 7];
const resultEvery = everyNumbers.every((number, index) => {
	return number >= 1;
});

console.log(`Result of every: ${resultEvery}`);

// 8 - dars shu yerda yakunlandi
// 수고 하셨습니다!
