import { useContext } from 'react';
import { AppContetxt } from '../context/AppContext';

const Budget = () => {
  const { budget } = useContext(AppContetxt);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;
