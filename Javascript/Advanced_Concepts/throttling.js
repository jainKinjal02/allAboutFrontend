//Throttling and Debouncing are techniques used to control the rate at which a function is executed, 
//especially for performance optimization in JavaScript. Both are essential when dealing with events that fire frequently 
//(e.g., scroll, resize, keypress) to avoid unnecessary execution and improve application performance


//Throttling ensures that a function is executed at most once in a specified time period, regardless of how many times the event is triggered.

//How It Works
//Limits the execution of a function to once every predefined interval.
//Useful for scenarios where regular updates are required but not excessively frequent.
//Use Cases :
//Handling scroll events (e.g., updating a progress bar).
//Window resize events.
//Rate-limiting API calls.

function throttle(func, limit) {
    let flag = true ;
    return function () {
        let context = this;
        args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(()=> {
                flag = true;
            }, limit)
        }
    };
  }
  
  const log = () => console.log('Throttled!');
  window.addEventListener('scroll', throttle(log, 1000)); // Logs at most once every 1 second

  // if flag is true then only make function call (next function call), created a closure here , this flag will not be initilized again and again
  