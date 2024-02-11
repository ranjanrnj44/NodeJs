// console.log("Hello Nodejs!");
// console.log(global);

/* CONSUMING Math js code here */
const math = require('./d_math.js');
const {add, sub, div, mul, name} = require('./d_math.js'); // we can also destructure it

console.log(add(4,3));
console.log(sub(12,3));
console.log('name', name);
console.log(div(6,3));
console.log(mul(3,3));