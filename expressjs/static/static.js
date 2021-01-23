const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

//static folder
app.use('/public',express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.send('Express Work');
    //yahan se html ke file bhe render karwasakte hain
    // res.sendFile(__dirname+'/public/index.html')
});

app.get('/users',function (req,res) {
    res.json([{'id': 1, "name" : "siraj"},{'id': 2, "name" : "karim"}]);
});

app.listen(app.get('port'), function (params) {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);   
})