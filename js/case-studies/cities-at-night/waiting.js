 window._waiting = function() {
 window.transcriptStarted = false;
 addEventListener('ostStarted', function (e) { 
     $("body").addClass('loaded');
     window.setTimeout(window.transcript, 1200);
 }, false);
 window.ost();
}


// Download CSS images as backgrounds
var world = $("<img/>");
world.attr("src", "/images/world.png");
