const express = require('express');
const router = express.Router();
const goalController = require('../../controllers/goals.controller');

router.post('/', goalController.createGoal);
router.get('/', goalController.getAllGoals);
router.get('/:goal_id', goalController.getGoalById);
router.put('/:goal_id', goalController.updateGoal);
router.delete('/:goal_id', goalController.deleteGoal);

module.exports = router;
