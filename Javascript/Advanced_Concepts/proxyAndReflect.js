// A Proxy is an object that wraps another object (called the target) and allows you to intercept and customize fundamental operations like property lookup, 
//assignment, enumeration, function invocation, etc.

let proxy = new Proxy(target, handler);

//  a example demonstrating various Proxy capabilities:

// Create a target object
let user = {
    name: "John",
    age: 30,
    _password: "secret"
};

// Create a Proxy with a handler
let userProxy = new Proxy(user, {
    // Intercept property reading
    get(target, prop) {
        if (prop.startsWith('_')) {
            console.log('Accessing private property is not allowed');
            return undefined;
        }
        console.log(`Accessing property: ${prop}`);
        return target[prop];
    },

    // Intercept property writing
    set(target, prop, value) {
        if (prop === 'age') {
            if (typeof value !== 'number') {
                throw new Error('Age must be a number');
            }
            if (value < 0 || value > 120) {
                throw new Error('Invalid age');
            }
        }
        console.log(`Setting property: ${prop} = ${value}`);
        target[prop] = value;
        return true;
    },

    // Intercept property deletion
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            console.log('Cannot delete private properties');
            return false;
        }
        console.log(`Deleting property: ${prop}`);
        delete target[prop];
        return true;
    }
});

// Example usage of the Proxy:
// Reading properties
console.log(userProxy.name);  // Accessing property: name, logs "John"
console.log(userProxy._password);  // Blocks access to private property

// Setting properties
userProxy.age = 35;  // Sets age successfully
try {
    userProxy.age = "invalid";  // Throws an error
} catch (e) {
    console.log(e.message);  // "Age must be a number"
}
// Deleting properties
delete userProxy.name;  // Allows public property deletion
delete userProxy._password;  // Prevents deletion of private property

////////////////////////////////////////////////////////////////////////////

// Reflect is a built-in object that provides methods for interceptable JavaScript operations. It's often used in conjunction with Proxy 
//to forward operations to the target object.
//Here's an example demonstrating Reflect:

let obj = {
    name: "Alice",
    greet() {
        return `Hello, ${this.name}!`;
    }
};

let handler = {
    get(target, prop) {
        console.log(`Accessing ${prop}`);
        // Use Reflect.get to forward the property access
        return Reflect.get(target, prop);
    },

    apply(target, thisArg, args) {
        console.log('Method called');
        // Use Reflect.apply to invoke the method with correct context
        return Reflect.apply(target, thisArg, args);
    }
};

let proxy1 = new Proxy(obj, handler);

console.log(proxy1.name);  // Logs "Accessing name" and "Alice"
console.log(proxy1.greet());  // Logs "Method called" and "Hello, Alice!"

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Let's imagine Proxy and Reflect like a magical toy box and a helper robot!
// Proxy: The Magic Toy Box 🧸
// Imagine you have a special toy box that can:
// Stop you from taking out certain toys
// Tell your parents when you try to hide a toy
// Make sure you only put the right toys in the right spots

// Magic Toy Box Example
let toyBox = new Proxy({}, {
    // Prevents putting broken toys in the box
    set(box, toyName, toy) {
        if (toy.isBroken) {
            console.log("No broken toys allowed!");
            return false;
        }
        box[toyName] = toy;
        return true;
    },
    
    // Warns before taking out special toys
    get(box, toyName) {
        if (toyName === "secret-toy") {
            console.log("Ask a grown-up first!");
            return null;
        }
        return box[toyName];
    }
});

// Reflect: The Helper Robot 🤖
// Think of Reflect like a helpful robot that:

// Knows exactly how to handle different toys
// Can carefully move, check, or change toys without breaking them
// Always follows the correct toy box rules

// Helper Robot Example
let toy = { name: "Teddy Bear" };
let helperRobot = {
    // Carefully checks and moves toys
    moveToy(box, toyName) {
        // Uses robot's precise methods to handle toys
        Reflect.set(box, toyName, toy);
        console.log("Toy moved safely!");
    }
};

// Why They're Cool 🌟

// Proxy (Magic Toy Box)

// Watches what goes in and out
// Adds special rules
// Protects your toys


// Reflect (Helper Robot)

// Helps move things carefully
// Follows all the rules
// Makes sure nothing gets broken

