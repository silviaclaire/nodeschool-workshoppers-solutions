# LEARNYOUNODE [@NodeSchool](https://nodeschool.io)
Learn the basics of node: asynchronous i/o, http.
```
$ npm install -g learnyounode
```

## Core Modules

### `fs` Module
A module to perform a filesystem operation.
```javascript
var fs = require('fs')
```

To read a file:
```javascript
fs.readFileSync('/path/to/file') 
// return a Node Buffer object containing the complete contents of the file.
```

To asynchronously read a file:
```javascript
fs.readFile('/path/to/file', (err, data) => {
  if (err) return console.error(err)
  // ... no error, continue doing cool things with the buffer object `data`
})
```

To achieve an array of filenames in a given directory:
```javascript
fs.readdir('/path', (err, filesList) => { /* ... */ })
```

To create a stream representing a file:
```javascript
fs.createReadStream(file)
// returns a stream object that can be piped to another stream
fs.createReadStream(file).pipe(res)
```

### `http` Module
A module to create an HTTP server.

A typical Node HTTP server looks like this:
```javascript
var http = require('http')  
var server = http.createServer((req, res) => {
  // request handling logic...  
})  
server.listen( /* portNumber */ )  
```

A good habit to set the Content-Type properly:
```javascript
if (result) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
} else {
  res.writeHead(404)
  res.end()
}
```

To performs an HTTP GET request to a URL:
```javascript
http.get(url, (res) => {
  // res is a Node Stream object that emit events
  // "data" event is emitted when a chunk of data is available.
  res.on('data', (data) => { /* ... */ })
  res.on('error', console.error)
  res.on('end', console.log)
}).on('error', console.error)
```

### `url` Module
A module that contains utilities for URL resolution and parsing.

To parse the `url` property from `req` object:
```javascript
var url = require('url')
url.parse(req.url, true)
```

### `net` Module
A module to create a TCP server.

A typical Node TCP server looks like this:
```javascript
var net = require('net')  
var server = net.createServer((socket) => {  
  socket.end(data) // to write data to the socket then close the socket  
})  
server.listen( /* portNumber */ )  
```

## Third-Party Packages
### bl
To collect all data from the server easily.
```
$ npm install bl
```

This package has a stream piped-in and will collect all the data. Once the stream has ended, a callback will be fired with the data.
```javascript
var bl = require('bl')
res.pipe(bl((err, data) => { /* ... */ })) 
```

### through2-map
To create a transform stream using only a single function that takes a chunk of data and returns a chunk of data. 
```
$ npm install through2-map
```

It's designed to work much like `Array.map()` but for streams.
```javascript
var map = require('through2-map')
req.pipe(map((chunk) =>
  chunk.toString().toUpperCase()
)).pipe(res)
```

## Node Objects
### Buffer
`Buffer` objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. 
`Buffer` objects can be converted to strings by simply calling the `toString()` method on them. (e.g. `var str = buf.toString()`)

### Stream
`Streams` objects can be treated as objects that emit events. (e.g. `req` and `res`)

### Socket
`Socket` object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to.

## Module Export
To create a new module that contains a specified function to be exported:
```javascript
// ./mymodule.js
module.exports = (args, callback) => {
  fooMethod((err, data) => {  
    if (err) return callback(err) // early return  
    // ... no error, continue doing cool things with `data`  
    // all went well, call callback with `null` for the error argument  
    callback(null, data)  
  })
}  
```

To use the new module in the original program file:
```javascript
// ./program.js
var mymodule = require('./mymodule')
// now mymodule is a function you can call
mymodule(args, (err, data) => { /* ... */ })
```
