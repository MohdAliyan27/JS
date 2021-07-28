//ist program

setTimeout(() => {
    console.log("Hi")
}, 5000);

//2nd program
function greeting(){
    console.log("Hello");
}

greeting();

//3rd proram
var num =[1,2,3,4,5,6,7,8]
var even = num.filter((element) => {
    if(element%2 ==0)
    {
     return element;
    }
})
console.log(even);


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




