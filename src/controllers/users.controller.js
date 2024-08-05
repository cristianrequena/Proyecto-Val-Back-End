const User = require("../models/users.model");

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

const createUser = async (req, res, next) => {
    try {
        const [newUser] = await User.insert(req.body);
        const [[user]] = await User.selectById(newUser.insertId);
        res.json(user);
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
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
