var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = require('./student');


var cohortSchema = Schema({
  title: { type: String, required: 'true' },
  cohortData: { type: Object, required: 'true' },
  startBootcamp: { type: Date, required: 'true' },
  endBootcamp: { type: Date, required: 'true' },
  students: [{
    name: { type: String },
    homeData: { type: Object },
    afterData: { type: Object },
    job: { type: Boolean },
  }]
});


module.exports = mongoose.model('Cohort', cohortSchema);
