const router = require('express').Router();

const {createUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../../controllers/users.controller');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:user_id', getUserById);
router.put('/:user_id', updateUser);
router.delete('/:user_id', deleteUser);

module.exports = router;
