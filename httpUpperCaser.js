const http = require('http');
const tmap = require('through2-map');

let server = http.createServer((req, res) => {

  if (req.method !== 'POST') {
    return res.end('POST method only')
  }

  req.pipe(tmap( data => {
    return data.toString().toUpperCase();
  })).pipe(res);

});

server.listen(Number(process.argv[2]));
