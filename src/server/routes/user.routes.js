module.exports = app => {
  const user = require("../controller/user.controller")

  var router = require("express").Router();

  router.get("/", user.findAll);

  app.use('/api/user', router);
}
