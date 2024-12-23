// like first class functions
// passing functions into another function is called callback function

function x(){

}
x(function y(){}) // this y() is callback function

// setTimeout , eventListener all take callback functions

// eventListeners are heavy, takes memory because they form closures.