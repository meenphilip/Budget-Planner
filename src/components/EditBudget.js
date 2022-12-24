import React, { useState } from 'react';

const EditBudget = props => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        type='number'
        className='form-control'
        value={value}
        onChange={e => setValue(e.target.value)}
        required
      />
      <button
        type='button'
        className='btn btn-success'
        onClick={() => props.onSaveEditHandler(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
