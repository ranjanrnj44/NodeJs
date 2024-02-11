const fs = require('fs');
const path = require('path');
const renameFileNameAs = 'renamed.txt';

fs.renameSync(path.join(__dirname, 'message.txt'), renameFileNameAs);
console.log('content renamed successfully!');
console.log(path.parse(__filename));

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})