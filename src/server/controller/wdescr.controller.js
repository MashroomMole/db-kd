const db = require("../index");
const Wdescr = db.wdescr;

exports.findAll = (req, res) => {

  Wdescr.findAll()
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


