const add = (a, b) => a+b;
const sub = (a, b) => a-b;
exports.mul = (a, b) => a*b;
exports.div = (a, b) => a/b;
const myName = "Ranjan";
exports.name = myName;

// module exports ===== or we can also use direct exports.add = (a,b) => a+b;
module.exports = {add, sub};