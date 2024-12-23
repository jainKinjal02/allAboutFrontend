// Hoisting is a phenomena in JS where you can access variables and functions even before you have initialised it or put some value in it.

getName();   // namaste
console.log(x); // undefined
var x = 7;
function getName(){
    console.log("namaste")
}
console.log(getName); // if this is written even before initialising it, it will give defination of the function- whole function

// NOTE: jab bhi variables access hote hai before initilising it, it gives undefined coz execution context me usko initially memory allocate hoti hai to value undefined hi rhti hai
//isliye output undefined
// and if accessing variable which is not yet defined/initialize to memory assign nh hogi and then if you are accessing such var then 
// error will be there - X is not defined

console.log(x); // undefined
var x = 7; 

var x = 7;
console.log(x) // 7

console.log(y);  // error - y is not defined

// NOTE : FUnctions
// if function ka proper declaration hai or invoke kr rh ho , initialization se pehle ya baad me bhi to bhi it will return whole function

Name(); // Hi
function name() {
    console.log('Hi');
}

Name() ; // Hi

console.log(Name); // will give whole function before or aftre declaration nothing matters


// NOTE : Arrow FUNCTIONS
// a arrow function behaves just like a variable , so in memory it will be assigned as undefined

getName();
var getName = () => {
    console.log('Hi');
} // output - getName is not defined , here this func behaves just loike another varibale

// default it returns undefined 