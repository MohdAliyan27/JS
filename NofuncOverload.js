//In JS Function Overloading doesnot exist.
//And in this if we have two functions with the same name the last declared function will remain and things will work on that basis.

function funcONE(x,y,z) {
    return x*y*z;
 }
 
 function funcONE(x,y) {
    return x+y;
 }
//  function funcONE(z) {
//     return z;
//  }

// prints 5, not 30
console.log(funcONE(5,1,4));

//EOF :)
