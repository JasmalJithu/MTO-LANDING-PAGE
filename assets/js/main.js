var selector = $('.varal-nav-link');
$(selector).on('click', function(){
    $(selector).removeClass('varal-active');
    $(this).addClass('varal-active');
});