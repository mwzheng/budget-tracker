import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddExpense = () => {
    const { inital, expenses, addExpense } = useContext(GlobalContext);
    const [description, setDescription] = useState('');
    const [expenseType, setExpenseType] = useState('need');
    const [descriptionError, setDescriptionError] = useState('');
    const [addError, setAddError] = useState('');
    const [cost, setCost] = useState(0);

    const expenseAmounts = expenses.map(anExpense => anExpense.cost);
    const totalExpense = (expenseAmounts.length > 0) ? expenseAmounts.reduce((acc, cost) => (acc += cost)).toFixed(2) : 0;

    const descriptionHandler = (e) => {
        const input = e.target.value.trim()
        setDescription(input)

        if (input === "") {
            setDescriptionError("Please enter a description");
        } else {
            if (descriptionError !== "") {
                setDescriptionError("");
            }
        }
    }

    const makeNewExpense = () => {
        addHandler();

        if (descriptionError === "" && description !== "" && addError === "") {
            const newExpense = {
                id: Math.floor(Math.random() * 10000000),
                type: expenseType,
                expense: description,
                cost: +cost
            }

            addExpense(newExpense);
        }
    }

    const addHandler = () => {
        if (parseFloat(totalExpense) + parseFloat(cost) > parseFloat(inital)) {
            setAddError("Passed your budget")
        } else {
            setAddError("")
        }
    }

    const clearInput = (e) => {
        e.target.value = "";
        let holder = e.target.placeholder;

        if (holder.includes("Amount")) {
            setCost("")
        } else {
            setDescription("")
        }

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
                <option value="add">Add to Budget</option>
            </select>
            <label className='error'>{descriptionError}</label>
        </div>
        <div>
            <label htmlFor='number'>Amount</label>
            <input type='number' value={cost} onClick={e => clearInput(e)} onChange={e => setCost(e.target.value)} placeholder='Add Amount...' ></input>
        </div>
        <button className='add_btn' onClick={makeNewExpense}>{addError !== "" ? "Over Budget" : "Add Expense"}</button>
        <label className='error'>{addError}</label>
    </div>
}

export default AddExpense;