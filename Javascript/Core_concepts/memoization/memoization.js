// Memoization is a performance optimization technique that caches function results to avoid redundant computations.

function memoize(fn) {
    const cache = new Map();
    
    return (...args) => {
      // Create a unique key from arguments
      const key = JSON.stringify(args);
      
      // If result exists in cache, return cached result
      if (cache.has(key)) {
        return cache.get(key);
      }
      
      // Compute result and store in cache
      const result = fn(...args);
      cache.set(key, result);
      
      return result;
    };
  }
  
  // Example with fibonacci calculation
  const fibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  });
  
  console.log(fibonacci(40)); // Much faster computation

// Key Benefits:

// Prevents redundant function calls
// Improves performance for expensive computations
// Stores results for repeated inputs
// Reduces computational complexity

// Practical Use Cases:

// Complex mathematical calculations
// API calls with same parameters
// Recursive algorithms
// Expensive computations that repeat frequently