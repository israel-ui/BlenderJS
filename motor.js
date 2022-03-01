var blenderState = "off";

function blendercontrol() {
    if (blenderState == "off") {
        blenderState = "on";
        console.log("you turned me on");
    } else {
        blenderState = "off"
        console.log("you turned me off");

    }
}