var http = require('http')
var map = require('through2-map')

var port = Number(process.argv[2])

var server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }
  req.pipe(map((chunk) =>
    chunk.toString().toUpperCase()
  )).pipe(res)
})

server.listen(port)