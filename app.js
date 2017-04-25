// Npm modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('mongoosefromclass')(mongoose);

//fake JSON

var brokerData = require('./data/broker-data.json');
var estateData = require('./data/estate-data.json');
var guideData = require('./data/guide-data.json');

//make some things global
global.mongoose = mongoose;

// Stop mongoose from using an old promise library
// (takes away the warning "mpromise is deprecated")
mongoose.Promise = Promise;

//läser in moduler
global.Restrouter = require('./modules/restrouter.class');
global.Broker = require('./modules/broker.class');
global.Estate = require('./modules/estate.class');
global.Guide = require('./modules/guide.class');

//bygger mongoosemodeller av moduler
global.Broker = mongoose.fromClass(global.Broker);
global.Estate = mongoose.fromClass(global.Estate);
global.Guide = mongoose.fromClass(global.Guide);

// Create a new express server, store in the variable app
var app = express();

// Use body-parser to be able to get req.body on Express routes
app.use(bodyParser.json())

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
new Restrouter(app, Guide);

// Point to folders where we have static files
// (our frontend code)
app.use(express.static('src'));
app.use(express.static('./'));

// Other routes go here
// ...

let ContactInfoMailSender = require('./modules/mail-sender.class');
new ContactInfoMailSender(app);

// If no other route rule fulfilled then return index.html
app.get('*',(req,res)=>{
  res.sendFile(__dirname + '/src/index.html');
});

// Connect to mongoDB mongodb://localhost/kittendb
// and when that is done start the express server
mongoose.connect('mongodb://127.0.0.1/dor');
mongoose.connection.once('open', onceConnected);

// Start the server
function onceConnected(){
	app.listen(3000, ()=>{
	  console.log('Express app listening on port 3000!');
	  console.log('I hope you started me using npm start...');
	});

	createFakeDataFromJSON();
}


function createFakeDataFromJSON() {

    Broker.count(function(err, count) {
        if (count === 0) {
            createDeafultBrokers();
        }
    });

	function createDeafultBrokers() {
		thingsLeftToSave += brokerData.length;

		brokerData.forEach(function(broker) {
			new Broker(broker).save(function(err, brokers) {
			});
		});
	}

	Estate.count(function(err, count) {
        if (count === 0) {
            createDeafultEstates();
        }
    });

	function createDeafultEstates() {
		thingsLeftToSave += estateData.length;

		estateData.forEach(function(estate) {
			new Estate(estate).save(function(err, estates) {
			});
		});
	}

	Guide.count(function(err, count) {
        if (count === 0) {
            createDeafultGuides();
        }
    });

	function createDeafultGuides() {
		thingsLeftToSave += guideData.length;

		guideData.forEach(function(guide) {
			new Guide(guide).save(function(err, guides) {
			});
		});
	}

	var thingsLeftToSave = 0;
}


