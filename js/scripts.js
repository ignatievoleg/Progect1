$(document).ready(function(){
    $('.mobile-button') .on('click',function() {
        $('.nav') .slideToggle();
        $(this) .toggleClass('opened')
    })
});