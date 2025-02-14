// useHistory Hook
// The useHistory hook gives you access to the history instance that you can use to navigate programmatically. 
//This hook is part of the React Router DOM library.
import { useHistory } from 'react-router-dom';

function MyComponent() {
  const history = useHistory();
  
  function handleClick() {
    history.push('/new-route');
  }
  
  return (
    <button onClick={handleClick}>Go to New Route</button>
  );
}

// Key Methods
// The history object has several methods for navigation:

// push(path, [state]) - Pushes a new entry onto the history stack
// replace(path, [state]) - Replaces the current entry on the history stack
// go(n) - Moves the pointer in the history stack by n entries
// goBack() - Equivalent to go(-1)
// goForward() - Equivalent to go(1)
history.push({
    pathname: '/profile',
    state: { userId: 123 }
  });

//   Block Navigation
// You can also use the history object to prevent navigation:
const unblock = history.block('Are you sure you want to leave this page?');
// Later, when it's safe to navigate:
unblock();

//-------------------------useLocation----------------------------------
// useLocation Hook
// The useLocation hook returns the current location object, which represents where the app is now.
// This hook is useful for accessing URL parameters and the current path.

import { useLocation } from 'react-router-dom';

function LocationDisplay() {
  const location = useLocation();
  
  return (
    <div>
      <h2>Current Path: {location.pathname}</h2>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

// Properties of the Location Object
// The location object includes:

// pathname - The path portion of the URL
// search - The query string portion of the URL
// hash - The hash fragment of the URL
// state - An object of data passed with push or replace
// key - A unique ID for this location

// Accessing Search Parameters
// A common use case is to parse the query string:
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  
  // Get a specific parameter
  const name = query.get('name');
  
  return <div>Searching for: {name}</div>;
}

// Using Location State
// When combined with useHistory, you can access state passed during navigation:

// Key Differences Between These Hooks

// useHistory is for changing the location (navigation)
// useLocation is for reading the current location

// These hooks work together to give you complete control over navigation in React applications. The useHistory hook lets you perform navigation actions, 
// while the useLocation hook lets you read information about the current route.