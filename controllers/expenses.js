const Expense = require("../models/Expense")

// Get all expenses
// route: GET api/v1/expenses
exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find();

        return res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

// Add a new Expense
// route: POST api/v1/expenses
exports.addExpenses = async (req, res, next) => {
    try {
        const { expense, cost, expenseType } = req.body;
        const newExpense = await Expense.create(req.body);

        return res.status(201).json({
            success: true,
            data: newExpense
        })
    } catch (err) {
        console.log(err)
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: "Server error"
            })
        }
    }
}

// Delete the expense with id
// route: DELETE api/v1/expenses/:id
exports.deleteExpenses = async (req, res, next) => {
    try {
        const expense = await Expense.findById(req.params.id)

        if (!expense) {
            res.status(404).json({
                success: false,
                error: "Expense not found"
            })
        }

        await expense.remove()

        return res.status(200).json({
            success: true,
            data: []
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}