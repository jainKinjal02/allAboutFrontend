// data is stored in key value pairs, diff between object and map is that in maps the keys have any data type and can be huge
// but in objects keys are usually strings

const rest = new Map();
rest.set('name', 'Kinjal Jain');
rest.set(1, 'Hello');
// set method not only adds but returns updated map too
// {"name" => 'Kinjal Jain,
// 1 => "Hello"}

// chaining also allow , add multiple key value pairs altogether
// rest.set(__ , __).set(__ , __).set(__ , __)

rest.get('name') // Kinjal Jain
rest.get(1) // Hello

console.log(rest.has('name')); // true
rest.delete(1); // 1 key value pair will be deleted

rest.size() ; // 2
rest.clear(); // empty the map

rest.set([1,2], 'Test');

// to retrieve value of this array
rest.get([1,2]); // undefined , this is so both arrays in set dunction and in get function are 2 diff objects in heap and are not same.
// but if we give name to the array , it will work

const arr = [1,2];
rest.set(arr,'Test');
rest.get(arr) // Test - now referring to same memory

// Maps iterators
// use new Map
let rest = new Map([[_ ,_] , [_ ,_] , [_ ,_] , [_ ,_]]); // an array of arrays of key value pairs

// iterate like below
for (let [key,value] of rest){
    console.log(`${key} : ${value}`);
}