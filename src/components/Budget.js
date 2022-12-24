import { useContext, useState } from 'react';
import { AppContetxt } from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContetxt);
  const [isEditing, setIsEditing] = useState(false);

  const onEdithandler = () => {
    setIsEditing(true);
  };

  const onSaveEditHandler = value => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
      {isEditing ? (
        <EditBudget onSaveEditHandler={onSaveEditHandler} budget={budget} />
      ) : (
        <ViewBudget onEdithandler={onEdithandler} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
