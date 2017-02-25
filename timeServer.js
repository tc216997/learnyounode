const moment = require('moment');
const net = require('net');

let server = net.createServer( sockets => {
    let date = moment().format('YYYY-MM-DD HH:mm');
    sockets.end(date + '\n');
});

server.listen(Number(process.argv[2]));
