// A reducer is a pure function in Redux that takes the current state and an action, and returns a new state based on the action. 
//The purpose of a reducer is to handle state changes in a predictable and consistent manner within a Redux store.

// A reducer function has the following signature:

function reducer(state, action) {
    // Logic to update state based on action
    return newState;
  }

//   Reducers are typically used with the Redux library for state management in React applications. They play a crucial role in implementing 
//   the unidirectional data flow pattern, where state updates are centralized and managed by the store.