// 2024-05-02
// Over View (O'tilgan darslarni ko'rib chiqish)

// Darsimiz rejasi:
// 1) Hozirga qadar olingan bilimlarni umumlashtiramiz
// 2) Browserning turli xil xotiralari va backendga bo'lgan zaruriyatni ko'rib chiqamiz
// 3) Ishni nimadan boshlash muhomasini ko'rib chiqamiz

// Ushbu darsda html, js, css fayllari bilan ham ishlanadi

// ----------------------------------------------------
const form = document.querySelector("#form1");
const input = document.querySelector("#input1");
const list = document.querySelector(".list");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const newItem = input.value;
	createPurchase(newItem);
	input.value = "";
	input.focus();
});

function createPurchase(item) {
	const newHTML = ` <li class="list-item">
        ${item}
        <button onclick="deletePurchase(this)">Delete</button>
      </li>`;
	list.insertAdjacentHTML("beforeend", newHTML);
}

function deletePurchase(btn) {
	btn.parentElement.remove();
}

// Yuqoridagi conception'ga tayangan holda kod yozadigan bo'lsak, ular browser'da saqlanib qolmaydi
// Web page reload bo'lganidan so'ng, item'lar o'chib ketadi
// Muammoni oldini olish uchun biz ma'lumotlarni browserning quyidagi xotiralariga saqlashimiz mumkin:
// Local Stogare, Session Storage, Cookies, Cache

// Lekin browserning xotirasiga saqalashni o'zi bilangina muammoni yechib qo'ya olmaymiz
// Sababi ma'lumot faqatgina bizning browserimizda saqlanib qoladi xolos

// Demak biz ma'lumotlarni browserning ixtiyoriy xotirasiga saqlay olmas ekanmiz
// Muammoni esa back-end orqalik xal qilamiz

// Soddaroq qilgandan input orqalik biz kiritgan ma'lumot back-end orqalik database'ga yoziladi
// Va biz back-end'agi ma'lumtoni front-end orqalik chaqarib namoyon qila olamiz
