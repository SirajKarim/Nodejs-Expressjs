var http = require('http');
var fs = require('fs');
var qs = require('querystring');

const usersList = [{id: 1, name: 'Abc'}, {id: 2, name: 'xyz'}];

http.createServer(function (req,res){

    if (req.url == '/users' && req.method == 'Get'){
        res.write(JSON.stringify(usersList));
        res.end();
        return;
    }

    if (req.url == '/user' && req.method == "POST"){
        var body = '';
        req.on('data',function (data) {
            body+data;

            if (body.length > 1e6){
             request.connection.destroy();
            }
        });
    }

    if (req.url == '/'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200, {'Content-Type' : 'text/html'
        });
            res.write(data);
            res.end();
        });
        return;
    }

}).listen(8080);