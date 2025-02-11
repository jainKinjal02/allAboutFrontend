//A component lifecycle in React represents the different stages a component goes through from birth to death - just like a human's life cycle

// React class component lifecycle methods can be grouped into three main phases:

// Mounting (Component Creation)----------------------------------------
// Constructor - initialize state and bind methods
constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  // Renders first DOM elements
  render() {
    return <div>{this.state.count}</div>;
  }
  
  // Called after component is mounted to DOM
componentDidMount() {
    // Good place for API calls, subscriptions, or DOM manipulations
    this.timer = setInterval(() => {
    this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

//---------------------------------------------------------------------
// Updating (Props or State Changes)
// Called before re-rendering, can prevent updates
shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }
  
  // Called right before render
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count updated');
    }
  }

// ------------------------------------------------------------------------
//Unmounting (Component Removal)
componentWillUnmount() {
    // Clean up subscriptions, timers, event listeners
    clearInterval(this.timer);
  }


// Key points to remember:

// constructor() initializes state and binds methods
// componentDidMount() is perfect for side effects after initial render
// componentDidUpdate() handles side effects after updates
// componentWillUnmount() cleans up resources
// render() is the only required method and should be pure