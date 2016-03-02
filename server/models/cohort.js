var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var studentSchema = require('./student');


var cohortSchema = Schema({
  title: { type: String, required: 'true' },
  cohortData: { type: Schema.Types.Mixed, required: 'true' },
  startBootcamp: { type: Date, required: 'true' },
  endBootcamp: { type: Date, required: 'true' },
  students: [{type: Schema.Types.ObjectId, ref: 'Students'}]
});


module.exports = mongoose.model('Cohort', cohortSchema);
