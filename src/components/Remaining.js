import { useContext } from 'react';
import { AppContetxt } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget } = useContext(AppContetxt);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
