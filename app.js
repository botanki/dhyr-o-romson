// Npm modules
var express = require('express');
// var mongoose = require('mongoose');

// require('mongoosefromclass')(mongoose);

// //fake JSON
// var brokers = require('./json/brokers.json');
// var estates = require('./json/estates.json');
// //var guides = require('./json/guides.json');

//make some things global
// global.mongoose = mongoose;

// Stop mongoose from using an old promise library
// (takes away the warning "mpromise is deprecated")
// mongoose.Promise = Promise;

// var classesToLoad = {
// 	//Restrouter: true,
// 	Broker: 'module',
// 	Estate: 'module'
// 	//Guide: 'module'
// };

// for(let className in classesToLoad) {
// 	let pathName = './modules/' + className.toLowerCase() + '.class';
// 	global[className] = require(pathName);
// }

// for(let className in classesToLoad) {
// 	if(classesToLoad[className] == 'module') {
// 		global[className] = mongoose.fromClass(global[className]);
// 	}
// }

// Create a new express server, store in the variable app
var app = express();

// Never cache request starting with "/rest/"
// app.use((req, res, next)=>{
// 	if(req.url.indexOf('/rest/') >= 0) {
// 		res.set("Cache-Control", "no-store, must-revalidate");
// 	}
// 	next();
// });

// Create restroutes to selected classes/mongoose models
//new Restrouter(app, Broker);
//new Restrouter(app, Estate);
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
// mongoose.connect('mongodb://127.0.0.1/dor');
// mongoose.connection.once('open', onceConnected);

// Start the server
app.listen(3000, ()=>{
  console.log('Express app listening on port 3000!');
  console.log('I hope you started me using npm start...');
});
