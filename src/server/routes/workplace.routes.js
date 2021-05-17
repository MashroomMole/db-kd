module.exports = app => {
  const workplace = require("../controller/workplace.controller")

  var router = require("express").Router();

  router.get("/", workplace.findAll);
  router.get('/:id', workplace.findOne)

  app.use('/api/workplace', router);
}
