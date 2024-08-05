const express = require('express');
const router = express.Router();
const familyMemberController = require('../../controllers/familyMembers.controller');

router.post('/', familyMemberController.createFamilyMember);
router.get('/', familyMemberController.getAllFamilyMembers);
router.get('/:familyMember_id', familyMemberController.getFamilyMemberById);
router.put('/:familyMember_id', familyMemberController.updateFamilyMember);
router.delete('/:familyMember_id', familyMemberController.deleteFamilyMember);

module.exports = router;
