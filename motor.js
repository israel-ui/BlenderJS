var blenderState = "off";
var blender = document.getElementById("blender");
var blenderbutton = document.getElementById("blender-button-sound")
var blendersound = document.getElementById("blender-sound")

function blendercontrol() {
    if (blenderState == "off") {
        BrrBrr();
        blender.classList.add("active");
        blenderState = "on";
/*         console.log("you turned me on");*/    
    } else {
        blenderState = "off"
        BrrBrr();
        blender.classList.remove("active")
/*         console.log("you turned me off");
 */    }
}

function BrrBrr(){
    if(blendersound.paused){
        blenderbutton.play();
        blendersound.play();
    } else{
        blenderbutton.play();
        blendersound.pause();
        blendersound.CurrentTime = 0;
    }
}