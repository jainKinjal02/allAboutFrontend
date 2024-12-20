// special form of function expression, treated as variables
// different from normal function decalartion in case of hoisting , cannot be called or invoked before defining them, if you do , gets error
// by default returns undefined just like a normal variable

const ageCalc = birthYear => 2027 - birthYear;
ageCal(1997);

// if more that one paramter then
const ageCalcwithTwoPara = (birthYear, birthDate) => 2027 - (birthYear + birthDate);

// NOTE : arroe function do not have THIS 

