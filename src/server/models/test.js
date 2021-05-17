module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define('test', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

      },
      name: {
        type: Sequelize.STRING(1),
      },
      status: {
        type: Sequelize.STRING(50)
      }
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    });

  return Test;
};
