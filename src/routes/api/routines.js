const express = require('express');
const router = express.Router();
const routineController = require('../../controllers/routines.controller');

router.post('/', routineController.createRoutine);
router.get('/', routineController.getAllRoutines);
router.get('/:routine_id', routineController.getRoutineById);
router.put('/:routine_id', routineController.updateRoutine);
router.delete('/:routine_id', routineController.deleteRoutine);

module.exports = router;
