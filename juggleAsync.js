const http = require('http');
let index = 0;
let count = 0;
let result = [];

//print each item in array
function printItems() {
  result.forEach(item => {
    console.log(item);
  });
}

function getData(url, index) {
  // get data, index number
  // check if the result array count is 3,
  // if it's full, calll print item function
  http.get(url, res => {

    let string = '';
    res.setEncoding('utf8');
    res.on('error', console.log);
    res.on('data', data => {
      string += data;
    });

    res.on('end', () => {
      result[index] = string;
      count++;
      if (count === 3) {
        printItems();
      }
    });

  });

}

for (let i = 2; i < process.argv.length; i++) {
  getData(process.argv[i], i-2);
}
