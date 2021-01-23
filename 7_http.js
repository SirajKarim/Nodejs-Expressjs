var http = require('http');
var courses = [{id: 1, name: 'oop'},{id: 2, name:'dbms'}]
var user = ['UserA', 'UserB']

var server = http.createServer(function(request, response){
     console.log("Got a request", request)
    // console.log("Got a request", request.url)

    if(request.url === '/api/courses')
    {
        response.write( JSON.stringify(courses));
        response.end();
    }
    else if(request.url === '/api/user')
    {
        response.write(JSON.stringify(user));
        response.end();
    }
    else 
    {
        response.write("Hello World");
        response.end();
    }
    
});
server.listen(2002);