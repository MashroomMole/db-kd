module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      personal_code: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      work_phone: {
        type: Sequelize.STRING(15)
      },
      home_phone: {
        type: Sequelize.STRING(15)
      },
      mobile_phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      department: {
        type: Sequelize.STRING(50)
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_details: {
        type: Sequelize.STRING,
      },
      manager: {
        type: Sequelize.INTEGER
      },
      position_fk: {
        type: Sequelize.INTEGER
       }
      },
        {
          timestamps: false,
          underscored: false,
          freezeTableName: true,
        })

  return User;
};



