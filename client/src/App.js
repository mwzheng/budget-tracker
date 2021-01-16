import './App.css';
import Title from './components/Title';
import Budget from './components/Budget';
import BudgetSplitUps from './components/BudgetSplitUps';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import InfoModal from './components/InfoModal';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <InfoModal />
      <Title />
      <Budget />
      <BudgetSplitUps />
      <ExpenseList />
      <AddExpense />
    </GlobalProvider>
  );
}

export default App;
