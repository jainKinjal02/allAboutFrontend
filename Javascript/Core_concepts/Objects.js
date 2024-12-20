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