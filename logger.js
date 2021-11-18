const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg});
    }

    register(msg) {
        this.on(msg, (data) => console.log('Called Listener: ', data));
    }
}

//module.exports = Logger;
const logger = new Logger();
logger.register('message');
logger.log('Hello World');a