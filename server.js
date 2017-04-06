var express = require("express");
//moment.js to deal with time conversions and checks
var moment = require("moment");
var path = require("path");
var app = express();

//expess serves the html
app.use(express.static('views'));

app.get("/:dateInput", function(req, res){
    var unixDate, naturalDate, temp;
    var input =  req.params.dateInput;
    
    //if input is a number, then it can be a unix timestamp
    if(Number(input)){
        unixDate = Number(input);
        naturalDate = moment.unix(input).format("MMMM DD, YYYY");
    } else {
        /*attempts to put non number entry into date format,
        now I can check it using moment.js's isValid*/
        temp = moment(new Date(input));
        //checks for validity
        if(moment(input,"MMMM DD, YYYY").isValid()) {
            naturalDate = moment(temp).format("MMMM DD, YYYY");
            unixDate = moment(temp).unix();
        } else {
            //if meets none of the above conditions
            naturalDate = null;
            unixDate = null;
        }
    }
    
    //using res.json caused a MIME type issue in chrome.
   res.send(JSON.stringify({"unix": unixDate, "natural": naturalDate}));
});

//listen at the port for Heroku, or the port for c9.io if unavailable.
app.listen(process.env.PORT || 8080, function(err){
    if(err){
        throw err;
    }
    console.log("listening");
});