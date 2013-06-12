$(document).ready(function() { 

  // settings
  var carousel = $('.carousel');
  var slide = 'li';
  var transitionTime = 800;
  var slideDuration = 6800;

  function slides(){
    return carousel.find(slide);
  }
  
  function titles(){
    return $('.carousel-titles li');
  }
  
  // loop
  function loopFn(){
      
    var i = carousel.find(slide + '.active').index();
    
    slides().eq(i).removeClass('active');
    slides().eq(i).fadeOut(transitionTime);
    titles().eq(i).removeClass('active');
    
    // loop to start
    if (slides().length == i + 1) {
        i = -1; 
    }
    
    slides().eq(i + 1).fadeIn(transitionTime);
    slides().eq(i + 1).addClass('active');
    titles().eq(i + 1).addClass('active');
  }
  
  // freez loop
  function freezLoop(slideIndex){
    var i = slideIndex;
    clearInterval(loop); // reset timer
    titles().removeClass('active');    
    titles().eq(i).addClass('active'); 
    slides().removeClass('active');
    slides().hide();
    slides().eq(i).show();
    slides().eq(i).addClass('active');    
  }
  
  // resume loop
  function resumeLoop(){
        loop = setInterval(loopFn, transitionTime + slideDuration);
  }
  
  // init slides

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn(transitionTime);
  titles().first().addClass('active');

  // auto scroll 
  var loop = setInterval(loopFn, transitionTime + slideDuration); 

  // freez on hovers
  titles().hover(
    function(){
        var i = titles().index(this);    
        freezLoop(i);   
    }, 
    function(){
        loop = setInterval(loopFn, transitionTime + slideDuration);
    });
    
  slides().hover(
    function() {
        var i = slides().index(this);
        freezLoop(i);
    }, 
    resumeLoop
  );

});