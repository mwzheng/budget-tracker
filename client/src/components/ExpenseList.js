import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Expense from './Expense';

const ExpenseList = () => {
    const { expenses, getExpenses } = useContext(GlobalContext);

    useEffect(() => {
        getExpenses();
        // eslint-disable-next-line
    }, []);

    return <div className='expense_list_container'>
        <h2>Expenses</h2>
        <ul>
            {expenses.map(anExpense => {
                return <Expense key={anExpense._id} anExpense={anExpense} />
            })}
        </ul>
    </div>
}

export default ExpenseList;