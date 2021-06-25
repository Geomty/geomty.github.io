function fix() {
    if (document.getElementById("firsttitle").innerHTML != thirdSentence) {
        $("#firsttitle").animate({ opacity: 0 }, 300);
        $("#backupfirsttitle").animate({ opacity: 1 }, 300);
    }
    $("#fixbox").animate({ opacity: 0 }, 300);
    $("#fixtext").animate({ opacity: 0 }, 300);
    setTimeout(() => {
        $("#fixbox").css("display", "none");
        $("#fixtext").css("display", "none");
    }, 300);
}
