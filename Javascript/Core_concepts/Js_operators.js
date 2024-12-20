// Basic operators - +, - , * , / , 2**3 (this is exponentiation) ---> Math operators

// string + string = concatenation

// assignment operators --> =
let x = 10;
x += 10; // 20
x *= 2; // 20
x++; // 11
x--; // 9

// comparison - returns true / false -->  <, > , <=, >=
let age = 14;
const isFull = age >= 18; // false

// operator precedence - assignment op --> right to left

// String and template literals - came in ES6 = ``

// equality operators , == and ===
// === strict checking , do not performs  type coersion
// == performs type coersion
 18 == '18' // true , becaus eof type coersion '18' is converted into int 18
 18 === '18' // false

// Switch Case --> uses === strict comparison 
//comparing a single value against several possible values
//each case represents a possible value that the expression might match
//break statement prevents "falling through" to the next case , without it, execution continues to the next case
//The default case runs if none of the other cases match
const day = 'monday';
switch(day) {
    case 'monday' :
        console.log('Plan');
        break;
    case 'tuesday':
        console.log('Leave');
        break;
    default:
        console.log('not a day');
}


// condition aoperators - tertiary operators
// it always has three parts , one condition , next is true case nd false case
let isAge = age >= 18 ? console.log('yes') : console.log('no');