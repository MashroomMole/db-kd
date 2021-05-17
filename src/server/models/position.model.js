module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define('position', {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
    });

  return Position;
};
