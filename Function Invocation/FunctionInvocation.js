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
}
function b(){
    var x =100;
    console.log(x);
}