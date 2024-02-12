//? Dependencies
const { Sequelize } = require("sequelize");
require("dotenv").config();

//? Models
const CountryModel = require('./models/Country')

//? Connection to SQL
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, 
  { logging: false, native: false }
);

//? Instances of models
CountryModel(sequelize)

//? Relations of models
const { Country } = sequelize.models;


module.exports = {
  Country, 
  conn: sequelize,     
};