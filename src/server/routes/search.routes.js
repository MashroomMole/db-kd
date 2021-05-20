module.exports = app => {
  const reservations = require("../controller/reservation.controller.js");
  const requests = require("../controller/request.controller.js")


  var router = require("express").Router();

  router.post("/reservations", reservations.findByRange);
  router.post("/req", requests.findByRange);


  app.use('/api/search', router);
}
