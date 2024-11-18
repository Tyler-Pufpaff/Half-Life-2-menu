//Get all of the necessary elements
const video = document.getElementById("videoBackground");
const sound = document.getElementById("sound");
const links = document.getElementById("ul a");
const audioClick = document.getElementById("audioClick");
const audioHover = document.getElementById("audioHover");

//Add click event Listener to the sound icon
sound.addEventListener("click", () => {
    //Toggle icon on click
    sound.classList.toggle("fa-volume-up");

    //Mute / Unmute video sound
    if (video.muted === true) {
        video.muted = true;
    } else {
        video.muted = false;
    }

    //Add the sound effect
    clickSound();
});

//Add hover event listener on the sound icon
sound.addEventListener("mouseenter", hoverSound);

//Select all links
for (let i=0; i < links.length; i++) {
    //Add cick event listener on the links
    links[i].addEventListener("click", clickSound);
    //Add hover event listener on the links
    links[i].addEventListener("mouseenter", hoverSound);
}

//Click sound effect
function clickSound() {
    audioClick.play();
}

//Hover sound effect
function hoverSound() {
    audioHover.play();
}