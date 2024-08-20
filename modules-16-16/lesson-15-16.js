// ------------------------------------------------------------------------------------------------
// Module package CORE:
// file system is imported:
const fs = require("fs");
// set time out:
setTimeout(() => {
	console.log("--------------------------------");
	console.log("Set Time Out ishga tushdi!");
	console.log("--------------------------------");
}, 5000);

// set interval:
setInterval(() => {
	console.log("Set Interval ishga tushdi!");
}, 1000);

// File system:
// Get text data:
const oldTextData = fs.readFileSync("./input.txt", "utf8");
console.log(`This is old txt file rendered by fs: ${oldTextData}`);

// Write text data:
console.log("--------------------------------");
fs.writeFileSync("./input.txt", `${oldTextData} \n\t\t by Ibrohimbek`);
const new_data = fs.readFileSync("./input.txt", "utf8");

console.log(`This is new txt file rendered by fs: ${new_data}`);

// ------------------------------------------------------------------------------------------------
// Module package EXTERNAL:
const moment = require("moment");
setInterval(() => {
	const time = moment().format("YYYY-MM-DD HH:mm:ss");
	console.log(`Time by moment: ${time}`);
}, 5000);
