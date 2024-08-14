const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM goals");
};

const selectById = (id) => {
    return db.query("SELECT * FROM goals WHERE goal_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO goals (user_id, goal_title, goal_description, target_date, achieved) VALUES (?, ?, ?, ?, ?)", 
    [data.user_id, data.goal_title, data.goal_description, data.target_date, data.achieved]);
};

const updateById = (id, data) => {
    return db.query("UPDATE goals SET user_id = ?, goal_title = ?, goal_description = ?, target_date = ?, achieved = ? WHERE goal_id = ?", 
    [data.user_id, data.goal_title, data.goal_description, data.target_date, data.achieved, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM goals WHERE goal_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
