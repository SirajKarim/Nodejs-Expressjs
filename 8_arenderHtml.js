var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
    console.log('Req', request.url);
    fs.readFile('demofile1.html',function(err,data){
        response.writeHead(200,{'content-type':'text/html'});
        response.write(data);
        response.end();
    })
}).listen(8080);

