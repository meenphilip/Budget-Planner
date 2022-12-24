import { useContext, useEffect, useState } from 'react';
import { AppContetxt } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  // const expenses = [
  //   { id: 1, name: 'Shopping', cost: 50 },
  //   { id: 2, name: 'Holiday', cost: 750 },
  //   { id: 3, name: 'Transport', cost: 70 },
  //   { id: 4, name: 'Fuel', cost: 90 },
  //   { id: 5, name: 'Rent', cost: 500 },
  // ];

  //import the expenses from the context
  const { expenses } = useContext(AppContetxt);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  // filter function
  const onChangeHandler = event => {
    const searchResults = expenses.filter(filteredExpense => {
      return filteredExpense.name.toLowerCase().includes(event.target.value);
    });

    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type='text'
        className='form-control mb-3 mr-md-2'
        placeholder='type to search...'
        onChange={onChangeHandler}
      />
      <ul className='list-group list-group-flush'>
        {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
