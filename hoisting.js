// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
//str='Node.js'
//console.log(`Hello World ${str} welcome here.`);
// var str;

x=2;
console.log(x)
var x;

carName = "Volvo";
console.log(carName) // reference error
let carName;

var x = 5; // Initialize x
console.log(x +" "+ y)  // Display x and y  
var y = 7; // Initialize y here
//SIMILAR to show hoisting
var x=5;
var y;
console.log(x +" "+ y)  // Display x and y  as undefined 
y = 7;
