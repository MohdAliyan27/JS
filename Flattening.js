//Flattening Array two methods:

//Method 1
// if we have nested upto 3 levels
var arr1= [ 1, 2, 3, [4, 5, [6, 7, [8], 9, 10], 11], 12, 13, 14, 15,[16,[17,18,19],20],21,22,23,24];
console.log(arr1.flat(3));
//End of function

//Method 2
// . Concat.apply function
var arr1= [ 1, 2, 3, [4, 5, [6, 7, [8], 9, 10], 11], 12, 13, 14, 15,[16,[17,18,19],20],21,22,23,24];
let first = [].concat.apply([], arr1);
let second = [].concat.apply([], first);
let flatArray = [].concat.apply([], second);
console.log(flatArray);
