// currying refers to the process of transforming a function with multiple arity into some function with less arity. 
//The curried effect is achieved by binding some of the arguements to the first function invoke, so that those values are fixed for the next invokation

// 2 ways of function currying

// using closures

function multiply(x){
    return function (y){
        console.log(x+y);
    }
}

let multiplyByTwoClos = multiply(2);
multiplyByTwoClos(3);

// using Bind
function multiply (x,y){
    console.log(x * y);
}
let multiplyByTwoBind = multiply.bind(this,2);
multiplyByTwoBind(3);