const express = require('express');
const router = express.Router();
const {
  addMedication,
  getMedications,
  markAsTaken
} = require('../controllers/medicationsController');

router.post('/', addMedication);
router.get('/:userId', getMedications);
router.put('/:id/take', markAsTaken);

module.exports = router;

