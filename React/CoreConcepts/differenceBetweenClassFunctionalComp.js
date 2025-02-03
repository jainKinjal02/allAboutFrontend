// -------------------------------syntax difference------------------------------
// Class Component
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// Functional Component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

//--------------------------------State Management--------------------------------
// Class Component
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    updateCount() {
        this.setState({count: this.state.count + 1});
    }
}

// Functional Component
function Counter() {
    const [count, setCount] = useState(0);
    const updateCount = () => setCount(count + 1);
}

// Key Differences:

// Declaration:

// Class components: Use ES6 class syntax
// Functional components: Use regular JavaScript functions


// State:

// Class components: Use this.state and this.setState()
// Functional components: Use useState and other hooks


// Lifecycle Methods:

// Class components: Have dedicated lifecycle methods
// Functional components: Use useEffect hook for lifecycle behaviors


// 'this' keyword:

// Class components: Use 'this' to refer to the component instance
// Functional components: Don't use 'this'


// Props:

// Class components: Access via this.props
// Functional components: Received as function arguments


// Testing and Debugging:

// Class components: More complex to test due to state management
// Functional components: Easier to test as they're pure functions


// Performance:

// Class components: Heavier due to class instances
// Functional components: Lighter and can optimize better


// Code Length:

// Class components: Generally require more boilerplate code
// Functional components: More concise and cleaner


// Learning Curve:

// Class components: Require understanding of classes and 'this'
// Functional components: Simpler to understand with basic JavaScript knowledge



//Modern React development favors functional components due to their simplicity, hooks support, and
//better performance characteristics. However, understanding class components is still valuable, especially when maintaining older codebases.