const db = require("../index");
const Equipment = db.position;

// Create and Save a new Position
exports.create = (req, res) => {

  const equipment = {
    description: req.body.description,
  }

  Equipment.create(equipment)
    .then(data => {
      console.log('datatatata', data)

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

  Equipment.findAll()
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


