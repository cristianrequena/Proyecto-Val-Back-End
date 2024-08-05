const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM tasks");
};

const selectById = (id) => {
    return db.query("SELECT * FROM tasks WHERE id = ?", [id]);
};

const insert = (taskData) => {
    return db.query("INSERT INTO tasks SET ?", [taskData]);
};

const updateById = (id, taskData) => {
    return db.query("UPDATE tasks SET ? WHERE id = ?", [taskData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM tasks WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
