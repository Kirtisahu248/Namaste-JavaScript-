// Suppose we have to print 1to 5 after every second using var

function x(){
    for(var i=1;i<=5;i++){
        //creating closure i.e. creating a new function so that the "i" doesn't refer to same memory space
        function close(i){
            setTimeout( function(){
                console.log(i);
            }, i * 1000);
        }
        close(i);  //every time "i" is called copy of new i is created
    }
    console.log("Namaste JavaScript");
}
x();