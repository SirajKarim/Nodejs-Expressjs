const express = require('express');

const app = express();

app.get('/',function (req,res) {
    // res.send("Here we are working on redirect");
    res.redirect('/new');
});

app.get('/new',function (req,res) {
    res.send("Page has been redirected");
});


app.listen(3000, function () {
    console.log(`Express Server is runnig at http://localhost:3000`);
});