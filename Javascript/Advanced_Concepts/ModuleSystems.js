//Module systems in JavaScript help organize and structure code by allowing you to split your code into separate files and control what code is 
//shared between them. There are two main module systems:

// CommonJS (Node.js style):

// Exporting
const myFunction = () => { /* ... */ };
module.exports = myFunction;
// Importing
const importedFunction = require('./myModule');

///////////////////////////////// ES6 Modules (Modern JavaScript):
// Exporting
export const myFunction1 = () => { /* ... */ };
// or
export default myFunction;
// Importing
import myFunction1 from './myModule';
import { myFunction1 } from './myModule';


// Key Differences:

// CommonJS is synchronous and used primarily in Node.js
// ES6 Modules are asynchronous and native to modern browsers
// ES6 Modules support named exports and have a more flexible export/import syntax
// ES6 Modules use static import which allows better optimization

// Typical Use:

// Node.js typically uses CommonJS
// Modern web applications use ES6 Modules
// Bundlers like Webpack can convert between module systems

// Both systems solve the same core problem: helping developers organize code into reusable, manageable pieces.