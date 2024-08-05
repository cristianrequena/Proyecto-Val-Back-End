const Event = require('../models/events.model');

const getAllEvents = async (req, res, next) => {
    try {
        const [events] = await Event.selectAll();
        res.json(events);
    } catch (err) {
        next(err);
    }
};

const getEventById = async (req, res, next) => {
    try {
        const [event] = await Event.selectById(req.params.event_id);
        if (event.length === 0) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.json(event[0]);
    } catch (err) {
        next(err);
    }
};

const createEvent = async (req, res, next) => {
    try {
        const [newEvent] = await Event.insert(req.body);
        const [[event]] = await Event.selectById(newEvent.insertId);
        res.json(event);
    } catch (err) {
        next(err);
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const { event_id } = req.params;
        await Event.updateById(event_id, req.body);
        const [[event]] = await Event.selectById(event_id);
        res.json(event);
    } catch (err) {
        next(err);
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const { event_id } = req.params;
        const [result] = await Event.deleteById(event_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Event deleted" });
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
};
