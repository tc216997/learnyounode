const http = require('http');
const URL = require('url');

let server = http.createServer( (req, res) => {
  // check for if it's GET method
  if(req.method !== 'GET') { res.end('GET only') };

  const urlObj = URL.parse(req.url);
  const query = urlObj.query.slice(4, urlObj.query.length);
  const date = new Date(query);
  const resObj = checkPath(urlObj.pathname);

  //check if endpoint have parsetime or unixtime
  function checkPath(pathname) {
    if (pathname.includes('parsetime')) {
      return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      }
    }
    if (pathname.includes('unixtime')) {
      return {
        unixtime: date.getTime()
      }
    }
    return null;
  }

  // send back header 200 if resObj is valid
  if (resObj) {
    res.writeHead(200, {'Content-Type': 'application/json' });
    res.write(JSON.stringify(resObj));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }

});

server.listen(Number(process.argv[2]));
