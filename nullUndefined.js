let testVar=NaN;
console.log(testVar); 
console.log(typeof testVar); 

if(null === undefined){
    console.log("A");
} 
if(null == undefined){
    console.log("B");
} 
if(null === null){
    console.log("C");
} 

var q=null;
console.log(q);
q=5;
console.log(q);// ReferenceError
var w;
console.log(w);
w = 543;
console.log(w);// 'value'