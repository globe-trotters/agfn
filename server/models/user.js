var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = Schema({

	  username: {type: String, required: true},
    password: {type: String, required: true}

});


///////////bcrypt/////////////
User.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validatePassword = function( password ) {
	return bcrypt.compareSync(password, this.password);
};


//////////?//////////////////
User.pre('save', function(next){
 var user = this;
 if(!user.isModified('password')) return next();
 user.password = User.methods.generateHash(user.password);

 next();
});

module.exports = mongoose.model('User', User);
