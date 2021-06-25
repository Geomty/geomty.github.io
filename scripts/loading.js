$(() => {
    $("body").css("transition", "0.3s ease-in-out");
    $("#everything").animate({ opacity: 1 }, 300);
    $("#loading").animate({ opacity: 0 }, 300);
});
