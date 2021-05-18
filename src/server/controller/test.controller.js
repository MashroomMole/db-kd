const db = require("../index");
const Test = db.test;

// Create and Save a new Tutorial
exports.create = (req, res) => {

  const test = {
    name: req.body.name,
    status: req.body.status
  }

  Test.create(test)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })

};

exports.findAll = (req, res) => {

  Test.findAll()
    .then(data => {
      res.send(data);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })
};


