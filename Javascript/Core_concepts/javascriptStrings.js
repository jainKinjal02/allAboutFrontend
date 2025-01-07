// all string methods return a new string

const s = 'abshsjas';

s.length(); // length of string
s.indexOf('a') //  0 - returns index of first occurance // if not present returns -1
s.lastIndexOf('a') // 6 - returns index of last occurance // if not present returns -1

s.slice(4); // sjas - returns a new string position at which extraction starts
s.slice(4,6); // sj - end index in not included

s.toLowerCase();
s.toUpperCase();

s.trim()// removes white space from start and end of the string
s.replace('1_', '2_') // 1_ to be replced with 2_ but it replaces only first occurance
s.replaceAll('1_', '2_') // it replaces all occurances

// reverse() is array function - do not works with strings

s.includes('shs'); // true
s.startsWith('a'); // true
s.endsWith('ui'); // false

s.split('-'); // splits string into array , - is the divider of the string
s.split(); // takes entire string as an element in the array
s.split(""); // split each char as an element;

// NOTE : join is an array function - opposite of split function
arr = ['a','b'," ",'c']
arr.join(); //a,b, ,c  joins like having comma  
arr.join(""); // joins all string divided // ab c
arr.join(" "); // a b  c - each separated by space

s.padStart(25,'+'); // it will add + in start such that whole strings length = 25
s.padEnd(30,'+'); // in the end and length = 30

