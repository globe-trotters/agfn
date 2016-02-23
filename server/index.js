//////requirements//////
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');


//////files///////
var passport = require('./services/passport.js');
var userCtrl = require('./controllers/userCtrl.js');
var config = require('./config.js');
var cohortCtrl = require('./controllers/cohortCtrl.js');



/////
var app = express();

var port = config.port;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());



var mongoUri = config.mongoUri;
mongoose.connect(mongoUri, function(err) {
  if(err) throw err;
}); //default port number to connect to mongoose
//second part says once you open connection one time, it'll consolelog
//you can put url in 'open' area
mongoose.connection.once('open', function(){
  console.log('successfully connected to mongodb');
});



//////////////Endpoints///////////////


//user//
app.post('/api/user', function(req, res, next) {
  console.log('running endpoint');
  next();
},userCtrl.addUser); //makes new user
app.get('/api/user', userCtrl.getUser); //
app.get('/api/getCurrentUser', userCtrl.getCurrentUser);
//current user , goes to user controller, res.send(req.user) sends back current user
    //call endpoint in resolve

//login//
app.post('/api/login', passport.authenticate( 'local-auth', {
  successRedirect: '/api/getCurrentUser'
  }
));
//logout//
app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send("logged out");
});

//cohort//
app.post('/api/cohort', cohortCtrl.addCohort);
app.get('/api/cohort', cohortCtrl.retreive);
app.delete('/api/cohort/:id', cohortCtrl.remove);













app.listen(port, function() {
  console.log('now listening at port ' + port);
});
