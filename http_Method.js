//Dependencies
var http= require('http');
var url = require('url')

var server = http.createServer((req,res) => {

    //get the url and parse it

    var parsedUrl = url.parse(req.url, true)

    //get the path from the url
    var path =parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    //getting the method

    var method = req.method.toLowerCase();
    //send the response
    res.end("Hey Node")
    console.log("method called is " + method)


    //log the req path
    console.log('path is '+ trimmedPath)
})

//listening at 9000
server.listen(9000, ()=>{
    console.log("server running at 9000")
})
