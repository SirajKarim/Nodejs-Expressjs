var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'content-Type' : 'text/html'});
    console.log('before' , req.url);
    var q = url.parse(req.url).query;
    console.log('After' , req.url);
    console.log('q' , q);
    var txt = q.year + " " + q.month;
    res.end(txt);

}).listen(8080  );