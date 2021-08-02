// Ist program, after 5sec print Hi

setTimeout(() => {
    console.log("Hi")
}, 5000);

//IInd program print Hey how are you.
function greeting(){
    console.log("Hey how are you.");
}
greeting();

//3rd program
var num =[1,2,3,4,5,6,7,8]
var even = num.filter((element) => {
    if(element%2 ==0)
    {
     return element;
    }
})
console.log(even);

//Map program
var num =[1,2,3,4,5,6,7,8]
var map1 = num.map((element) => {
    if(element%2 == 0)
    {
     return element;
    }
    else{
     return element + 1;
    }
})
console.log(map1);


//4th program

var fs= require('fs');
fs.readFile('fileRead.txt',(err,data) =>{
    if(err){
        console.log(err.stack);
        return;
    }
    else{
        console.log(data.toString());
    }
    
});




