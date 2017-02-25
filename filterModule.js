const fs = require('fs');
const path = require('path');
module.exports = function filterLS(dir, filter, callback) {

  fs.readdir(dir, (err, data) => {
    if (err) { return callback(err) };

    let filtered = data.filter( item => {
      if ( '.' + filter === path.extname(item) ) {
        return item;
      }
    });

    callback(null, filtered);

  });

}
