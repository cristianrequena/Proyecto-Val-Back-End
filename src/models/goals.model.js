const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM goals");
};

const selectById = (id) => {
    return db.query("SELECT * FROM goals WHERE id = ?", [id]);
};

const insert = (goalData) => {
    return db.query("INSERT INTO goals SET ?", [goalData]);
};

const updateById = (id, goalData) => {
    return db.query("UPDATE goals SET ? WHERE id = ?", [goalData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM goals WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
