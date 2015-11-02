$(document).ready(function(){ 
    waiting();
});


var waiting = function() {
    console.log("Initiating waiting...");
    $( "#loading_logo2" ).animate({
        width: "70%",
        opacity: 1
    }, 1000, function() {
        // Animation complete.
    });

    $("#loading_logo").fadeTo(1000, 0);

    $(window).load(function(){
        console.log("calling waiting function");
        if (typeof(window._waiting) == 'function') {
            window._waiting();
        }
        else {
            $("#loader-wrapper").fadeOut();
        }
    });
};
