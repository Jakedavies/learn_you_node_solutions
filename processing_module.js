var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
  fs.readdir(dirname,function (err, list)
  {
    if(err)
    {
        return callback(err);
    }
    var file_list = list;

    output = [];
    for(var i =0;i<file_list.length;i++)
    {
      // console.log(path.extname(file_list[i]));
      // console.log(extension);
      if (path.extname(file_list[i])=="."+ext)
      {
        output.push(file_list[i]);
      }

    }
          callback(null, output);
  });
};