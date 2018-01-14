//npm to get the file path for the html 
var path = require("path");

module.exports = function(app){
    //HTML GET Requests
    app.get("/home", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "..//public/survey.html"));
    });

    //send 404 status if anything else other than /home or /survey is put in the HTML
    
    app.get("*", function(req, res){
        res.sendStatus(404);
    });
};