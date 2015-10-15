$(window).scroll(function() {
  var distanceToTop = $(this).scrollTop();
  if (distanceToTop <= 10){
    $('nav').css('top', '0px');
    $('nav').removeClass('show');
  }
  if (distanceToTop > 10) {
    $('nav').css('top','-200px');
    $('#go-to-top').css('bottom','-100px');
  }
  if (distanceToTop > 150){
    $('nav').css('top','0px');
    $('nav').addClass('show');
    $('#go-to-top').css('bottom','0px');
  }
});


