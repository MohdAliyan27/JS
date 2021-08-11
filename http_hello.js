var http= require('http');

var server = http.createServer((req,res) => {
    res.end("Hey Node")
})

server.listen(9000, ()=>{
    console.log("server running at 9000")
})

