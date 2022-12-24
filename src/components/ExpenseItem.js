import { useContext } from 'react';
import { AppContetxt } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import { FaEdit } from 'react-icons/fa';

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
        <span className='badge rounded-pill text-bg-primary m-2'>
          ${props.cost}
        </span>
        <FaEdit
          className='text-success'
          size='1.5rem'
          // onClick={deleteExpenseHandler}
        ></FaEdit>
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
