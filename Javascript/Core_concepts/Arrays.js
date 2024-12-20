// structured and ordered data
// array can be declared in two ways
const arr = [1,2,3]

const arr1 = new Array(1,2,3);

// push method of array returns length of an array
const lengthArr = arr.push(5); 
console.log(lengthArr); // 4

arr.unshift('0') // add 0 in the beginning of the array
arr.pop() // takes out last element
arr.shift() // removes the first element
// no arguments needed for pop() and shift()

arr.indexOf(1); // 0 returns the index of the element and if not present returns -1
arr.includes(1) // true , returns true if element present in the array
arr.includes('1') // false  - , performs strict checking
//includes works for both string and array 




