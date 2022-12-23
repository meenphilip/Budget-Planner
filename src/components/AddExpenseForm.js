import { useContext, useState } from 'react';
import { AppContetxt } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContetxt);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    //clear inputs
    setName('');
    setCost('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='row'>
        <div className='col-md'>
          <label htmlFor='name' className='form-label'></label>
          <input
            type='text'
            id='name'
            className='form-control'
            placeholder='name'
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
            required
          />
        </div>
        <div className='col-md'>
          <label htmlFor='cost' className='form-label'></label>
          <input
            type='text'
            id='cost'
            className='form-control'
            placeholder='cost'
            value={cost}
            onChange={event => {
              setCost(event.target.value);
            }}
            required
          />
        </div>
      </div>
      <button type='submit' className='btn btn-primary my-3'>
        Save
      </button>
    </form>
  );
};

export default AddExpenseForm;
