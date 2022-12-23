import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const expenses = [
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Holiday', cost: 750 },
    { id: 3, name: 'Transport', cost: 70 },
    { id: 4, name: 'Fuel', cost: 90 },
    { id: 5, name: 'Rent', cost: 500 },
  ];
  return (
    <ul className='list-group list-group-flush'>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
