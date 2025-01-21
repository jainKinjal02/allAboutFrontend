// generator functions in JavaScript, which are special functions that can pause their execution and resume later, yielding multiple values over time.
// Generator functions are defined using the function* syntax and use the yield keyword to pause execution and return a value.

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

// The function* syntax declares a generator function
// yield pauses the function and returns a value
// next() resumes the function until the next yield
// Each next() call returns an object with {value: yielded_value, done: boolean}

function* fibonacciGenerator() {
    let prev = 0, curr = 1;
    
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5

// Generators are particularly useful for:

// Creating iterators
// Working with large or infinite sequences
// Memory-efficient data processing
// Handling asynchronous operations

//how generators can be used with for...of loops:

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (const num of range(1, 5)) {
    console.log(num); // Prints 1, 2, 3, 4, 5
}

// use generators with async operations using async function* and yield*
async function* asyncGenerator() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    
    for (const item of data) {
        yield item;
    }
}

// Using the async generator
async function processData() {
    for await (const item of asyncGenerator()) {
        console.log(item);
    }
}
