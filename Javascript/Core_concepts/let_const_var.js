// let and const are block scopes 
// if not giving a type to a variable , it is by default 'var' and in global scope
// var - global scope - avoid to use it - prior to ES6

var teacher = 'Kylie';
function other() {
    teacher = 'suzy';
    topic = 'sama';
    console.log('welcome');
}
other(); // welcome
console.log(teacher); // suzy
console.log(topic); // sama -- since it is undeclared so it is var in global scope
// and if we have declared var topic = 'sama' then var here will be functional scope , it will throw error if accessing outside the function
//error will be - ReferenceError: topic is not defined

const a = 2; // , always have to assign a value 
 // const b ; // syntax error - missing initializer 
a = 6; // const cant be mutated otherwise typeError 

let c = 30; // to mutate or change the value , always use let
c = 45;


// udefined                            vs  undeclared
// variable which is declared              variable which was never declared 
// but dont have a value, 
//have a placeholder in memory

// let and const on JS are hoisted but comes with a concept of temporal dead zone
console.log(ab); // time between the hositing and till it gets some value i.e. ab = undefined to ab = 10 called temporal dead zone
let ab = 60;
// in this zone , we get reference error -as ab is in temp dead zone


let cb = 10;
let cb = 56; // syntax error - cb already being declared

let a = 10;
var a = 100; // syntax erorr - duplication declaration

var a = 10;
var a = 100; // correct syntax

const b; // Typeerror - assignment to const variable
b = 1000;  // syntax error - missing initilaization

let a;
 a = 18; // correct

 // const should be declared and initialized together
 

 // NOTE:
 // Block - defned by curly braces
 // combining multiple JS statements into a group
 // we create block so that this block can be used as a single statement at other place
 // what all varivale and statment we can access in a block is called as block scope

 {
    var a = 10;   //memory - block (separate memory space) b and c - undefined
    let b = 20;    // global - a : undefined
    const c = 30;
 }

 {
    var a = 10;
    let b = 20;
    const c = 30 
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
 }

 console.log(a); // 10
 console.log(b); // reference error - b is not defined
 console.log(c); // refernece error - c is not defined