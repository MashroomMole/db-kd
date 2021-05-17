module.exports = app => {
  const admin = require("../controller/admin.controller")

  var router = require("express").Router();

  router.get("/", admin.findAll);

  app.use('/api/admin', router);
}
