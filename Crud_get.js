const https = require('https') // requiring http module and storing in http object
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/todo',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

//end of file. 
//Let's have the
