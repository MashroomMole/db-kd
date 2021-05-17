module.exports = app => {
  const position = require("../controller/position.controller")

  var router = require("express").Router();

  router.get("/", position.findAll);

  router.post("/", position.create);


  app.use('/api/position', router);
}
