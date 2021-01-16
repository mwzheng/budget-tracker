import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
import axios from 'axios';

// Initial State
const initialState = {
    inital: 6000,
    expenses: [],
    error: null,
    loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Get all of the expenses from the database
    const getExpenses = async () => {
        try {
            const res = await axios.get('/api/v1/expenses');

            dispatch({
                type: 'get_expenses',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: "expense_error",
                payload: err.response.data.error
            });
        }
    }

    // Add new expense to the database
    const addExpense = async (newExpense) => {
        const config = {
            'Content=Type': 'application.json'
        }

        try {
            const res = await axios.post('/api/v1/expenses', newExpense, config);

            dispatch({
                type: 'add_expense',
                expense: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "expense_error",
                payload: err.response.data.error
            });
        }
    }

    // Delete the expense with the id from database
    const deleteExpense = async (id) => {
        try {
            await axios.delete(`/api/v1/expenses/${id}`);

            // Delete from state
            dispatch({
                type: 'delete_expense',
                id: id
            });
        } catch (err) {
            dispatch({
                type: "expense_error",
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        expenses: state.expenses,
        inital: state.inital,
        error: state.error,
        loading: state.loading,
        deleteExpense,
        addExpense,
        getExpenses
    }}>{children}</GlobalContext.Provider>);
}