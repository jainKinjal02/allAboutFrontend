// A **pure function** if takes two arguments , returns the same result every time it is invoked with same arguments.

// For eg ; 
function sum(a,b){

 return a+b ;

}

// sum(2,4); will always return 6 if the arguments are 2 and 4 .
// But lets say the code is 

let c = 2;

function sum( a ,b){

return a+b +c ;

}

// sum(2,4) ; will always return same unless the value of c is changed.

// If c changes sum(2,4) will not return the same result , this is called **impure function**. As here , c may change without function sum knowing.

// jsx
let c = 2;

function sum(a,b){
 c = a+b;
return a * c ;

}

// sum(2,4) ; will always return the same result even if the value of c is changed
// but this is also an impure function because this function is creating a side effect by making changes outside the function's
// scope , here c is accessible outside the scope also and we in the function are modifying the c 's value which is like a side effect
// that's why it is an impure function.


// A function with side effect is also an impure function. **Side effect** means making effect outside the scope of the function , here c is not in functional scope and its value is being changed inside function.

// **NOTE: With functional component , we will be creating many impure functions using hooks as we will be generating many side effects**