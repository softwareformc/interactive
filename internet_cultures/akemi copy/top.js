$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('img').css("opacity", 1- $(window).scrollTop() / 700) 
    }) 
}) 