$(document).ready(function() {

$('.news').hover(function (e) {
	
	var platform =$('.platform', this).attr('id');
	if(!$(this).hasClass('platform'))
		$(this).toggleClass(platform);
	$('div:not(".hp, .platform")', this).toggleClass("white");
	$('.hp, .platform', this).toggleClass(platform+"-active");
	$('.hp, .platform', this).toggleClass("white-bg");
  });

});
