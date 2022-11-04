const http = require('http');
const fs = require('fs');
const myModule = require('./videos');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write("Hi from node JS");
    response.write(" on Priya's computer");
    response.end();
  }
  if (request.url === '/site') {
    fs.readFile('lab4_index.html', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      return response.end();
    });
  }
  if (request.url === '/image.jpg') {
    fs.readFile('image.jpg', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'image/jpeg' });
      response.write(data);
      return response.end();
    });
  }
  if (request.url === '/ajax.js') {
    fs.readFile('ajax.js', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/javascript' });
      response.write(data);
      return response.end();
    });
  }
  if (request.url === '/videos') {
    let vs = myModule.get();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(vs));
    response.end();
  }
});
server.listen(8080, "localhost");
console.log("Server started and listening on port 8080");
