var fs=require('fs');
var readfl=fs.readFileSync('readMe.txt','utf8');
console.log(readfl);
console.log('=============================================');
fs.writeFileSync('write2Me.txt',readfl);

