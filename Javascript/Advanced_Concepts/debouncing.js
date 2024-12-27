//Throttling and Debouncing are techniques used to control the rate at which a function is executed, 
//especially for performance optimization in JavaScript. Both are essential when dealing with events that fire frequently 
//(e.g., scroll, resize, keypress) to avoid unnecessary execution and improve application performance

// if user wants to load suggestions while typing in a search box then onkeyup event we can call API to load matching data but what if we make 
// a function which calls getDATA API function after every specific period of time.

// debouncing is getdATA is called when the time b/w two press key event is 3000/msec
// here delay is the difference between the two events fired

<input type='text' onkeyup = "betterFunction" />

// debouncing

let counter = 0;
const getData = () => {
    // api call to fetch data
}

const debouncedFunction = function (fn, d){
    let timer;
    return function () {
        let context = this;
        args = arguements;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args);
        }, d)
    }
}

const betterFunction = debouncedFunction(getData, 300);

// so when user types so fast, it will make lesser API calls bec additional delay of 3 msec on keyup event
// this debounce func takes 2 arguements, one event handler callback function and second is delay to be applied on callback function

// purpose of clearing the timer is to ensure that only the last invocation of the debounced method is executed
// apply method is used to invoke the debounced function with a specified current context(this used) and set of arguements

// difference between debouncing and throttling
// delay is differnece between 2 events fired  in debouncing
// delay is difference between two function calls (API function call), at the very first API function will be called and next wll be called hen delay has passed
// no  matter how many event are fired during the delay - in throttling

