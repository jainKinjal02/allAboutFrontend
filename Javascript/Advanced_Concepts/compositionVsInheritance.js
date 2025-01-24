// Composition vs Inheritance in JavaScript:
// Composition (Preferred Approach):

// Builds complex objects by combining simpler objects
// More flexible and modular
// Favors object composition over class inheritance
// Easier to modify and maintain

// Composition Example
function createPerson(name) {
    return {
      getName: () => name
    };
  }
  
  function createEmployee(name, role) {
    const person = createPerson(name);
    return {
      ...person,
      getRole: () => role
    };
  }

// Inheritance (Traditional OOP Approach):

// Uses class hierarchies
// Creates tight coupling between classes
// Less flexible, harder to modify
// Can lead to complex inheritance trees

// Inheritance Example
class Person {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }
  
  class Employee extends Person {
    constructor(name, role) {
      super(name);
      this.role = role;
    }
    getRole() {
      return this.role;
    }
  }

// Key Differences:

// Composition: More dynamic, easier to change
// Inheritance: More rigid, creates dependencies
// Modern JavaScript prefers composition
// Composition supports better code reuse and flexibility

// Recommended: Use composition for most scenarios, inheritance sparingly.