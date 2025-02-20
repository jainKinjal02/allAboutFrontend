// Think of middleware as a "middleman" that sits between different parts of your application. It can intercept, check, modify, or handle things before they reach their final destination.
// In React applications, middleware is commonly used with state management tools like Redux. Here's a real-world analogy:
// Imagine you're at a restaurant:

// You (the customer) are like a React component making an order (an action)
// The waiter is like middleware - they can:

// Check if your order makes sense
// Add special instructions
// Cancel the order if something's wrong
// Write down notes about the order


// The kitchen (reducer) then processes the validated order

// Here's a basic example of Redux middleware in code:

const loggingMiddleware = store => next => action => {
    console.log('Before:', action)
    const result = next(action)
    console.log('After:', store.getState())
    return result
  }


//   This middleware logs the action before and after it's processed - like a waiter taking notes about orders.
//   Common uses for middleware include:

//   Logging actions and state changes
//   Handling asynchronous operations (like API calls)
//   Validating or transforming data
//   Error handling
//   Analytics tracking

//   The beauty of middleware is that it's reusable and can be chained together - you can have multiple pieces of middleware handling different aspects of your application's logic.