var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var studentSchema = Schema({
  cohort: { type: String },
  name: { type: String,  required: 'true' },
  home: { type: Object,  required: 'true' },
  after: { type: Object,  required: 'true' },
  job: { type: Boolean,  required: 'true' },
});


module.exports = mongoose.model('Student', studentSchema);
