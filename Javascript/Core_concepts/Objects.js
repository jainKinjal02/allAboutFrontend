// unstructured data
// {} curlt braces - key value pairs

const obj = {
    firstName: "kinjal",
    lastName: "jain"
}

obj.firstName // dor notation
obj['firstName'] // bracket notation , key always specified as string in ''
obj.number // returns undefined , accessing property which does not exist

obj.number = '12344' // simply adds new property/key number
obj["number"] = '12344' // can also add it with bracket notation

console.log(obj); // { firstName: "kinjal", lastName: "jain" , number: "12344"}

// the function attached to an object is called as a method
const k = {
    age: 34,
    calcAge: function(year){
        return 2037 - year;
    }
}

k.calcAge(1957);//calling the function like 
k["calcAge"](1957);//calling the function in bracket notation

k.calcAge(this.age); // will point to k object , variable which has refernece to its current object i.e. 34

// ----------------------------------------------
// Object.assign
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // {a: 1, b: 2, c: 3}

const first = {
    fName: 'K',
    lName: 'Jain',
    family: [1,2,3]
}

const firstCopy = Object.assign({}, first);

firstCopy.lName = "Bhul";
console.log(firstCopy.lname) ; // Bhul;

// -----------------------------------------
// Looping objects - object keys , values and entities

Object.keys(name_of_Object);
// returns an array with all teh keys of the object

let a = {
    key1: 123,
    key2: 345,
    key3: 576
}
for (let i of Object.keys(a))
    console.log(i);         // key1 key2 key3

Object.values(name_of_Object);
// it gives an array of all values
for(let i of Object.values(a))
    console.log(i)         // 123 346 576

Object.entries(name_of_Object);
// give array of key -value pairs

for (let i of Object.entries(a))
    console.log(i);

// ['key1' , 123]
// ['key2', 345]
// ['key3', 576]


