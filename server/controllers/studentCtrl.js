var Student = require('./../models/student.js');

module.exports = {


  addStudent: function(req, res) {
        // console.log('req.query: ', req.query);
        var newStudent = new Student(req.body);
        newStudent.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

  retreive: function(req, res){
    Student.find({})
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
    Student.findByIdAndRemove(req.params.id, function(err, result){
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
