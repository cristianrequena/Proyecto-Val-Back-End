const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM importantcontacts");
};

const selectById = (id) => {
    return db.query("SELECT * FROM importantcontacts WHERE contact_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO importantcontacts (user_id, name, phone, email, relationship) VALUES (?, ?, ?, ?, ?)", 
    [data.user_id, data.name, data.phone, data.email, data.relationship]);
};

const updateById = (id, data) => {
    return db.query("UPDATE importantcontacts SET user_id = ?, name = ?, phone = ?, email = ?, relationship = ? WHERE contact_id = ?", 
    [data.user_id, data.name, data.phone, data.email, data.relationship, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM importantcontacts WHERE contact_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
