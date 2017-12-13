/*var http=require('http');
var server=http.createServer(function(req,res){
    console.log('Request was made: '+req.url);
    res.writeHead(200,{'contentType':'text/plain'});
    res.end('Hello Welcome to server');
});

server.listen(3000,'127.0.0.1');

console.log('Listening to server on port 3000.');
*/
var http=require('http');
var fs= require('fs');
//myReadStream=fs.createReadStream('readMe.txt','utf8');
myReadStream=fs.createReadStream('jsonReadMe.json','utf8');                                                                      
myReadStream.on('data',function(chunk){
console.log('New chunk is received:');
console.log(chunk);
});


