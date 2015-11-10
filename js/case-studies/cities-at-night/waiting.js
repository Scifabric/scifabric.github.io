 window._waiting = function() {
 window.transcriptStarted = false;
 addEventListener('ostStarted', function (e) { 
     $("body").addClass('loaded');
     window.setTimeout(window.transcript, 1200);
 }, false);
 window.ost();
}


if (window.matchMedia('(max-width: 768px)').matches)
{
    var smallWorld = $("<img/>");
    smallWorld.attr("src", "/images/small-world.png");
}
else {
    var world = $("<img/>");
    world.attr("src", "/images/world.png");
}
