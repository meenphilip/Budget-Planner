import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 11, name: 'Django 4 Book', cost: 50 },
    { id: 12, name: 'JBL Headphones', cost: 750 },
    { id: 13, name: 'Transport', cost: 50 },
  ],
};

export const AppContetxt = createContext();

export const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContetxt.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContetxt.Provider>
  );
};
