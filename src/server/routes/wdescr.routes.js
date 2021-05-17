module.exports = app => {
  const wdescr = require("../controller/wdescr.controller")

  var router = require("express").Router();

  router.get("/", wdescr.findAll);

  app.use('/api/wdescr', router);
}
