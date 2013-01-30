$(document).ready(function() {
  
  var platform = "";
  
  $('.news').hover(
    
    function () {
      platform =$('.platform', this).attr('id');
      $(this).addClass(platform);
      $('div:not(".hp, .platform")', this).addClass("white");
      $('.hp, .platform', this).addClass(platform+"-active");
      $('.hp, .platform', this).addClass("white-bg");
    },
    
    function () {
      $(this).removeClass(platform);
      $('div:not(".hp, .platform")', this).removeClass("white");
      $('.hp, .platform', this).removeClass(platform+"-active");
      $('.hp, .platform', this).removeClass("white-bg");
    }
    
  );

});
