module.exports = (sequelize, Sequelize) => {
  const Equipment = sequelize.define('equipment', {
      description: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    })

  return Equipment;
};



