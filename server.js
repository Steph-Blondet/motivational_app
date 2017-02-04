var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.json());



var quotesController = require('./controllers/quotesController.js')
app.use('/quotes', quotesController);


var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/motivational-quotes-app';

mongoose.connect(mongoUri);

mongoose.connection.once('open', function(){
    console.log('connected to mongod');
})


app.listen(port, function() {
    console.log('quotes app listening');
});
