const fs = require('fs');
const path = require('path');
const appendThisText = '\n\n This content is APPENDED with message.txt since operation is APPEND!';

const appendContent = fs.appendFileSync(path.join(__dirname, 'message.txt'), appendThisText);
console.log('content appended successfully!');
console.log(fs.readFileSync(path.join(__dirname, 'message.txt'), 'utf-8'));

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})