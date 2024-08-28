// console.log("Hello Nodejs!");
// console.log(global);

/* CONSUMING Math js code here */
const math = require('./d_math');
console.log(math.add(6,3));
console.log('name', math.name);
console.log('div', math.div(12,4)); // not working
console.log('mul', math.mul(3,5)); // not working

const {add, sub, myName} = require('./d_math.js'); // we can also destructure it
console.log(add(4,3));
console.log(sub(12,3));
console.log('myName', myName);
// console.log(div(6,3));
// console.log(mul(3,3));