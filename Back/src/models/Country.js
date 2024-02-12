const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, { timestamps: false });
};