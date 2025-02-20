// `useReducer` is a built-in React hook that helps manage complex state logic in functional components. It provides a more powerful alternative to 
//the `useState` hook, especially when dealing with state transitions that are hard to express using simple `setState` logic.

// `useReducer` takes two required arguments and an optional third argument:

// 1. Reducer function: A function that specifies how the state should change based on a dispatched action.
// 2. Initial state: The initial value of the state that the reducer will manage.
// 3. Optional initial action: An optional action object that can be dispatched immediately after the hook initializes the state.

// The hook returns an array containing two items:

// - The current state value.
// - A dispatch function that allows you to send actions to the reducer

import React, { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Initial state
const initialState = { count: 0 };

// Component using the reducer
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

//`In this example, the `Counter` component uses the `useReducer` hook to manage its state. The `counterReducer` function handles state updates, 
// and the `dispatch` function is used to send actions to the reducer based on user interactions.`**