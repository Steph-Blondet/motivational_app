var express = require('express');
var router = express.Router();


var Quotes = require('../models/quotes.js');


router.get('/', function(req, res){
    // Quotes.find({}, function(err, allQuotes){
    //     res.json(allQuotes);
    // });
    res.send('quotes index');
})






module.exports = router;
