const router = require('express').Router();

const {createRoutine, getAllRoutines, getRoutineById, updateRoutine, deleteRoutine} = require('../../controllers/routines.controller');

router.post('/', createRoutine);
router.get('/', getAllRoutines);
router.get('/:routine_id', getRoutineById);
router.put('/:routine_id', updateRoutine);
router.delete('/:routine_id', deleteRoutine);

module.exports = router;
