const fs = require('fs');

fs.mkdir("./newDir", (err) => {
    if (err) throw err;
    console.log("folder created");
});

if(!fs.existsSync("./max")){
    fs.mkdir("./max", (err) => {
    if (err) throw err;
    console.log("folder created");
    })
};

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
});