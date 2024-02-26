//? Dependencies
const { Sequelize } = require("sequelize");
require("dotenv").config();

//? Models
const CountryModel = require("./models/Countries");
const ActivityModel = require("./models/Activities");

//? Connection to SQL
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  { logging: false, native: false }
);

//? Instances of models
CountryModel(sequelize);
ActivityModel(sequelize);

//? Relations of models
const { Countries, Activities } = sequelize.models;

CountriesActivities = sequelize.define("countries_activities");
Countries.belongsToMany(Activities, {
  through: CountriesActivities,
  timestamps: true,
});
Activities.belongsToMany(Countries, {
  through: CountriesActivities,
  timestamps: true,
});

module.exports = {
  ...sequelize.models,
  CountriesActivities,
  connection: sequelize,
};
