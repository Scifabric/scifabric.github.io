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
        if (window.devicePixelRatio > 1) {
         var images = $("img.hires");

         // loop through the images and make them hi-res
         for(var i = 0; i < images.length; i++) {

           // create new image name
           var imageType = images[i].src.substr(-4);
           var imageName = images[i].src.substr(0, images[i].src.length - 4);
           imageName += "@2x" + imageType;

           //rename image
           images[i].src = imageName;
         }
    }
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

