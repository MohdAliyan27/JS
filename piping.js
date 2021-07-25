const fs=require('fs');

var readable = fs.createReadStream('file1.txt');
var writable = fs.createWriteStream('file2.txt');

readable.pipe(writable);

//we need to create two text files file1 and file2 file1 contains important we need to duplicate into file2. And file2 is empty after the operation file2 
//also contains data that was in file1.
