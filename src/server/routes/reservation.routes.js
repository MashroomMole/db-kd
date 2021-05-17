module.exports = app => {
  const reservations = require("../controller/reservation.controller.js")

  var router = require("express").Router();

  router.get("/", reservations.findAll);
  router.get("/:id", reservations.findOne);
  router.post("/", reservations.create);
  router.put("/", reservations.update);
  router.delete("/:id", reservations.delete);

  app.use('/api/reservations', router);
}
