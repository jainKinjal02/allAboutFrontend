// a variable shadows another variable beacuse the variable points to the same memory location

// var in global scope
var a = 100;
{
    var a = 20;
    console.log(a); // 20 - shadowed the a = 100 one
}
console.log(a); // 20 

// let in block scope
let a = 10
{
    var b = 20;
    let a = 20;
    console.log(a) // 20
}
console.log(a) // 10 - no shadowing - the case will be the same for const too

///////
let a = 20;
{
    var a = 20; // error syntax error - a has already been declared
}

// if you want to shadow a let variable inside a block using var , you cant do that but you can shadow let using let

const a = 20
{
    const a = 20;  // allowed
}

let a = 20
{
    let a = 20;  // allowed
}

var a = 20
{
    let a = 20;  // allowed
}

// but var has functional scope when in function
let a = 20;
function x(){
    var a = 20; // allowed
}