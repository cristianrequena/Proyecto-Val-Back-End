const router = require('express').Router();

const {createGoal, getAllGoals, getGoalById, updateGoal, deleteGoal} = require('../../controllers/goals.controller');

router.post('/', createGoal);
router.get('/', getAllGoals);
router.get('/:goal_id', getGoalById);
router.put('/:goal_id', updateGoal);
router.delete('/:goal_id', deleteGoal);

module.exports = router;
