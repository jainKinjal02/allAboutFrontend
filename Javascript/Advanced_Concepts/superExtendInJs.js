
// Question : Do we have super and extend keywords in Javascript ?

// Answer: Yes, JavaScript supports the 'super' and 'extend' keywords, which are integral to its class syntax introduced in ES6:
//'extend': This keyword is used to create a class as a child of another class. It allows you to derive a new class from an existing one, 
//inheriting its properties and methods.
//'super': This keyword is used within a derived class to call functions on an object's parent class. It is often used in the constructor 
//of the derived class to call the constructor of the parent class.
// These keywords enable JavaScript to emulate a more traditional class-based inheritance model, although it's built on top of
// JavaScript's prototype-based inheritance.


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // Call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.


// -------------------------------------------------------------------------------
//In this example:

//  The Dog class extends the Animal class, inheriting its properties and methods.
//  The super(name call in the Dog constructor is used to call the constructor of the Animal class.
//  The Dog class overrides the speak method from Animal class to provide its own implementation.

//In JavaScript, when you use the **`extends`** keyword to create a subclass, you should use the super keyword inside the subclass's
// constructor if you want to call the constructor of the parent class. The **`extends`** keyword is used for creating a class as a child of another 
//class, thereby setting up the inheritance relationship. The **`super`** keyword is then used within the constructor of the subclass to call 
//and execute the constructor of the parent class, ensuring proper initialization of the subclass. Without **`super`**, 
//the subclass can't properly inherit properties and methods from the parent class

