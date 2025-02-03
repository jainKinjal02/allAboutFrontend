// JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files. It makes writing React components more intuitive and readable

const element = <h1>Hello, World!</h1>;

// Key things to understand about JSX:

// Expressions in JSX
// You can embed any JavaScript expression inside JSX using curly braces:
const name = "Alice";
const element = <h1>Hello, {name}</h1>;

//Attributes in JSX
//Use camelCase for attribute names instead of HTML's kebab-case:
// HTML: class="container"
// JSX:
const element = <div className="container">Content</div>;

// HTML: onclick="handleClick()"
// JSX:
const button = <button onClick={handleClick}>Click me</button>;

//Children in JSX
//Like HTML, JSX elements can have children:

const element = (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );


//JSX prevents injection attacks
//React automatically escapes values embedded in JSX, helping prevent XSS (cross-site scripting) attacks

const userInput = '<script>alert("hack")</script>';
// This will safely render as text, not execute as HTML
const element = <div>{userInput}</div>;


//JSX compiles to regular JavaScript
//Behind the scenes, JSX gets transformed into regular JavaScript function calls:
// This JSX:
const element = <h1 className="greeting">Hello!</h1>;

// Compiles to this JavaScript:
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello!'
);


// Common patterns with JSX
//Here's a more complete example showing common JSX patterns
function UserProfile({ user }) {
    return (
      <div className="profile">
        {user.isLoggedIn ? (
          <>
            <h2>{user.name}</h2>
            <img src={user.avatar} alt={`${user.name}'s avatar`} />
            {user.bio && <p>{user.bio}</p>}
            <ul>
              {user.hobbies.map(hobby => (
                <li key={hobby.id}>{hobby.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Please log in</p>
        )}
      </div>
    );
  }

  // ------------------------------------------------------------------------------------
// This example shows:

// Conditional rendering using ternary operators
// Fragment syntax (<>...</>)
// Logical && operator for conditional rendering
// Map function for rendering lists
// The key prop for list items
// Template literals in attributes

//Remember that while JSX looks like HTML, it's more powerful because you can embed full JavaScript expressions and 
//organize your UI into reusable components. It's also type-safe and most errors can be caught during compilation.