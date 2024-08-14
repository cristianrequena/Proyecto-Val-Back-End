const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM tasks");
};

const selectById = (id) => {
    return db.query("SELECT * FROM tasks WHERE task_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO tasks (member_id, task_title, task_description, due_date, completed) VALUES (?, ?, ?, ?, ?)", 
    [data.member_id, data.task_title, data.task_description, data.due_date, data.completed]);
};

const updateById = (id, data) => {
    return db.query("UPDATE tasks SET member_id = ?, task_title = ?, task_description = ?, due_date = ?, completed = ? WHERE task_id = ?", 
    [data.member_id, data.task_title, data.task_description, data.due_date, data.completed, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM tasks WHERE task_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
