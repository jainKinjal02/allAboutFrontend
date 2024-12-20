// let and const are block scopes 

const a = 2; // , always have to assign a value 
 // const b ; // syntax error - missing initializer 
a = 6; // const cant be mutated otherwise typeError 

let c = 30; // to mutate or change the value , always use let
c = 45;

// var - global scope - avoid to use it - prior to ES6