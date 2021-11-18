const EventEmitter = require('events');

//Create class

class MyEmitter extends EventEmitter {

}

//Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired'));

// Imit Event
myEmitter.emit('event');
myEmitter.emit('event1');
myEmitter.emit('event');
myEmitter.emit('event');

