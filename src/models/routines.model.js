const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM routines");
};

const selectById = (id) => {
    return db.query("SELECT * FROM routines WHERE id = ?", [id]);
};

const insert = (routineData) => {
    return db.query("INSERT INTO routines SET ?", [routineData]);
};

const updateById = (id, routineData) => {
    return db.query("UPDATE routines SET ? WHERE id = ?", [routineData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM routines WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
