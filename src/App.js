import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  return (
    <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row'>
        <div className='col-md'>
          <Budget />
        </div>
        <div className='col-md'>
          <Remaining />
        </div>
        <div className='col-md'>
          <ExpenseTotal />
        </div>
      </div>
      <h3 className='mt-3'> Expnses List</h3>
      <div className='row'>
        <div className='col-md'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expnse</h3>
      <div className='row'>
        <div className='col-md'>
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}

export default App;
