// These are used to handle asynchronous code in Javascript

cart = ['A','B','C'];

createOrder(cart); // gives orderId

proceedToPayment(orderId)// takes orderId and process payment

//both these are async operation becaus we dont know how much time they ll take to execute
//both are heavily dependent on each other

//using callbacks
api.createOrder(cart, function(){
    proceedToPayment(orderId);
});

//there is major issue with this i.e. inversion on control
//blindly trusted create order for process payment
//what is it never calls payment API or called it twice, we dont know
//that is how we lost control of our code to some oter part of the code(createorder API)

//This can be handled with promises
//let us write code such that create order instead of calling another callback,
//takes only cart and returns a promise(some data)

//Promise is nothing but an empty object
//after some time when this  createOrder completes its execution no matter after how much time,
// this promise object will be filled with returned data , lets say in our case 
//its filled with orderId, order details
//then now we will attach this callbck function of process payment with the returned promise filled with data

const promise = createOrder(cart);

//{data: orderDetails}

promise.then(function(orderId){ //only called when promise returned is filled with data
    proceedToPayment(orderId);
})

//Here there is a difference earlier we were attaching this callback function payment directly to the create order 
//but now we are attaching this process payment with the promise returned after the completion of the create order, 
//now we are not blindly depenedent on create order
//here we gain control of our code with promises

//------------------------------------------------
// Fetch returns promise
let apiCall = "https://github.com/jainKinjal02";
const promiseObject = fetch(apiCall);
console.log(promiseObject);

//When debugger placed , initially it returned a promise object with empty data , 
//this state is called PENDING state of promise where data is undefined or empty.
//As soon as it completed execution , the promise object is filled with data, the state of the Promise becomes Fulfilled.

//There are two things : PromiseState and PromiseResult which will have the data


promiseObject.then(function(data){
    console.log(data); // this how we fetch the data returned in a promise object
});

//There can be three states - pending , fulfilled , rejected
//Also promises are immutable if it is resolved

//Interview QuestionS
//What is a promise ?
//Promise - an object representing eventual completion of an async operation. 
//eg here, createOrder is an async operation which will be eventually completed.
//Callback hell can be avoided with **Promises chaining.If writing like this , always return the promise.

const cart = ['A','B','C','D'];
// promise chaining to fix callback hell

createOrder(cart).then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInc){
    return showOrderSummary(paymentInc);
})
.then(function(paymentInfo){
    return updateWallet(paymentInfo)
});

//using arrow function , looks cleaner
createOrder(cart)
.then((orderId)=> proceedToPayment(orderId))
.then((paymentInc) => showOrderSummary(data))
.then((data)=> updateWallet(data))
