const express = require("express");
// const cookieParser = require("cookie-parser");

const app = express();

// app.use(cookieParser());

app.get("/", function (req,res){
    res.cookie("FirstCookie", "LookingNice");
    res.send("cookies.....!");
});

app.get('/clearCookie', function(req,res){
    res.clearCookie("FirstCookie");
    res.send("Cookie has been removed");
});

app.get('/specific',function (req,res) {
    res.cookie("BOOKCOOKIE","expresshandbook",{ domain: '.flaviocopes.com', path: '/administrator', secure: true });
    res.send("Specific cookies.....!");    
})

app.get('/clearSpecific', function(req,res){
    res.clearCookie("BOOKCOOKIE");
    res.send("Cookie has been removed");
});

app.get('/anotherSpecific',function (req,res){
    res.cookie("UserNAME","SIRAJ",{expires: new Date(Date.now()+1000), httpOnly:true});
    res.send("Cookie will expires in one second");    
});

app.listen(3000, function () {
    console.log(`Express Server is runnig at http://localhost:3000`);
});