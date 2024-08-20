// -------------------------------------------------------------------------------
// Example One
// imported from a anohter js file:
// calculation-home.js:
const calculation = require("./calculation");

const num1 = 5;
const num2 = 5;

const result1 = calculation.multiple(num1, num2);
const result2 = calculation.divide(num1, num2);
const result3 = calculation.minus(num1, num2);
const result4 = calculation.plus(num1, num2);

console.log(`multiple: ${num1} * ${num2} = ${result1}`);
console.log(`divide: ${num1} / ${num2} = ${result2}`);
console.log(`minus: ${num1} - ${num2} = ${result3}`);
console.log(`plus: ${num1} + ${num2} = ${result4}`);
