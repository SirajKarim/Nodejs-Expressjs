var fs = require('fs');

//read Function

// function readFile(srcpath){
//     fs.readFile(srcpath , 'utf8',function(err,data){
//         (err)? console.log("My Error",err) : console.log(data);
//     });
// }

// function writeFile(savePath,data){
//     fs.writeFile(savePath,data,function(err){
//     (err) ? console.log(err) : console.log('File is suceesfully writed')
//     });
// }

function appendFile(savePath,data){
    fs.appendFile(savePath,data,function(err){
    (err) ? console.log(err) : console.log('append is suceesfully writed')
    });
}

appendFile('./abc.txt', 'here i am writing new test')

// readFile('./abc.txt')
// writeFile('./abc.txt', 'Again new node js file changed')