import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Expense from './Expense'

const ExpenseList = () => {
    const { expenses } = useContext(GlobalContext)

    return <div className='expense_list_container'>
        <h2>Expenses</h2>
        <ul>
            {expenses.map(anExpense => {
                return <Expense key={anExpense.id} anExpense={anExpense} />
            })}
        </ul>
    </div>
}

export default ExpenseList;