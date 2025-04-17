const express = require('express');
const router = express.Router();
const CountryRepository = require('../../infrastructure/repositories/CountryRepository');
const GetAllCountries = require('../../usecases/GetAllCountries');
const GetCountryByName = require('../../usecases/GetCountryByName');
const CountryController = require('../controllers/CountryController');

// DI setup
const repo = new CountryRepository();
const getAll = new GetAllCountries(repo);
const getByName = new GetCountryByName(repo);
const controller = new CountryController(getAll, getByName);

router.get('/', (req, res) => controller.handleGetAll(req, res));
router.get('/:name', (req, res) => controller.handleGetByName(req, res));

module.exports = router;