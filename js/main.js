$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});
});

$(window).scroll(function() {
if ($(this).scrollTop() > 250){  
    $('header').css('top','0px');
	$('header').addClass('show');
    $('#go-to-top').css('bottom','0px');
	$('#go-to-top').addClass('show');
  }
  else{
	$('header').css('top','-=200px');
	$('#go-to-top').css('bottom','-=100px');
  }
});