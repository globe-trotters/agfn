var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var studentSchema = Schema({
  name: { type: String },
  // cohort: {ref},
  home: { type: String },
  endLocation: { type: String },
  job: { type: Boolean },
});


module.exports = mongoose.model('Student', studentSchema);
