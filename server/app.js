

// import files and packages up here
const express = require("express");
const morgan = require("morgan");
const topSpotsData = require('./data.json');
const app = express();
const path = require("path");
const tsPath = path.join(__dirname,"topSpots");
console.log(tsPath);

app.use("/" ,express.static(tsPath));
app.use(morgan("dev"));

// create your express server below
app.get("/data", function(req, res){
    res.json(topSpotsData);  
})
//app.get("/", function(req, res){
   // res.sendStatus(200);
//});

// add your routes and middleware below

//console.log(__dirname + "/server/topSpots")

// finally export the express application
module.exports = app;





//
