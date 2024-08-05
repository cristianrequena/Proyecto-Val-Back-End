const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/notes.controller');

router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);
router.get('/:note_id', noteController.getNoteById);
router.put('/:note_id', noteController.updateNote);
router.delete('/:note_id', noteController.deleteNote);

module.exports = router;
