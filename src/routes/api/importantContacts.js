const router = require('express').Router();

const {createImportantContact, getAllImportantContacts, getImportantContactById, updateImportantContact, deleteImportantContact} = require('../../controllers/importantContacts.controller');

router.post('/', createImportantContact);
router.get('/', getAllImportantContacts);
router.get('/:importantContact_id', getImportantContactById);
router.put('/:importantContact_id', updateImportantContact);
router.delete('/:importantContact_id', deleteImportantContact);

module.exports = router;
