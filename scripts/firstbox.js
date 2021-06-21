var firstSentence = 'Hello';
var secondSentence = 'I\'m Geomty';
var thirdSentence = 'Welcome to my website';

var boolean = true;
function blinkingCursor(id, speed, times) {
    var count = 0;
    var interval = setInterval(() => {
        if (boolean) {
            document.getElementById(id).style = "padding-right:0.45vmin;border-right:0.45vmin solid";
            boolean = false;
        } else {
            document.getElementById(id).style = "padding-right:0.9vmin;border-right:0 solid";
            boolean = true;
        }
        if (count == times) {
            document.getElementById(id).style = "padding-right:0.9vmin;border-right:0 solid";
            clearInterval(interval);
        }
        count++;
    }, speed);
}
blinkingCursor("firsttitle", 500, 17);

function typeAndBackspace(id, sentence, typeDelay, typeSpeed, backspaceDelay, backspaceSpeed, backspaceBoolean) {
    var array = sentence.split('');
    var count = 0;
    setTimeout(() => {
        var interval = setInterval(() => {
            document.getElementById(id).innerHTML += array[count];
            count++;
            if (count == array.length) {
                clearInterval(interval);
                count = 0;
            }
        }, typeSpeed);
    }, typeDelay);
    if (backspaceBoolean) {
        setTimeout(() => {
            var interval2 = setInterval(() => {
                document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.slice(0, -1);
                count++;
                if (count == array.length) {
                    clearInterval(interval2);
                    count = 0;
                }
            }, backspaceSpeed);
        }, backspaceDelay);
    }
}
typeAndBackspace("firsttitle", firstSentence, 500, 100, 2000, 50, true);
typeAndBackspace("firsttitle", secondSentence, 3250, 100, 5250, 50, true);
typeAndBackspace("firsttitle", thirdSentence, 6750, 100, 9850, 50);

setTimeout(() => {
    document.getElementById("firstdescription").innerHTML = "Scroll down to see more about me";
}, 9000);
