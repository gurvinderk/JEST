const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const isPalindrome = (string) => string == string.split('').reverse().join('');
module.exports = { add, mul, sub, div,isPalindrome };