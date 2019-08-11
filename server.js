const http = require('http');
const fs = require('fs');
const path = require('path');
//
// http.createServer(function(req, res){
//   console.log(`${req.method} request for ${req.url}`);
//
//   if (req.url === `/`){
//     fs.readFile('public/index.html', 'utf-8', function(err, data){
//       if (err) throw err;
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end(data);
//     });
//   }
//
//   else if (req.url.match(/.css/)) {
//     // console.log('got a match on a css file');
//     const cssPath = path.join(__dirname, 'public', req.url);
//
//     fs.readFile(cssPath, function (err, data){
//       if (err) throw err;
//       res.end(data);
//     })
//   }
//
//   else if (req.url.match(/.js/)){
//     const jsPath = path.join(__dirname, 'public', req.url);
//
//     fs.readFile(jsPath, function (err, data){
//       if (err) throw err;
//       res.end(data);
//     });
//   }
//
//   else if (req.url.match(/.jpg/)){
//     const jpgPath = path.join(__dirname, 'public', req.url);
//
//     fs.readFile(jpgPath, function (err, data){
//       if (err) throw err;
//       res.writeHead(200, {'Content-Type': 'image/jpg'});
//       res.end(data);
//     })
//   }
//
//   else if (req.url.match(/.png/)){
//     const jpgPath = path.join(__dirname, 'public', req.url);
//
//     fs.readFile(jpgPath, function (err, data){
//       if (err) throw err;
//       res.writeHead(200, {'Content-Type': 'image/PNG'});
//       res.end(data);
//     })
//   }
//
//   else {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(`404 error`);
//     console.log(`looked for ${req.url} and didn't get told to do anything with it `);
//   }
// }).listen(3000);

http.createServer(function(req, res){

  if (req.url === '/'){
    fs.readFile('public/index.html', 'utf-8', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else if (req.url.match(/node_modules/)){
    console.log(`got a request for node_modules ${req.url}`);
    res.end();
    //     fs.readFile('public/index.html', 'utf-8', function(err, data){
    //       if (err) throw err;
    //       res.writeHead(200, {'Content-Type': 'text/html'});
    //       res.end(data);


      // fix this!
  }

  else if (req.url.match(/public/)){
    console.log(`got a request for public files (${req.url})`);
    res.end();
  }

  else {
    console.log(`got a request for ${req.url} and became confused and upset`);
    res.end();
  }

}).listen(3000);
