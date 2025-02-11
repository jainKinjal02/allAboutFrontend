// The main difference in class components is that:

// Event handlers are defined as class methods
// We need to handle this binding
// State updates are done using this.setState()

//Defining Event Handlers as Class Methods:
class Button extends React.Component {
    handleClick() {
        console.log('Button clicked!');
        this.setState({ clicked: true });
    }

    render() {
        return <button onClick={this.handleClick}>Click me</button>;
    }
}

//Binding Methods (3 common approaches):
// a) Bind in constructor (traditional approach):
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }
}

// b) Class fields with arrow functions (modern approach):
class Button extends React.Component {
    // No binding needed with this syntax
    handleClick = () => {
        this.setState({ clicked: true });
    }
}

// c) Arrow function in render (not recommended due to performance):
class Button extends React.Component {
    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        return <button onClick={() => this.handleClick()}>Click me</button>;
    }
}



// Complete Example with State:
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted:', this.state.inputValue);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Passing Parameters:

class UserList extends React.Component {
    handleUserClick = (userId) => {
        console.log('User clicked:', userId);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleUserClick(123)}>
                    View User
                </button>
            </div>
        );
    }
}

// Key differences from functional components:

// Use of this keyword to access props, state, and methods
// Event handlers are class methods instead of regular functions
// Need to handle binding to preserve this context
// State updates use this.setState() instead of hooks
// Access to lifecycle methods
