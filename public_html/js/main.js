$(document).ready(function(){
    
    //mobile nav-menu
    var navActive = false;
    $("#navLink").click(function(){
        if(!navActive){
            $('nav').slideDown();
            $(this).addClass('active');
            navActive = true;
        }else{
            $('nav').slideUp();
            $(this).removeClass('active');
            navActive = false;
        }
    });
});