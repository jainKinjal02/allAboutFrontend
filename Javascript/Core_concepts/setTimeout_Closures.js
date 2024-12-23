// setTimeout method called a function or evaluates an expression after a specified number of miliseconds

function x(){
    var i =1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log('Hello');
}

x(); // prints i after 1 second
// Hello
// 1

// seTimeout takes callback function and attach it to a timer and starts it ,below code  starts executing then as soon as timer expires , callback function
// is again put to callstack and runs it.

// question : print i after i seconds

function z() {
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000);
    }
    console.log('Hey')
}
z(); // output : Hey 6 6 6 6 6 

// this is so because we are using var , it refers to the same i, loop was constantly running and value reaches to 6 (i++), does to wait
// for timer to expire , so prints 6 five times

// this can be fixed if we use let variable since let has block scope, everytime it will point new memory location of i
function zz() {
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000);
    }
    console.log('Hey')
}
zz(); // output : Hey 1 2 3 4 5
// this is an example of closure , function forms closure with every new value of i

// To implement using var , wrap setTimeout inside another function and calling close(i) everytime in loop creates a new value of i- functional scope
function oo() {
    for(let i=1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i)
            }, i*1000);
            
        }
        close(i);
    }
    console.log('Hey')
   
}
oo(); // output : Hey 1 2 3 4 5