// React Router is a standard library for routing in React applications. It enables navigation between different components 
//in your app without page reloads, creating a single-page application (SPA) experience.

// Key Components
// <BrowserRouter>
// This is the parent component that uses the HTML5 history API to keep your UI in sync with the URL.
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Your app components */}
    </BrowserRouter>
  );
}

// Key features:

// Wraps all your routing components
// Uses the HTML5 history API for cleaner URLs (no # in the URL)
// Should be placed at the root of your component hierarchy

// <Route>
// The <Route> component is the fundamental building block of React Router. It renders some UI when the current location matches the route's path.
import { Route } from 'react-router-dom';

<Route path="/home" element={<Home />} />
// Key features:

// path: Specifies the URL pattern to match
// element (in v6) or component/render (in v5): Specifies what to render when the path matches
// Can be nested inside other components

// <Link>
// The <Link> component creates navigation links in your application. It renders an accessible <a> tag with the correct href.
import { Link } from 'react-router-dom';

<Link to="/about">About Us</Link>

// Key features:

// Prevents page reloads
// Updates the URL
// Maintains accessibility with proper anchor tags
// The to prop can be a string or an object

// <Switch> (Note: Replaced by <Routes> in React Router v6)
// In React Router v5, <Switch> was used to render the first child <Route> that matches the location. In v6, this has been replaced by <Routes>.
// React Router v5
        // <Switch>
        // <Route path="/about" component={About} />
        // <Route path="/users" component={Users} />
        // <Route path="/" component={Home} />
        // </Switch>

        // // React Router v6
        // <Routes>
        // <Route path="/about" element={<About />} />
        // <Route path="/users" element={<Users />} />
        // <Route path="/" element={<Home />} />
        // </Routes>


// Key features:

// Ensures only one route renders at a time
// Matches routes in order they are defined
// Important for exclusive routing

// Route Parameters in React
// Route parameters allow you to capture values from the URL and pass them to your components. This is useful for dynamic routes like user profiles, product pages, etc.
// Basic Example:
//<Route path="/users/:userId" element={<UserProfile />} />

// In this example, :userId is a route parameter that will match any value in that position of the URL.
// Accessing Route Parameters
// React Router provides hooks to access these parameters:
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  
  return <h1>User Profile for {userId}</h1>;
}

// Optional Parameters
// You can make parameters optional by adding a ? after the parameter name:
//<Route path="/products/:category?/:productId?" element={<ProductPage />} />

// Multiple Parameters
// You can have multiple parameters in a single route:
{/* <Route path="/blog/:year/:month/:day/:slug" element={<BlogPost />} /> */}

// practical example
// Route definition
//<Route path="/users/:userId/posts/:postId" element={<UserPost />} />

// Component using parameters
function UserPost() {
  const { userId, postId } = useParams();
  
  return (
    <div>
      <h1>Post {postId}</h1>
      <h2>By User {userId}</h2>
      {/* Fetch and display post data */}
    </div>
  );
}

//Query Parameters
//For query parameters (e.g., /search?q=react), you'll need to use the useLocation hook and a utility like URLSearchParams:
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  
  return <h1>Search Results for: {query}</h1>;
}