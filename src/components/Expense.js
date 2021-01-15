import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Expense = ({ anExpense }) => {
    const { id, type, cost, expense } = anExpense;
    const { deleteExpense } = useContext(GlobalContext);

    return <li className={type}>{expense}
        <span className='i'>
            <span className='theCost'>{cost.toFixed(2)} </span>
            <span onClick={() => deleteExpense(id)} className='delete_btn'>X</span>
        </span></li>
}

export default Expense;