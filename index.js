const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Mi app Node funciona 🚀');
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port);
