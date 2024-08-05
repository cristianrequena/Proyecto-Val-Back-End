const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM expenses");
};

const selectById = (id) => {
    return db.query("SELECT * FROM expenses WHERE id = ?", [id]);
};

const insert = (expenseData) => {
    return db.query("INSERT INTO expenses SET ?", [expenseData]);
};

const updateById = (id, expenseData) => {
    return db.query("UPDATE expenses SET ? WHERE id = ?", [expenseData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM expenses WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
