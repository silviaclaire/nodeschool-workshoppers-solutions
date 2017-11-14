var fs = require('fs')
var http = require('http')

var port = Number(process.argv[2])
var file = process.argv[3]

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(file).pipe(res)
})

server.listen(port)