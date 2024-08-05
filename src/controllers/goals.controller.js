const Goal = require('../models/goals.model');

const getAllGoals = async (req, res, next) => {
    try {
        const [goals] = await Goal.selectAll();
        res.json(goals);
    } catch (err) {
        next(err);
    }
};

const getGoalById = async (req, res, next) => {
    try {
        const [goal] = await Goal.selectById(req.params.goal_id);
        if (goal.length === 0) {
            return res.status(404).json({ error: "Goal not found" });
        }
        res.json(goal[0]);
    } catch (err) {
        next(err);
    }
};

const createGoal = async (req, res, next) => {
    try {
        const [newGoal] = await Goal.insert(req.body);
        const [[goal]] = await Goal.selectById(newGoal.insertId);
        res.json(goal);
    } catch (err) {
        next(err);
    }
};

const updateGoal = async (req, res, next) => {
    try {
        const { goal_id } = req.params;
        await Goal.updateById(goal_id, req.body);
        const [[goal]] = await Goal.selectById(goal_id);
        res.json(goal);
    } catch (err) {
        next(err);
    }
};

const deleteGoal = async (req, res, next) => {
    try {
        const { goal_id } = req.params;
        const [result] = await Goal.deleteById(goal_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Goal deleted" });
        } else {
            res.status(404).json({ message: "Goal not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllGoals,
    getGoalById,
    createGoal,
    updateGoal,
    deleteGoal,
};
