$(document).ready(function() {

    //slider
    $('.slider').unslider({
        speed: 500, //  The speed to animate each slide (in milliseconds)
        delay: 3000, //  The delay between slide animations (in milliseconds)
        complete: function() {
        }, //  A function that gets called after every slide animation
        keys: true, //  Enable keyboard (left, right) arrow shortcuts
        dots: true, //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });


    //mobile nav-menu
    var navActive = false;
    $("#navLink").click(function() {
        if (!navActive) {
            $('nav').slideDown();
            $(this).addClass('active');
            navActive = true;
        } else {
            $('nav').slideUp();
            $(this).removeClass('active');
            navActive = false;
        }
    });
});