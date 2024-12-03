// It will give o/p as 10 because of Lexical Environment = Local Memory + Lexical Environment of Parent

function a(){
  c();
  function c(){
    console.log(b);
  }
}
var b = 10;
a();