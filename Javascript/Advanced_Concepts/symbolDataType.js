// In JavaScript, the Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). Here are key characteristics:

// Unique Identifiers: Each Symbol is guaranteed to be unique, even if created with the same description.


let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false

//Non-String Property Keys: Symbols can be used as unique object property keys, preventing name collisions.

const id = Symbol('id');
let obj = {
  [id]: 123
};

// Hidden from Iteration: Symbol-keyed properties are not included in for...in loops or Object.keys().
// Global Symbol Registry: Symbol.for() creates symbols in a global registry, allowing symbol reuse.

let globalSym = Symbol.for('myKey');
let sameGlobalSym = Symbol.for('myKey');
console.log(globalSym === sameGlobalSym); // true

//Common use cases include creating unique object keys, defining special methods, and preventing property name conflicts.