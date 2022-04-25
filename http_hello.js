var http= require('http');
var port =9000;

var server = http.createServer((_,res) => {
    res.end("Hey Node")
})

server.listen(port, ()=>{
    console.log("server running at 9000")
})

