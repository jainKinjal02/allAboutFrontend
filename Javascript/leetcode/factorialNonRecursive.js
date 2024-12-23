function factorial(n) {
 let output = 1;
 for(let i =1; i<=n;i++){
    output = output * i;
 }
 return output;
}

console.log(factorial(5));