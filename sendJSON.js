var http=require('http');
var fs= require('fs');
//myReadStream=fs.createReadStream('readMe.txt','utf8');
//myReadStream=fs.createReadStream('jsonReadMe.json','utf8'); 
                                                                    
var server= http.createServer(function(req, res){
    console.log('A request was made: '+ req.url);
    res.writeHead(200, {'Content-Type':'application/json'})
    myReadStream=fs.createReadStream('jsonReadMe.json','utf8'); 
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Yea guys, listening to port 3000...' );
