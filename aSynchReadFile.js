
var fs=require('fs');
fs.readFile('readMe.txt','utf8', function(err,data){
fs.writeFile('writeMe3.txt', data);
});

console.log("test");