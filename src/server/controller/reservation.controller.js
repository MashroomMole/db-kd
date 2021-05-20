const db = require("../index");
const {Op} = require("sequelize");
const Reservation = db.reservation;
const Workplace = db.workplace;

// Create and Save a new Reservation
exports.create = async (req, res) => {

  await Workplace.findOne({
    where: {
      room: req.body.room, desk: req.body.desk
    }
  }).then(res => {
      if (res) {
        return Reservation.create({
          type: req.body.type,
          status: 'New',
          submission_date: db.sequelize.literal('CURRENT_TIMESTAMP'),
          requested_for: [
            new Date(req.body.date_from),
            new Date(req.body.date_to)
          ],
          resemployee_fk: 9,
          resapprovedby_fk: req.body.resapprovedby_fk,
          workplace_fk: res.get("id")
        })
      }
    })
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

// Retrieve all Reservations from the database.
exports.findAll = async (req, res) => {
//   await db.sequelize.query('SELECT "first_name", "last_name", "resemployee_fk" FROM "reservation" JOIN "employee" ON "resemployee_fk" = "employee_id" ',
//     {
//       type: QueryTypes.SELECT
//     })
// };

   await Reservation.findAll(
     {
     include: [
       {
       model: db.user,
       attributes: ['first_name', 'last_name']
       },
       {
         model: db.workplace,
         include: [{
           model: db.wdescr, as: 'equipment',
           include: db.equipment
         }
         ]
       },
       {
         model: db.user,
         attributes: ['first_name', 'last_name'],
         as: 'approvedBy'
       }
     ],
       order: [['id', 'DESC']],
     }
   )
    .then(data => {
      res.send(data);
      console.log("All reservations:", JSON.stringify(data, null, 4));

    })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred"
       })
     })
}

// Find a single Reservation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Reservation.findByPk(id).then(
    data => {
      res.send(data);
      console.log("Reservation:", JSON.stringify(data, null, 4));

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })
};

// Update a Reservation by the id in the request
exports.update = async (req, res) => {
  const data = req.body;

  await Reservation.update({
      id: data.id,
      type: data.type,
      status: 'Approved',
      resemployee_fk: data.resemployee_fk,
      workplace_fk: data.workplace_fk,
      resapprovedby_fk: '10'
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


// Delete a Reservation with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  await Reservation.destroy({
    where: {id}
  })
    .then(
      () => {
        res.sendStatus(204);
      })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    });
};

// Searches for Reservations within data range.
exports.findByRange = async (req, res) => {
  if (!req.body.type) {


    await Reservation.findAll(
    {
      where: {
        requested_for: {
          [Op.overlap]: [
            new Date(req.body.date_from),
            new Date(req.body.date_to)
          ]
        }
      },
      include: [
        {
          model: db.user,
          attributes: ['first_name', 'last_name']
        },
        {
          model: db.workplace,
          include: [{
            model: db.wdescr, as: 'equipment',
            include: db.equipment
          }
          ]
        },
        {
          model: db.user,
          attributes: ['first_name', 'last_name'],
          as: 'approvedBy'
        }
      ]
    }
  )
    .then(data => {
      res.send(data);
      console.log("All reservations:", JSON.stringify(data, null, 4));

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })
    }
}

