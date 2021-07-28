//Set Time out

console.log("First");
setTimeout(()=>{
    console.log("Second");
},0)
console.log("Third");

//Set Immediate

console.log("Ist");
setImmediate(() =>{
    console.log('IInd');
})
console.log("IIIrd");
