var boolean = true;
function colorChange() {
    if (boolean) {
        document.getElementById("secondbox").style = "background-color:green";
        document.getElementById("seconddescription").innerHTML = "<br>Wow, you really clicked. Isn't a color changing background the best thing you've ever seen???";
        boolean = false;
    } else {
        document.getElementById("secondbox").style = "background-color:purple";
        document.getElementById("seconddescription").innerHTML = "<br>I'm a developer who codes in HTML, CSS, and JavaScript. I didn't know what else to put here, so click this text for a surprise.";
        boolean = true;
    }
}
