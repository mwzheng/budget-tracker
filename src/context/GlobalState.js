import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js'

// Initial State
const initialState = {
    inital: 1000,
    expenses: [
        // For testing
        // { id: 0, type: 'need', expense: 'Food', cost: 10.00 },
        // { id: 1, type: 'need', expense: 'Gas', cost: 5.00 },
        // { id: 2, type: 'want', expense: 'Netflix', cost: 20.00 },
        // { id: 3, type: 'savingOrDebt', expense: 'College Debt', cost: 20.00 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteExpense = (id) => {
        dispatch({
            type: 'delete_expense',
            id: id
        })
    }

    const addExpense = (newExpense) => {
        dispatch({
            type: 'add_expense',
            expense: newExpense
        })
    }

    return (<GlobalContext.Provider value={{
        expenses: state.expenses,
        inital: state.inital,
        deleteExpense,
        addExpense
    }}>{children}</GlobalContext.Provider>);
}