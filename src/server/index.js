const dbConfig = require("./config/db-config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: (...msg) => console.log(msg), // Displays all log function call parameters
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model bindings
db.request = require("./models/request.model.js")(sequelize, Sequelize);
db.reservation = require("./models/reservation.model.js")(sequelize, Sequelize);
db.test = require("./models/test")(sequelize, Sequelize);
db.user = require("./models/user.model")(sequelize, Sequelize);
db.position = require("./models/position.model")(sequelize, Sequelize);
db.workplace = require("./models/workplace.model")(sequelize, Sequelize);
db.equipment = require("./models/equipment.model")(sequelize, Sequelize);
db.wdescr = require("./models/wdescr.model")(sequelize, Sequelize);

// Relation definition
db.user.belongsTo(db.position, {foreignKey: 'position_fk', targetKey: 'id'});
db.reservation.belongsTo(db.user, {foreignKey: 'resemployee_fk', targetKey: 'id'});
db.reservation.belongsTo(db.workplace, {foreignKey: 'workplace_fk', targetKey: 'id'});
db.reservation.belongsTo(db.user, {foreignKey: 'resapprovedby_fk', targetKey: 'id', as: 'approvedBy'});
db.workplace.hasMany(db.wdescr, {foreignKey: 'workplace_id', as: 'equipment'})
db.request.belongsTo(db.user, {foreignKey: 'user_fk', targetKey: 'id'});
db.wdescr.belongsTo(db.equipment, {foreignKey: 'equipment_id', targetKey: 'id'});

module.exports = db;
