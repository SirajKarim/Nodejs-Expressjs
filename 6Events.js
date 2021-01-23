const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("LoggedMessage", function(arg){
    console.log('Listner CAlled', arg);
});

emitter.emit("LoggedMessage", {id: 1, url: 'http://myUrl'});

setTimeout(() => {
    emitter.emit("LoggedMessage", {id: 1, url: 'http://myUrl'})
},2000)
