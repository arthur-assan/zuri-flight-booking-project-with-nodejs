const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlight)
router.post('/', controller.createFlight)
router.get('/:id', controller.getSingleFlight)
router.delete('/:id', controller.deleteFlight)
router.patch('/:id', controller.updateFlight)

module.exports = router;

