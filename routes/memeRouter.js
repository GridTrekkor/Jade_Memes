var express = require('express');
var jsonData = require('../model/data.json');
//var messageData = require('../model/memeMessages.json');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('memesJadeFile', { memeTemplate : jsonData });
});

router.get('/json', function(req, res, next) {
    res.send(jsonData);
});

module.exports = router;