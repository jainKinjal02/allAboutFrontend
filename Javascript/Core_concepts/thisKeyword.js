// this = undefined (in strict mode)
// this = window (points to window object in non strict mode);

// NOTE: Arrow functions do not get their own "this" keyword

'use strict';
const abc = function(){
    console.log(this);
}
abc(); // undefined

// but if not in strict mode
// window object

// but it is different with arrow function, it does not have its own 'this' , it uses lexical
// 'this' keyoword i.e. of its parent's function pr parent's scope

// ---------------------------------------
'use strict';
const abcc = () => console.log(this);
abcc() ; // undefined
// window object in non strict mode
// this is because abcc is an arrow function , it uses lexical scope , i.e. parent's scope i.e. global here

'use strict';
function bho(){
    const abc = () => console.log(this);
    abc();
}
bho(); // undefined - abc will use lexical this i.e. bho 'this' which will be undefined in strict mode

// eg;
const jonas = {
    year: 1991,
    calAge: function(){
        console.log(this); // here this points to jonas object
    }
}
jonas.calAge(); // jonas
// jonas was the object calling this method calAge() that's why this pointed to jonas object

// NOTE: THIS keyword always points to the object which is calling the method
// but if that is assigned to some other variable than this will be undefined

'use strict';
const jonas = {
    name: 'Kinjal',
    calAge: function(){
        console.log(this);
    }
}

const b = jonas.calAge;
b(); // undefined
// because this points to the object calling the method but here the object method is not called, its assigned , hence , this is undefined here
