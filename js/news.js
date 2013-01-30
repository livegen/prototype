$(document).ready(function() {
  
  var platform = "";
  
  $('.news').hover(
    
    function () {
      platform =$('.platform', this).attr('id');
      $(this).addClass(platform);
      $('div:not(".hp, .platform")', this).toggleClass("white");
      $('.hp, .platform', this).toggleClass(platform+"-active");
      $('.hp, .platform', this).toggleClass("white-bg");
    },
    
    function () {
      $(this).removeClass(platform);
    }
    
  );

});
