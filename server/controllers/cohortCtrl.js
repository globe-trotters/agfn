var Cohort = require('./../models/cohort.js');
var Students = require('./../models/student.js');

module.exports = {


  addCohort: function(req, res) {
        console.log('req.body: ', req.body);
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
              console.log('Finished Creating Students', studentIdArray);
              var newCohort= req.body.cohort;
              newCohort.students = studentIdArray;
              console.log('going to create ' + newCohort);
              Cohort.create(newCohort, function(err2, result){
                console.log('created Cohort');
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
    console.log('Reading!');
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
        console.log('remove ctrl');
        res.send(result);
      }
    });
  },

  update: function(req, res){
    console.log('hit update backend ctrl');
    var studentIds = [];
    var success = 0;
    var errors = 0;
    for(var i = 0; i < req.body.students.length; i++) {
      studentIds.push(req.body.students[i]._id);
      Students.findByIdAndUpdate(req.body.students[i]._id, req.body.students[i], function(err, result){
        if(err) {
          errors++;
          console.log('student update failed');
        } else {
          console.log('student update success');
          success++;
        }

        if(errors+success >= req.body.students.length) {
          console.log('Done updating students', studentIds);
          req.body.students = studentIds;
          console.log('Body: ', req.body);
          Cohort.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
            if(err){
              console.error(err);
              res.status(500).send(err);
            }
            else{
              console.log('updated successfully');
              res.send(result);
            }
          });
        }
      });
    }
    console.log('loop over');
    if(req.body.students.length === 0) {
      Cohort.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
        if(err){
          console.error(err);
          res.status(500).send(err);
        }
        else{
          console.log('updated successfully');
          res.send(result);
        }
      });
    }

  }


};
