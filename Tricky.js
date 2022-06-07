//Empty the array

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
//Approach 1
arrayList = [];

//Approach 2
arrayList.length = 0;

//Approach 3

arrayList.splice(0, arrayList.length);

THEORY and Concepts
//Que 2
//Difference between undefined and not defined?
//ANS
var x; // declaring x
console.log(x); //output: undefined
console.log(y);  //output : not defined
