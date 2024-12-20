// Variables can contain letters, digits, _ and $ , cannot start with a digit / upper case letter, dont ise reserved keywords/constants like PI
// a varibale by default is undefined in Js

// DataTypes - object or primitive
// every value is Js is an object else it is primitive
// primitive - string, boolean, null, undefined, symbol, bigint, number (floating point included)

// undefined - value of a variable which is yet to be defined but has a placholder in the memory
//null also mean empty value
//symbol - unique value that cannot be changes (ES6 - 2015 added)
//bigInt - large integers than Number type cannot hold (ES-2020 added)

//JS has dynamic typing - value has the type not the variable
// single line comment 
/*  multi line comment */ 

// typeof(firstName)  - gives datatype of a variable NOTE: typeof me o small hota hai or indefOf function me O big hota hai
// typeof undefined is undefined
// typeof null/array - object
//typeof Nan - Number , 
//Nan is a special value which indicated some invalid numeric operation like 'hello'/2 ;

function greet(name, fName){
    console.log(name + ' '+ fName);
}

greet("kinjal"); // kinjal undefined since every variable is undefined by default , second arg not given in call
