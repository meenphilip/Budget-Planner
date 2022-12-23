import { TiDelete } from 'react-icons/ti';

function ExpenseItem(props) {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span className='badge rounded-pill text-bg-primary mr-3'>
          ${props.cost}
        </span>
        <TiDelete className='text-danger' size='1.5rem'></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
