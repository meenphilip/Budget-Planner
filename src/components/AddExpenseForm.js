import React from 'react';

const AddExpenseForm = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-md'>
          <label htmlFor='name' className='form-label'></label>
          <input
            type='text'
            id='name'
            className='form-control'
            placeholder='name'
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
