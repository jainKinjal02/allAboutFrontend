function fibonacciRecursive(n) {
    if (n <=1){
        return n;
    } else {
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    }
}

console.log(factorial(10));