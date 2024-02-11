const fs = require('fs');
const path = require('path');

// readFileStream operation
const rFile = fs.createReadStream(path.join(__dirname, './readFile.txt'), 'utf-8');
// writeFileStream operation
const wFile = fs.createWriteStream(path.join(__dirname, './newWriteFile.txt'));

// performing operations using listeners
// rFile.on('data', chunkData => {
//     wFile.write(chunkData);
// });

// or 

rFile.pipe(wFile); //  this is the recommended way to do.

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
});