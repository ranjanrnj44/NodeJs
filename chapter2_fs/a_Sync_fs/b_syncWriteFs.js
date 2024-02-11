const fs = require('fs');
const path = require('path');
const writeThisText = 'This content is replaced with message.txt since operation is WRITE!';

const writeContent = fs.writeFileSync(path.join(__dirname, 'message.txt'), writeThisText);
console.log('content modified successfully!, check below status');
console.log(fs.readFileSync(path.join(__dirname, 'message.txt'), 'utf-8'));

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})