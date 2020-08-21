var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights.js')

/* GET users listing. */


router.get('/', flightCtrl.index);

module.exports = router;
