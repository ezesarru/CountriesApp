const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activities', {

    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'), // !!! that are strings not numbers..
      allowNull: false
    },

    duration: {
      type: DataTypes.FLOAT, // !!! in hours
      allowNull: true
    },

    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'), //! do a checkbox
      allowNull: false,
    }

  }, { timestamps: false });
};