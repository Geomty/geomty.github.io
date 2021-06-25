let colors = ["black", "purple", "red", "orange"];
bgColorInit();
let toggleNum = document.cookie.length ? 0 : 300
setTimeout(() => {
    colors[0] = "#00c5ff";
    fadeBgColor();
    // yes
    $("#toggleswitch").css("display", "block");
    $("#toggletext").css("display", "block");
    $("#toggleswitch").animate({ opacity: 1 }, toggleNum);
    $("#toggletext").animate({ opacity: 1 }, toggleNum);
    $("#fixbox").css("display", "block");
    $("#fixtext").css("display", "block");
    $("#fixbox").animate({ opacity: 1 }, toggleNum);
    $("#fixtext").animate({ opacity: 1 }, toggleNum);
}, 9000 - toggleNum);
window.addEventListener("scroll", fadeBgColor);

let oldScrollY = 0;
function fadeBgColor() {
    for (i=0;i<colors.length;i++) {
        if (window.scrollY < (window.innerHeight/2)) {
            $("body").css("background-color", colors[0]);
        } else if (window.scrollY>=(window.innerHeight*i+window.innerHeight/2)&&window.scrollY<=(window.innerHeight*(i+1)+window.innerHeight/2)) { // have fun reading this
            if (oldScrollY<(window.innerHeight*i+window.innerHeight/2)||oldScrollY>(window.innerHeight*(i+1)+window.innerHeight/2)) { // this too
                $("body").css("background-color", colors[i+1]);
            }
        }
    }
}

function bgColorInit() {
    for (i=0;i<colors.length;i++) {
        if (window.scrollY < (window.innerHeight/2)) {
            $("body").css("background-color", colors[0]);
        } else if (window.scrollY>=(window.innerHeight*i+window.innerHeight/2)&&window.scrollY<=(window.innerHeight*(i+1)+window.innerHeight/2)) {
            $("body").css("background-color", colors[i+1]);
        }
    }
}
