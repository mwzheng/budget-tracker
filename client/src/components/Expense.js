import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/stringHelpers';

const Expense = ({ anExpense }) => {
    const { _id, expenseType, cost, expense } = anExpense;
    const { deleteExpense } = useContext(GlobalContext);

    return <li className={expenseType}>
        {expense}
        <span className='cost'>
            <span className='theCost'>{numberWithCommas(cost.toFixed(2))} </span>
            <span onClick={() => deleteExpense(_id)} className='delete_btn'>X</span>
        </span></li>
}

export default Expense;