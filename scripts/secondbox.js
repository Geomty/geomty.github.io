var boolean = true;
function colorChange() {
    if (boolean) {
        document.getElementById("secondbox").style = "background-color:black";
        document.getElementById("secondtitle").style = "color:yellow";
        document.getElementById("seconddescription").style = "color:yellow";
        document.getElementById("seconddescription").innerHTML = "<br>Wow, you really clicked. Isn't a color changing background the best thing you've ever seen???";
        boolean = false;
    } else {
        document.getElementById("secondbox").style = "background-color:yellow";
        document.getElementById("secondtitle").style = "color:black";
        document.getElementById("seconddescription").style = "color:black";
        document.getElementById("seconddescription").innerHTML = "<br>I'm a develper who codes in HTML, CSS, and JavaScript. I didn't know what else to put here, so click the page for a surprise.";
        boolean = true;
    }
}
