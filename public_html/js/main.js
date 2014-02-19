$(document).ready(function() {
    
    //slider
    var slidey = $('.slider').unslider({
        speed: 500, //  The speed to animate each slide (in milliseconds)
        delay: 4000, //  The delay between slide animations (in milliseconds)
        complete: function() {
        }, //  A function that gets called after every slide animation
        keys: true, //  Enable keyboard (left, right) arrow shortcuts
        dots: true, //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
    
    var slider = slidey.data('unslider');
    function nextSlide(){
        slider.next();
    }
    function prevSlide(){
        slider.prev();
    }
    
    //add swipe functionality to slider
    $('.slider').swipe( { swipeLeft:nextSlide, swipeRight:prevSlide, allowPageScroll:"auto"} );


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
        
        $(this).removeClass('active');
        
        var wokersList = $(this).parent().parent();
        var boxes = wokersList.find('.boxes');
        var speed = 600;
        
        if(direction === 'down'){
            boxes.animate({top:-360},speed,function(){
                wokersList.find('.up').addClass('active');
            });
        }
        else{ 
            boxes.animate({top:0},speed,function(){
                wokersList.find('.down').addClass('active');
            });
        }
    });
    
    //Email Form Functionality
    $('#subscribe .submit').click(function(){
        $(this).parent().submit();
    });
    
    //show share buttons
    $('#shareBtn').click(function(){
       $(this).remove();
       $('header#box a.fbShare').show();
       $('header#box a.twitterShare').show();
    });
});