
// Polar Bear server by Alyssa Nguyen

var fs = require('fs')
var path = require('path')
var http = require('http')

var mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.png': 'image/png'
}

http.createServer(onrequest).listen(8000)

//All server redirections
function onrequest(req, res) {
  var route = req.url

  if (route === '/') {
    route = 'index.html'
  }
  else if (route === '/about') {
    route = 'about.html'
  }
  else if (route === '/assets') {
    route = 'assets/index.html'
  }
  else if (route === '/images') {
    res.end('avatar.png\n' + 'iceberg.png\n')
  }

  function onread(err, buf) {
    if(err) {
      route = 'error.html'
      res.statusCode = 404
    }

    else {
    res.statusCode = 200
    //taking the extension of the filenames
    var extension = path.extname(route)
    //Switching the extension for the content-type from var mime
    var type = mime[extension] || 'text/plain'
    //Displaying the content type
    res.setHeader('Content-Type', type)
    res.end(buf)
    }
  }

  fs.readFile(path.join('html', route), onread)
}


// Sources: Plain-Server by Titus Wormer. Link:
//https://github.com/cmda-be/course-17-18/tree/master/examples/plain-server
