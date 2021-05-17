module.exports = app => {
  const requests = require("../controller/request.controller.js")

  var router = require("express").Router();

  router.get("/", requests.findAll);

  router.get("/:id", requests.findOne);

  router.post("/", requests.create);

  router.put("/", requests.update);

  router.delete("/:id", requests.delete);



  app.use('/api/req', router);
}
