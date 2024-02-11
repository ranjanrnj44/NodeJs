// import fs module
const fsPromises = require('fs').promises;
const path = require('path');
const fileOperations = async () => {
    try {
        await fsPromises.readFile(path.join(__dirname, './message.txt'), 'utf8');
        console.log('file read completed');
        await fsPromises.writeFile(path.join(__dirname, 'message.txt'), 'This content is replaced with message.txt since operation is WRITE!');
        console.log('file write done');
        await fsPromises.appendFile(path.join(__dirname, 'message.txt'), '\n\n This content is APPENDED with message.txt since operation is APPEND!');
        console.log('file appended');
        await fsPromises.rename(path.join(__dirname, 'message.txt'), 'renamed.txt');
        console.log('file renamed now');
        await fsPromises.unlink(path.join(__dirname, 'renamed.txt'));
        console.log('file deleted successfully');
    }
    catch(err){
        console.error(err);
    }
};

fileOperations();

// fs.readFile(path.join(__dirname, './message.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log('file read successfully!');
//     fs.writeFile(path.join(__dirname, 'message.txt'), 'This content is replaced with message.txt since operation is WRITE!' , (err, data) => {
//     if(err) throw err;
//     console.log('file written and replaced with new content successfully!');
//     fs.appendFile(path.join(__dirname, 'message.txt'), '\n\n This content is APPENDED with message.txt since operation is APPEND!', (err, data) => {
//     if(err) throw err;
//     console.log('file appended with existing content!');
//     fs.rename(path.join(__dirname, 'message.txt'), 'renamed.txt', (err, data) => {
//         if(err) throw err;
//         console.log('file renamed successfully!');
//     fs.unlink(path.join(__dirname, 'renamed.txt'), (err, data) => {
//          if(err) throw err;
//         console.log('file deleted!');
//     });
//     });
//     });
// });
// });

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
})