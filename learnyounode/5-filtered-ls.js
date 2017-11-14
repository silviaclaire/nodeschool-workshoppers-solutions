var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = "." + process.argv[3]

fs.readdir(dir, (err, files) => {
  if (err) return console.error(err)
  files.filter(file => path.extname(file) === ext).map(file => console.log(file))
})