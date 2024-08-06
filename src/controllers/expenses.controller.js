const Expense = require('../models/expenses.model');

const getAllExpenses = async (req, res, next) => {
    try {
        const [expenses] = await Expense.selectAll();
        res.json(expenses);
    } catch (err) {
        next(err);
    }
};

const getExpenseById = async (req, res, next) => {
    try {
        const [expense] = await Expense.selectById(req.params.expense_id);
        if (expense.length === 0) {
            return res.status(404).json({ error: "Expense not found" });
        }
        res.json(expense[0]);
    } catch (err) {
        next(err);
    }
};

const createExpense = async (req, res, next) => {
    try {
        const [newExpense] = await Expense.insert(req.body);
        const [[expense]] = await Expense.selectById(newExpense.insertId);
        res.json(expense);
    } catch (err) {
        next(err);
    }
};

const updateExpense = async (req, res, next) => {
    try {
        const { expense_id } = req.params;
        await Expense.updateById(expense_id, req.body);
        const [[expense]] = await Expense.selectById(expense_id);
        res.json(expense);
    } catch (err) {
        next(err);
    }
};

const deleteExpense = async (req, res, next) => {
    try {
        const { expense_id } = req.params;
        const [result] = await Expense.deleteById(expense_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Expense deleted" });
        } else {
            res.status(404).json({ message: "Expense not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense,
};
