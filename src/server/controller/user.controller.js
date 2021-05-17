const db = require("../index");
const User = db.user;

exports.findAll = (req, res) => {

  User.findAll(
    {include: [{model: db.position}]}

  )
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


