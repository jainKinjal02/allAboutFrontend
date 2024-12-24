let name = {
    firstName: "Kinjal",
    lastName: "Jain",
    printfullName : function(){
        console.log(this.firstName+ " "+ this.lastName);
    }
}

name.printfullName(); // Kinjal Jain

// using call method we can do function borrowing like borrow function from other object and use it with data of other objects

let name2 = {
    firstName: "Sachin",
    lastName: "Bhai"
}

name.printfullName.call(name2); // first argument is reference or what you want This to be pointing to // Sachin Bhai

//if function is a solo function like this below

let print = function(hometown){
    console.log(this.firstName + " "+ this.lastName+ ' from '+ hometown);
}

print.call(name) // Kinjal Jain from undefined
print.call(name, "Udaipur") // Kinjal Jain from Udaipur-- here udaipur is arguement of the function

// Apply
// same as call() , the difference is the way how we are passing the arguements

print.apply(name, ["Mumbai", "India"]); // list to the arguments passed to function

// Bind
// method returns a function 
// binds the method and keep a copy of it and can be invoked later while call and apply are directly invoked whereever written

let printName = print.bind(name, "Mumbai");
printName(); // Kinjal Jain from Mumbai