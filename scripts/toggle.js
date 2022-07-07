if (document.cookie.length != 0) {
    $("#toggleslider").click();
    $(() => disable());
}
function disable() {
    $("#particles").animate({ opacity: 0 }, 300);
    $("body").css("transition", "all 0s ease 0s");
}
function enable() {
    $("#particles").animate({ opacity: 1 }, 300);
    $("body").css("transition", "background-color 0.3s ease-in-out");
}
function toggle() {
    if ($("#particles").css("opacity") != 0) {
        disable();
        document.cookie = `toggle=on; expires=Sat, 01 Jan 2023 00:00:00 UTC; path=/;`;
    } else {
        enable();
        document.cookie = "toggle=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}
