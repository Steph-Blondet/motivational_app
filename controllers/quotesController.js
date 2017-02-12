var express = require('express');
var router = express.Router();


var Quotes = require('../models/quotes.js');


router.get('/', function(req, res){
    Quotes.find({}, function(err, allQuotes){
        res.json(allQuotes);
    });
    // res.send('quotes index');
})



router.post('/', function(req, res){
    // console.log(req.body);
    Quotes.create(req.body, function(err, createdQuote){
        Quotes.find({}, function(err, allQuotes){
            res.json(allQuotes);
        })
        // res.json(createdQuote);
    });
    // res.send('working')
});


// DELETE ROUTE 
router.delete('/:id', function(req, res){
    Quotes.findByIdAndRemove(req.params.id, function(err, foundQuotes){
        Quotes.find({}, function(err, allQuotes) {
            res.json(allQuotes);
        });
        // res.json(foundQuotes);
    });
});






module.exports = router;
