//function statement aka function declaration

function a(){
    console.log("a called");
}
a();


//function expression

var b = function(){
    console.log("b called");
}
b();




//anonymous function : function without name ,it doesnot have its own identity i.e according to the rules the function shold have names


//Anonymous functions are used in a place where functions are used as values

// function () {

// }


//Named function Expression

// example:
// var b = function xyz() {
    // console.log("b called");
// }
// xyz(); -------> it will give us error
// we can call the function inside the function i.e:
// var b = function(){
//     console.log(xyz);
// }

//Difference between parameters and arguments?

// var b = function(param1 , param2){  ---->these are parameters
    // console.log("b called");
// }
// b(1,2) ;  ------> arguments




//first class functions :  ability to be used like values

//first class citizens   same thing i.e. first class functions
