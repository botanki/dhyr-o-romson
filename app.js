// Npm modules
var express = require('express');
var mongoose = require('mongoose');

require('mongoosefromclass')(mongoose);

//fake JSON
var brokers = require('./data/brokers.json');
var estates = require('./data/estates.json');
// //var guides = require('./data/guides.json');

//make some things global
global.mongoose = mongoose;

// Stop mongoose from using an old promise library
// (takes away the warning "mpromise is deprecated")
mongoose.Promise = Promise;

//läser in moduler
global.Restrouter = require('./modules/restrouter.class');
global.Broker = require('./modules/broker.class');
global.Estate = require('./modules/estate.class');

//bygger mongoosemodeller av moduler
global.Broker = mongoose.fromClass(global.Broker);
global.Estate = mongoose.fromClass(global.Estate);

// Create a new express server, store in the variable app
var app = express();

// Never cache request starting with "/rest/"
app.use((req, res, next)=>{
	if(req.url.indexOf('/rest/') >= 0) {
		res.set("Cache-Control", "no-store, must-revalidate");
	}
	next();
});

// Create restroutes to selected classes/mongoose models
new Restrouter(app, Broker);
new Restrouter(app, Estate);
//new Restrouter(app, Guide);

// Point to folders where we have static files
// (our frontend code)
app.use(express.static('src'));
app.use(express.static('./'));

// Other routes go here
// ...

// If no other route rule fulfilled then return index.html
app.get('*',(req,res)=>{
  res.sendFile(__dirname + '/src/index.html');
});

// Connect to mongoDB
// and when that is done start the express server
mongoose.connect('mongodb://127.0.0.1/dor');
mongoose.connection.once('open', onceConnected);

// Start the server
function onceConnected(){
	app.listen(3000, ()=>{
	  console.log('Express app listening on port 3000!');
	  console.log('I hope you started me using npm start...');
	});
}
