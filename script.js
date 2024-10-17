$(document).ready(function () {
    $("#toggleDesc").on("click", function () {
        $("#eventDescription").toggle();
    });
    
    $(".event-heading").on("click", function () {
        $(this).next(".event-details").slideToggle();
    });
    
    $(".trunk-img").on("mouseenter", function () {
        $(this).next(".trunk-description").fadeIn();
    }).on("mouseleave", function () {
        $(this).next(".trunk-description").fadeOut();
    });

    $(".trunk-img").on("mouseenter", function () {
        $(this).addClass("zoomed"); // Add the zoomed class on mouse enter
    }).on("mouseleave", function () {
        $(this).removeClass("zoomed"); // Remove the zoomed class on mouse leave
    });








});


















