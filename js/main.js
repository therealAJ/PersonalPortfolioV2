// Initialize collapse button
$(".button-collapse").sideNav();



$(document).ready(function () {

    $("#toSlide").hide();


    $('#home-toggle').click(function () {
        $("#about-me").hide();
        $('.button-collapse').sideNav('hide');
        $("#toSlide").slideToggle();

    });

    $("#about-me").hide();


    $('#about-toggle').click(function () {
        $("#toSlide").hide();
        $('.button-collapse').sideNav('hide');
        $("#about-me").slideToggle();
    });


});