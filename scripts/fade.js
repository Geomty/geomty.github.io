let colors = ["black", "purple", "red", "orange"];
bgColorInit();
setTimeout(() => {
    colors[0] = "blue";
    fadeBgColor();
}, 9000);
window.addEventListener("scroll", fadeBgColor);

let oldScrollY = 0;
function fadeBgColor() {
    for (i=0;i<colors.length;i++) {
        if (window.scrollY < (window.innerHeight/2)) {
            $("body").removeClass();
            $("body").addClass('color-' + colors[0]);
        } else if (window.scrollY>=(window.innerHeight*i+window.innerHeight/2)&&window.scrollY<=(window.innerHeight*(i+1)+window.innerHeight/2)) { // have fun reading this
            if (oldScrollY<(window.innerHeight*i+window.innerHeight/2)||oldScrollY>(window.innerHeight*(i+1)+window.innerHeight/2)) { // this too
                $("body").removeClass();
                $("body").addClass('color-' + colors[i+1]);
            }
        }
    }
}

function bgColorInit() {
    for (i=0;i<colors.length;i++) {
        if (window.scrollY < (window.innerHeight/2)) {
            $("body").addClass('color-' + colors[0]);
        } else if (window.scrollY>=(window.innerHeight*i+window.innerHeight/2)&&window.scrollY<=(window.innerHeight*(i+1)+window.innerHeight/2)) {
            $("body").addClass('color-' + colors[i+1]);
        }
    }
    setTimeout(() => $("body").css("transition", "background-color 0.5s ease-in-out"), 100);
}
