const bcrypt = require('bcryptjs')

const User = require("../models/users.model");
const { generateToken } = require("../helpers/utils");


const registerUser = async (req, res, next) => {
     req.body.password_hash  = bcrypt.hashSync(req.body.password_hash, 10)

    try {
        const [newUser] = await User.insert(req.body);
        const [[user]] = await User.selectById(newUser.insertId);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

const loginUser = async(req, res, next) => {
    const {email, password} = req.body;
    
    try {
        const [users] =  await User.getByEmail(email);
        if (users.length === 0) {
          return res.status(401).json({ message: "Usuario no encontrado" });
        }
        const user = users[0];
        console.log("Usuario encontrado:", user);
        const passwordIsValid = bcrypt.compareSync(password, user.password_hash);
        if (!passwordIsValid) {
          return res.status(401).json({ message: "Contraseña inválida" });
        }
        const token = generateToken(user);
        if (!user.user_id) {
          return res
            .status(500)
            .json({ message: "Error interno, el ID del usuario no se encontró" });
        }
        res.json({success: 'Login correcto', token: token})
        /*res.status(200).json({ token, user: user.user_id });*/
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const recoverUser = async(req, res, next) => {
    try {
        
    } catch (err) {
        next(err);
    }
}

const getProfile = (req, res, next) => {
    res.json(req.user);
};
  

const getAllUsers = async (req, res, next) => {
    try {
        const [users] = await User.selectAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const [user] = await User.selectById(req.params.user_id);
        if (user.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user[0]);
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        await User.updateById(user_id, req.body);
        const [[user]] = await User.selectById(user_id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const [result] = await User.deleteById(user_id);
        if (result.affectedRows === 1) {
            res.json({ message: "User deleted" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    registerUser,
    loginUser,
    recoverUser,
    getProfile,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
