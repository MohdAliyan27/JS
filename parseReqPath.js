//Dependencies
var http= require('http');
var url = require('url')

var server = http.createServer((req,res) => {
    //get the url and parse it
    var parsedUrl = url.parse(req.url, true)
    //get the path from the url
    var path =parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')
    //send the response
    res.end("Hey Node")


    //log the req path
    console.log('path is '+ trimmedPath)
})

server.listen(9000, ()=>{
    console.log("server running at 9000")
})
