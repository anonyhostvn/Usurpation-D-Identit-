let color ; 

$('.high-light').hover (function() {
    $(this).animate({backgroundColor: '#000000'}, 400) ;
    $(this).find("div").find("#image-need-fade").animate({opacity : 0.7 } , 400 ) ; 
} , function() {
    $(this).animate({backgroundColor: '#494949'}, 100) ;
    $(this).find("div").find("#image-need-fade").animate({opacity : 0.0 } , 100 ) ; 
}) ; 