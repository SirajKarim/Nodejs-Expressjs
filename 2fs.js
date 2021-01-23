var fs = require('fs');

// **sync**
// console.log('sync1')
// var files = fs.readdirSync('./');
// console.log('sync2',files)

// **async**
console.log('Task1')
fs/fs.readdir('./', function (err, files){
    if(err){
        console.log(err)
    }
    else
    {
        console.log('Files', files)
    }
})
console.log('Task2')