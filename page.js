let color ; 

$('.high-light').hover (function() {
    $(this).animate({backgroundColor: '#000000'}, 400) ;
} , function() {
    $(this).animate({backgroundColor: '#494949'}, 100) ;
}) ; 