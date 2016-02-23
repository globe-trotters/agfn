var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cohortSchema = Schema({
  title: { type: String, required: 'true' },
  location: { type: String, required: 'true' },
  startBootcamp: { type: Date, required: 'true' },
  endBootcamp: { type: Date, required: 'true' }
  // students: { ref }
});


module.exports = mongoose.model('Cohort', cohortSchema);
