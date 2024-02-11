const fs = require('fs');
const path = require('path');
const fileMessage = path.join(__dirname, './welcome.txt');

fs.readFile(fileMessage, 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});

fs.readFile(path.join(__dirname, '..', './a_all_about_fs.txt'), 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});

fs.readFile(path.join(__dirname, './message.txt'), 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})