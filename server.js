const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


let corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const db = require("./src/server");
// db.sequelize.sync();

db.sequelize.sync({ logging: console.log, alter: true });

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'cool' });
});

require("./src/server/routes/request.routes")(app);
require("./src/server/routes/reservation.routes")(app);
require("./src/server/routes/user.routes")(app)
require("./src/server/routes/workplace.routes")(app)
require("./src/server/routes/equipment.routes")(app)
require("./src/server/routes/position.routes")(app)
require("./src/server/routes/wdescr.routes")(app)
require("./src/server/routes/admin.routes")(app)
require("./src/server/routes/search.routes")(app)






require("./src/server/routes/test")(app)



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
