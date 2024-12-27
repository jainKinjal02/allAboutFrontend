// IN keyword in Js is used to check whether a given property is valid or not
// eval(x+y) evaluates the expression when passed as arguement or executes the statements when passed as args

Math.min() // Infinity
Math.max() // -Infinity

var a = true + true + 3 ; // 5 -- true boolean act as 1 in arithmetic expressions

Nan === Nan // false
Nan == Nan // false

// toLocateString() -- returns a localised string representation of an object

// Object Serialization
// process in which object is translated into a format suitable for transferal over a network

// stringiFy() -- serialize an object into a JSON string in Javascript

// difference between slice and substring

// parseInt - converts a string into Number
parseInt("123hello") ; // 123 (if string starts with number)
parseInt("hello123") ; // Nan

// when an object is passed with duplicate keys, the value of the key will be replaced by last value of key used in declaration
var obj = {
    f: 20,
    s: 50,
    f: 50
}
console.log(obj) ; // {f:50, s:50} 

//the key differences between **`slice()`** and **`substring()`
// `slice()`** allows the use of negative indices and doesn't swap indices if **`startIndex`** is greater than **`endIndex`**.
// `substring()`** doesn't allow negative indices and swaps indices if **`startIndex`** is greater than **`endIndex`**.
