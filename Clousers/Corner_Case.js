function x(){
    const b = 200;
    function y(){
        const a = 100;
        function z(){
            console.log(a,b);
        }
        z();
    }
    y();
}
x();