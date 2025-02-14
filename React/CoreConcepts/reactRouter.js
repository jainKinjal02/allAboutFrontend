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