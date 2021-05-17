module.exports = (sequelize, Sequelize) => {
  const Workplace = sequelize.define('workplace', {
      floor: {
        type: Sequelize.INTEGER,
      },
      room: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      desk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    })

  return Workplace;
};



