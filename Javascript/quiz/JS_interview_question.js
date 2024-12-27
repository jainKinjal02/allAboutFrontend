var obj1 = new Object();
var obj2 = obj1;
obj1.name = "some name";

console.log(obj1.name);// some name
console.log(obj2.name);// some name

/////////////////////////////////////////////////////

var empObj = {};
empObj.id = 1344;
empObj.email = "emp@xyzcompany.com";
console.log(empObj);// 

console.log('-------------------------');

var emp = ["John Corner"]
emp.id = 1344;
emp.email = "emp@xyzcompany.com";
console.log(emp);//

//output: { id: 1344, email: 'emp@xyzcompany.com' } ------------------------- [ 'John Corner', id: 1344, email: 'emp@xyzcompany.com' ]

/////////////////////////////////////////////////////

var empObj = {};
empObj.id = 1344;
empObj.email = "emp@xyzcompany.com";
console.log(empObj);// 

console.log('-------------------------');

var emp = "John Corner"
emp.id = 1344;
emp.email = "emp@xyzcompany.com";
console.log(emp);//

// output: { id: 1344, email: 'emp@xyzcompany.com' } ------------------------- John Corner

////////////////////////////////////////////////////

var val = 999;
function myMethod(){
  console.log(val);
}

var obj1 = {
  get: myMethod,
  val: 111
};

var obj2 = {
  get: myMethod,
  val: 222
};

obj1.get(); // 999
obj2.get();// 999
myMethod();// 999

/////////////////////////////////////////////////////////////

var val = 999;
function myMethod(){
  console.log(this.val);
}

var obj1 = {
  get: myMethod,
  val: 111
};

var obj2 = {
  get: myMethod,
  val: 222
};

obj1.get(); // 111
obj2.get();// 222
myMethod();// undefined

////////////////////////////////////////////////////////////////

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 1000);
}

//output: Index: 4, element: undefined
//Index: 4, element: undefined
//Index: 4, element: undefined
//Index: 4, element: undefined

///////////////////////////////////////////////////////////////


var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);//
        console.log("outer func:  self.foo = " + self.foo);//
        const fun = ()=>{ 
            console.log("inner func:  this.foo = " + this.foo);//
            console.log("inner func:  self.foo = " + self.foo);//
        }
        fun();
    }
};
myObject.func();


//output: outer func:  this.foo = bar
//outer func:  self.foo = bar
//inner func:  this.foo = bar
//inner func:  self.foo = bar

///////////////////////////////////////////////////////////////

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);//
        console.log("outer func:  self.foo = " + self.foo);//
        (function() {
            console.log("inner func:  this.foo = " + this.foo);//
            console.log("inner func:  self.foo = " + self.foo);//
        }());
    }
};
myObject.func();

// output: outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar

// Since the IIFE creates a new function scope, 
// this inside the IIFE refers to the global object (in non-strict mode) 
// or undefined (in strict mode). So, this.foo will not reference myObject.foo, 
// but it will try to access a foo property on the global object, which is not 
// defined. Therefore, it will log "inner func: this.foo = undefined".
// b. console.log("inner func: self.foo = " + self.foo); Here, self still refers to 
// the myObject object because of the closure. So, self.foo will reference the foo 
// property of the myObject object, logging "bar".

/////////////////////////////////////////////////////////////////

//Can you create an array from 1 to N consecutive numbers without using loops like for loop , for each , do while ?

function createArrayFromOneToN(N) {
    return Array.from({length: N}, (_, index) => index + 1);
}

// Example usage:
const N = 10;
const newArray = createArrayFromOneToN(N);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/////////////////////////////////////////////////////////////////


const value = {number: 10};

function multiply(x={...value}){
    console.log(x);
    return x.number *= 2;
}

console.log(multiply());
console.log(multiply());
console.log(multiply(value));
console.log(multiply(value));


// output : { number: 10 }
// 20
// { number: 10 }
// 20
// { number: 10 }
// 20
// { number: 20 }
// 40

// In the third function call console.log(multiply(value));, the value object is passed as an argument to the multiply() function. 
// Since objects in JavaScript are passed by reference, any modifications made to the object within the function will affect the original object.


/////////////////////////////////////////////////////////////////

// Correct! The expression `0.1 + 0.2 === 0.3` returns `false`. This result is due to the way floating-point arithmetic is handled in JavaScript. 
// The IEEE 754 standard used by JavaScript cannot represent certain decimal numbers precisely, so **`0.1 + 0.2`** yields a value close to but not exactly
//`0.3`.

// Here's an example to demonstrate the issue:

// ```jsx
// javascriptCopy code
// console.log(0.1 + 0.2); // Outputs: 0.30000000000000004

// ```

// The imprecision causes the comparison to evaluate to `false`

/////////////////////////////////////////////////////////////////
// difference between map and forEach

// Array.prototype.map() acts as a built in array function which is used to iterate on every value of the array and return a 
// new array with mapped value.  Map returns a new array while forEach just iterates over an array.


const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6]

const numbers1 = [1, 2, 3];
numbers1.forEach(num => {
  console.log(num * 2); // Outputs: 2, 4, 6
});


//How to make an API call ?

//Using `fetch`
//`fetch` API is a modern, built-in way to make HTTP requests. It's based on Promises, making it easier to handle asynchronous operations.

// GET request example using fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log('Data fetched:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



