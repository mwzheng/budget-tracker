import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/stringHelpers';

const BudgetSplitUps = () => {
    const { inital, expenses, getExpenses } = useContext(GlobalContext);

    useEffect(() => {
        getExpenses();
        // eslint-disable-next-line
    }, []);

    // Find all expenses of the given type
    const findAllExpenseType = (expenseType) => {
        return expenses.filter(anExpense => anExpense.expenseType === expenseType);
    }

    // Calculate total spent on the given expense type
    const calcExpensTypeTotal = (expenseType) => {
        const allExpenseTypes = findAllExpenseType(expenseType);
        const expenseTypeTotal = (allExpenseTypes.length > 0) ?
            allExpenseTypes.map(anExpense => anExpense.cost).reduce((acc, cost) => acc += cost) : 0;

        return expenseTypeTotal.toFixed(2);
    }

    // Calculate the percentage of the given expense type
    const calculatePercentageSpent = (expenseType) => {
        const expenseTypeTotal = calcExpensTypeTotal(expenseType);
        return Math.floor((expenseTypeTotal / inital) * 100);
    }

    return <div className='split_container'>
        <h2>Splits</h2>
        <h4>
            Needs({calculatePercentageSpent('need')}%):
            <span className='cost'>
                ${numberWithCommas(calcExpensTypeTotal('need'))}
            </span>
        </h4>
        <h4>
            Wants({calculatePercentageSpent('want')}%):
            <span className='cost'>
                ${numberWithCommas(calcExpensTypeTotal('want'))}
            </span>
        </h4>
        <h4>
            Saving({calculatePercentageSpent('savingOrDebt')}%):
            <span className='cost'>
                ${numberWithCommas(calcExpensTypeTotal('savingOrDebt'))}
            </span>
        </h4>
    </div>
}

export default BudgetSplitUps;