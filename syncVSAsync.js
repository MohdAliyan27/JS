//Synchronous Execution

console.log("------------------Synchronous Execution Starts--------------------");
console.log("First");
console.log("Second");
console.log("Third");


// Asynchronous Execution

console.log("------------------Asynchronous Execution Starts--------------------");
console.log("First");
setTimeout(() => {
    console.log("Second");
},5000);
console.log("Third");
