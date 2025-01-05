// create a promise

const cart =[1,2,3,3]; 

const promise = createOrder(cart);

promise.then((orderDetails)=> console.log(orderDetails));

//Now how will this createOrder will return promise
//we need to write createOrder function
//resolve and reject are function

// producer
function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error("cart is not valid")
            reject(err.message);
        }

        const orderId = '123445'
        if(orderId){
            console.log('srt in promise')
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
            console.log('end')
        }
    })

    return pr;
};

function validateCart(cart){
    if(cart.length === 0){
        return false;
    }else{
        return true;
    }
}

// ----------------------------------------------------------------------------------------------------------------

const cart = [1,2,3,3];
const promise = createOrder(cart);
promise.then((orderDetails)=> console.log(orderDetails));

//Now how will this createOrder will return promise
//we need to write createOrder function
//resolve and reject are function
// producer

function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err.message);
        }
        const orderId = '123445'
        if(orderId){
            console.log('srt in promise')
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
            console.log('end')
        }
    })
    return pr;
};
// srt in promise
// end
// 123445

//123445 printed after five seconds till then promise will be in the pending state
//after we get data in promise object after 5 seconds , we get te callbck function called in .then method.

// ----------------------------------------------------------------------------------------------------------------
//When promise is rejects , lets say the cart is empty , then we should handle errors.

const cart = [];
const promise = createOrder(cart);
promise.then((orderDetails)=> console.log(orderDetails))//resolved
.catch((err)=>console.log(err))//if promise is rejected

//Now how will this createOrder will return promise
//we need to write createOrder function
//resolve and reject are function
// producer

function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err.message);
        }
        const orderId = '123445'
        if(orderId){
            console.log('srt in promise')
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
            console.log('end')
        }
    })
    return pr;
};
// srt in promise
// end
// cart is not valid


// ----------------------------------------------------------------------------------------------------------------
//Promise chaining
const cart = [1,2,3,4];
createOrder(cart)
.then((orderDetails)=> {
    console.log(orderDetails);
    return orderDetails
})//resolved
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch((err)=>console.log(err))//if promise is rejected

//Now how will this createOrder will return promise
//we need to write createOrder function
//resolve and reject are function
// producer

function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err.message);
        }
        const orderId = '123445'
        if(orderId){
            console.log('srt in promise')
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
            console.log('end')
        }
    })
    return pr;
};

function proceedToPayment(){
    const pr = new Promise((resolve,reject)=>{
        resolve("Payment successful")
    })
    return pr;
}

function validateCart(cart){
    if(cart.length === 0){
        return false;
    }else{
        return true;
    }
}
// srt in promise
// end
// 123445
// Payment successful

//see first 123445 got printed , it took 5 seconds
//ten Payment successful — this is advantage of promise chaining, once the promise is fullfilled by createOrder 
//then only it called payment process callback


// ----------------------------------------------------------------------------------------------------------------

//What if I want to proceed for payment process even if the cart is empty , ten I moved the catch on top of payment process ten it will check the error 
//till then since we handled it , it will proceed for payment info.

const cart = [];
createOrder(cart)
.then((orderDetails)=> {
   console.log(orderDetails);
   return orderDetails
})//resolved
.catch((err)=>console.log(err))
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
   console.log(paymentInfo);
})

//Now how will this createOrder will return promise 
//we need to write createOrder function
//resolve and reject are function
// producer

function createOrder(cart){
   const pr = new Promise((resolve,reject)=>{
       if(!validateCart(cart)){
           const err = new Error("cart is not valid")
           reject(err.message);
       }
   })
}

// srt in promise
// end
// cart is not valid
// Payment successful

//Even if we have a then just like above after a catch , it will be called, because catch is handling the errors , hence then will be called.

const cart = [];
createOrder(cart)
.then((orderDetails)=> {
   console.log(orderDetails);
   return orderDetails
})//resolved
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
   console.log(paymentInfo);
})
.catch((err)=>console.log(err))
.then(()=>{
   console.log('this will be called even after the catch')
})

//Now how will this createOrder will return promise
//we need to write createOrder function
//resolve and reject are function
// producer

function createOrder(cart){
   const pr = new Promise((resolve,reject)=>{
       if(!validateCart(cart)){