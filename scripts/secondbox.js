var boolean = true;
function changeSecondBoxColor() {
    if (boolean) {
        colors[1] = "green";
        $("body").css("transition", "background-color");
        fadeBgColor();
        $("body").css("transition", "background-color 0.3s ease-in-out");
        document.getElementById("seconddescription").innerHTML = "Wow, you really clicked. Isn't a color changing background the best thing you've ever seen???";
        boolean = false;
    } else {
        colors[1] = "purple";
        $("body").css("transition", "background-color");
        fadeBgColor();
        $("body").css("transition", "background-color 0.3s ease-in-out");
        document.getElementById("seconddescription").innerHTML = "I'm a (beginner) developer who codes in HTML, CSS, and JavaScript. I didn't know what else to put here, so click this text for a surprise.";
        boolean = true;
    }
}