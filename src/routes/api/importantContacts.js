const express = require('express');
const router = express.Router();
const importantContactController = require('../controllers/importantContactController');

router.post('/', importantContactController.createImportantContact);
router.get('/', importantContactController.getAllImportantContacts);
router.get('/:id', importantContactController.getImportantContactById);
router.put('/:id', importantContactController.updateImportantContact);
router.delete('/:id', importantContactController.deleteImportantContact);

module.exports = router;
