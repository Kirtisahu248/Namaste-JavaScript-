function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  a = 200;
  return y; // Here we are not just returning the function code but the closure is returned.
}
var z = x();
console.log(z);

//........Suppose here are 100 lines code .After that if we invoke  z i.e.

 z();              // This will give us output => 10

/* *Because of closures => As we know that the function along with the lexical scope bundeled together form a closure
 * In the above example the function x doesnot exsist in the call stack(as its execution context is deleted as its work is done)
 * But still the function y remembers its lexical scope where it came from. So by remebering that it gives the value 10.
 */
