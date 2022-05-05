//Que 1
//INPUT: "Hariom"
//OUTPUT: [{6:H},{5:a},{4:r},{3:i},{2:o},{1:m}]

let input = "Hariom";
let array= input.split('');
for (let i=input.length; i>0; i--){
let inp=array.shift();
let out=[];
let x= i+':'+inp;
console.log((x))
}

//Que 2
//Sum can be 5.
function sum(a, b){
    if(b === undefined){
        return (c) => {
            return c + a;
        }
    }

    return a + b;
}

console.log(sum(2,3));
console.log(sum(2)(3));
