const router = require('express').Router();

const {createNote, getAllNotes, getNoteById, updateNote, deleteNote} = require('../../controllers/notes.controller');

router.post('/', createNote);
router.get('/', getAllNotes);
router.get('/:note_id', getNoteById);
router.put('/:note_id', updateNote);
router.delete('/:note_id', deleteNote);

module.exports = router;
