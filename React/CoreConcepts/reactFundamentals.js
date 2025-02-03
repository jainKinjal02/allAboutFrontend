// Unidirectional Flow (One way data binding)------------------------------------

// Data flows in one direction: parent to child components
// State can only be modified by the component that owns it
// Child components receive data through props
// Makes application behavior more predictable and easier to debug
function Parent() {
    const [count, setCount] = useState(0);
    return <Child count={count} onIncrement={() => setCount(count + 1)} />;
  }
  
  function Child({ count, onIncrement }) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
  }

//-----------------------------Component Based Architecture------------------------
// Everything in React is a component
// Components can be functional or class-based
// Components should be small, reusable, and have a single responsibility
// Components can be nested within other components

//-----------------------------State and Props------------------------------------
// State: Private internal data managed by component
// Props: Read-only data passed from parent components
// State changes trigger re-renders
// Props are immutable within the receiving component
function Counter() {
    // State
    const [count, setCount] = useState(0);
    
    // Props
    return <DisplayCount count={count} />;
  }

//----------------------------Virtual DOM--------------------------------
// Lightweight copy of the actual DOM
// React compares Virtual DOM with real DOM
// Only updates what's necessary (reconciliation)
// Improves performance by reducing direct DOM manipulation

//-----------------------JSX--------------
// Syntax extension for JavaScript
// Allows writing HTML-like code in JavaScript
// Gets compiled to regular JavaScript
const element = (
    <div className="greeting">
      <h1>Hello, {name}</h1>
    </div>
  );

//----------------------component lifecycle------------------------------
// Mounting: Component is created and inserted into DOM
// Updating: Component re-renders due to state/prop changes
// Unmounting: Component is removed from DOM

useEffect(() => {
    // Component Did Mount
    return () => {
      // Component Will Unmount
    };
  }, []);

//---------------------event handling---------------------------
// Uses camelCase naming convention
// Pass functions as event handlers
// Synthetic events wrap browser's native events

function Button() {
    const handleClick = (e) => {
      e.preventDefault();
      console.log('Button clicked');
    };
    
    return <button onClick={handleClick}>Click me</button>;
  }

//--------------------conditional rendering----------------------
// Render components based on conditions
// Use ternary operators or logical && for inline conditions
function Greeting({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      </div>
    );
  }


  //------------------Lists and Keys------------------------------
// Use map() for rendering lists
// Keys help React identify changed items
function List({ items }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }

//----------------component composition---------------------------
// Prefer composition over inheritance
// Use children prop for flexible component combinations

function Container({ children }) {
    return <div className="container">{children}</div>;
  }
  
  function App() {
    return (
      <Container>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    );
  }

// //--------------------------React hooks----------------------------
// Allow using state and lifecycle features in functional components
// Built-in hooks like useState, useEffect, useContext
// Custom hooks for reusing stateful logic

function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);
  }

