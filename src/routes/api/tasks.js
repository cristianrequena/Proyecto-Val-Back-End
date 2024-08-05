const express = require('express');
const router = express.Router();
const taskController = require('../../controllers/tasks.controller');

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:task_id', taskController.getTaskById);
router.put('/:task_id', taskController.updateTask);
router.delete('/:task_id', taskController.deleteTask);

module.exports = router;
