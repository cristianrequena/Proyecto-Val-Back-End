const db = require("../config/db");
console.log(db)

const selectAll = () => {
    return db.query("SELECT * FROM users");
};

const selectById = (id) => {
    return db.query("SELECT * FROM users WHERE user_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO users (first_name, last_name, email, password_hash, profile_photo) VALUES (?, ?, ?, ?, ?)", 
    [data.first_name, data.last_name, data.email, data.password_hash, data.profile_photo]);
};

const updateById = (id, data) => {
    return db.query("UPDATE users SET first_name = ?, last_name = ?, email = ?, password_hash = ?, profile_photo = ?, created_at = ? WHERE user_id = ?", 
    [data.first_name, data.last_name, data.email, data.password_hash, data.profile_photo, data.created_at, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM users WHERE user_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
