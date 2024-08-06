const router = require('express').Router();

const {createEvent, getAllEvents, getEventById, updateEvent, deleteEvent} = require('../../controllers/events.controller');

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:event_id', getEventById);
router.put('/:event_id', updateEvent);
router.delete('/:event_id', deleteEvent);

module.exports = router;
