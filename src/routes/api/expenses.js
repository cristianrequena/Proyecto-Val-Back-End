const router = require('express').Router();

const {createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense} = require('../../controllers/expenses.controller');

router.post('/', createExpense);
router.get('/', getAllExpenses);
router.get('/:expense_id', getExpenseById);
router.put('/:expense_id', updateExpense);
router.delete('/:expense_id', deleteExpense);

module.exports = router;
