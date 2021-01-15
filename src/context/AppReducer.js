const AppReducer = (state, action) => {
    switch (action.type) {
        case 'delete_expense':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.id)
            }
        case 'add_expense':
            return {
                ...state,
                expenses: [action.expense, ...state.expenses]
            }
        default:
            return state
    }
}

export default AppReducer;