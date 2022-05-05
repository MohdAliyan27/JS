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
