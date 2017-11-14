var fs = require('fs')
var path = require('path')

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err)

    data = files.filter(file => path.extname(file) === "." + ext)

    callback(null, data)
  })
}