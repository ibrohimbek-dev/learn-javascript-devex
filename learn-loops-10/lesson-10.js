// 20204-05-02
// Learn Loops

// Darsimiz rejasi:
// 1) While loop'larni ko'rib chiqamiz
// 2) For loop'larni ko'rib chiqamiz

// while loop'ga misol:
let count1 = 0;

// Quyidagi loop'da while toki count 10'gacha bo'lguncha ishlaydi
while (count1 <= 10) {
	console.log("first while loop:", count1);
	//   count1 += 1;
	//   count1 = count1 + 1
	count1++;
}

// Birinchi yuqoridagi satrlar bajarilib keyin undan keyingi satrlar bajariladi:
console.log("----------------------------------------------------------------");
console.log("This code executed when while loop is finished!");
console.log("----------------------------------------------------------------");

// for loop'ga misol:
// Quyidagi for loop'da 0'dan 10'gacha qiymat qaytariladi
for (let i = 0; i <= 10; i++) {
	console.log("first increasing for loop:", i);
}

console.log("----------------------------------------------------------------");
console.log("This code executed when for loop is finished!");
console.log("----------------------------------------------------------------");

// Agar bir, teskari ko'rinishda ya'ni 10'dan 0'gacha qiymat qaytarmoqchi bo'lsak quyidagi ko'rinishda yozamiz:

for (let j = 10; j >= 0; j--) {
	console.log("second decreasing for loop: " + j);
}

console.log("----------------------------------------------------------------");
// ------------------------------------------------------------------------------------------------
// Iteration method darslarida biz turli xil method'larni ko'rib o'tgan edik:
// map, filter etc.

const fruits1 = ["apple", "banana", "lemon", "cherry"];
console.log("This array iterated with map method:");

fruits1.map((fruit, index) => {
	console.log(`${index}: ${fruit}`);
});

console.log("----------------------------------------------------");
// Yuqoridagi array for methodi orqalik iteratsiya qilamiz:
console.log("This array iterated with for loop:");
for (const fruit of fruits1) {
	console.log(fruit);
}

// of => value
// in => index

console.log("----------------------------------------------------");
// Yuqoridagi array'ni value'sini emas endi key'larini olamiz:
for (const index in fruits1) {
	console.log(index);
}

// Endi bizga ham index ham value kerak bo'lsa u holda, array'larning index'iga murojaat qilish orqalik ularni ham index'iga ham value'siga ega bo'lamiz:
console.log("----------------------------------------------------");
for (let index = 0; index < fruits1.length; index++) {
	console.log(`${index}: ${fruits1[index]}`);
}

console.log("----------------------------------------------------");
// Yuqoridagi array'ni while loop orqalik iteratsiya qilamiz:
let index = 0;
while (index < fruits1.length) {
	console.log(`${index}: ${fruits1[index]}`);
	index++;
}

// 10 - dars shu yerda yakunlandi
// 수고 하셨습니다!
