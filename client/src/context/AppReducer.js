const AppReducer = (state, action) => {
    switch (action.type) {
        case 'get_expenses':
            return {
                ...state,
                loading: false,
                expenses: action.payload
            };
        case 'delete_expense':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.id)
            };
        case 'add_expense':
            return {
                ...state,
                expenses: [...state.expenses, action.expense]
            };
        case 'expense_error':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default AppReducer;