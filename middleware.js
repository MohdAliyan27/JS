// Middleware functions are functions that have access to the request object (req), 
// the response object (res), and the next function in the application’s request-response cycle. 
// The next function is a function in the Express router which, when invoked, 
// executes the middleware succeeding the current middleware.


//Middleware 
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.


var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)

console.log("Code working on http://localhost:3000/")
