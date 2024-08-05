const db = require("../config/db");

const selectAll = () => {
    return db.query("SELECT * FROM notes");
};

const selectById = (id) => {
    return db.query("SELECT * FROM notes WHERE id = ?", [id]);
};

const insert = (noteData) => {
    return db.query("INSERT INTO notes SET ?", [noteData]);
};

const updateById = (id, noteData) => {
    return db.query("UPDATE notes SET ? WHERE id = ?", [noteData, id]);
};

const deleteById = (id) => {
    return db.query("DELETE FROM notes WHERE id = ?", [id]);
};

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,
};
