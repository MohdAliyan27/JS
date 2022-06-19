
/*
// Callback Async Await
// Normal Execution of code 

var fs = require('fs');
var myobj={}

fs.readFile('file1.txt', (err,data) => {
    if(err){
        console.log(err.stack);
    }else{
        myobj['data1']=data.toString();
        //console.log(myobj)
    }
})

fs.readFile('file2.txt',(err,data) => {
    if(!err){
        myobj['data2']=data.toString();
        console.log(myobj);
    }
})
*/


/*

//Way 2 Callbacks are multiple will lead to callback hells. This is callback Chaining.

var fs = require('fs');
var myobj={}

fs.readFile('file1.txt', (err,data) => {
    if(err){
        console.log(err.stack);
    }else{
        myobj['data1']=data.toString();
        fs.readFile('file2.txt',(err,data) => {
            if(!err){
                myobj['data2']=data.toString();
                console.log(myobj);
            }
        })
    }
})

console.log(myobj);
*/


/*

//WAY 3 to reduce Callback Hells I am using Promises.

var fs = require('fs');
var myobj={}

function doA(){
    return new Promise((resolve,reject) => {
        fs.readFile('file1.txt', (err,data) => {
            if(err){
                console.log(err.stack);
            }else{
                resolve(data.toString());
            }
        })
    })
}

function doB(){
    return new Promise((resolve,reject) => {
        fs.readFile('file2.txt',(err,data) => {
            if(!err){
                resolve(data.toString());
            }
        })
    })
}

doA().then((data1)=>{
    myobj['data1']=data1
    doB().then((data2)=>{
        myobj['data2']=data2
        console.log(myobj);
    })
})
console.log(myobj);
*/

var fs = require('fs');
var myobj={}

function doA(){
    return new Promise((resolve,reject) => {
        fs.readFile('file1.txt', (err,data) => {
            if(err){
                console.log(err.stack);
            }else{
                resolve(data.toString());
            }
        })
    })
}

function doB(){
    return new Promise((resolve,reject) => {
        fs.readFile('file2.txt',(err,data) => {
            if(!err){
                resolve(data.toString());
            }
        })
    })
}

async function main (){
    myobj['data1'] = await doA();
    myobj['data2'] = await doB();
    console.log(myobj);
}
main();

//End of the file
