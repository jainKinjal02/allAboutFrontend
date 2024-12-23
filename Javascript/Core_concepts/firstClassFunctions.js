// the ability to use functions as values
// can be passed into another functions as arguements
// can be returned from another function

var b = function(param1) {
    console.log(param1);  // function yx(){}
}

b(function yx(){}); 

// same as first class citizens in JS

// Function Statements - also known as function declaration where function is defined using function keyowrd- hoisting present

// Function expression - assigning a function to a variable - no hoisting - error

b() // error
var b = function() {
    console.log('Hii');  // function yx(){}
}

b() // Hii

// Anonymous Functions - functions without a name
function(){

} // syntax error - function statement requires a name
// then what is the use of anonymous function - we can use them by assigning them to variable like function expression


// names function expression
var c = function xyz(){}

xyz() // ref error - xyz not defined , this is sp xyz not in global scope , it is in var c scope
