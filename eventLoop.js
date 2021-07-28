var fs = require("fs");

fs.readFile('fileRead.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Last Line to be executed in the Program executes first.");
