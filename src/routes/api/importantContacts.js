const express = require('express');
const router = express.Router();
const importantContactController = require('../../controllers/importantContacts.controller');

router.post('/', importantContactController.createImportantContact);
router.get('/', importantContactController.getAllImportantContacts);
router.get('/:importantContact_id', importantContactController.getImportantContactById);
router.put('/:importantContact_id', importantContactController.updateImportantContact);
router.delete('/:importantContact_id', importantContactController.deleteImportantContact);

module.exports = router;
