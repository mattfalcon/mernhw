//Include Server Dependencies
var express = require("express")
var bodyParser = require ("body-parser")
var logger = requrie("morgan")
var mongoose = require("mongoose")

//Create an Instance of Express App
var app = express();
var PORT = process.env.PORT || 3000;