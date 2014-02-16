$(document).ready(function() {

    //slider
    $('.slider').unslider({
        speed: 500, //  The speed to animate each slide (in milliseconds)
        delay: 4000, //  The delay between slide animations (in milliseconds)
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
    
    //Wokers TopDown Navigation (Home Page)
    $('.scroll').click(function(){
        var direction;
        if($(this).hasClass('up')) direction = 'up';
        else direction = 'down';
        
        var boxes = $(this).parent().parent().find('.boxes');
        if(direction === 'down') boxes.animate({top:-360},600);
        else boxes.animate({top:0},600);
    });
});