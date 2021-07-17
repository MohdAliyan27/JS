const arr1=[1,2,3];
const arr2=[4,5, ...arr1];
//1) add element of one array to other array.
console.log(arr2);

//2) pass element of array in argument of a function
function sum(a,b,c){
    return a+b+c;
}

let arr3=[1,2,3];
console.log(sum(...arr3));

//3) Copy array
var arr4=[2,4,6]
//var arr5=arr4.slice();
//var arr5=arr4;
var arr5=[...arr4];
arr5.push(5,6);
//arr5.pop();
console.log(arr4);
console.log(arr5);

// 4) concat Arrays
var arr6=[1,3,5]
var arr7 = arr6.concat(arr5);
var arr8 = [...arr6, ...arr4,7,8];
console.log(arr7);
console.log(arr8);

//------------------IMPORTANT-----------------------------
//Rest operator
function multiply(multiplier,...theArgs){
    return theArgs.map(function(Val){
        return multiplier * Val;
    })
}

console.log(multiply(2,3,4,5,6));