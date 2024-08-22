//what is a callback function in Javascript

setTimeout(function (){  //setTimeout uses async function
  console.log("timer");
},5000);
function x(y){
  console.log("x");
  y();
}
x(function y(){  //function y is a callback function
   console.log("y");
});