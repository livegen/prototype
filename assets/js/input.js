$('.search input').focus(function(){
    $(this).parent().parent().addClass('search-focused')});
    
$('.search input').focusout(function(){
    $(this).parent().parent().removeClass('search-focused')});