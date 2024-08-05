const ImportantContact = require('../models/importantContacts.model');

const getAllImportantContacts = async (req, res, next) => {
    try {
        const [importantContacts] = await ImportantContact.selectAll();
        res.json(importantContacts);
    } catch (err) {
        next(err);
    }
};

const getImportantContactById = async (req, res, next) => {
    try {
        const [importantContact] = await ImportantContact.selectById(req.params.importantContact_id);
        if (importantContact.length === 0) {
            return res.status(404).json({ error: "Important Contact not found" });
        }
        res.json(importantContact[0]);
    } catch (err) {
        next(err);
    }
};

const createImportantContact = async (req, res, next) => {
    try {
        const [newImportantContact] = await ImportantContact.insert(req.body);
        const [[importantContact]] = await ImportantContact.selectById(newImportantContact.insertId);
        res.json(importantContact);
    } catch (err) {
        next(err);
    }
};

const updateImportantContact = async (req, res, next) => {
    try {
        const { importantContact_id } = req.params;
        await ImportantContact.updateById(importantContact_id, req.body);
        const [[importantContact]] = await ImportantContact.selectById(importantContact_id);
        res.json(importantContact);
    } catch (err) {
        next(err);
    }
};

const deleteImportantContact = async (req, res, next) => {
    try {
        const { importantContact_id } = req.params;
        const [result] = await ImportantContact.deleteById(importantContact_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Important Contact deleted" });
        } else {
            res.status(404).json({ message: "Important Contact not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllImportantContacts,
    getImportantContactById,
    createImportantContact,
    updateImportantContact,
    deleteImportantContact,
};
