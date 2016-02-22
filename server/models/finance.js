var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Finance = Schema({
    tuition: {type: String, required: true},
    housing: {type: String, required: true},
    expenses: {type: String, required: true},
    totalCost: {type: String, required: true},
    salary: {type: String, required: true}
});

module.exports = mongoose.model('Finance', Finance);
