const db = require("../config/db");

   const selectAll = () => {
        return db.query("SELECT * FROM users");
    };

    const selectById =  (id) => {
        return db.query("SELECT * FROM users WHERE id = ?", [id]);
    };

    const insert = (userData) => {
        return db.query("INSERT INTO users SET ?", [userData]);
    };

    const updateById =  (id, userData) => {
        return db.query("UPDATE users SET ? WHERE id = ?", [userData, id]);
    };

    const deleteById =  (id) => {
        return db.query("DELETE FROM users WHERE id = ?", [id]);
    };


module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById,

};
