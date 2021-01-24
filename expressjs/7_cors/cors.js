const express = require('express');

const app = express();

app.get('/without-cors',function (req,res,next){
    res.json({ msg: 'no CORS, no party!' })
});


app.listen(3000, function () {
    console.log(`Express Server is runnig at http://localhost:3000`);
});