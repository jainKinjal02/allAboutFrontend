// Type Conversion - can be implicit or explicit
// string + int = string
// Number(str) [does not change the actual string] + int =  number -- explicit
// Number('abc') = Nan - invalid number - explicit
// String(str) --> converted string - explicit

// booleans do not convert , have a special way falsy and truthy values
// falsy values are not exactly false value but becomes false when tried to convert to boolean
// there are five falsy values - 0, "", undefined, null , Nan
Boolean(0) // false
Boolean({}) //  true
Boolean('') // false


//Type Coersion
// depends on the operators and operands i.e. implicit JS compiler does it by itself
'23' + '10' + 3 ; //23103 // number --> string
'23' - '10' - 3 ;// 10 // string --> number
'23' - '10' + 3 ; //16 

// -, *, / ---> changes string to number
// + --> string concatenation

// Boolean conversion is always implicit / type coersion
let money = 0;
if(money) { // boolean conversion -- Boolean(0) = false

} else { // this will execute

}



