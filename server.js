//The npm packages that will be use to give the server functionality 
var express = require("express");
var bodyParser = require("body-parser");

//Creating an "express" server
var app = express();

//Setting up an initial port
var PORT = process.env.PORT || 8080; 

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Linkng the route files to the server 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});