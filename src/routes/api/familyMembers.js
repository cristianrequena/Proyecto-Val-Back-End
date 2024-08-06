const router = require('express').Router();

const {createFamilyMember, getAllFamilyMembers, getFamilyMemberById, updateFamilyMember, deleteFamilyMember} = require('../../controllers/familyMembers.controller');

router.post('/', createFamilyMember);
router.get('/', getAllFamilyMembers);
router.get('/:familyMember_id', getFamilyMemberById);
router.put('/:familyMember_id', updateFamilyMember);
router.delete('/:familyMember_id', deleteFamilyMember);

module.exports = router;
