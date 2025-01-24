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
