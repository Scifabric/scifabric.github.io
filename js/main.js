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
    function setRetinaPictures() {
        if (window.devicePixelRatio > 1) {
            var images = $("img.hires");

            // loop through the images and make them hi-res
            for(var i = 0; i < images.length; i++) {

                // create new image name
                var imageType = images[i].src.substr(-4);
                var imageName = images[i].src.substr(0, images[i].src.length - 4);
                if (imageName.search(/@2x/) === -1) {
                    imageName += "@2x" + imageType;

                    //rename image
                    images[i].src = imageName;
                }
            }
        }
    }

    setRetinaPictures();


    $(window).scroll(function() {
        if ($(this).scrollTop() > 250){  
            $('#go-to-top').css('bottom','0px');
            $('#go-to-top').addClass('show');
        }
        else{
            $('#go-to-top').css('bottom','-=100px');
        }
    });

    $(window).scroll(function() {
        var distanceToTop = $(this).scrollTop();
        if (distanceToTop <= 10){
            $('nav').removeClass('show');
            $('#scifabricLogo').attr('src', '/images/Logo_Scifabric.png');
        }
        else {
            $('#scifabricLogo').attr('src', '/images/Logo_Scifabric_blue.png');
            $('nav').addClass('show');
        }
    setRetinaPictures();
    });

    $(window).load(function(){
        if ($(this).height() > 250) {
            $('#scifabricLogo').attr('src', '/images/Logo_Scifabric_blue.png');
            $('nav').addClass('show');
        }

        $(".nav li > a").click(function(){
            console.log(!$(this).hasClass("dropdown-toggle"));
            if (!$(this).hasClass("dropdown-toggle")) {
                $("#dropdown").removeClass("open");
            }
        });
    });


});
