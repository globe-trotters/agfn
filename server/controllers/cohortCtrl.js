var Cohort = require('./../models/cohort.js');
var Students = require('./../models/student.js');

module.exports = {


  addCohort: function(req, res) {
        // console.log('req.body: ', req.body);
        var studentIdArray = [];
        var completed = 0;
        for(var i = 0; i < req.body.students.length; i++){
          Students.create(req.body.students[i], function(err, result){
            console.log('Student Created in Backend');
            if(err) {
              console.log(err);
            }
            else{
              studentIdArray.push(result._id);
            }
            completed++;
            if(completed >= req.body.students.length){
              // console.log('Finished Creating Students', studentIdArray);
              var newCohort= req.body.cohort;
              newCohort.students = studentIdArray;
              // console.log('going to create ' + newCohort);
              Cohort.create(newCohort, function(err2, result){
                // console.log('created Cohort');
                if (err2) {
                  console.error('Save Error: ', err2);
                  return res.status(500).send(err2);
                }
                else{
                  console.log('<<<<<<<<<<<<<<<<<< DONE >>>>>>>>>>>>>>>>>>>>');
                   return res.send(result);
                }
              });
            }
          });
        }
    },

  retreive: function(req, res){
    // console.log('Reading!');
    Cohort.find({})
    .populate('students')
    .exec(function(err, result){
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
  },

  update: function(req, res){
    // console.log('hit update backend ctrl');
    Cohort.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
      if(err){
        res.status(500).send(err);
      }
      else{
        // console.log('updated successfully');
        res.send(result);
      }
    })
  }


};
