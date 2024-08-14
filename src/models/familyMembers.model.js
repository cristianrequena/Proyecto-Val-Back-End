const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM familymembers");
};

const selectById = (id) => {
    return db.query("SELECT * FROM familymembers WHERE member_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO familymembers (user_id, first_name, last_name, date_of_birth, relationship, is_primary, pet, profile_photo, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
    [data.user_id, data.first_name, data.last_name, data.date_of_birth, data.relationship, data.is_primary, data.pet, data.profile_photo, data.created_at]);
};

const updateById = (id, data) => {
    return db.query("UPDATE familymembers SET user_id = ?, first_name = ?, last_name = ?, date_of_birth = ?, relationship = ?, is_primary = ?, pet = ?, profile_photo = ?, created_at = ? WHERE member_id = ?", 
    [data.user_id, data.first_name, data.last_name, data.date_of_birth, data.relationship, data.is_primary, data.pet, data.profile_photo, data.created_at, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM familymembers WHERE member_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
