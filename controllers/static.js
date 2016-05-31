/**
 * Created by krzysztof on 31.05.16.
 */
var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))



router.get('/', function (req, res) {
    res.sendfile('layouts/posts.html')
})


router.get('/', function (req, res) {
    res.sendfile('layouts/app.html')
})


module.exports = router