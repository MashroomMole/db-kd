module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "brooklyn",
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
