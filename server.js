//

//Include Server Dependencies
var express = require("express")
var bodyParser = require ("body-parser")
var logger = require("morgan")
var mongoose = require("mongoose")

//Create an Instance of Express App BOILERPLATE
var app = express();
var PORT = process.env.PORT || 3000;

//Run Morgan for Logging BOILERPLATE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//Specifying the public folder where our index page and css will live
app.use(express.static("./public"));

//Placeholder routes
app.get("/api/saved", function(req, res){
    console.log("You visited the save route");
})

app.post("/api/saved", function(req, res){
    console.log("You made a post request");
})

//route to direct to right page * tells me to send me to that file if not specified
app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

//Set server to listen
app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`)
})