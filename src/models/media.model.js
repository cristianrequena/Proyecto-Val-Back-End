const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM media");
};

const selectById = (id) => {
    return db.query("SELECT * FROM media WHERE media_id = ?", [id]);
};

const insert = (data) => {
    return db.query("INSERT INTO media (user_id, file_path, file_type, description, uploaded_at) VALUES (?, ?, ?, ?, ?)", 
    [data.user_id, data.file_path, data.file_type, data.description, data.uploaded_at]);
};

const updateById = (id, data) => {
    return db.query("UPDATE media SET user_id = ?, file_path = ?, file_type = ?, description = ?, uploaded_at = ? WHERE media_id = ?", 
    [data.user_id, data.file_path, data.file_type, data.description, data.uploaded_at, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM media WHERE media_id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
