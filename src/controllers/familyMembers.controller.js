const FamilyMember = require('../models/familyMembers.model');

const getAllFamilyMembers = async (req, res, next) => {
    try {
        const [familyMembers] = await FamilyMember.selectAll();
        res.json(familyMembers);
    } catch (err) {
        next(err);
    }
};

const getFamilyMemberById = async (req, res, next) => {
    try {
        const [familyMember] = await FamilyMember.selectById(req.params.familyMember_id);
        if (familyMember.length === 0) {
            return res.status(404).json({ error: "Family Member not found" });
        }
        res.json(familyMember[0]);
    } catch (err) {
        next(err);
    }
};

const createFamilyMember = async (req, res, next) => {
    try {
        const [newFamilyMember] = await FamilyMember.insert(req.body);
        const [[familyMember]] = await FamilyMember.selectById(newFamilyMember.insertId);
        res.json(familyMember);
    } catch (err) {
        next(err);
    }
};

const updateFamilyMember = async (req, res, next) => {
    try {
        const { familyMember_id } = req.params;
        await FamilyMember.updateById(familyMember_id, req.body);
        const [[familyMember]] = await FamilyMember.selectById(familyMember_id);
        res.json(familyMember);
    } catch (err) {
        next(err);
    }
};

const deleteFamilyMember = async (req, res, next) => {
    try {
        const { familyMember_id } = req.params;
        const [result] = await FamilyMember.deleteById(familyMember_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Family Member deleted" });
        } else {
            res.status(404).json({ message: "Family Member not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllFamilyMembers,
    getFamilyMemberById,
    createFamilyMember,
    updateFamilyMember,
    deleteFamilyMember,
};
