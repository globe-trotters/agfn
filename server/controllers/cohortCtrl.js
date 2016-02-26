var Cohort = require('./../models/cohort.js');

module.exports = {


  addCohort: function(req, res) {
        console.log('req.body: ', req.body.students);
        var newCohort = new Cohort(req.body);
        newCohort.save(function(err, result) {
          if (err) {
              console.error('Save Error: ', err);
              return res.status(500).send(err);
          } else {
              res.send(result);
              console.log('<<<<<<<<<<<<<<<<<< DONE >>>>>>>>>>>>>>>>>>>>')
          }
        });
    },

  retreive: function(req, res){
    console.log('Reading!');
    Cohort.find({})
    // .populate('students')
    .exec()
    .then(function(err, result){
      if(err){
        console.log(err);
        res.send(err);
      }
      else {
        // console.log('get ctrl');
        res.send(result);
      }
    });
  },


  remove: function(req, res){
    Cohort.findByIdAndRemove(req.params.id, function(err, result){
      if(err){
        res.status(500).send(err);
      }
      else{
        // console.log('remove ctrl');
        res.send(result);
      }
    });
  }


};
