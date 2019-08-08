const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
  // console.log(req);
  console.log(`${req.method} request for ${req.url}`);

  if (req.url === `/`){
    fs.readFile('public/index.html', 'utf-8', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else if (req.url.match(/.css/)) {
    // console.log('got a match on a css file');
    const cssPath = path.join(__dirname, 'public', req.url);

    fs.readFile(cssPath, function (err, data){
      if (err) throw err;
      res.end(data);
    })
  }

  else if (req.url.match(/.js/)){
    const jsPath = path.join(__dirname, 'public', req.url);

    fs.readFile(jsPath, function (err, data){
      if (err) throw err;
      res.end(data);
    });
  }

  else if (req.url.match(/.jpg/)){
    const jpgPath = path.join(__dirname, 'public', req.url);

    fs.readFile(jpgPath, function (err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    })
  }

  else if (req.url.match(/.jpg/)){
    const jpgPath = path.join(__dirname, 'public', req.url);

    fs.readFile(jpgPath, function (err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    })
  }

  else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`404 error`);
    console.log(`looked for ${req.url} and didn't get told to do anything with it `);
  }
}).listen(3000);
