// Higher-Order Components (HOCs) are an advanced pattern in React for reusing component logic.

//A Higher-Order Component is a function that takes a component and returns a new component. The name comes from higher-order functions in 
// functional programming, which are functions that operate on other functions.

//In React terms, a HOC transforms a component into another component:
const EnhancedComponent = higherOrderComponent(WrappedComponent);

// Unlike normal components that transform props into UI, a HOC transforms a component into another component.
// Creating HOCs
// Let's break down how to create a HOC:

// Create a function that takes a component as an argument
// Inside this function, define a new component class
// Render the passed component with additional props/behavior
// Return the new component

//Here's a simple example of a HOC that adds a loading state:
function withLoading(WrappedComponent) {
    return class extends React.Component {
      state = {
        isLoading: true
      };
      
      componentDidMount() {
        // Simulate loading
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);
      }
      
      render() {
        if (this.state.isLoading) {
          return <div>Loading...</div>;
        }
        
        return <WrappedComponent {...this.props} />;
      }
    };
  }
  
  // Usage
  const EnhancedComponent = withLoading(MyComponent);