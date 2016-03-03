var User = require('../models/user.js');

module.exports = {

	addUser: function(req, res) {
    // console.log(req.body);
		new User(req.body).save(function(err, user) {
			if (err) {
        console.error('error: ', err);
				res.status(500).send(err);
			} else {
        console.log('success');
				console.log(user);
				res.send(user);
			}
		});
	},


  getCurrentUser: function(req, res) {
    if(req.user){
      res.status(200).send(req.user);
    } else {
      res.status(403).send('forbidden');
    }
	},


  getUser: function(req, res) {
    // console.log('hi');
		User.findById( req.query.id, function(err, user) {
			if (err) {
				// return console.error(err);
        res.statu(500).send(err);
			} else {
				res.send(user);
			}
		});
	},

	logout: function(req, res) {
        req.logout();
        res.redirect('/');
    },

  isAuth: function(req,res, next) {
  if(req.user) {
    next();
  } else {
    res.status(403).send('Not Permitted');
  }
}


};
