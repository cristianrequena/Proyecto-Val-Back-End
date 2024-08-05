const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM familyMembers");
};

const selectById = (id) => {
    return db.query("SELECT * FROM familyMembers WHERE id = ?", [id]);
};

const insert = (familyMemberData) => {
    return db.query("INSERT INTO familyMembers SET ?", [familyMemberData]);
};

const updateById = (id, familyMemberData) => {
    return db.query("UPDATE familyMembers SET ? WHERE id = ?", [familyMemberData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM familyMembers WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};