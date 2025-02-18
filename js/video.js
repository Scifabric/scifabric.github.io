//jQuery is required to run this code
$( document ).ready(function() {

    if (window.matchMedia("(min-width: 769px)").matches) {
        var vid = $("<source/>");
        vid.attr('type', 'video/mp4');
        vid.attr('src', $('video').data("mp4"));
        $('video').append(vid);
        var vid = $("<source/>");
        vid.attr('type', 'video/webm');
        vid.attr('src', $('video').data("webm"));
        $('video').append(vid);

    }
    else {
        console.log("No video for you, we don't want to waste your bandwidth!");
    }

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    //var unitHeight = parseInt(height) + 'px';
    //var unitHeight = $(window).width() / 1.77777778 + 'px';
    var unitHeight = '600px';
    //$('.homepage-hero-module').css('height',unitHeight);
    $('.homepage-hero-module').addClass('video-height');
    $('.video-container').addClass('video-height');

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        $(this).css({'top' : 0});
        if(windowWidth < 991){
            $("video").remove();
            $(".poster").removeClass("hidden");
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
