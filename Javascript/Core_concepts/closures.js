// closure is a function bind together with its lexical environemnt
// function along with its lexical scope forms a closure

function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
} 

var z = outer();
z();

// here outer function execution context was deleted afer excecution but inner function remember its lexical scope 
// hence inner func has formed closure with variable a

// a closure gives you access to outer function scope from an inner function

//used of closure
// function currying, module design pattern, setTimeout, memoize

// Closures helps in data hiding and encapsulation
function A(){
    var count = 0;
    function incre(){
        count++;
        console.log(count);
    }
}
console.log(count); // error count is not defined

// to access it, call like a closure formed
var count1 = A();
count1() // 1
count2() // 2

// disadvantages of closure
// take sor accumulates lots of memory

function A(){
    var a = 10;
    var z = 20;
    function b(){
        console.log(a);
    }
    return b;
}

var c = A();
c() // 10

// instead of execution context of of A() got deleted but var a 's memory is not free because b() has formed closure with var a
// this is disadvantage
// but var z is closured with b() but b() is not using z to z's memory will get free (smartly collects garbage JS engine)
