// import fs module
const fs = require('fs');
const path = require('path');
fs.readFileSync(path.join(__dirname, './message.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log('file read successfully!');
    fs.writeFileSync(path.join(__dirname, 'message.txt'), 'This content is replaced with message.txt since operation is WRITE!' , (err, data) => {
    if(err) throw err;
    console.log('file written and replaced with new content successfully!');
    fs.appendFileSync(path.join(__dirname, 'message.txt'), '\n\n This content is APPENDED with message.txt since operation is APPEND!', (err, data) => {
    if(err) throw err;
    console.log('file appended with existing content!');
    fs.renameSync(path.join(__dirname, 'message.txt'), 'renamed.txt', (err, data) => {
        if(err) throw err;
        console.log('file renamed successfully!');
    fs.unlinkSync(path.join(__dirname, 'renamed.txt'), (err, data) => {
         if(err) throw err;
        console.log('file deleted!');
    });
    });
    });
});
});

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})