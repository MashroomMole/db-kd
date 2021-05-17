const db = require("../index");
const Workplace = db.workplace;

exports.findAll = (req, res) => {

  Workplace.findAll()
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

exports.findOne = async (req, res) => {
  const id = req.params.id

  await Workplace.findOne(
    {
      where: {id},
      include: [
        {
          model: db.wdescr,
          as: 'equipment',
          include: db.equipment
        },
      ]
    }
  )
    .then(data => {
      res.send(data);
      console.log("Workplace:", JSON.stringify(data, null, 4));

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })
};
