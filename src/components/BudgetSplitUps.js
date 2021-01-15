import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const BudgetSplitUps = () => {
    const { expenses } = useContext(GlobalContext);

    const allNeeds = expenses.filter(anExpense => anExpense.type === 'need');
    const totalNeedsCost = (allNeeds.length > 0) ? allNeeds.map(anExpense => anExpense.cost).reduce((acc, cost) => acc += cost).toFixed(2) : (0).toFixed(2);

    const allWants = expenses.filter(anExpense => anExpense.type === 'want');
    const totalWantsCost = (allWants.length > 0) ? allWants.map(anExpense => anExpense.cost).reduce((acc, cost) => acc += cost).toFixed(2) : (0).toFixed(2);

    const allSavingsOrDebts = expenses.filter(anExpense => anExpense.type === 'savingOrDebt');
    const totalSavingsOrDebts = (allSavingsOrDebts.length > 0) ? allSavingsOrDebts.map(anExpense => anExpense.cost).reduce((acc, cost) => acc += cost).toFixed(2) : (0).toFixed(2);

    return <div className='split_container'>
        <h2>Splits</h2>
        <h4>Needs: ${totalNeedsCost}</h4>
        <h4>Wants: ${totalWantsCost}</h4>
        <h4>Saving: ${totalSavingsOrDebts}</h4>
    </div>
}

export default BudgetSplitUps;