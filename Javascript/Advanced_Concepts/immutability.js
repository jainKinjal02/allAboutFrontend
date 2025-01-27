// Immutability in JavaScript explained
// it means creating new data structures instead of modifying existing ones. Here's a breakdown:
// Core Principles:
// 1. Original data remains unchanged
// 2. Operations create new data copies
// 3. Prevents unintended side effects

/////////// Array ------------------------------------
// Mutable approach (changes original array)
let numbers = [1, 2, 3];
numbers.push(4); // Modifies original array

// Immutable approach (creates new array)
let newNumbers = [...numbers, 4]; // Spread operator creates new array

/////////// Objects ------------------------------------
// Mutable approach
let user = { name: 'John' };
user.age = 30; // Directly modifies original object

// Immutable approach
let newUser = { ...user, age: 30 }; // Creates new object


// Common Immutable Methods:
// .map(): Creates new array
// .filter(): Generates new filtered array
// .reduce(): Produces new transformed value
// Object.assign(): Creates new object
// Spread operator (...): Copies arrays/objects