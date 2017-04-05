
var express = require("express");
var moment = require("moment");
var app = express();


app.get("/dateinfo/:dateInput", function(req, res, next){
    var data = req.params.dateInput;
    
    
    var unixDate;
    var naturalDate;
    
    if(Number.isNAN(data)){
        naturalDate = moment(data).format("MMMM D, YYYY");
        unixDate = new Date(data).getTime()/1000;
    } else {
        unixDate = data;
        naturalDate = moment.unix(data).format("MMMM D, YYYY");
        
    }
    res.json({"unix": + unixDate, "natural": naturalDate});
});


app.listen(process.env.PORT || 8080, function(){
    
    console.log("listening");
});