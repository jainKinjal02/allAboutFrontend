// what is event propagation
//Event propagation in JavaScript refers to the way events flow through the DOM (Document Object Model) hierarchy when an event is triggered. 
//It describes the order in which event handlers are executed on elements within the DOM tree

// It occurs in two ways

// Event Capturing
// events propagates from top to down in hierarchy.
//The event starts from the root of the DOM and travels down to the target element.

// Event Bubbling
// event propagates from down to top in hierarchy i.e. towards root element

<div id="parent">
  Parent
  <button id="child">Click Me</button>
</div>

  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', () => {
    console.log('Parent clicked');
  });

  child.addEventListener('click', (event) => {
    console.log('Child clicked');
    // event.stopPropagation(); // Uncomment the next line to stop event propagation
  });
// output Child clicked Parent clicked
// The event starts at the child element and then bubbles up to the parent.


// NOTE:
addEventListener("click", () => {}, useCapture) // useCapture is a boolean flag is True , events will be captured downwards and if it false or 
//not given rhis flag then events will be bubbles up

// Key Methods for Controlling Event Propagation
// 1. To stop event propagation = stopPropagation()
addEventListener('click', (e)=> {
    console.log("clicked");
    e.stopPropagation();
}, true)

// 2. stopImmediatePropagation()
// Stops the event from propagating and prevents any additional event listeners on the same element from being executed

// 3. preventDefault()
// Prevents the default action associated with the event (e.g., preventing a form submission or a link from navigating)

