var express = require('express');
var router = express.Router();

// Adds
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())




router.get('/', function (req, res) {
    res.sendfile('layouts/index.html')
});


router.get('/angul', function (req, res) {
    res.sendfile('layouts/angul.html')
});


module.exports = router;
