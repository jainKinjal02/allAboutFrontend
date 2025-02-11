// Event handling is how we make our components respond to user actions like clicks, key presses, or form submissions

//Define a handler function
const handleClick = () => {
    console.log('Button was clicked!');
}

//Attach it to an element using an event prop
// <button onClick={handleClick}>Click me</button>

// The key points to understand:
// 1. Event props start with "on": Like onClick, onChange, onSubmit, etc.
// 2. Passing vs. Calling:
// Correct - passes the function
//<button onClick={handleClick}>
// Wrong - calls the function immediately
//button onClick={handleClick()}></button>}

// Passing data to handlers:
const handleClick = (name) => {
    console.log(`Hello ${name}!`);
}

// Using an arrow function to pass parameters
<button onClick={() => handleClick('John')}></button>

// Event object: React passes an event object automatically:
const handleChange = (event) => {
    console.log(event.target.value); // Gets input value
}

<input onChange={handleChange} />


// a example below
function UserForm() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        // Handle form submission
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        // Do something with the input value
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleInputChange}
                onClick={() => console.log('Input clicked!')}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
