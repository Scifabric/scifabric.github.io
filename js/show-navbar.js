$(window).scroll(function() {
  var distanceToTop = $(this).scrollTop();
  if (distanceToTop <= 10){
    $('nav').removeClass('show');
    $('#scifabricLogo').attr('src', 'images/Logo_Scifabric.png')
  }
  else {
    $('#scifabricLogo').attr('src', 'images/Logo_Scifabric_blue.png')
    $('nav').addClass('show');
  }
});


