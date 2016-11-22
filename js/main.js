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


    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

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

    var blueLogo = $("<img/>");
    blueLogo.attr("src", "//cdn.scifabric.com/images/nav-logo-blue.svg");


    $(window).scroll(function() {
        if ($(this).scrollTop() > 250){  
            $('#go-to-top').css('bottom','0px');
            $('#go-to-top').addClass('show');
            $('#say-hi').css('bottom','0px');
            $('#say-hi').addClass('show');
        }
        else{
            $('#go-to-top').css('bottom','-=100px');
            $('#say-hi').removeClass('show');
        }
    });

    // $(window).scroll(function() {
    //     var distanceToTop = $(this).scrollTop();
    //     if (distanceToTop <= 10){
    //         $('nav').removeClass('show');
    //         $('#scifabricLogo').attr('src', '/images/nav-logo.svg');
    //     }
    //     else {
    //         if ($("body").hasClass('case-study')) {
    //             $('#scifabricLogo').attr('src', '/images/nav-logo.svg');
    //         }
    //         else {
    //             $('#scifabricLogo').attr('src', '/images/nav-logo-blue.svg');
    //         }
    //         $('nav').addClass('show');
    //     }
    // // setRetinaPictures();
    // });

    $(window).load(function(){
        if ($(this).scrollTop() > 250) {
            $('#scifabricLogo').attr('src', '//cdn.scifabric.com/images/nav-logo-blue.svg');
            $('nav').addClass('show');
        }

        $(".nav li > a").click(function(){
            if (!$(this).hasClass("dropdown-toggle")) {
                $("#dropdown").removeClass("open");
            }
        });
    });
});
