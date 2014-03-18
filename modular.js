var processing = require('./processing_module');


var dirname = process.argv[2];
var ext = process.argv[3];


processing(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

