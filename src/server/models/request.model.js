module.exports = (sequelize, Sequelize) => {
  const Request = sequelize.define('request', {
    type: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(50)
    },
    submission_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    date_from: {
      type: Sequelize.DATE,
      allowNull: false
    },
    date_to: {
      type: Sequelize.DATE,
      allowNull: false
    },
    user_fk: {
      type: Sequelize.INTEGER
    },
    approvedby_fk: {
      type: Sequelize.INTEGER
    }
  },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    });

  return Request;
};
