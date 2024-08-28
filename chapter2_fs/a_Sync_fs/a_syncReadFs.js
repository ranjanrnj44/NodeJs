// import fs module
const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, './message.txt'), 'utf8');
console.log(content);
// or
console.log(fs.readFileSync('./message.txt', 'utf-8'));

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})


