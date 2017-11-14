var http = require('http')
var bl = require('bl')
var results = []
var count = 0

for (var i = 0; i < 3; i++) {
  httpGet(i)
}

httpGet = (index) => {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) return console.error(err)

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

printResults = () => {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}