const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  let rStream = fs.createReadStream(process.argv[3]);
  rStream.pipe(res);
});

server.listen(Number(process.argv[2]));
