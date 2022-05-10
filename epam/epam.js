//Find output:

var obj={}
Object.prototype.__proto__

//Find output
var p = Promise.resolve('foo'); 

async function callback(){ 
    let result = await p; 
    console.log(result); 
} 

callback(); 
console.log(p.then(data => console.log('bar'))); 

//Find output
var b = 10; 
function outer() { 
    console.log(b); // 10  --> undefined 
    b++; 
    console.log(b); // 11  --> NaN
    var b = 3; 
    console.log(b); // Nan  --> 3

} 
outer(); 

// Deepcopy shallow copy
// Map function 
// https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
// promises in javascript
// https://www.geeksforgeeks.org/minimum-swaps-bracket-balancing/
// https://www.geeksforgeeks.org/minimum-swaps-to-balance-the-given-brackets-at-any-index/

//output
function highestPowerOf2(n)
{
    return (n & (~(n - 1)));
}
 
var n = 48;
console.log(highestPowerOf2(n));

//hashing in node js
//middleware
//pm2 in node js
//patch vs put HTTP
//
// npm vs yarn
// Event Emitter in Node.js
// Since node is a single threaded process, how to make use of all CPUs?
// Reactor pattern in Node.js
// All timimgs functions in Node.js

// Interview Questions:
// https://github.com/learning-zone/nodejs-interview-questions.
