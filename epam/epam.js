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
