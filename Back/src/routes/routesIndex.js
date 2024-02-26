//? Dependencies
const express = require("express");
const router = express.Router();

//? Controllers
const getActivities = require("../controllers/getActivities");
const getCountries = require("../controllers/getCountries");
const getCountry = require("../controllers/getCountry");
const getCountriesByName = require("../controllers/getCountriesByName");
const postActivity = require("../controllers/postActivity");
const getCountriesForForm = require("../controllers/getCountriesForForm");

//? Routes
router.get("/countries", getCountries);
router.get("/countries/search", getCountriesByName);
router.get("/countries/:id", getCountry);
router.get("/form", getCountriesForForm);
router.post("/activities", postActivity);
router.get("/activities", getActivities);

module.exports = router;
