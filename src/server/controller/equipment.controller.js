const db = require("../index");
const Equipment = db.equipment;

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


