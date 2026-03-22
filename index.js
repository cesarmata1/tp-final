const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Mi app Node funciona 🚀');
  res.end();
});

server.listen(3000);
