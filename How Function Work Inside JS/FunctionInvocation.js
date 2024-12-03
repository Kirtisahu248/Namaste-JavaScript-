// How function invocation work behind the scenes 

//globally define x
var x = 1;
//now invoking the function
a();
b();
console.log(x);

function a(){
    var x =10;
    console.log(x);
    function c(){
        var x = 11;
        console.log(x);
        console.log("c is poped out from call stack")
    }
    c();
    console.log("a is poped out from call stack");
}

function b(){
    var x =100;
    console.log(x);
    console.log("b is poped out from stack");
}