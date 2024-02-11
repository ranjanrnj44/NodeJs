const fs = require('fs');
const path = require('path');

fs.unlinkSync(path.join(__dirname, 'renamed.txt'));
console.log('file DELETED successfully!');

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
});