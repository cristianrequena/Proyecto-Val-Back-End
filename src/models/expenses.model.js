const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM expenses");
};

const selectById = (id) => {
    return db.query("SELECT * FROM expenses WHERE expense_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO expenses (user_id, amount, expense_date, category, description) VALUES (?, ?, ?, ?, ?)", 
    [data.user_id, data.amount, data.expense_date, data.category, data.description]);
};

const updateById = (id, data) => {
    return db.query("UPDATE expenses SET user_id = ?, amount = ?, expense_date = ?, category = ?, description = ? WHERE expense_id = ?", 
    [data.user_id, data.amount, data.expense_date, data.category, data.description, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM expenses WHERE expense_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
