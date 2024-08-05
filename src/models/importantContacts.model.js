const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM importantContacts");
};

const selectById = (id) => {
    return db.query("SELECT * FROM importantContacts WHERE id = ?", [id]);
};

const insert = (contactData) => {
    return db.query("INSERT INTO importantContacts SET ?", [contactData]);
};

const updateById = (id, contactData) => {
    return db.query("UPDATE importantContacts SET ? WHERE id = ?", [contactData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM importantContacts WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
