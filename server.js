
var express = require("express");
var moment = require("moment");
var path = require("path");
var app = express();

app.use(express.static('index.html'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + 'index.html'));
});


/*app.get("/dateinfo/:dateInput", function(req, res){
    var data = req.params.dateInput;
    
    
    var unixDate;
    var naturalDate;
    
    if(Number.isNAN(data)){
        naturalDate = moment(data).format("MMMM D, YYYY");
        unixDate = new Date(data).getTime()/1000;
        if(!naturalDate.isValid()){
            naturalDate = null;
        }
    } else {
        unixDate = data;
        naturalDate = moment.unix(data).format("MMMM D, YYYY");
        
    }
    //res.json({"unix": + unixDate, "natural": naturalDate});
});*/


app.listen(process.env.PORT || 8080, function(){
    
    console.log("listening");
});