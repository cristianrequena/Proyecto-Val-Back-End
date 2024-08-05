const Task = require('../models/tasks.model');

const getAllTasks = async (req, res, next) => {
    try {
        const [tasks] = await Task.selectAll();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const [task] = await Task.selectById(req.params.task_id);
        if (task.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task[0]);
    } catch (err) {
        next(err);
    }
};

const createTask = async (req, res, next) => {
    try {
        const [newTask] = await Task.insert(req.body);
        const [[task]] = await Task.selectById(newTask.insertId);
        res.json(task);
    } catch (err) {
        next(err);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const { task_id } = req.params;
        await Task.updateById(task_id, req.body);
        const [[task]] = await Task.selectById(task_id);
        res.json(task);
    } catch (err) {
        next(err);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const { task_id } = req.params;
        const [result] = await Task.deleteById(task_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Task deleted" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
