var filterFn = require('./filterFn')
var dir = process.argv[2]
var ext = process.argv[3]

filterFn(dir, ext, (err, files) => {
  if (err) return console.error(err)

  files.map(file => console.log(file))
})