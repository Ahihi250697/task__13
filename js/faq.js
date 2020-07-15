$(function(){
    $('.faq__questions--part').on('click', function(){
        if(!$(this).is('.active')) {
            $('.faq__questions--part').removeClass('active');
            $('.faq__questions--A').css('height', '0px');
            $(this).children('.faq__questions--A').css('height', $('.faq__questions--hiden').height() + 'px');
            $(this).addClass('active');
        }
        else{
            $(this).removeClass('active');
            $(this).children('.faq__questions--A').css('height', '0px');
        }
    });

});
