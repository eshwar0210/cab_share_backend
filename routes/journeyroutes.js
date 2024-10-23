const express = require('express');
const router = express.Router();

const journeyController = require('../controllers/journeycontroller.js');

router.post('/',journeyController.createnewjourney);
router.get('/date/:date',journeyController.getJourneysByDate);

module.exports = router;