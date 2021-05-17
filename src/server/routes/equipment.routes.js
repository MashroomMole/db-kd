module.exports = app => {
  const equipment = require("../controller/equipment.controller")

  var router = require("express").Router();

  router.get("/", equipment.findAll);

  app.use('/api/equipment', router);
}
