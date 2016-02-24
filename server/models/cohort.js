var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cohortSchema = Schema({
  display: { type: String, required: 'true' },
  title: { type: String, required: 'true' },
  location: { type: Object, required: 'true' },
  startBootcamp: { type: Date, required: 'true' },
  endBootcamp: { type: Date, required: 'true' }
  // students: { ref }
});


module.exports = mongoose.model('Cohort', cohortSchema);
