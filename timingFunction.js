//Set Time out
//after a fixed amount of time say 5000 millisecond the code executes. 
console.log("First");
setTimeout(()=>{
    console.log("Second");
},0)
console.log("Third");

//Set Immediate 
//will execute after current event loop cycle.

console.log("Ist");
setImmediate(() =>{
    console.log('IInd');
})
console.log("IIIrd");

//set Interval used to execute code multiple times.

//process.nextTick()
