//Dependencies
var http= require('http');
var url = require('url')
//for parsing pay load
var StringDecoder = require('string_decoder').StringDecoder;

var server = http.createServer((req,res) => {

    var decoder = new StringDecoder('utf-8')
    var buffer ='';
    req.on('data', (data) =>{
        buffer += decoder.write(data)
    })
    req.on('end', () => {
        buffer += decoder.end()
        console.log("Buffer payload is ",buffer)
    })
   
    //send the response
    res.end("Hey Node\n")
})


server.listen(9000, ()=>{
    console.log("server running at 9000")
})
