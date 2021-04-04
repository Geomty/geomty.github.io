const body = document.getElementById("body");
let colors = ["black", "purple", "red", "orange"];
setTimeout(() => {
    colors[0] = "#00c5ff";
    changeBgColor();
}, 9000);
changeBgColor();
window.addEventListener("scroll", changeBgColor);

function changeBgColor() {
    for (i=0;i<colors.length;i++) {
        if (window.scrollY < (window.innerHeight/2)) {
            body.style.backgroundColor = colors[0];
        } else if (window.scrollY>=(window.innerHeight*i+window.innerHeight/2)&&window.scrollY<=(window.innerHeight*(i+1)+window.innerHeight/2)) { // have fun reading this
            body.style.backgroundColor = colors[i+1];
        }
    }
}

// wish i could put this in its own file but then i wont have access to the colors array :(
var boolean = true;
function changeSecondBoxColor() {
    if (boolean) {
        colors[1] = "green";
        changeBgColor();
        document.getElementById("seconddescription").innerHTML = "<br>Wow, you really clicked. Isn't a color changing background the best thing you've ever seen???";
        boolean = false;
    } else {
        colors[1] = "purple";
        changeBgColor();
        document.getElementById("seconddescription").innerHTML = "<br>I'm a developer who codes in HTML, CSS, and JavaScript. I didn't know what else to put here, so click this text for a surprise.";
        boolean = true;
    }
}
