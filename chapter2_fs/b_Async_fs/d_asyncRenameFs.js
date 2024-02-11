const fs = require('fs');
const path = require('path');

fs.rename(path.join(__dirname, 'message.txt'),'renamed.txt', (err, data) => {
    if(err){
        throw err;
    }
    else{
        console.log('file renamed successfully!');
    }
});

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})