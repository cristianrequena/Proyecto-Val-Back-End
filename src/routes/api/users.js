const router = require('express').Router();

const {checkToken, checkAdmin} = require('../../helpers/middlewares')

const {registerUser, loginUser, recoverUser, getProfile, getAllUsers, getUserById, updateUser, deleteUser} = require('../../controllers/users.controller');


router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/',checkToken, checkAdmin, getAllUsers);
router.get ('/perfil', checkToken, getProfile)
router.get('/:user_id', getUserById);

router.put('/:user_id',checkToken, updateUser);

router.delete('/:user_id',checkToken, deleteUser);


module.exports = router;
