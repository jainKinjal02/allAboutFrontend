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

arr[3] = 8;// you can simply add an element at 3 index like this

// ----------------------------------------------------------------------------------------------

// Array methods
let arr = [1,2,3,5,6];
arr.slice(2); // [3,5,6] // returns new array

// to create an exact shallow copy of arr ==> arr.slice(); no arguements

arr.splice(2); // [3,5,6] // splice mutates the actual array where as slice returns a new array
arr.splice(-1); // will remove the last element
arr.splice(1,2); // 1 in index snd 2 is nomber of elemeents to be removed - [1,5,6]

arr.reverse(); // mutates the original array;

const b = arr.concat(arr2);
const c = [...arr, ...arr2];

//----------------------------------------------------------------------------------------------

//forEach - higher order function which takes callback function, this callback takes arguement as each eleemnt of the array, it will loop over entir array and do not return a new array
arr.forEach(function(i){

})
// also works with maps and sets

//----------------------------------------------------------------------------------------------

// find - retrieves one element from the array based on a condition, takes a callback function which loops over array
arr.find(ele => ele > 0); // returns only first element from array which satisfies the condition while filter returns a new array satisfying condition


//----------------------------------------------------------------------------------------------

//findIndex() - find the index of the first element in an array that satisfies a provided taesting function, it returns -1 if no ele passes test
let n = [1,5,10,15,20];
let fn = n.findIndex(x => x >10); // 3

//----------------------------------------------------------------------------------------------

// some and every method 
// some determines whether the specified callback function returns true for any element in array
let fnn = n.some( x => x > 10); // true

// every returns true if all ele satisfy the condition else false

// flat - flattens an array into parent arry but it handles only one level of nesting
[[1,2,3],[4,5], 5,77,8].flat(); // [1,2,3,4,5,5,77,8]
arr.flat(2); // 2 meanes 2 level of nesting handled

// sort - sort method sorts as strings
let nn = [1,5,6,8,33,6];
n.sort(); // [1,10,33,5,6,6,8]

// to sort numbers -- arr.sort((a,b)=> a-b) // aseceending order;
// to sort numbers -- arr.sort((a,b)=> b-1) // des  ceending order;


