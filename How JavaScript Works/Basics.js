// hoisting
console.log(x);
var x = 7;
function getName() {
  console.log("Namaste Javascript");
}
var getName2 = function(){
  console.log("Testing Debugger");
}
getName();
console.log(x);
getName2();
console.log(getName);