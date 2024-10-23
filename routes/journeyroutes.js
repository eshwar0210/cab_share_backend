const express = require('express');
const router = express.Router();

const journeyController = require('../controllers/journeycontroller.js');

router.post('/',journeyController.createnewjourney);
router.get('/date/:date',journeyController.getJourneysByDate);
router.get('/:userid',journeyController.getJourneysByUid);
router.put('/:id',journeyController.editJourney);
router.delete('/:id',journeyController.deleteJourney);

module.exports = router;