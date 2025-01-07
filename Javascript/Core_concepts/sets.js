let a = new Set ([1,1,2,3]);
console.log(a); // {1,2,3}

console.log(a.size) // 3
console.log(a.has(1)); // true;
console.log(a.has(5)); // false;
a.add('abc') // {1,2,3,abc}

a.delete('abc') // {1,2,3}
a.clear(); // {} - empties the set

// how to retrieve data from sets ?
// they dont have indexes , so we cannot do a[1] , better is to convert it in array and then retrieve it

// we can iterate over a set [looping is possible]
for (let i of a )
    console.log(i) // 1 2 3

// main usecase is to remove duplicates values from arrays
let a = [1,2,3,4,4,4,5];

let b = new Set (a);
console.log([...b]); // using spread opeartor in array

console.log(new Set('ababcd').size) // 4 - works with strings too




