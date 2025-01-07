class Car {
    constructor(brand) {
        this.carBrand = brand;
    }

    display() {
        return `I have a ${this.carBrand}`;
    }
}

let myCar = new Car("Toyota");
console.log(myCar.display()); // Output: I have a Toyota

// Here's the explanatory text from the image:
//In this example:
//  'class Car' is the class declaration.
// 'constructor(brand)' is a special method for creating and initializing objects created with the class. Here, it takes a 'brand' parameter and assigns it to 'this.carBrand'.
//  'display()' is a method of the class that returns a string including the car's brand.
// 'let myCar = new Car("Toyota")' creates an instance of the 'Car' class with "Toyota" as the brand.
// 'myCar.display()' calls the 'display' method on the 'myCar' object, logging the message to the console.



// Question: "is it different from traditional OOPS classes?"

// Answer: "Yes, JavaScript's approach to classes, introduced in ES6, is different from traditional class-based OOP languages like Java or C++. 
//Key differences include:

// 1. Prototype-based Inheritance: In JavaScript, classes are syntactic sugar over its prototype-based inheritance model. The inheritance is achieved through prototypes, not through classical inheritance.
// 2. Dynamic Typing: JavaScript is dynamically typed, unlike statically-typed languages like Java. This means that variable types are determined at runtime.
// 3. First-Class Functions: JavaScript treats functions as first-class citizens, which is not typically the case in traditional OOP languages.
// 4. Object Creation: In JavaScript, objects can be created in various ways, not just through classes. In traditional OOP languages, objects are primarily created from classes.

//These differences reflect JavaScript's flexible and dynamic nature, contrasting with the more rigid and structured approach of traditional OOP languages."