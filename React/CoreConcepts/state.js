// The useState hook is a function that lets you add state management to functional components. It returns an array with two elements: 
//the current state value and a function to update it

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Key points about useState:

// Always returns a new state value instead of modifying the existing one
// Can hold any type of value (numbers, strings, objects, arrays)
// The setter function triggers a re-render when called

// ---------------------------------------------------------------------------------------------
// Immutable State
// Immutability means not modifying state directly, but instead creating new copies with changes. This is crucial in React for predictable behavior and performance optimization.
// Wrong way (mutable):
const [user, setUser] = useState({ name: 'John', age: 25 });
// Don't do this!
user.age = 26;


//Correct way (immutable)
const [user, setUser] = useState({ name: 'John', age: 25 });
// Do this instead
setUser({ ...user, age: 26 });
// For arrays:
const [items, setItems] = useState(['apple', 'banana']);
setItems([...items, 'orange']); // Adding new item

//---------------------------class component state---------------------------------------
// Class Component State
// Before hooks, state was managed in class components using this.state and this.setState():
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };  // Initial state
    }
  
    increment = () => {
      this.setState({ count: this.state.count + 1 });
      
      // If you need to update based on previous state:
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>
            Increment
          </button>
        </div>
      );
    }
  }

//   Key differences from useState:

//   State is always an object in class components
//   setState() can be partial updates
//   setState() is asynchronous and can accept a callback
//   Updates can be batched for performance