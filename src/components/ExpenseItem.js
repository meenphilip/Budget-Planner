import { useContext } from 'react';
import { AppContetxt } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = props => {
  const { dispatch } = useContext(AppContetxt);

  const deleteExpenseHandler = e => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span className='badge rounded-pill text-bg-primary mr-3'>
          ${props.cost}
        </span>
        <TiDelete
          className='text-danger'
          size='1.5rem'
          onClick={deleteExpenseHandler}
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
