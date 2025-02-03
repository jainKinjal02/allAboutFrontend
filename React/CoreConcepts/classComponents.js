// Class components are ES6 classes that extend from React.Component and include a render method to return React elements. 
//They were the primary way to create components in React before hooks were introduced.

class UserProfile extends React.Component {
    // Constructor for initializing state and binding methods
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userName: 'Guest'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // Lifecycle Methods
    componentDidMount() {
        // Called after component is mounted to the DOM
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        // Called after state or props change
        if (prevState.count !== this.state.count) {
            console.log('Count updated');
        }
    }

    componentWillUnmount() {
        // Called before component is removed from DOM
        console.log('Component will unmount');
    }

    // Custom methods
    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    // Render method (required)
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>
                    Increment
                </button>
            </div>
        );
    }
}

// Key features of Class Components:

// Must extend React.Component
// Have a render() method that returns JSX
// Can have local state using this.state
// Have access to lifecycle methods
// Use 'this' keyword to refer to the component instance
