const db = require("../index");
const {Op} = require("sequelize");

const Request = db.request;

// Create and Save a new Request
exports.create = (req, res) => {
  const request = {
    type: req.body.type,
    status: "New",
    date_from: new Date (req.body.date_from),
    date_to: new Date (req.body.date_to),
    user_fk: req.body.user_fk,
  }

  Request.create(request)
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

// Retrieve all Requests from the database.
exports.findAll = (req, res) => {
Request.findAll(
  {include: [
    {model: db.user}
    ],
    order: [['id', 'DESC']],
  },

)
  .then(data => {
    res.send(data);
    console.log("All requests:", JSON.stringify(data, null, 4));
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred"
    })
  })
};

// Find a single Request with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Request.findByPk(id)
    .then(
    data => {
      res.send(data);
      console.log("Request:", JSON.stringify(data, null, 4));

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })
};

// Update a Request by the id in the request
exports.update = async (req, res) => {
  const data = req.body;

  await Request.update({
    id: data.id,
    type: data.type,
    status: 'Approved',
    date_from: data.date_from,
    date_to: data.date_to,
    user_fk: data.user_fk,
    approvedby_fk: '1'
  },
    {
      where: {id: data.id}
    },
)
      .then(data => {
        res.send(data);
        console.log("Request has been updated: ", JSON.stringify(data, null, 4));
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        })
      })
};

// Delete a Request with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  await Request.destroy({
    where: {id}
  })
    .then(
      () => {
        res.sendStatus(204);

        console.log('param', req.params);
        console.log("Request deleted")
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    });
};

exports.findByRange = async (req, res) => {
      await Request.findAll(
        {
          where: {
            type: req.body.type,
            [Op.or]: [{
              date_from: {
                [Op.between]: [req.body.date_from, req.body.date_to]
              },
              date_to: {
                [Op.between]: [req.body.date_from, req.body.date_to]
              }
            }]
          },
          include: [
            {
              model: db.user,
              attributes: ['first_name', 'last_name']
            }
          ]
        }
      )
        .then(data => {
          res.send(data);
          console.log("All requests:", JSON.stringify(data, null, 4));

        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred"
          })
        })

}
