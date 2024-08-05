const Note = require('../models/notes.model');

const getAllNotes = async (req, res, next) => {
    try {
        const [notes] = await Note.selectAll();
        res.json(notes);
    } catch (err) {
        next(err);
    }
};

const getNoteById = async (req, res, next) => {
    try {
        const [note] = await Note.selectById(req.params.note_id);
        if (note.length === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.json(note[0]);
    } catch (err) {
        next(err);
    }
};

const createNote = async (req, res, next) => {
    try {
        const [newNote] = await Note.insert(req.body);
        const [[note]] = await Note.selectById(newNote.insertId);
        res.json(note);
    } catch (err) {
        next(err);
    }
};

const updateNote = async (req, res, next) => {
    try {
        const { note_id } = req.params;
        await Note.updateById(note_id, req.body);
        const [[note]] = await Note.selectById(note_id);
        res.json(note);
    } catch (err) {
        next(err);
    }
};

const deleteNote = async (req, res, next) => {
    try {
        const { note_id } = req.params;
        const [result] = await Note.deleteById(note_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Note deleted" });
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
};
