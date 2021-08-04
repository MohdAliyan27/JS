// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
str='Node.js'
console.log(`Hello World ${str} welcome here.`);
var str;

x=2;
console.log(x)
var x;

// carName = "Volvo";
// console.log(carName) // reference error
// let carName;

var x = 5; // Initialize x
console.log(x +" "+ y)  // Display x and y  
var y = 7; // Initialize y here
//SIMILAR to show hoisting
var w=5;
var q;
console.log(w +" "+ q)  // Display x and y  as undefined 
q = 7;
