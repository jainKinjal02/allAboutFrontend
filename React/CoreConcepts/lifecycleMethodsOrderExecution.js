import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    console.log('1. Constructor called');
    super(props);
    this.state = {
      count: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('4. componentDidMount called');
    // Setting state will trigger an update cycle
    this.setState({ count: 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('8. componentWillUnmount called');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('3. Render called');
    return (
      <div className="p-4">
        <h2>Count: {this.state.count}</h2>
        <button 
          onClick={this.handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;

// Initial Mounting Phase:

// constructor() is called first

// Initialize state and bind methods
// You'll see "1. Constructor called" in console


// getDerivedStateFromProps() runs next

// Rarely used method that lets you update state based on props
// You'll see "2. getDerivedStateFromProps called"


// render() method executes

// Creates the initial DOM elements
// You'll see "3. Render called"


// componentDidMount() runs last in mounting

// Component is now in DOM
// You'll see "4. componentDidMount called"
// In our example, it triggers an update by setting state



// Update Phase (when state changes):
// 5. getDerivedStateFromProps() runs again
// 6. shouldComponentUpdate() decides if update is needed
// 7. render() creates new virtual DOM
// 8. getSnapshotBeforeUpdate() captures info before DOM changes
// 9. componentDidUpdate() runs after DOM is updated

//----------------run the app------------------------------
// 1. Constructor called
// 2. getDerivedStateFromProps called
// 3. Render called
// 4. componentDidMount called
// // After state changes in componentDidMount:
// 2. getDerivedStateFromProps called
// 5. shouldComponentUpdate called
// 3. Render called
// 6. getSnapshotBeforeUpdate called
// 7. componentDidUpdate called

//-----Each time you click the increment button, you'll see the update cycle run again:
// 2. getDerivedStateFromProps called
// 5. shouldComponentUpdate called
// 3. Render called
// 6. getSnapshotBeforeUpdate called
// 7. componentDidUpdate called