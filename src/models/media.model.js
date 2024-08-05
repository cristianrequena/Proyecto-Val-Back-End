const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM media");
};

const selectById = (id) => {
    return db.query("SELECT * FROM media WHERE id = ?", [id]);
};

const insert = (mediaData) => {
    return db.query("INSERT INTO media SET ?", [mediaData]);
};

const updateById = (id, mediaData) => {
    return db.query("UPDATE media SET ? WHERE id = ?", [mediaData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM media WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
