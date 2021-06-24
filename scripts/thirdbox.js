var count = 0;
function noMoreProjects() {
    if (count == 0) {
        document.getElementById("mrfactual").innerHTML = "";
        document.getElementById("thirddescription").style.top = "261%";
        document.getElementById("ytapi-simplifier").innerHTML = "<a href=\"https://github.com/Geomty/ytapi-simplifier\">A JavaScript module designed to simplify the YouTube API!</a>";
        document.getElementById("questionmarks").innerHTML = "Click me again";
        count++;
    } else if (count == 1) {
        document.getElementById("ytapi-simplifier").innerHTML = "";
        document.getElementById("thirddescription").style.top = "259%";
        document.getElementById("questionmarks").innerHTML = "Yay! All my projects are completed!";
        count++;
    }
}
