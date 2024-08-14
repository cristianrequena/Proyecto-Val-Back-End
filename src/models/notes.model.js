const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM notes");
};

const selectById = (id) => {
    return db.query("SELECT * FROM notes WHERE note_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO notes (user_id, note_title, note_content, created_at) VALUES (?, ?, ?, ?)", 
    [data.user_id, data.note_title, data.note_content, data.created_at]);
};

const updateById = (id, data) => {
    return db.query("UPDATE notes SET user_id = ?, note_title = ?, note_content = ?, created_at = ? WHERE note_id = ?", 
    [data.user_id, data.note_title, data.note_content, data.created_at, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM notes WHERE note_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
