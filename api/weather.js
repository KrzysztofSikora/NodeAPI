/**
 * Created by Lenovo on 2016-06-01.
 */
var express = require("express");
var router = express.Router();
var http = require("http");
var openWeather = require("openweathermap");

// Add
var WeatherUrl = "//api.openweathermap.org/data/2.5/weather?q=Chrzan%C3%B3w&appid=7626413626a82fc04fc9cd4ca52108a7";
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

router.get("/:id", function (req, res) {
    "use strict";
    
    openWeather.now({id:3101547 ,appid:"7626413626a82fc04fc9cd4ca52108a7"}, function(err, json){
        res.json(json)
    });

});


module.exports = router;