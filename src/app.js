const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('welcom to league')
}).listen(8081)

console.log('server running')
