const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: [true, 'Add an expense']
    },
    expenseType: {
        type: String,
        trim: true,
        required: [true, "Add a type"]
    },
    cost: {
        type: Number,
        required: [true, 'Add a cost']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Expense", ExpenseSchema);