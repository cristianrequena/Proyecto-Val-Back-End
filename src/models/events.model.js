const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM events");
};

const selectById = (id) => {
    return db.query("SELECT * FROM events WHERE id = ?", [id]);
};

const insert = (eventData) => {
    return db.query("INSERT INTO events SET ?", [eventData]);
};

const updateById = (id, eventData) => {
    return db.query("UPDATE events SET ? WHERE id = ?", [eventData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM events WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
