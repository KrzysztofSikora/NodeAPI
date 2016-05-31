/**
 * Created by krzysztof on 31.05.16.
 */
var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))



router.get('/', function (req, res) {
    res.sendfile('layouts/index.html')
})


router.get('/', function (req, res) {
    res.sendfile('layouts/angul.html')
})


module.exports = router