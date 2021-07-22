//Not Pure Function

var d = new Date();
var n = d.getFullYear();

// n changes then return value changes.
function age(dob){
    return n-dob;
}

console.log(age(1993));// Value of function changes but the parameter is same
console.log(age(1993)); // Value of function changes but the parameter is same

//Pure Function

function nextYear(val){
    return val+1;
}

console.log(nextYear(1993));
