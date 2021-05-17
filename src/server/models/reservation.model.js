module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define('reservation', {
      type: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING
      },
      submission_date: {
        type: Sequelize.DATE
      },
      requested_for: {
        type: Sequelize.RANGE(Sequelize.DATE)
      },
      workplace_fk: {
        type: Sequelize.INTEGER
    },
      resemployee_fk : {
        type: Sequelize.INTEGER
      },
      resapprovedby_fk: {
        type: Sequelize.INTEGER
      }
    },

    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    });

  return Reservation;
};
