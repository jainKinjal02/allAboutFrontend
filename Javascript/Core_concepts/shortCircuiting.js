// && and ||

// OR - the result of || does'nt have to be boolean
console.log(3 || 'Kinjal') // 3 - returns the first truthy value

// short circuiting means OR operator will always return the first value if its a truthy value like above

console.log("" || 3); // 3
console.log(undefined || null) // null -- control keeps checking till truthy value is not available then returns the last falsy value
console.log(undefine || null || "" || 'Hello' || 123 || null || 0); // Hello - first truthy value

// AND - it immediately short curcuits the first falsy value
console.log(0 && 'Jon'); // 0
console.log(7 && 'JON') // JON - searchs till first falsy value if not found return last truthy value

console.log('Hello' && 23 && true && null && 567); // null

// -----------------------------------------------------------------------\

// nullish coalescing operator (??)
// only includes null and undefined as non falsy
console.log('abc' ?? 10 ); // 10;

// if this value is nullish (null or undefined) then only evaluation continues
console.log(0 ?? 10); // 0
// 0 is non nullish - evaluation stops