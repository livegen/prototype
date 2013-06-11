jQuery(function($) { 

  // settings
  var carousel = $('.carousel');
  var slide = 'li';
  var transition_time = 1000;
  var time_between_slides = 5000;

  function slides(){
    return carousel.find(slide);
  }
  
  function titles(){
    return $('.carousel-content li');
  }
  
  // loop
  function loopFn(){
    var i = carousel.find(slide + '.active').index();
    
    slides().eq(i).removeClass('active');
    slides().eq(i).fadeOut(transition_time);
    titles().eq(i).removeClass('active');
    
    if (slides().length == i + 1) i = -1; // loop to start
    
    slides().eq(i + 1).fadeIn(transition_time);
    slides().eq(i + 1).addClass('active');
    titles().eq(i + 1).addClass('active');
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn(transition_time);
  titles().first().addClass('active');

  // auto scroll 
  var loop = setInterval(loopFn, transition_time +  time_between_slides); 

  titles().click(function(){
    clearInterval(loop); // reset timer
    var i = titles().index(this);
    titles().removeClass('active');    
    titles().eq(i).addClass('active'); 
    slides().removeClass('active');
    slides().fadeOut(transition_time / 2);
    slides().eq(i).fadeIn(transition_time / 2);
    slides().eq(i).addClass('active');
    loop = setInterval(loopFn, transition_time +  time_between_slides);
  });

});