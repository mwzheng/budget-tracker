import './App.css';

import Title from './components/Title'
import Budget from './components/Budget'
import BudgetSplitUps from './components/BudgetSplitUps';
import ExpenseList from './components/ExpenseList'
import AddExpense from './components/AddExpense'

function App() {
  return (
    <div className="App">
      <Title />
      <Budget />
      <BudgetSplitUps />
      <ExpenseList />
      <AddExpense />
    </div>
  );
}

export default App;
