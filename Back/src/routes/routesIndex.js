//? Dependencies
const express = require("express")
const router = express.Router()

//? Controllers
const getAllActivities = require('../controllers/getAllActivities')
const getAllCountries = require('../controllers/getAllCountries')
const getCountry = require('../controllers/getCountry')
const getNoSpecificCountry = require('../controllers/getNoSpecificCountry')
const postActivity = require('../controllers/postActivity')

//? Routes
router.get('/countries', getAllCountries)
router.get('/countries/name', getNoSpecificCountry)
router.get('/countries/:id', getCountry)
router.post('/activities', postActivity)
router.get('/activities', getAllActivities)

module.exports = router;
