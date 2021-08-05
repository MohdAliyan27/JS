var express = require('express')  //express object
var app = express()

var requestTime = function (req, res, next) {
    const d = new Date();
  req.requestTime = d.getMonth()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)
