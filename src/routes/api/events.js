const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/events.controller');

router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:event_id', eventController.getEventById);
router.put('/:event_id', eventController.updateEvent);
router.delete('/:event_id', eventController.deleteEvent);

module.exports = router;
