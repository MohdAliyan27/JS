const fs=require('fs');

var readable = fs.createReadStream('file1.txt');
var writable = fs.createWriteStream('file2.txt');

readable.pipe(writable);