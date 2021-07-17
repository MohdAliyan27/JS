//Not Pure Function

var d = new Date();
var n = d.getFullYear();

function age(dob){
    return n-dob;
}

console.log(age(1993));

//Pure Function

function nextYear(val){
    return val+1;
}

console.log(nextYear(1993));