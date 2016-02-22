var Finance = require('../models/finance.js');

module.exports = {
  create: function(req, res) {
    var newFinance = new Finance(req.body);
    newFinance.save(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  read: function(req, res) {
    Finance
      .find({})
      .exec(function(err, result) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      });
  },

  update: function(req, res) {
    Finance.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function(req, res) {
    Finance.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
};
