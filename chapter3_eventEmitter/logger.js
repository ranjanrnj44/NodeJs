const { format } = require('date-fns');
const {v4: uuid} = require('uuid');
// fs - for sync operations
const fs = require('fs');
// fs Promise - for Async operations
const fsPromises = require('fs').promises;
const path = require('path');

console.log(format(new Date(), 'MMyyyy\ttHH:mm:ss'));
console.log(uuid());

// logging events
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'MMyyyy\ttHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log('logItem', logItem);
    // register the log for dateTime
    try{
        if(!fs.existsSync('logs')){
        await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    // below is DIR -> logs/loggerEvent.txt (here our logItem message will be logged every time)
        await fsPromises.appendFile(path.join(__dirname, "logs", "loggerEvent.txt"), logItem);
    }
    catch(err){
        console.error(err);
    }
};

// logEvents("Logged event");
module.exports = logEvents;