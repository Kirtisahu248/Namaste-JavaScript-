function x(){
    // for(let i=0;i<=5;i++){
    // setTimeout(function (){
    //   console.log(i);
    // },i * 1000);

    //do the same output using var then we have to make one more function(i.e closure) so that it will not point to the same memory space
    for(var i=0;i<=5;i++){

        function close(i){
            setTimeout(function (){
                console.log(i);
            },i*1000);
        }
        close(i);
    }
  

  console.log("Namaste JS");
}
x();