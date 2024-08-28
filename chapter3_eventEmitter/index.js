const logEvents = require('./logger');

// NOTE: This below line can't be used in function call directly, it's event, it can only be emitted with creating new instance
//logEvents('Logger');

// Event Emitter
const EventEmitter = require('events');

// create instant class of EventEmitter
class MyEventEmitter extends EventEmitter{};

const myLogEvent = new MyEventEmitter();
// here -> it will listen for events:: logEvent, once emitted it listens, once listened we call function and pass it as args
myLogEvent.on('logEvent', (eventMessage) => {
    logEvents(eventMessage);
});
myLogEvent.emit('logEvent', 'Logging Events!');