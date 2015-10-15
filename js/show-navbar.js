$(window).scroll(function() {
if ($(this).scrollTop() > 150){  
    $('nav').css('top','0px');
	$('nav').addClass('show');
    $('#go-to-top').css('bottom','0px');
	$('#go-to-top').addClass('show');
  }
  else{
	$('nav').css('top','-=200px');
	$('#go-to-top').css('bottom','-=100px');
  }
});


