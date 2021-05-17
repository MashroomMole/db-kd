module.exports = (sequelize, Sequelize) => {
  const Wdescr = sequelize.define('wdescr', {
      workplace_id: {
        type: Sequelize.INTEGER,
        primary_key: true
      },
      equipment_id: {
        type: Sequelize.INTEGER,
        primary_key: true
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    })

  return Wdescr;
};



