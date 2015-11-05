 window._waiting = function() {
 window.transcriptStarted = false;
 addEventListener('ostStarted', function (e) { 
     $("body").addClass('loaded');
     window.setTimeout(window.transcript, 1200);
 }, false);
 window.ost();
}
