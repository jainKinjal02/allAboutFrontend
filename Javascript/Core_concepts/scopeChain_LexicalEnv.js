// scope of a variable - till where can we access the variable
// lexical environment - it is the local memory along with lexical environment of its parent

function a(){    // c is lexically inside a() and a is lexically inside global space
    var b = 10;
    c();
    function c(){

    }
}
a();
console.log(b);

// kisi bhi variable ko access karna hai to vo local memory + lexical enviornment of its parent me dekhiga

// scope chain is chain of all lexical enviornments as parent references