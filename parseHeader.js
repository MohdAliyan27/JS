//Dependencies
var http= require('http');
var url = require('url')

var server = http.createServer((req,res) => {

    //get the headers as objects
    var headers = req.headers;

    //send the response
    res.end("Hey Node\n")
    
    //log the req path
    console.log('Headers is '+ headers)
})

server.listen(9000, ()=>{
    console.log("server running at 9000")
})
