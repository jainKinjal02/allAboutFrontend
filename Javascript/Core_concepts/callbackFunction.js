// like first class functions
// passing functions into another function is called callback function

function x(){

}
x(function y(){}) // this y() is callback function

// setTimeout , eventListener all take callback functions

// eventListeners are heavy, takes memory because they form closures.

//////////////////////////////////////////////////////////////////////////

//Good Parts of callbacks(Callbacks are used to write asynchronous code in Javascript).  VS Bad parts of callbacks (callback Hell , inversion of control)

//what is callback function ?
//Some set of instructions that we want to execute at some other point of time - calling some function to get executed at a particular time.

//We can use callbacks to write asynchronous code in JS
//eg setTimeout

//## Issues with Callbacks

//### Callback Hell
// calling callback function one inside other or if else —-we fall into callback hell as the number of APIs call increases and dependent on one another.
// This kind of code is unreadable and unmaintainable.
// Example of callback hell —- e-commerce app

// Steps and dependency on one another:
// create order —> proceed payment —> show order summary page —> updating wallet
// All these API calls are dependent on one another and can be called when one process is completed, so for this, we are calling each callback functions 
// inside each other and thus forming the Callback hell/ also know as Pyramid of doom

const cart = ["shoes", "pants", "rings"];

api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){

                api.updateWallet();
            
        })
    })
});

// Inversion of Control
//It’s like losing control of your code while using callbacks.
// Here, let say the payment process is called after creating order, so here we are blindly trusting on createOrder API to call or execute proceed payment API ,
// in this way we are loosing control of our code.
//what if there are some bugs in createOrder and it didn’t work , what if proceed payment callback is never called ,
//what if this createOrder API is called twice somehow then this is a major issue if using callbacks dependent heavily - this is a huge risk.
//This is what we call it **inversion of control.





