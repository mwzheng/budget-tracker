import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/stringHelpers';

const Budget = () => {
    const { inital, expenses } = useContext(GlobalContext);
    const expenseAmounts = expenses.map(anExpense => anExpense.cost);
    const totalExpense = (expenseAmounts.length > 0) ? expenseAmounts.reduce((acc, cost) => (acc += cost)).toFixed(2) : 0;
    const remainingExpense = (inital - totalExpense).toFixed(2);

    return <div className='budget_container'>
        <h2>Budget:</h2>
        <h3>Total: ${numberWithCommas(inital.toFixed(2))}</h3>
        <h3>Remaining: ${numberWithCommas(remainingExpense)}</h3>
    </div>
}

export default Budget;