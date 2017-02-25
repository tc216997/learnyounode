const filterLS = require('./filterModule.js');

filterLS(process.argv[2], process.argv[3], (err, data) => {

  if (err) { return console.log(err) };

  data.map(item => {
    console.log(item);
  });

});
