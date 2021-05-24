module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: _PASSWORD,
  DB: "mydb",
  dialect: "postgres",
  define: {
    timestamps: false
  },
  options: {
    returning: true,
    plain: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
