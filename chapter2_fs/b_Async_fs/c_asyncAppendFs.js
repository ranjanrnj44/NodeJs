const fs = require('fs');
const path = require('path');
const appendContentMessage = '\n\n This is the APPENDED TEXT content!.';

fs.appendFile(path.join(__dirname, 'message.txt'), appendContentMessage, (err, data) => {
    if(err){
        throw err;
    }
    else{
        console.log('appended some more text to the same file...');
    }
});

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})