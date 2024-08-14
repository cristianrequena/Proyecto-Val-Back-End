const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM routines");
};

const selectById = (id) => {
    return db.query("SELECT * FROM routines WHERE routine_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO routines (member_id, routine_title, routine_description, start_time, end_time, days_of_week) VALUES (?, ?, ?, ?, ?, ?)", 
    [data.member_id, data.routine_title, data.routine_description, data.start_time, data.end_time, data.days_of_week]);
};

const updateById = (id, data) => {
    return db.query("UPDATE routines SET member_id = ?, routine_title = ?, routine_description = ?, start_time = ?, end_time = ?, days_of_week = ? WHERE routine_id = ?", 
    [data.member_id, data.routine_title, data.routine_description, data.start_time, data.end_time, data.days_of_week, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM routines WHERE routine_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
