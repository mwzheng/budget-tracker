import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../utils/stringHelpers';

const AddExpense = () => {
    const { inital, expenses, addExpense } = useContext(GlobalContext);
    const [description, setDescription] = useState('');
    const [expenseType, setExpenseType] = useState('need');
    const [descriptionError, setDescriptionError] = useState('');
    const [addError, setAddError] = useState('');
    const [cost, setCost] = useState(0);

    const expenseAmounts = expenses.map(anExpense => anExpense.cost);
    const totalExpense = (expenseAmounts.length > 0) ? expenseAmounts.reduce((acc, cost) => (acc += cost)).toFixed(2) : 0;

    // Outputs description error if one isn't entered
    const descriptionHandler = (e) => {
        const input = e.target.value.toProperCase();
        setDescription(input);

        const isEmptyDescrption = input.trim() === "";
        (isEmptyDescrption) ? setDescriptionError("Please enter a description") : setDescriptionError("");
    }

    // Checks if the amount you're entering causes you to go over budget
    const isOverLimit = () => {
        const overLimit = parseFloat(totalExpense) + parseFloat(cost) > parseFloat(inital);
        (overLimit) ? setAddError("Passed your budget") : setAddError("");
        return overLimit;
    }

    // Adds a new expense to the list if all inputs are valid
    const makeNewExpense = () => {
        if (isOverLimit()) return;

        let allFieldsValid = (descriptionError === "" && description !== "" && addError === "");

        if (allFieldsValid) {
            const newExpense = {
                expenseType: expenseType,
                expense: description,
                cost: +cost
            }

            addExpense(newExpense);
        }
    }

    // Checks if amount is over limit every time you change the amount input
    const amountHandler = (e) => {
        isOverLimit();
        setCost(e.target.value)
    }

    // Based on which input box is clicked, clear its prev input
    const clearInput = (e) => {
        e.target.value = "";
        let placeholder = e.target.placeholder;
        (placeholder.includes("Amount")) ? setCost("") : setDescription("");
    }

    return <div className='add_container'>
        <h2>Add New Expense</h2>
        <div>
            <label htmlFor='text'>Description & Type</label>
            <input type='text' value={description} onClick={e => clearInput(e)} onChange={e => descriptionHandler(e)} placeholder='Add Description...' ></input>
            <select value={expenseType} onChange={e => setExpenseType(e.target.value)}>
                <option value="need">Needs</option>
                <option value="want">Wants</option>
                <option value="savingOrDebt">Savings/Debts</option>
            </select>
            <label className='error'>{descriptionError}</label>
        </div>
        <div>
            <label htmlFor='number'>Amount</label>
            <input type='number' value={cost} onClick={e => clearInput(e)} onChange={e => amountHandler(e)} placeholder='Add Amount...' ></input>
        </div>
        <button className='add_btn' onClick={makeNewExpense}>{addError !== "" ? "Over Budget" : "Add Expense"}</button>
        <label className='error'>{addError}</label>
    </div>
}

export default AddExpense;