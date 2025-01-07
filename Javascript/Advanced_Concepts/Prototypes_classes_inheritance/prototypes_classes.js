arr.__proto__ == Array.prototype

// Creating a prototype object
var animal = {
    type: 'Mammal',
    sound: function() {
        console.log('Makes a sound');
    }
};

// Creating a new object that inherits from the 'animal' prototype
var cat = Object.create(animal);
cat.type = 'Cat'; // Overriding a property
cat.sound(); // Inherits the sound method from the 'animal' prototype

// Creating another object that inherits from the 'animal' prototype
var dog = Object.create(animal);
dog.type = 'Dog'; // Overriding a property
dog.sound(); // Also inherits the sound method from the 'animal' prototype