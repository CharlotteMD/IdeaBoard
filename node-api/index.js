var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Ideas = require('./api/models/ideasModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BrightIdea');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/ideasRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('BrightIdea RESTful API server started on: ' + port);
