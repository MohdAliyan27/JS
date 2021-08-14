// Create an event emitter instance and register a couple of callbacks
const EventEmitter =require('events')
const myEvent = new EventEmitter();

myEvent.on('start', () => {
    console.log('started')
})

myEvent.on('start', (number) => {
    console.log(`started ${number}`)
})

//called only once
myEvent.once('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})


//ifyou called it multiple
myEvent.emit('start', 1, 100)
myEvent.emit('start', 1, 100)
//myEvent.emit('start')
//myEvent.emit('start', 23)
