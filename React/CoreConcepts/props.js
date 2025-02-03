// Props in React
// Props (short for properties) are how components receive data from their parent components.
// They work like function parameters - data flows down from parent to child components through props. 
// Props are read-only, meaning a component should never modify its own props

// Parent component
function ParentComponent() {
    return <ChildComponent message="Hello from parent!" />;
  }
  
  // Child component
  function ChildComponent(props) {
    return <h1>{props.message}</h1>;
  }

// Passing Props
// There are several ways to pass props:

// Individual props:
<UserProfile 
  name="John"
  age={25}
  isAdmin={true}
/>

// spread operartor
const userInfo = {
    name: "John",
    age: 25,
    isAdmin: true
  };
  
  <UserProfile {...userInfo} />

  // children prop (special prop for nested content)
<Card>
  <h1>This content is passed as children prop</h1>
</Card>

// Card component
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Default Props
//Default props provide fallback values when props aren't passed. There are two main ways to set them:
//Using the defaultProps static property
function Button({ text, color }) {
    return <button style={{ color }}>{text}</button>;
  }
  
  Button.defaultProps = {
    text: "Click me",
    color: "blue"
  };

  //Using default parameters in function components (modern approach):
  function Button({ text = "Click me", color = "blue" }) {
    return <button style={{ color }}>{text}</button>;
  }

//PropTypes
//PropTypes are a way to add type checking to props. While TypeScript is more commonly used now, 
//PropTypes are still useful for runtime type checking:
import PropTypes from 'prop-types';

function User({ name, age, emails }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <ul>
        {emails.map(email => <li key={email}>{email}</li>)}
      </ul>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  emails: PropTypes.arrayOf(PropTypes.string),
};