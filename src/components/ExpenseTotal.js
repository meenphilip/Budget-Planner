import { useContext } from 'react';
import { AppContetxt } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContetxt);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  },0);

  return (
    <div className='alert alert-primary'>
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
