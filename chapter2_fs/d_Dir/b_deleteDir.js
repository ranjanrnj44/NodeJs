const fs = require('fs');

if(!fs.existsSync("./delDir")){
    fs.mkdir("./delDir", (err) => {
    if (err) throw err;
    console.log("delDir folder created");
    })
}
    fs.rmdir("./delDir", (err) => {
        if(err) throw err;
        console.log("Deleted the directory");
    })

// exit on uncaught exception errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught exception : ${err}`);
    process.exit(1);
});