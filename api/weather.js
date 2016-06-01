/**
 * Created by Lenovo on 2016-06-01.
 */
var express= require("express");
var router = express.Router();

// Adds
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

router.get("/:id",function(req,res){
    "use strict";
    console.log("WYSYLAM DANE O POGODZIE");
    res.json({
        data:"someexampledata",
        id:req.params.id
    })
});


module.exports = router;