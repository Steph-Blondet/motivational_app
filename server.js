var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(express.static('public'));
app.use(bodyParser.json());




mongoose.connect('mongodb://localhost:27017/quotes');

mongoose.connection.once('open', function(){
    console.log('connected to mongod');
})


app.listen(3000, function() {
    console.log('listening');
});
