var express = require('express');
var router = express.Router();

// Adds
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.use( require('../controllers/static'))


module.exports = router;
