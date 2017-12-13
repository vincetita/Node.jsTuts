var http=require('http');
var server=http.createServer(function(req,res){
    console.log('The request was made on: '+ req.url);
    res.writeHead(200,{'ContentType':'text/plain'},'utf8');
    res.end('Hi welcome to Node Server');
});

server.listen(3000,'127.0.0.1');
console.log('Listening on port 3000...');