//Currying

//Type 1 currying by bind method
let multiply1=function(x,y){
    return x*y;
}

let multByTwo1 = multiply1.bind(this,2);
console.log(multByTwo1(6));

// Type 2 starts from here.

function volume(length) {
      return (width) => {
         return (height) => {
            return height * width * length;
         }
      }
}

let vol= volume(1)(2)(4); //Extra parameters are ignored and less result in error.
console.log(vol);


//Type 2 By Function Closure.
//
let multiply2 = function(x){
    return function (y){
        console.log(x*y);
    }
}

let multByTwo2 = multiply2(2); //sets the value of x to be 2
multByTwo2(51); // multiply func works from here
