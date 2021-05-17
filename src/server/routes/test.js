module.exports = app => {
  const test = require("../controller/test.controller.js")

  var router = require("express").Router();

  router.get("/", test.findAll);

  router.post("/", test.create);



  app.use('/api/test', router);
}
