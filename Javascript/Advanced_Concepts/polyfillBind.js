// a pollyfill is the code that fills the functionality missing from the browser. Eg, internet explorer does not have promises like other modern browsers
// so for that , we can write a promise polyfill, so that code that uses promises can work in Internet explorer.

Function.prototype.myBlind = function(...args){ // putting myBlind in function prototype so that every method can access it
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args2[0], [...params, ...args2]);
    }
}

function print(){
    console.log(this.fName + ' from '+ city+ ','+state);
}

let name = { fName: 'Kinjal'}

let p = print.myBlind(name, 'Udaipur');
p('Rajasthan');  // Kinjal from Udaipur, Rajasthan
