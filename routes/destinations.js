var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations')


router.post('/flights/:id/destinations', destinationsCtrl.create);
router.delete('/destinations/:dest/:flight', destinationsCtrl.delete)

module.exports = router;
