const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM events");
};

const selectById = (id) => {
    return db.query("SELECT * FROM events WHERE event_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO events (member_id, event_title, event_description, event_date, reminder, reminder_time) VALUES (?, ?, ?, ?, ?, ?)", 
    [data.member_id, data.event_title, data.event_description, data.event_date, data.reminder, data.reminder_time]);
};

const updateById = (id, data) => {
    return db.query("UPDATE events SET member_id = ?, event_title = ?, event_description = ?, event_date = ?, reminder = ?, reminder_time = ? WHERE event_id = ?", 
    [data.member_id, data.event_title, data.event_description, data.event_date, data.reminder, data.reminder_time, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM events WHERE event_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
