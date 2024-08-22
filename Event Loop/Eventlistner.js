//deep about event listnerers


//we use closure for data hiding

function attachEventListener(){
    let count =0;  
    document.getElementById("clickMe")
    .addEventListener("click" ,function xyz() {
        console.log("Button Clicked",++count);
    });
    
}
attachEventListener();
