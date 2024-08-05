const Routine = require('../models/routines.model');

const getAllRoutines = async (req, res, next) => {
    try {
        const [routines] = await Routine.selectAll();
        res.json(routines);
    } catch (err) {
        next(err);
    }
};

const getRoutineById = async (req, res, next) => {
    try {
        const [routine] = await Routine.selectById(req.params.routine_id);
        if (routine.length === 0) {
            return res.status(404).json({ error: "Routine not found" });
        }
        res.json(routine[0]);
    } catch (err) {
        next(err);
    }
};

const createRoutine = async (req, res, next) => {
    try {
        const [newRoutine] = await Routine.insert(req.body);
        const [[routine]] = await Routine.selectById(newRoutine.insertId);
        res.json(routine);
    } catch (err) {
        next(err);
    }
};

const updateRoutine = async (req, res, next) => {
    try {
        const { routine_id } = req.params;
        await Routine.updateById(routine_id, req.body);
        const [[routine]] = await Routine.selectById(routine_id);
        res.json(routine);
    } catch (err) {
        next(err);
    }
};

const deleteRoutine = async (req, res, next) => {
    try {
        const { routine_id } = req.params;
        const [result] = await Routine.deleteById(routine_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Routine deleted" });
        } else {
            res.status(404).json({ message: "Routine not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllRoutines,
    getRoutineById,
    createRoutine,
    updateRoutine,
    deleteRoutine,
};
