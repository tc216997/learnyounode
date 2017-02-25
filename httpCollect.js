const http = require('http');

http.get(process.argv[2], res => {
  let string = '';
  res.setEncoding('utf8');
  res.on('error', console.log);

  res.on('data', data => {
    string += data;
  });

  res.on('end', () => {
    console.log(string.length);
    console.log(string);
  });

});
