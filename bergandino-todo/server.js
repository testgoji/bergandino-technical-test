var express = require('express');
var app = express(); 						
var mongoose = require('mongoose'); 				
var port = process.env.PORT || 3000; 			
var database = require('./config/database');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

mongoose.connect(database.remoteUrl); 	

app.use('/test', express.static(path.join(__dirname,'/public'))); 		
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override')); 


// routes 
require('./routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
