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
