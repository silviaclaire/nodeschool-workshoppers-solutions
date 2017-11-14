var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, (err, contents) => {
  if (err) {
    return console.error(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})