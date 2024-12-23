// With creation of global execution context, a global object is also created calles as "Window" and "this" variable also created

this === window // true

// this points to window

// Global Space :- everything we see on top level, if we create these variable and function in global space, they get attached to window

var a = 10;
function b() {
    var x = 100;
}
console.log(window.a); // 10
console.log(a); // 10
console.log(this.a); // 10
console.log(x); // error X is not defined - var has functional scope
