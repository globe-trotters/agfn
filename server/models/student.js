var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var studentSchema = Schema({
  // cohort: { type: String },
  name: { type: String,  required: 'true' },
  homeData: { type:  Schema.Types.Mixed,  required: 'true' },
  afterData: { type: Schema.Types.Mixed},
  job: { type: Boolean},
});


module.exports = mongoose.model('Student', studentSchema);
