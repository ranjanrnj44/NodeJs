const fs = require('fs');
const path = require('path');
const writeMessage = 'This is a new ASYNC message, it will be written and replace the text completely!.';

fs.writeFile(path.join(__dirname, 'message.txt'), writeMessage, (err, data) => {
    if(err){
        throw err;
    }
    else{
        console.log('file written successfully to the message.txt');
    }
});

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})