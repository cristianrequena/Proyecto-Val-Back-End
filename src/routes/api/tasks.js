const router = require('express').Router();

const {createTask, getAllTasks, getTaskById, updateTask, deleteTask} = require('../../controllers/tasks.controller');

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:task_id', getTaskById);
router.put('/:task_id', updateTask);
router.delete('/:task_id', deleteTask);

module.exports = router;
