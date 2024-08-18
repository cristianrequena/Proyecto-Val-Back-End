const router = require('express').Router();

const {registerUser, loginUser, recoverUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../../controllers/users.controller');

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/', getAllUsers);
router.get('/:user_id', getUserById);

router.put('/:user_id', updateUser);

router.delete('/:user_id', deleteUser);

module.exports = router;
