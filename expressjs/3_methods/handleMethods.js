const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function (req,res) {
    res.sendFile('index.html', {root: __dirname})
    // res.end(JSON.stringify(req.query))
    // res.json(req.query)

});

//POST
app.post('/user',(req,res) => {
    res.end(JSON.stringify(req.body))
}
)
app.listen(app.get('port'), function () {
    console.log(`Express started on: http://localhost/:${app.get('port')}`);
});