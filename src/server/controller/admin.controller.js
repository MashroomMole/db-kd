const db = require("../index");
const {QueryTypes} = require("sequelize");

exports.findAll = async (req, res) => {

  await db.sequelize.query(
        'SELECT * FROM "reservation"',
        {
          logging: console.log,
          type: QueryTypes.SELECT,
          raw: true,

        })
      .then(
          flatData => {
            console.log(flatData)
          res.send(flatData);
          console.log("All reservations and Requests:", JSON.stringify(data, null, 4));
        }
      )
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      })
    })
};

// Retrieve all Reservations and Requests from the database.
// exports.findAll = async (req, res) => {

  // Promise.all([
  //   Request.findAll(),
  //   Reservation.findAll(),
  // ]).then((modelReturn) => resolve(modelReturn.flat()))
  //   .then(
  //   data => {
  //     res.send(data);
  //     console.log("All reservations and Requests:", JSON.stringify(data, null, 4));
  //   }
  // )
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred"
  //     })
  //   })
// };
