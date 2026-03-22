const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Mi app Node funciona 🚀</h1>');
});

const port = process.env.PORT || 3000;
server.listen(port);
