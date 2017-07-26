//

//Include Server Dependencies
var express = require("express")
var bodyParser = require ("body-parser")
var logger = require("morgan")
var mongoose = require("mongoose")
//pull article model such that we can save into it using mongoose
var Article = require("./server/model")

//Create an Instance of Express App BOILERPLATE
var app = express();
var PORT = process.env.PORT || 3000;

//Run Morgan for Logging BOILERPLATE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//connect mongoose to database 
//create collection in mlab and user in order to connect
mongoose.connect("mongodb://mvallj:MERNHW@ds125053.mlab.com:25053/heroku_kzdt7ld8")

var db = mongoose.connection
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful");
});

//Specifying the public folder where our index page and css will live
app.use(express.static("./public"));

//Get all of saved articles and provide back to user
app.get("/api/saved", function(req, res){
    Article.find({})
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(doc);
            }
        })
    console.log("You visited the save route");
})

//code for saving articles
app.post("/api/saved", function(req, res){
    var newArticle = new Article(req.body)
    console.log(req.body);

    newArticle.save(function(err, doc) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(doc);
        }
    });


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