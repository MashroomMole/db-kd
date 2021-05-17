module.exports = app => {
  const reservations = require("../controller/reservation.controller.js")

  var router = require("express").Router();

  router.post("/", reservations.findByRange);

  app.use('/api/search', router);
}
