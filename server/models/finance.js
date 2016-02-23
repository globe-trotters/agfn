var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Finance = Schema({
    title: {type: String}, 
    tuition: {type: String},
    housing: {type: String},
    expenses: {type: String},
    totalCost: {type: String},
    salary: {type: String}
});

module.exports = mongoose.model('Finance', Finance);
