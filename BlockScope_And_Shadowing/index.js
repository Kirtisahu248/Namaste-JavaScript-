let c = 100;
function x(){
    const c = 30;
    console.log(c);
}
x();
console.log(c);  


// ------------SHADOWING CONCEPT-----------
let a = 10;
{
     a = 20;
    console.log(a);
}
console.log(a);
